import {EmojiItem} from '@tiptap-pro/extension-emoji'
import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useState} from 'react'
import {EmojiListProps} from '../types'
import Image from "next/image";
import {ListboxWrapper} from "@/extentions/tiptap/extentions/SlashCommand/MenuList";
import {Listbox, ListboxItem} from "@nextui-org/react";

const EmojiList = forwardRef((props: EmojiListProps, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => setSelectedIndex(0), [props.items])

    const selectItem = useCallback(
        (index: number) => {
            const item = props.items[index]

            if (item) {
                props.command({name: item.name})
            }
        },
        [props],
    )

    useImperativeHandle(
        ref,
        () => {
            const scrollIntoView = (index: number) => {
                const item = props.items[index]

                if (item) {
                    const node = document.querySelector(`[data-emoji-name="${item.name}"]`)

                    if (node) {
                        node.scrollIntoView({block: 'nearest'})
                    }
                }
            }

            const upHandler = () => {
                const newIndex = (selectedIndex + props.items.length - 1) % props.items.length
                setSelectedIndex(newIndex)
                scrollIntoView(newIndex)
            }

            const downHandler = () => {
                const newIndex = (selectedIndex + 1) % props.items.length
                setSelectedIndex(newIndex)
                scrollIntoView(newIndex)
            }

            const enterHandler = () => {
                selectItem(selectedIndex)
            }

            return {
                onKeyDown: ({event}: { event: React.KeyboardEvent }) => {
                    if (event.key === 'ArrowUp') {
                        upHandler()
                        return true
                    }

                    if (event.key === 'ArrowDown') {
                        downHandler()
                        return true
                    }

                    if (event.key === 'Enter') {
                        enterHandler()
                        return true
                    }

                    return false
                },
            }
        },
        [props, selectedIndex, selectItem],
    )

    const createClickHandler = useCallback((index: number) => () => selectItem(index), [selectItem])

    if (!props.items || !props.items.length) {
        return null
    }
    return (
        <>
            <ListboxWrapper>
                <Listbox
                    classNames={{
                        base: "max-w-xs",
                        list: "max-h-[300px] overflow-scroll",
                    }}
                    defaultSelectedKeys={["1"]}
                    label="Assigned to"
                    selectionMode="single"
                    variant="flat"
                >
                    {
                        props.items.map((item: EmojiItem, index: number) => (
                            <ListboxItem
                                key={item.name}
                                className={index == selectedIndex ? "bg-default-100 dark:bg-default-800" : ""}
                                onClick={createClickHandler(index)}
                                data-emoji-name={item.name}
                                startContent={item.fallbackImage ?
                                    <Image src={item.fallbackImage} width={24} height={24} alt="emoji"/> : item.emoji}
                            >
                                <span className="truncate text-ellipsis">:{item.name}:</span>
                            </ListboxItem>
                        ))
                    }
                </Listbox>
            </ListboxWrapper>
        </>
    )
})

EmojiList.displayName = 'EmojiList'

export default EmojiList

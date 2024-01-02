"use client"
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {Command, MenuListProps} from './types'
import {Listbox, ListboxItem, ListboxSection} from "@nextui-org/react";
import {AddNoteIcon, EditDocumentIcon} from "@/components/icons";
import {Kbd} from "@nextui-org/kbd";

export const ListboxWrapper = ({children}: { children: React.ReactNode }) => (
    <div
        className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        {children}
    </div>
);

export const MenuList = React.forwardRef((props: MenuListProps, ref) => {
    const scrollContainer = useRef<HTMLDivElement>(null)
    const activeItem = useRef<HTMLButtonElement>(null)
    const [selectedGroupIndex, setSelectedGroupIndex] = useState(0)
    const [selectedCommandIndex, setSelectedCommandIndex] = useState(0)

    // Anytime the groups change, i.e. the user types to narrow it down, we want to
    // reset the current selection to the first menu item
    useEffect(() => {
        setSelectedGroupIndex(0)
        setSelectedCommandIndex(0)
    }, [props.items])

    const selectItem = useCallback(
        (groupIndex: number, commandIndex: number) => {
            const command = props.items[groupIndex].commands[commandIndex]
            props.command(command)
        },
        [props],
    )

    React.useImperativeHandle(ref, () => ({
        onKeyDown: ({event}: { event: React.KeyboardEvent }) => {
            if (event.key === 'ArrowDown') {
                if (!props.items.length) {
                    return false
                }

                const commands = props.items[selectedGroupIndex].commands


                let newCommandIndex = selectedCommandIndex + 1
                console.log(newCommandIndex)
                let newGroupIndex = selectedGroupIndex
                console.log(newGroupIndex)
                if (commands.length - 1 < newCommandIndex) {
                    newCommandIndex = 0
                    newGroupIndex = selectedGroupIndex + 1
                }

                if (props.items.length - 1 < newGroupIndex) {
                    newGroupIndex = 0
                }

                setSelectedCommandIndex(newCommandIndex)
                setSelectedGroupIndex(newGroupIndex)
                scrollIntoView(newGroupIndex,newCommandIndex)


                return true
            }

            if (event.key === 'ArrowUp') {
                if (!props.items.length) {
                    return false
                }

                let newCommandIndex = selectedCommandIndex - 1
                let newGroupIndex = selectedGroupIndex

                if (newCommandIndex < 0) {
                    newGroupIndex = selectedGroupIndex - 1
                    newCommandIndex = props.items[newGroupIndex]?.commands.length - 1 || 0
                }

                if (newGroupIndex < 0) {
                    newGroupIndex = props.items.length - 1
                    newCommandIndex = props.items[newGroupIndex].commands.length - 1
                }

                setSelectedCommandIndex(newCommandIndex)
                setSelectedGroupIndex(newGroupIndex)
                scrollIntoView(newGroupIndex,newCommandIndex)

                return true
            }

            if (event.key === 'Enter') {
                if (!props.items.length || selectedGroupIndex === -1 || selectedCommandIndex === -1) {
                    return false
                }

                selectItem(selectedGroupIndex, selectedCommandIndex)

                return true
            }

            return false
        },
    }))

    useEffect(() => {
        if (activeItem.current && scrollContainer.current) {
            const offsetTop = activeItem.current.offsetTop
            const offsetHeight = activeItem.current.offsetHeight

            scrollContainer.current.scrollTop = offsetTop - offsetHeight
        }
    }, [selectedCommandIndex, selectedGroupIndex])

    const createCommandClickHandler = useCallback(
        (groupIndex: number, commandIndex: number) => {
            return () => {
                selectItem(groupIndex, commandIndex)
            }
        },
        [selectItem],
    )

    if (!props.items.length) {
        return null
    }
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    const scrollIntoView = (groupIndex: number, index) => {
        const items = props.items[groupIndex]
        const item = items?.commands[index]
        if (item) {
            const node = document.querySelector(`[data-emoji-name="${item.name}"]`)

            if (node) {
                node.scrollIntoView({block: 'nearest'})
            }
        }
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
                        props.items.map((group, groupIndex: number) => (
                            <ListboxSection
                                title={group.title}
                                key={group.title}
                            >
                                {
                                    group.commands.map((command: Command, commandIndex: number) => (
                                        <ListboxItem
                                            data-emoji-name={command.name}
                                            className={selectedGroupIndex === groupIndex && selectedCommandIndex === commandIndex ? "bg-default-100 dark:bg-default-800" : ""}
                                            key={command.label}
                                            onClick={createCommandClickHandler(groupIndex, commandIndex)}
                                            startContent={<AddNoteIcon className={iconClasses}/>}
                                            endContent={<Kbd keys={["command"]}>{command.kbd}</Kbd>}
                                        >
                                            {command.label}
                                        </ListboxItem>
                                    ))
                                }
                            </ListboxSection>
                        ))
                    }
                </Listbox>
            </ListboxWrapper>
        </>
    )
})

MenuList.displayName = 'MenuList'

export default MenuList

"use client"
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {Command, MenuListProps} from './types'
import {cn, DropdownItem, Listbox, ListboxItem, ListboxSection} from "@nextui-org/react";
import {AddNoteIcon, EditDocumentIcon} from "@/components/icons";
import {Kbd} from "@nextui-org/kbd";

export const ListboxWrapper = ({children}: { children: React.ReactNode }) => (
    <div
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium">
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
                let newGroupIndex = selectedGroupIndex

                if (commands.length - 1 < newCommandIndex) {
                    newCommandIndex = 0
                    newGroupIndex = selectedGroupIndex + 1
                }

                if (props.items.length - 1 < newGroupIndex) {
                    newGroupIndex = 0
                }

                setSelectedCommandIndex(newCommandIndex)
                setSelectedGroupIndex(newGroupIndex)

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

    return (
        <>
            <ListboxWrapper>
                <Listbox
                    variant="flat"
                    aria-label="Listbox menu with sections"
                    itemClasses={{
                        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-md gap-3 h-10 ",
                    }}>
                    {
                        props.items.map((group, groupIndex: number) => (
                            <ListboxSection
                                title={group.title}
                                key={group.title}
                            >
                                {
                                    group.commands.map((command: Command, commandIndex: number) => (
                                        <ListboxItem
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

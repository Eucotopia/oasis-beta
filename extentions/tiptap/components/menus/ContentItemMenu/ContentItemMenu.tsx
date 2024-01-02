import DragHandle from '@tiptap-pro/extension-drag-handle-react'
import {Editor} from '@tiptap/react'


import useContentItemActions from './hooks/useContentItemActions'
import {useData} from './hooks/useData'
import {useEffect, useState} from 'react'
import {
    DeleteNodeIcon,
    DuplicateNodeIcon,
    GripVerticalIcon,
    PlusIcon
} from "@/components/icons";
import {cn, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/button";

export type ContentItemMenuProps = {
    editor: Editor
}

export const ContentItemMenu = ({editor}: ContentItemMenuProps) => {

    const [menuOpen, setMenuOpen] = useState(false)
    const data = useData()
    const actions = useContentItemActions(editor, data.currentNode, data.currentNodePos)

    useEffect(() => {
        if (menuOpen) {
            editor.commands.setMeta('lockDragHandle', true)
        } else {
            editor.commands.setMeta('lockDragHandle', false)
        }
    }, [editor, menuOpen])

    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";


    return (
        <DragHandle
            pluginKey="ContentItemMenu"
            editor={editor}
            onNodeChange={data.handleNodeChange}
            tippyOptions={{
                offset: [-2, 16],
                zIndex: 99,
            }}
        >
            <div className="flex items-center gap-1">
                <Button
                    onClick={actions.handleAdd}
                    isIconOnly
                    variant={"flat"}
                    size={"sm"}
                >
                    <PlusIcon/>
                </Button>
                <Dropdown
                    classNames={{
                        base: "before:bg-default-200", // change arrow background
                        content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                    }}
                >
                    <DropdownTrigger>
                        <Button
                            isIconOnly
                            variant={"flat"}
                            size={"sm"}
                        >
                            <GripVerticalIcon/>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu variant="faded"
                                  selectedKeys={"Duplicate"}
                                  disabledKeys={"Duplicate"}
                    >
                        <DropdownItem
                            key="Clear formatting"
                            onPress={actions.resetTextFormatting}
                            shortcut="⌘C"
                            startContent={<DuplicateNodeIcon className={iconClasses}/>}
                        >
                            Clear formatting
                        </DropdownItem>
                        <DropdownItem
                            key="Copy to clipboard"
                            shortcut="⌘C"
                            onPress={actions.copyNodeToClipboard}
                            startContent={<DuplicateNodeIcon className={iconClasses}/>}
                        >
                            Copy to clipboard
                        </DropdownItem>
                        <DropdownItem
                            key="Duplicate"
                            shortcut="⌘D"
                            onPress={actions.duplicateNode}
                            startContent={<DuplicateNodeIcon className={iconClasses}/>}
                        >
                            Duplicate
                        </DropdownItem>
                        <DropdownItem
                            key="Delete"
                            className="text-danger"
                            color="danger"
                            shortcut="⌘⇧X"
                            onPress={actions.deleteNode}
                            startContent={<DeleteNodeIcon className={cn(iconClasses, "text-danger")}/>}
                        >
                            Delete
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </DragHandle>
    )
}

import DragHandle from '@tiptap-pro/extension-drag-handle-react'
import {Editor} from '@tiptap/react'


import useContentItemActions from './hooks/useContentItemActions'
import {useData} from './hooks/useData'
import {useEffect, useState} from 'react'
import {
    GripVerticalIcon,
    PlusIcon
} from "@/components/icons";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {ClearFormat, Clipboard, Copy, Trash} from "@/extentions/tiptap/lib/svg/icon";

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
                    variant={"light"}
                    size={"sm"}
                >
                    <PlusIcon/>
                </Button>
                <Dropdown
                    classNames={{
                        base: "before:bg-default-200", // change arrow background
                        content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                    }}
                    isOpen={menuOpen}
                    onOpenChange={setMenuOpen}
                >
                    <DropdownTrigger>
                        <Button
                            isIconOnly
                            variant={"light"}
                            size={"sm"}
                        >
                            <GripVerticalIcon/>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem
                            key="Clear formatting"
                            onPress={actions.resetTextFormatting}
                            shortcut="⌘C"
                            startContent={<ClearFormat/>}
                        >
                            Clear formatting
                        </DropdownItem>
                        <DropdownItem
                            key="Copy to clipboard"
                            shortcut="⌘C"
                            onPress={actions.copyNodeToClipboard}
                            startContent={<Copy/>}
                        >
                            Copy to clipboard
                        </DropdownItem>
                        <DropdownItem
                            key="Duplicate"
                            shortcut="⌘D"
                            onPress={actions.duplicateNode}
                            startContent={<Clipboard/>}
                        >
                            Duplicate
                        </DropdownItem>
                        <DropdownItem
                            key="Delete"
                            className="text-danger"
                            color="danger"
                            shortcut="⌘⇧X"
                            onPress={actions.deleteNode}
                            startContent={<Trash/>}
                        >
                            Delete
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </DragHandle>
    )
}

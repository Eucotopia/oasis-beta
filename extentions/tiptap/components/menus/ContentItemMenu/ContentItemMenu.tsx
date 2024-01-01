import DragHandle from '@tiptap-pro/extension-drag-handle-react'
import {Editor} from '@tiptap/react'

import useContentItemActions from './hooks/useContentItemActions'
import {useData} from './hooks/useData'
import {useEffect, useState} from 'react'
import {ClearIcon, CopyIcon, DeleteIcon, DuplicateIcon, GripVerticalIcon, PlusIcon} from "@/components/icons";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
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
                    variant={"bordered"}
                    size={"sm"}
                >
                    <PlusIcon/>
                </Button>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            isIconOnly
                            variant="bordered"
                            size={"sm"}
                        >
                            <GripVerticalIcon/>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem
                            key="new"
                            onClick={actions.resetTextFormatting}
                            startContent={<ClearIcon/>}
                        >
                            Clear formatting
                        </DropdownItem>
                        <DropdownItem
                            key="copy"
                            onClick={actions.copyNodeToClipboard}
                            startContent={<CopyIcon/>}
                        >
                            Copy to clipboard
                        </DropdownItem>
                        <DropdownItem
                            key="duplicate"
                            onClick={actions.duplicateNode}
                            startContent={<DuplicateIcon/>}
                        >
                            Duplicate
                        </DropdownItem>
                        <DropdownItem
                            key="delete"
                            className="text-danger"
                            color="danger" onClick={actions.deleteNode}
                            startContent={<DeleteIcon/>}
                        >
                            Delete
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </DragHandle>
    )
}

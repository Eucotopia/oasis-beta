import {BubbleMenu as BaseBubbleMenu} from '@tiptap/react'
import React, {useCallback} from 'react'
import {isColumnGripSelected} from './utils'
import {MenuProps, ShouldShowProps} from "@/extentions/tiptap/components/menus/types";
import {ListboxWrapper} from "@/extentions/tiptap/extentions/SlashCommand/MenuList";
import {Listbox, ListboxItem} from "@nextui-org/react";

export const TableColumnMenu = React.memo(({editor}: MenuProps): JSX.Element => {
    const shouldShow = useCallback(
        ({view, state, from}: ShouldShowProps) => {
            if (!state) {
                return false
            }
            console.log(isColumnGripSelected({editor, view, state, from: from || 0}))
            return isColumnGripSelected({editor, view, state, from: from || 0})
        },
        [editor],
    )

    const onAddColumnBefore = useCallback(() => {
        editor.chain().focus().addColumnBefore().run()
    }, [editor])

    const onAddColumnAfter = useCallback(() => {
        editor.chain().focus().addColumnAfter().run()
    }, [editor])

    const onDeleteColumn = useCallback(() => {
        editor.chain().focus().deleteColumn().run()
    }, [editor])

    return (
        <BaseBubbleMenu
            editor={editor}
            pluginKey="tableColumnMenu"
            updateDelay={0}
            tippyOptions={{
                offset: [0, 15],
                popperOptions: {
                    modifiers: [{name: 'flip', enabled: false}],
                },
            }}
            shouldShow={shouldShow}
        >
            <ListboxWrapper>
                <Listbox
                    aria-label="Actions"
                >
                    <ListboxItem key="new" onClick={onAddColumnAfter}>New file</ListboxItem>
                    <ListboxItem key="copy" onClick={onAddColumnBefore}>Copy link</ListboxItem>
                    <ListboxItem key="delete" className="text-danger" color="danger" onClick={onDeleteColumn}>
                        Delete file
                    </ListboxItem>
                </Listbox>
            </ListboxWrapper>
            {/*<Toolbar.Wrapper isVertical>*/}
            {/*  <PopoverMenu.Item*/}
            {/*    iconComponent={<Icon name="ArrowLeftToLine" />}*/}
            {/*    close={false}*/}
            {/*    label="Add column before"*/}
            {/*    onClick={onAddColumnBefore}*/}
            {/*  />*/}
            {/*  <PopoverMenu.Item*/}
            {/*    iconComponent={<Icon name="ArrowRightToLine" />}*/}
            {/*    close={false}*/}
            {/*    label="Add column after"*/}
            {/*    onClick={onAddColumnAfter}*/}
            {/*  />*/}
            {/*  <PopoverMenu.Item icon="Trash" close={false} label="Delete column" onClick={onDeleteColumn} />*/}
            {/*</Toolbar.Wrapper>*/}
        </BaseBubbleMenu>
    )
})

TableColumnMenu.displayName = 'TableColumnMenu'

export default TableColumnMenu

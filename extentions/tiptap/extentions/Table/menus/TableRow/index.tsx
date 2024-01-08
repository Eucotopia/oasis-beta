import { BubbleMenu as BaseBubbleMenu } from '@tiptap/react'
import React, { useCallback } from 'react'
import { isRowGripSelected } from './utils'
import {MenuProps, ShouldShowProps} from "@/extentions/tiptap/components/menus/types";
import {ListboxWrapper} from "@/extentions/tiptap/extentions/SlashCommand/MenuList";
import {Listbox, ListboxItem} from "@nextui-org/react";

export const TableRowMenu = React.memo(({ editor, appendTo }: MenuProps): JSX.Element => {
  const shouldShow = useCallback(
    ({ view, state, from }: ShouldShowProps) => {
      if (!state || !from) {
        return false
      }

      return isRowGripSelected({ editor, view, state, from })
    },
    [editor],
  )

  const onAddRowBefore = useCallback(() => {
    editor.chain().focus().addRowBefore().run()
  }, [editor])

  const onAddRowAfter = useCallback(() => {
    editor.chain().focus().addRowAfter().run()
  }, [editor])

  const onDeleteRow = useCallback(() => {
    editor.chain().focus().deleteRow().run()
  }, [editor])

  return (
    <BaseBubbleMenu
      editor={editor}
      pluginKey="tableRowMenu"
      updateDelay={0}
      tippyOptions={{
        // appendTo: () => {
        //   return appendTo?.current
        // },
        placement: 'left',
        offset: [0, 15],
        popperOptions: {
          modifiers: [{ name: 'flip', enabled: false }],
        },
      }}
      shouldShow={shouldShow}
    >
        <ListboxWrapper>
            <Listbox
                aria-label="Actions"
            >
                <ListboxItem key="new" onClick={onAddRowBefore}>New file</ListboxItem>
                <ListboxItem key="copy" onClick={onAddRowAfter}>Copy link</ListboxItem>
                <ListboxItem key="delete" className="text-danger" color="danger" onClick={onDeleteRow}>
                    Delete file
                </ListboxItem>
            </Listbox>
        </ListboxWrapper>
      {/*<Toolbar.Wrapper isVertical>*/}
      {/*  <PopoverMenu.Item*/}
      {/*    iconComponent={<Icon name="ArrowUpToLine" />}*/}
      {/*    close={false}*/}
      {/*    label="Add row before"*/}
      {/*    onClick={onAddRowBefore}*/}
      {/*  />*/}
      {/*  <PopoverMenu.Item*/}
      {/*    iconComponent={<Icon name="ArrowDownToLine" />}*/}
      {/*    close={false}*/}
      {/*    label="Add row after"*/}
      {/*    onClick={onAddRowAfter}*/}
      {/*  />*/}
      {/*  <PopoverMenu.Item icon="Trash" close={false} label="Delete row" onClick={onDeleteRow} />*/}
      {/*</Toolbar.Wrapper>*/}
    </BaseBubbleMenu>
  )
})

TableRowMenu.displayName = 'TableRowMenu'

export default TableRowMenu

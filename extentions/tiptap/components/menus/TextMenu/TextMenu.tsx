import {BubbleMenu, Editor} from '@tiptap/react'
import {FontSizePicker} from "@/extentions/tiptap/components/menus/TextMenu/components/FontSizePicker";
import {memo} from "react";
import {useTextmenuCommands} from "@/extentions/tiptap/components/menus/TextMenu/hooks/useTextmenuCommands";
import {useTextmenuStates} from "@/extentions/tiptap/components/menus/TextMenu/hooks/useTextmenuStates";
import {FontFamilyPicker} from "@/extentions/tiptap/components/menus/TextMenu/components/FontFamilyPicker";
import {useTextmenuContentTypes} from "@/extentions/tiptap/components/menus/TextMenu/hooks/useTextmenuContentTypes";
import {ContentTypePicker} from "@/extentions/tiptap/components/menus/TextMenu/components/ContentTypePicker";

export type TextMenuProps = {
    editor: Editor
}
const MemoFontSizePicker = memo(FontSizePicker)
const MemoFontFamilyPicker = memo(FontFamilyPicker)
const MemoContentTypePicker = memo(ContentTypePicker)
export const TextMenu = ({editor}: TextMenuProps) => {
    const commands = useTextmenuCommands(editor)
    const states = useTextmenuStates(editor)
    const blockOptions = useTextmenuContentTypes(editor)
    return (
        <BubbleMenu
            tippyOptions={{popperOptions: {placement: 'top-start'}}}
            editor={editor}
            pluginKey="textMenu"
            shouldShow={states.shouldShow}
            updateDelay={100}
        >
            <MemoContentTypePicker options={blockOptions} />
            <MemoFontSizePicker onChange={commands.onSetFontSize} value={states.currentSize || ''}/>
            <MemoFontFamilyPicker onChange={commands.onSetFont} value={states.currentFont || ''}/>
        </BubbleMenu>
    )
}

import {BubbleMenu, Editor} from '@tiptap/react'
import {FontSizePicker} from "@/extentions/tiptap/components/menus/TextMenu/components/FontSizePicker";
import React, {memo} from "react";
import {useTextmenuCommands} from "@/extentions/tiptap/components/menus/TextMenu/hooks/useTextmenuCommands";
import {useTextmenuStates} from "@/extentions/tiptap/components/menus/TextMenu/hooks/useTextmenuStates";
import {FontFamilyPicker} from "@/extentions/tiptap/components/menus/TextMenu/components/FontFamilyPicker";
import {useTextmenuContentTypes} from "@/extentions/tiptap/components/menus/TextMenu/hooks/useTextmenuContentTypes";
import {ContentTypePicker} from "@/extentions/tiptap/components/menus/TextMenu/components/ContentTypePicker";
import {Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Kbd} from "@nextui-org/kbd";
import {EditLinkPopover} from "@/extentions/tiptap/components/menus/TextMenu/components/EditLinkPopover";
import {ColorPicker} from "@/extentions/tiptap/components/menus/TextMenu/components/ColorPicker";
import {Link} from "@nextui-org/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import IconComponentsMap from "@/extentions/tiptap/lib/svg/IconComponents";
import {Bold} from "@/extentions/tiptap/lib/svg/icon";

export type TextMenuProps = {
    editor: Editor
}
const MemoFontSizePicker = memo(FontSizePicker)
const MemoFontFamilyPicker = memo(FontFamilyPicker)
const MemoContentTypePicker = memo(ContentTypePicker)
const MemoColorPicker = memo(ColorPicker)
export const TextMenu = ({editor}: TextMenuProps) => {
    const commands = useTextmenuCommands(editor)
    const states = useTextmenuStates(editor)
    const blockOptions = useTextmenuContentTypes(editor)
    return (
        <BubbleMenu
            tippyOptions={{popperOptions: {placement: 'top-start'}}}
            editor={editor}
            pluginKey="textMenu"
            className="flex flex-row gap-2"
            shouldShow={states.shouldShow}
            updateDelay={100}
        >
            <MemoContentTypePicker options={blockOptions}/>
            <Link onClick={commands.onBold}>
                {IconComponentsMap["Bold"]}
            </Link>
            <MemoFontSizePicker onChange={commands.onSetFontSize} value={states.currentSize || ''}/>
            <MemoFontFamilyPicker onChange={commands.onSetFont} value={states.currentFont || ''}/>
            <Divider orientation={"vertical"}/>
            <Button onClick={commands.onBold}>Bold</Button>
            <Button onClick={commands.onItalic}>Italic</Button>
            <Button onClick={commands.onUnderline}>Underline</Button>
            <Button onClick={commands.onStrike}>Strike</Button>
            <Button onClick={commands.onCode}>Code</Button>
            <Button onClick={commands.onCodeBlock}>CodeBlock</Button>
            <EditLinkPopover onSetLink={commands.onLink}/>
            <Dropdown>
                <DropdownTrigger>
                    <Button>Highlighter</Button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem isReadOnly>
                        <MemoColorPicker
                            color={states.currentHighlight}
                            onChange={commands.onChangeHighlight}
                            onClear={commands.onClearHighlight}
                        />
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </BubbleMenu>
    )
}

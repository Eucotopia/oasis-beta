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
import NextLink from "next/link";
import {Link} from "@nextui-org/link";
import {Bold} from "@tiptap/extension-bold";
import {EditLinkPopover} from "@/extentions/tiptap/components/menus/TextMenu/components/EditLinkPopover";
import {ColorPicker} from "@/extentions/tiptap/components/menus/TextMenu/components/ColorPicker";

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
            shouldShow={states.shouldShow}
            updateDelay={100}
        >
            <MemoContentTypePicker options={blockOptions}/>
            <MemoFontSizePicker onChange={commands.onSetFontSize} value={states.currentSize || ''}/>
            <MemoFontFamilyPicker onChange={commands.onSetFont} value={states.currentFont || ''}/>
            <Divider orientation={"vertical"}/>
            <Tooltip showArrow={true} content="command b">
                <Button onClick={commands.onBold}>Bold</Button>
            </Tooltip>
            <Tooltip showArrow={true} content={<Kbd keys={["command"]}>i</Kbd>}>
                <Button onClick={commands.onItalic}>Italic</Button>
            </Tooltip>
            <Tooltip showArrow={true} content={<Kbd keys={["command"]}>u</Kbd>}>
                <Button onClick={commands.onUnderline}>Underline</Button>
            </Tooltip>
            <Tooltip showArrow={true} content={<Kbd keys={["command"]}>X</Kbd>}>
                <Button onClick={commands.onStrike}>Strike</Button>
            </Tooltip>
            <Tooltip showArrow={true} content={<Kbd keys={["command"]}>e</Kbd>}>
                <Button onClick={commands.onCode}>Code</Button>
            </Tooltip>
            <Tooltip showArrow={true} content={<Kbd keys={["command"]}>null</Kbd>}>
                <Button onClick={commands.onCodeBlock}>CodeBlock</Button>
            </Tooltip>
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

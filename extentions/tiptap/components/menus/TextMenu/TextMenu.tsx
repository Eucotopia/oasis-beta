import {BubbleMenu, Editor} from '@tiptap/react'
import {FontSizePicker} from "@/extentions/tiptap/components/menus/TextMenu/components/FontSizePicker";
import React, {memo} from "react";
import {useTextmenuCommands} from "@/extentions/tiptap/components/menus/TextMenu/hooks/useTextmenuCommands";
import {useTextmenuStates} from "@/extentions/tiptap/components/menus/TextMenu/hooks/useTextmenuStates";
import {FontFamilyPicker} from "@/extentions/tiptap/components/menus/TextMenu/components/FontFamilyPicker";
import {useTextmenuContentTypes} from "@/extentions/tiptap/components/menus/TextMenu/hooks/useTextmenuContentTypes";
import {ContentTypePicker} from "@/extentions/tiptap/components/menus/TextMenu/components/ContentTypePicker";
import {Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {EditLinkPopover} from "@/extentions/tiptap/components/menus/TextMenu/components/EditLinkPopover";
import {ColorPicker} from "@/extentions/tiptap/components/menus/TextMenu/components/ColorPicker";
import {Link} from "@nextui-org/link";
import IconComponentsMap from "@/extentions/tiptap/lib/svg/IconComponents";
import "../MenuItem.css"

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
            className="flex flex-row gap-2 items-center p-1"
            shouldShow={states.shouldShow}
            updateDelay={100}
        >
            <MemoContentTypePicker options={blockOptions}/>
            <MemoFontSizePicker onChange={commands.onSetFontSize} value={states.currentSize || ''}/>
            <MemoFontFamilyPicker onChange={commands.onSetFont} value={states.currentFont || ''}/>
            <Divider orientation={"vertical"}/>
            <Link
                onClick={commands.onBold}
                color={"foreground"}
                className={`menu-item${states.isBold && states.isBold ? ' is-active' : ''}`}
            >
                {IconComponentsMap["Bold"]}
            </Link>
            <Link
                onClick={commands.onItalic}
                color={"foreground"}
                className={`menu-item${states.isItalic && states.isItalic ? ' is-active' : ''}`}
            >
                {IconComponentsMap["Italic"]}
            </Link>
            <Link
                onClick={commands.onUnderline}
                color={"foreground"}
                className={`menu-item${states.isUnderline && states.isUnderline ? ' is-active' : ''}`}
            >{IconComponentsMap["Underline"]}</Link>
            <Link
                onClick={commands.onStrike}
                color={"foreground"}
                className={`menu-item${states.isStrike && states.isStrike ? ' is-active' : ''}`}
            >
                {IconComponentsMap["Strikethrough"]}
            </Link>
            <Link
                onClick={commands.onCodeBlock}
                color={"foreground"}
                className={`menu-item${states.isCode && states.isCode ? ' is-active' : ''}`}
            >
                {IconComponentsMap["CodeBlock"]}
            </Link>
            <EditLinkPopover onSetLink={commands.onLink}/>
            <Dropdown>
                <DropdownTrigger>
                    <Link
                        color={"foreground"}
                    >
                        {IconComponentsMap["Highlighter"]}
                    </Link>
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

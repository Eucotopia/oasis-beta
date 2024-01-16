'use client'
import {useBlockEditor} from "@/extentions/tiptap/hooks/useBlockEditor";
import {EditorContent} from "@tiptap/react";
import "@/extentions/tiptap/styles/index.css"
import {ContentItemMenu} from "@/extentions/tiptap/components/menus/ContentItemMenu";
import {TextMenu} from "@/extentions/tiptap/components/menus/TextMenu";
import {TableColumnMenu, TableRowMenu} from "@/extentions/tiptap/extentions/Table/menus";
import ColumnsMenu from "@/extentions/tiptap/extentions/MultiColumn/menus/ColumnsMenu";
import {useRef} from "react";
import {LinkMenu} from "@/extentions/tiptap/components/menus/LinkMenu";

export const BlockEditor = () => {
    const {editor, characterCount} = useBlockEditor()
    const menuContainerRef = useRef(null)
    if (!editor) {
        return null
    }
    return (
        <>
            <div className="flex h-full" ref={menuContainerRef}>
                <div className="relative flex flex-col flex-1 h-full overflow-hidden">
                    <EditorContent editor={editor}/>
                    <ContentItemMenu editor={editor}/>
                    <TextMenu editor={editor}/>
                    <LinkMenu editor={editor} appendTo={menuContainerRef}/>
                    <TableRowMenu editor={editor} appendTo={menuContainerRef}/>
                    <TableColumnMenu editor={editor} appendTo={menuContainerRef}/>
                    <ColumnsMenu editor={editor} appendTo={menuContainerRef}/>
                </div>
            </div>
        </>
    )
}
'use client'
import {useBlockEditor} from "@/extentions/tiptap/hooks/useBlockEditor";
import {EditorContent} from "@tiptap/react";
import "@/extentions/tiptap/styles/index.css"
import {ContentItemMenu} from "@/extentions/tiptap/components/menus/ContentItemMenu";
import {TextMenu} from "@/extentions/tiptap/components/menus/TextMenu";
import {TableColumnMenu, TableRowMenu} from "@/extentions/tiptap/extentions/Table/menus";
import ColumnsMenu from "@/extentions/tiptap/extentions/MultiColumn/menus/ColumnsMenu";

export const BlockEditor = () => {
    const {editor, characterCount} = useBlockEditor()
    if (!editor) {
        return null
    }
    return (
        <>
            <EditorContent editor={editor}/>
            <ContentItemMenu editor={editor}/>
            <TextMenu editor={editor}/>
            <TableRowMenu editor={editor}/>
            <TableColumnMenu editor={editor}/>
            <ColumnsMenu editor={editor}/>
        </>
    )
}
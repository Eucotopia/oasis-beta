'use client'
import {useBlockEditor} from "@/extentions/tiptap/hooks/useBlockEditor";
import {EditorContent} from "@tiptap/react";

export const BlockEditor = () => {
    const {editor, characterCount} = useBlockEditor()
    return (
        <>
            <EditorContent editor={editor}/>
        </>
    )
}
import {Editor, EditorContent} from "@tiptap/react";
import './styles/index.css'
import {useRef} from "react";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";

export const BlockEditor = () => {
    const {editor, characterCount} = useBlockEditor()
    if (!editor) {
        return null
    }
    return (
        <>
            <EditorContent editor={editor}/>
        </>
    );
}
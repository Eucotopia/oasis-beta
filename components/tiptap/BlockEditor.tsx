import {Editor, EditorContent} from "@tiptap/react";
import './styles/index.css'
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";

export const BlockEditor = () => {
    const {editor, characterCount} = useBlockEditor()
    if (!editor) {
        return null
    }
    return (
        <>
            <EditorContent editor={editor} style={{color: 'red', height: '300px', width: '300px'}}/>
        </>
    );
}
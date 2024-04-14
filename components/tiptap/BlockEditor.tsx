import {Editor, EditorContent} from "@tiptap/react";
import './styles/index.css'

export const BlockEditor = ({height, editor}: { height: string, editor: Editor }) => {
    return (
        <>
            <EditorContent editor={editor} style={{minHeight: height}}/>
        </>
    );
}
import {EditorContent, EditorProvider, useEditor} from "@tiptap/react";
import {useBlockEditor} from "@/extentions/tiptap/hooks/useBlockEditor";
import SlashCommand from "./extentions/SlashCommand/SlashCommand";

const Tiptap = () => {
    // const {editor} = useBlockEditor()
    const editor = useEditor({
        extensions: [
            SlashCommand
        ]
    })
    return (
        <>
            <EditorContent editor={editor}/>
        </>
    )
}
export default Tiptap
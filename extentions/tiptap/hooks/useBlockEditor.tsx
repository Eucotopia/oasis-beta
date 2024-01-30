import ExtensionKit from "@/extentions/tiptap/extentions/extension-kit";
import {useEditor} from "@tiptap/react";
import {useEffect} from "react";

export const useBlockEditor = (onContentChange: (html: string) => void) => {
    const editor = useEditor({
        autofocus: true,
        extensions: [
            ...ExtensionKit()
        ],
        content: "",
        editorProps: {
            attributes: {
                autocomplete: 'off',
                autocorrect: 'off',
                autocapitalize: 'off',
                class: 'min-h-full',
            },
        },
    }, [])
    useEffect(() => {
        if (!editor) {
            return undefined
        }
        editor.on("update", () => {
            onContentChange(editor.getHTML())
            console.log(editor.getHTML())
        })
    })

    const characterCount = editor?.storage.characterCount || {characters: () => 0, words: () => 0}
    return {editor, characterCount}
}


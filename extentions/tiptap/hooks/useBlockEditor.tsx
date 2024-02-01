import ExtensionKit from "@/extentions/tiptap/extentions/extension-kit";
import {useEditor} from "@tiptap/react";
import {useEffect} from "react";

export const useBlockEditor = ({onContentChange, content}: {
    onContentChange?: (html: string) => void,
    content?: string
}) => {
    const editor = useEditor({
        autofocus: true,
        extensions: [
            ...ExtensionKit()
        ],
        content: content ? content : '',
        editorProps: {
            attributes: {
                autocomplete: 'off',
                autocorrect: 'off',
                autocapitalize: 'off',
                class: 'min-h-full',
            },
        },
        editable: onContentChange !== undefined,
    }, [])
    useEffect(() => {
        if (!editor) {
            return undefined
        }
        editor.on("update", () => {
            onContentChange && onContentChange(editor.getHTML())
        })
    })

    const characterCount = editor?.storage.characterCount || {characters: () => 0, words: () => 0}
    return {editor, characterCount}
}


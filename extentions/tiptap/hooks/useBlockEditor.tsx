import ExtensionKit from "@/extentions/tiptap/extentions/extension-kit";
import {Content, useEditor} from "@tiptap/react";

export const useBlockEditor = ({onContentChange, blogContent}: {
    onContentChange?: (html: string) => void,
    blogContent?: Content
}) => {
    console.log('blogContent', blogContent)
    console.log('type', typeof blogContent)
    const editor = useEditor({
        autofocus: true,
        extensions: [
            ...ExtensionKit()
        ],
        content:  blogContent,
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
    // useEffect(() => {
    //     if (!editor) {
    //         return undefined
    //     }
    //     editor.on("update", () => {
    //         onContentChange && onContentChange(editor.getHTML())
    //     })
    // })
    const characterCount = editor?.storage.characterCount || {characters: () => 0, words: () => 0}
    return {editor, characterCount}
}


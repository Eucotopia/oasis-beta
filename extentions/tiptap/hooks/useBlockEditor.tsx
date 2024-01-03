import ExtensionKit from "@/extentions/tiptap/extentions/extension-kit";
import {useEditor} from "@tiptap/react";

export const useBlockEditor = () => {
    const editor = useEditor({
        autofocus: true,
        extensions: [
            ...ExtensionKit()
        ],
        content: "            <ul>\n" +
            "                <li>asd</li>\n" +
            "                <li>asd</li>\n" +
            "            </ul>",
        editorProps: {
            attributes: {
                autocomplete: 'off',
                autocorrect: 'off',
                autocapitalize: 'off',
                class: 'min-h-full',
            },
        },
    }, [])

    const characterCount = editor?.storage.characterCount || {characters: () => 0, words: () => 0}
    return {editor, characterCount}
}


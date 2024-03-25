'use client'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
export const ExtensionKit = () => [
    StarterKit.configure({
        // Disable an included extension
        history: false,

        // Configure an included extension
        heading: {
            levels: [1, 2,3],
        },
    }),
    CharacterCount
]

export default ExtensionKit

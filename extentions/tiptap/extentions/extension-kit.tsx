'use client'
import {
    StarterKit,
    Highlight,
    Subscript,
    Superscript,
    TableOfContent,
    SlashCommand,
    TrailingNode,
    FontSize,
    TextStyle,
    FontFamily,
    Paragraph,
    TaskItem,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    TaskList,
    Underline,
    Link,
    CharacterCount,
    Color,
    Focus,
    Dropcursor,
    Typography,
    TextAlign,
    Placeholder,
    Emoji,
    emojiSuggestion,
    Heading,
    Document,
    HorizontalRule,
    Mathematics
} from '.'
import {CodeBlockLowlight} from '@tiptap/extension-code-block-lowlight'
import {lowlight} from 'lowlight'

export const ExtensionKit = () => [
    Document,
    HorizontalRule,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    StarterKit,
    Underline,
    CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: null,
    }),
    Highlight.configure({multicolor: true}),
    TrailingNode,
    Subscript,
    Mathematics,
    FontFamily,
    Placeholder.configure({
        includeChildren: true,
        showOnlyCurrent: false,
        placeholder: () => '',
    }),
    Emoji.configure({
        enableEmoticons: true,
        suggestion: emojiSuggestion,
    }),
    TextAlign.extend({
        addKeyboardShortcuts() {
            return {}
        },
    }).configure({
        types: ['heading', 'paragraph'],
    }),
    Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
    }),
    Superscript,
    TableOfContent,
    SlashCommand,
    Typography,
    FontSize,
    Dropcursor.configure({
        width: 2,
        class: 'ProseMirror-dropcursor border-black',
    }),
    TextStyle,
    TaskItem.configure({
        nested: true,
    }),
    Link.configure({
        openOnClick: false,
    }),
    Paragraph,
    Focus,
    TaskList,
    Color,
    CharacterCount.configure({limit: 50000}),
]

export default ExtensionKit

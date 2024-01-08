import {Group} from './types'
import {Columns} from "@/extentions/tiptap/lib/svg/icon";

// @ts-ignore
export const GROUPS: Group[] = [
    {
        name: 'format',
        title: 'Format',
        commands: [
            {
                name: 'heading1',
                label: 'Heading 1',
                iconClass: 'H1',
                kbd: '22',
                aliases: ['h1'],
                action: editor => {
                    editor.chain().focus().setHeading({level: 1}).run()
                },
            },
            {
                name: 'heading2',
                label: 'Heading 2',
                iconClass: 'H2',
                kbd: '##',
                aliases: ['h2'],
                action: editor => {
                    editor.chain().focus().setHeading({level: 2}).run()
                },
            },
            {
                name: 'heading3',
                label: 'Heading 3',
                iconClass: 'H3',
                kbd: '###',
                aliases: ['h3'],
                action: editor => {
                    editor.chain().focus().setHeading({level: 3}).run()
                },
            },
            {
                name: 'bulletList',
                label: 'Bullet List',
                iconClass: 'BulletList',
                kbd: '*',
                aliases: ['ul'],
                action: editor => {
                    editor.chain().focus().toggleBulletList().run()
                },
            },
            {
                name: 'numberList',
                label: 'Numbered List',
                iconClass: 'NumberList',
                kbd: '1',
                aliases: ['ol'],
                action: editor => {
                    editor.chain().focus().toggleOrderedList().run()
                },
            },
            {
                name: 'TaskList',
                label: 'Task List',
                iconClass: 'TaskList',
                kbd: '-',
                aliases: ['todo'],
                action: editor => {
                    editor.chain().focus().toggleTaskList().run()
                },
            },
            {
                name: 'blockquote',
                label: 'Blockquote',
                iconClass: 'QuoteLeft',
                kbd: '>',
                action: editor => {
                    editor.chain().focus().setBlockquote().run()
                },
            },
            {
                name: 'codeBlock',
                label: 'Code Block',
                iconClass: 'CodeBlock',
                kbd: '~~~',
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor.chain().focus().setCodeBlock().run()
                },
            },
        ],
    },
    {
        name: 'insert',
        title: 'Insert',
        commands: [
            {
                name: 'table',
                label: 'Table',
                iconClass: 'Table',
                kbd: 'Insert',
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor.chain().focus().insertTable({rows: 3, cols: 3, withHeaderRow: false}).run()
                },
            },
            {
                name: 'image',
                label: 'Image',
                iconClass: 'Image',
                kbd: 'Insert',
                aliases: ['img'],
                action: editor => {
                    editor.chain().focus().setImageUpload().run()
                },
            },
            {
                name: 'columns',
                label: 'Columns',
                iconClass: 'Columns',
                kbd: 'Add',
                aliases: ['cols'],
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor
                        .chain()
                        .focus()
                        .setColumns()
                        .focus(editor.state.selection.head - 1)
                        .run()
                },
            },
            {
                name: 'horizontalRule',
                label: 'Horizontal Rule',
                iconClass: 'Horizontal',
                kbd: 'Insert',
                aliases: ['hr'],
                action: editor => {
                    editor.chain().focus().setHorizontalRule().run()
                },
            },
            {
                name: 'toc',
                label: 'Table of Contents',
                iconClass: 'TableOfContent',
                aliases: ['outline'],
                kbd: 'Insert',
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor.chain().focus().insertTableOfContent().run()
                },
            },
        ],
    },
]

export default GROUPS

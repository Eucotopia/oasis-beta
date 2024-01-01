import {Group} from './types'

// @ts-ignore
export const GROUPS: Group[] = [
    {
        name: 'format',
        title: 'Format',
        commands: [
            {
                name: 'heading1',
                label: 'Heading 1',
                iconClass: 'fa-solid fa-bottle-water',
                kbd: '22',
                aliases: ['h1'],
                action: editor => {
                    editor.chain().focus().setHeading({level: 1}).run()
                },
            },
            {
                name: 'heading2',
                label: 'Heading 2',
                iconClass: 'fa-solid fa-bottle-water',
                kbd: '##',
                aliases: ['h2'],
                action: editor => {
                    editor.chain().focus().setHeading({level: 2}).run()
                },
            },
            {
                name: 'heading3',
                label: 'Heading 3',
                iconClass: 'fa-solid fa-bottle-water',
                kbd: '###',
                aliases: ['h3'],
                action: editor => {
                    editor.chain().focus().setHeading({level: 3}).run()
                },
            },
            {
                name: 'bulletList',
                label: 'Bullet List',
                iconClass: 'fa-solid fa-bottle-water',
                kbd: '*',
                aliases: ['ul'],
                action: editor => {
                    editor.chain().focus().toggleBulletList().run()
                },
            },
            {
                name: 'numberedList',
                label: 'Numbered List',
                iconClass: 'fa-solid fa-bottle-water',
                kbd: '1',
                aliases: ['ol'],
                action: editor => {
                    editor.chain().focus().toggleOrderedList().run()
                },
            },
            {
                name: 'taskList',
                label: 'Task List',
                iconClass: 'fa-solid fa-bottle-water',
                kbd: '-',
                aliases: ['todo'],
                action: editor => {
                    editor.chain().focus().toggleTaskList().run()
                },
            },
            {
                name: 'blockquote',
                label: 'Blockquote',
                iconClass: 'fa-solid fa-bottle-water',
                kbd: '>',
                action: editor => {
                    editor.chain().focus().setBlockquote().run()
                },
            },
            {
                name: 'codeBlock',
                label: 'Code Block',
                iconClass: 'fa-solid fa-bottle-water',
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
                iconClass: 'fa-solid fa-bottle-water',
                kbd: 'Insert',
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor.chain().focus().insertTable({rows: 3, cols: 3, withHeaderRow: false}).run()
                },
            },
            {
                name: 'image',
                label: 'Image',
                iconClass: 'fa-solid fa-bottle-water',
                kbd: 'Insert',
                aliases: ['img'],
                action: editor => {
                    editor.chain().focus().setImageUpload().run()
                },
            },
            {
                name: 'columns',
                label: 'Columns',
                iconClass: 'fa-solid fa-bottle-water',
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
                iconClass: 'fa-solid fa-bottle-water',
                kbd: 'Insert',
                aliases: ['hr'],
                action: editor => {
                    editor.chain().focus().setHorizontalRule().run()
                },
            },
            {
                name: 'toc',
                label: 'Table of Contents',
                iconClass: 'fa-solid fa-bottle-water',
                aliases: ['outline'],
                kbd: 'Insert',
                shouldBeHidden: editor => editor.isActive('columns'),
                action: editor => {
                    editor.chain().focus().insertTableOfContent().run()
                },
            },
        ],
    }
]

export default GROUPS

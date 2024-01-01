import {Editor} from '@tiptap/core'

export interface Group {
    name: string
    title: string
    commands: Command[]
}

export interface Command {
    name: string
    label: string
    kbd: string
    aliases?: string[]
    iconClass: string
    action: (editor: Editor) => void
    shouldBeHidden?: (editor: Editor) => boolean
}

export interface MenuListProps {
    editor: Editor
    items: Group[]
    command: (command: Command) => void
}
'use client'

import {EditorContent, PureEditorContent} from '@tiptap/react'
import React, { useRef} from 'react'

import {LinkMenu} from '@/extentions/tiptap/components/menus'

import {useBlockEditor} from '@/extentions/tiptap/hooks/useBlockEditor'

import '@/extentions/tiptap/styles/index.css'

import {Sidebar} from '@/extentions/tiptap/components/Sidebar'
import {Loader} from '@/extentions/tiptap/components/ui/Loader'
import ImageBlockMenu from '@/extentions/tiptap/extentions/ImageBlock/components/ImageBlockMenu'
import {ColumnsMenu} from '@/extentions/tiptap/extentions/MultiColumn/menus'
import {TableColumnMenu, TableRowMenu} from '@/extentions/tiptap/extentions/Table/menus'
import {createPortal} from 'react-dom'
import {EditorHeader} from './components/EditorHeader'
import {TextMenu} from '../menus/TextMenu'
import {ContentItemMenu} from '../menus/ContentItemMenu'

export const BlockEditor = () => {
    const menuContainerRef = useRef(null)
    const editorRef = useRef<PureEditorContent | null>(null)

    const {editor, characterCount, leftSidebar} = useBlockEditor()

    if (!editor) {
        return null
    }

    const aiLoaderPortal = createPortal(<Loader label="AI is now doing its job."/>, document.body)

    return (
        <>
            <div className="flex h-full" ref={menuContainerRef}>
                <Sidebar isOpen={leftSidebar.isOpen} onClose={leftSidebar.close} editor={editor}/>
                <div className="relative flex flex-col flex-1 h-full overflow-hidden">
                    <EditorHeader
                        characters={characterCount.characters()}
                        words={characterCount.words()}
                        isSidebarOpen={leftSidebar.isOpen}
                        toggleSidebar={leftSidebar.toggle}
                    />
                    <EditorContent editor={editor} ref={editorRef} className="flex-1 overflow-y-auto"/>
                    <ContentItemMenu editor={editor}/>
                    <LinkMenu editor={editor} appendTo={menuContainerRef}/>
                    <TextMenu editor={editor}/>
                    <ColumnsMenu editor={editor} appendTo={menuContainerRef}/>
                    <TableRowMenu editor={editor} appendTo={menuContainerRef}/>
                    <TableColumnMenu editor={editor} appendTo={menuContainerRef}/>
                    <ImageBlockMenu editor={editor} appendTo={menuContainerRef}/>
                </div>
            </div>
        </>
    )
}

export default BlockEditor

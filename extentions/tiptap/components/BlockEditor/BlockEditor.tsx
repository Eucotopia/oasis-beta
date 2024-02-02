import {Editor, EditorContent} from "@tiptap/react";
import "@/extentions/tiptap/styles/index.css"
import {ContentItemMenu} from "@/extentions/tiptap/components/menus/ContentItemMenu";
import {TextMenu} from "@/extentions/tiptap/components/menus/TextMenu";
import {TableColumnMenu, TableRowMenu} from "@/extentions/tiptap/extentions/Table/menus";
import ColumnsMenu from "@/extentions/tiptap/extentions/MultiColumn/menus/ColumnsMenu";
import {useRef} from "react";
import {LinkMenu} from "@/extentions/tiptap/components/menus/LinkMenu";

export const BlockEditor = ({editor}: { editor: Editor | null }) => {
    const menuContainerRef = useRef(null)
    if (!editor) {
        return null
    }
    return (
        <>
            {editor.isEditable ? (
                <div ref={menuContainerRef}>
                    <EditorContent editor={editor} className={"w-[700px]"}/>
                    <ContentItemMenu editor={editor}/>
                    <TextMenu editor={editor}/>
                    <LinkMenu editor={editor} appendTo={menuContainerRef}/>
                    <TableRowMenu editor={editor} appendTo={menuContainerRef}/>
                    <TableColumnMenu editor={editor} appendTo={menuContainerRef}/>
                    <ColumnsMenu editor={editor} appendTo={menuContainerRef}/>
                </div>
            ) : (
                <EditorContent editor={editor} className={"overflow-hidden"}/>
            )}
        </>
    );
}
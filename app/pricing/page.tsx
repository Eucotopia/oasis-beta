"use client"
import {useBlockEditor} from "@/extentions/tiptap/hooks/useBlockEditor";
import {EditorContent} from "@tiptap/react";
import {BlockEditor} from "@/extentions/tiptap/components/BlockEditor/BlockEditor";

export default function PricingPage() {
    const {editor, characterCount} = useBlockEditor()
    return (
        <>
            <BlockEditor/>
        </>
    );
}

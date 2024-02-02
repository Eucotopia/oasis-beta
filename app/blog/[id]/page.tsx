"use client"
import {useGetBlogByIdQuery} from "@/features/api/postApi";
import {useBlockEditor} from "@/extentions/tiptap/hooks/useBlockEditor";
import {BlockEditor} from "@/extentions/tiptap/components/BlockEditor/BlockEditor";
import {TableOfContents} from "@/extentions/tiptap/components/TableOfContents";
import {link, Listbox, ListboxItem} from "@nextui-org/react";
import {ListItem} from "@tiptap/extension-list-item";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {useState} from "react";
import NextLink from "next/link";

export default function Page({params}: { params: { id: string } }) {

    const {
        data: post,
        isFetching,
        isLoading
    } = useGetBlogByIdQuery(Number(params.id))
    const [currentPost, setCurrentPost] = useState(post)

    const {
        data: prePost,
    } = useGetBlogByIdQuery(Number(params.id) - 1)

    const {
        data: lastPost,
    } = useGetBlogByIdQuery(Number(params.id) + 1)

    const {editor, characterCount} = useBlockEditor({content: currentPost?.data.content})
    if (isLoading) {
        return <div>Loading</div>
    }
    if (!post) {
        return <div>Missing post!</div>
    }
    if (editor === null) {
        return
    }
    return (
        <>
            <div className={"flex flex-row"}>
                <div className={"w-[700px]"}>
                    <BlockEditor editor={editor}/>
                </div>
            </div>
            <div
                className={"flex flex-row justify-center gap-4 px-6"}
            >
                <Button
                    as={NextLink}
                    size={"lg"}
                    href={`/blog/${Number(params.id) - 1}`}
                    className={"flex flex-row border  shadow-2xl rounded-xl  p-3 basis-1/2 hover:bg-green-400"}
                >
                    <p>上一篇&nbsp;/&nbsp;</p>
                    <p>{prePost?.data.title}</p>
                </Button>
                <Button
                    as={NextLink}
                    href={`/blog/${Number(params.id) + 1}`}
                    size={"lg"}
                    className={"flex flex-row border  shadow-2xl rounded-xl  p-3 basis-1/2 hover:bg-green-400"}>
                    <p>下一篇&nbsp;/&nbsp;</p>
                    <p>{lastPost?.data.title}</p>
                </Button>
            </div>
        </>
    )
}
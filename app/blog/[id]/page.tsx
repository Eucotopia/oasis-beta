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
import goober from "goober";

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
    console.log("prePost", prePost)
    console.log("lasePost", lastPost)
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
                    as={Link}
                    size={"lg"}
                    isDisabled={prePost === undefined || prePost === null}
                    variant={"ghost"}
                    href={`/blog/${Number(params.id) - 1}`}
                    color="primary"
                >
                    <p>上一篇&nbsp;/&nbsp;</p>
                    <p>{prePost?.data.title}</p>
                </Button>
                <Button
                    as={Link}
                    variant={"ghost"}
                    isDisabled={lastPost === undefined || lastPost === null}
                    href={`/blog/${Number(params.id) + 1}`}
                    size={"lg"}
                    color="primary"
                >
                    <p>下一篇&nbsp;/&nbsp;</p>
                    <p>{lastPost?.data.title}</p>
                </Button>
            </div>
        </>
    )
}
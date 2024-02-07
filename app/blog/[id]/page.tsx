"use client"
import {useGetBlogByIdQuery} from "@/features/api/postApi";
import {useBlockEditor} from "@/extentions/tiptap/hooks/useBlockEditor";
import {BlockEditor} from "@/extentions/tiptap/components/BlockEditor/BlockEditor";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {useState} from "react";
import {HandPointLeft} from '@styled-icons/fa-solid/HandPointLeft'
import {HandPointRight} from '@styled-icons/fa-solid/HandPointRight'
import RelatedArticles from '@/components/marquee/RelatedArticles'

export default function Page({params}: { params: { id: string } }) {

    const {
        data: post,
        isFetching,
        isLoading,
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
            <div className={"flex flex-col items-center"}>
                <div className={"w-[840px]"}>
                    <BlockEditor editor={editor}/>
                    <div
                        className={"flex flex-row justify-around"}
                    >
                        <Button
                            as={Link}
                            size={"lg"}
                            variant={"ghost"}
                            href={`/blog/${Number(params.id) - 1}`}
                            isDisabled={prePost === undefined || prePost === null}
                            className={'text gap-4 p-6'}
                            startContent={<HandPointLeft height={100} width={100}/>}
                        >
                            <p>{prePost?.data.title}</p>
                        </Button>
                        <Button
                            as={Link}
                            size={"lg"}
                            variant={"ghost"}
                            isDisabled={lastPost === undefined || lastPost === null}
                            href={`/blog/${Number(params.id) + 1}`}
                            className={'text gap-4 p-6'}

                            endContent={<HandPointRight height={100} width={100}/>}
                        >
                            <p>{lastPost?.data.title}</p>
                        </Button>
                    </div>
                </div>
                <div className={"mt-20"}>
                    <RelatedArticles id={Number(params.id)}/>
                </div>
            </div>
        </>
    )
}
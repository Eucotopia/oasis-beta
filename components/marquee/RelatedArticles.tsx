import React from "react";
import Marquee from "react-fast-marquee";
import {useGetRelatedArticlesQuery} from "@/features/api/postApi";
import {Button} from "@nextui-org/button";
import {Card, CardFooter, Image} from "@nextui-org/react";
import NextLink from "next/link";

/**
 * 获取当前文章的相关文章
 * @param id
 */
const RelatedArticles = ({id}: { id: number }) => {
    const {data: RelatedPost} = useGetRelatedArticlesQuery(Number(id))
    return (
        <>
            <Marquee autoFill pauseOnHover>
                {
                    RelatedPost?.data.map(post => {
                        return (
                            <>
                                <Card
                                    key={post.id}
                                    isFooterBlurred
                                    radius="lg"
                                    className="border-none ml-9"
                                >
                                    <NextLink href={`/blog/${Number(post.id)}`}>
                                        <Image src={post.cover} height={200} width={200} alt={post.title}/>
                                    </NextLink>
                                    <CardFooter
                                        className="flex flex-col justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                        <p className="text-tiny text-white/80">{post.title}</p>
                                        <div className="text-tiny text-white bg-black/20">
                                            {post.likes}
                                            {post.views}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </>
                        )
                    })
                }
            </Marquee>

        </>
    )
}
export default RelatedArticles



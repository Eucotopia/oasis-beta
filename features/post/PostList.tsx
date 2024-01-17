import {Button, Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import React from "react";
import {Post} from "@/types";
import {Link} from "@nextui-org/link";

export const PostList = (props: { post: Post }) => {
    return (
        <>
            <Link href={`/post/${props.post.id}`}>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">{props.post.title}</p>
                        <h4 className="text-white/90 font-medium text-xl">{props.post.summary}</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="/img/1.jpg"
                    />
                    <CardFooter
                        className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                            <Image
                                alt="Breathing app icon"
                                className="rounded-full w-10 h-11 bg-black"
                                src="/images/breathing-app-icon.jpeg"
                            />
                            <div className="flex flex-col">
                                <p className="text-tiny text-white/60">{props.post.createTime}</p>
                                <p className="text-tiny text-white/60">{props.post.id}</p>
                            </div>
                        </div>
                        <Button radius="full" size="sm">Get App</Button>
                    </CardFooter>
                </Card>
            </Link>
        </>
    )
}
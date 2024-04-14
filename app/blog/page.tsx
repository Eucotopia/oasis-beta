'use client'
import * as React from "react";
import {title} from "@/components/primitives";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import {useGetRootCategoriesQuery} from "@/features/api/categoryApi";
import {Link} from "@nextui-org/link";
import PlaceListItem from "@/components/place-list-grid/App";
import {useGetHostArticlesQuery} from "@/features/api/postApi";

export default function App() {
    const {data: rootCategories} = useGetRootCategoriesQuery()
    const {data: hostArticles} = useGetHostArticlesQuery();
    if (rootCategories === undefined) {
        return null
    }
    if (hostArticles === undefined) {
        return null
    }
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-screen ">
                <div className={"flex flex-col items-center"}>
                    <h1 className={title({color: "pink"})}>technology stack</h1>
                    <div className={"flex-row grid grid-cols-2 justify-between mt-4"}>
                        {
                            rootCategories?.data.map((item, index) => {
                                    return (
                                        <>
                                            <Link href={`/blog/category/${item.id}`}>`
                                                <Card
                                                    isFooterBlurred
                                                    radius="lg"
                                                    className="border-none mr-20 mb-10"
                                                >
                                                    <CardHeader
                                                        className={"flex flex-row p-2 justify-center"}>{item.name}</CardHeader>
                                                    <CardBody className={"p-4"}>
                                                        <Image
                                                            alt="Woman listing to music"
                                                            className="object-cover"
                                                            src="/image/android.svg"
                                                            width={200}
                                                        />
                                                    </CardBody>
                                                    <CardFooter
                                                        className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                                        <p className="text-tiny text-white/80">Available soon.</p>
                                                    </CardFooter>
                                                </Card>
                                            </Link>
                                        </>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <div className={"flex flex-col mt-2"}>
                    <h2 className="px-2 text-3xl leading-7">
                        <span className="inline-block md:hidden">FAQs</span>
                        <span className="hidden md:inline-block">Frequently asked questions</span>
                    </h2>
                    {/*<PlaceListItem posts={hostArticles?.data}/>*/}
                </div>
            </section>
        </>
    )
}
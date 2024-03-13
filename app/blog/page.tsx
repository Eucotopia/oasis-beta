'use client'
import * as React from "react";
import {title} from "@/components/primitives";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {useGetRootCategoriesQuery} from "@/features/api/categoryApi";

export default function App() {
    const {data: rootCategories} = useGetRootCategoriesQuery()
    if (rootCategories === undefined) {
        return null
    }
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-screen ">
                <div className={"flex flex-col items-center"}>
                    <h1 className={title({color: "pink"})}>technology stack</h1>
                    <div className={"flex flex-row gap-28 justify-between mt-4"}>
                        {
                            rootCategories?.data.map((item, index) => {
                                    return (
                                        <>
                                            <Card
                                                isFooterBlurred
                                                radius="lg"
                                                className="border-none"
                                            >
                                                <CardHeader className={"flex flex-row p-2 justify-center"}>{item.name}</CardHeader>
                                                <CardBody className={"p-4"}>
                                                    <Image
                                                        alt="Woman listing to music"
                                                        className="object-cover"
                                                        src="/image/android.svg"
                                                        width={200}
                                                    />
                                                </CardBody>
                                                <CardFooter
                                                    className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                                    <p className="text-tiny text-white/80">Available soon.</p>
                                                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default"
                                                            radius="lg" size="sm">
                                                        Notify me
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </section>
            {/*<AddPost/>*/}
        </>
    )
}
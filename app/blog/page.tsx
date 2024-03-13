'use client'
import * as React from "react";
import {title} from "@/components/primitives";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
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
                    <div className={"flex-row grid grid-cols-4 justify-between mt-4"}>
                        {
                            rootCategories?.data.map((item, index) => {
                                    return (
                                        <>
                                            <Card
                                                isPressable
                                                onPress={()=>alert(item.name)}
                                                isFooterBlurred
                                                radius="lg"
                                                className="border-none mr-20 mb-10"
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
                                                    className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                                    <p className="text-tiny text-white/80">Available soon.</p>
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
'use client'
import React from "react";
import {Card, CardBody, CardFooter, CardHeader, Divider, Image, user,} from "@nextui-org/react";
import {FaUsers, FaHeart, FaRegFileLines, FaRankingStar} from "react-icons/fa6";
import {title} from "@/components/primitives";
import {ChartComponent} from "@/components/chart/ChartComponent";
import {Link} from "@nextui-org/link";
import {useGetCountQuery} from "@/features/api/authApi";
import {useGetPostCountQuery} from "@/features/api/postApi";

const initialData = [
    {time: '2018-12-22', value: 32.51},
    {time: '2018-12-23', value: 31.11},
    {time: '2018-12-24', value: 27.02},
    {time: '2018-12-25', value: 27.32},
    {time: '2018-12-26', value: 25.17},
    {time: '2018-12-27', value: 28.89},
    {time: '2018-12-28', value: 25.46},
    {time: '2018-12-29', value: 23.92},
    {time: '2018-12-30', value: 22.68},
    {time: '2018-12-31', value: 22.67},
    {time: '2020-12-22', value: 22.97},
    {time: '2021-12-23', value: 22.17},
    {time: '2022-12-23', value: 22.17},
    {time: '2023-12-23', value: 22.17},
    {time: '2024-12-23', value: 22.17},
    {time: '2025-12-23', value: 22.17},

];
export default function App() {
    const {data: userCount} = useGetCountQuery()
    const {data: postCount} = useGetPostCountQuery();
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="flex flex-row justify-between ">
                    <Card className="py-4 shadow-xl">
                        <CardBody className="flex flex-row gap-4 overflow-visible pl-6 py-2 pr-20 ">
                            <div className={"bg-green-100 p-4 rounded-xl"}>
                                <FaUsers fill={"#12A150"} size={"4em"}/>
                            </div>
                            <div className={"flex flex-col justify-around"}>
                                <h4 className={title({color: "violet", size: 'sm'})}>{userCount?.data}</h4>
                                <p>Pageviews</p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="py-4 shadow-xl">
                        <CardBody className="flex flex-row gap-4 overflow-visible pl-6 py-2 pr-20 ">
                            <div className={"bg-blue-100 p-4 rounded-xl"}>
                                <FaRegFileLines fill={"#3366FF"} size={"4em"}/>
                            </div>
                            <div className={"flex flex-col justify-around"}>
                                <h4 className={title({color: "cyan", size: 'sm'})}>{postCount?.data}</h4>
                                <p>Posts</p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="py-4 shadow-xl">
                        <CardBody className="flex flex-row gap-4 overflow-visible pl-6 py-2 pr-20 ">
                            <div className={"bg-red-100 p-4 rounded-xl"}>
                                <FaHeart fill={"#FF433D"} size={"4em"}/>
                            </div>
                            <div className={"flex flex-col justify-around"}>
                                <h4 className={title({color: "yellow", size: 'sm'})}>134K</h4>
                                <p>Likes</p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="py-4 shadow-xl">
                        <CardBody className="flex flex-row gap-4 overflow-visible pl-6 py-2 pr-20 ">
                            <div className={"bg-orange-100 p-4 rounded-xl"}>
                                <FaRankingStar fill={"#FFBB3D"} size={"4em"}/>
                            </div>
                            <div className={"flex flex-col justify-around"}>
                                <h4 className={title({color: "blue", size: 'sm'})}>134K</h4>
                                <p>Visitors</p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="flex flex-row justify-between  mt-6">
                    <div className={"flex flex-col border-1 rounded-xl"}>
                        <div className={"flex justify-start items-center border-b font-bold pl-4 h-14 text-xl"}>
                            Traffic stats
                        </div>
                        <div className={"pb-6"}>
                            <ChartComponent data={initialData}/>
                        </div>
                    </div>
                    <Card>
                        <CardHeader className={"flex flex-row justify-between"}>
                            <p className={"font-bold text-xl bg-gradient-to-r from-violet-600 to-emerald-500 bg-clip-text text-transparent"}>Latest
                                post</p>
                            <Link isBlock showAnchorIcon href="#" color="primary">
                                More
                            </Link>
                        </CardHeader>
                        <Divider/>
                        <CardBody className="flex  gap-3">
                            <div className={"flex flex-row"}>
                                <Image
                                    alt="nextui logo"
                                    height={60}
                                    radius="sm"
                                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                    width={60}
                                />
                                <div className="flex flex-col justify-around ml-4">
                                    <p className="text-md">NextUI+NextJSNextUI</p>
                                    <p className="text-small text-default-500">Jun 17,2023</p>
                                </div>
                            </div>
                            <Divider/>
                            <div className={"flex flex-row"}>
                                <Image
                                    alt="nextui logo"
                                    height={60}
                                    radius="sm"
                                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                    width={60}
                                />
                                <div className="flex flex-col justify-around ml-4">
                                    <p className="text-md">NextUI+NextJSNextUI</p>
                                    <p className="text-small text-default-500">Jun 17,2023</p>
                                </div>
                            </div>
                            <Divider/>

                            <div className={"flex flex-row"}>
                                <Image
                                    alt="nextui logo"
                                    height={60}
                                    radius="sm"
                                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                    width={60}
                                />
                                <div className="flex flex-col justify-around ml-4">
                                    <p className="text-md">NextUI+NextJSNextUI</p>
                                    <p className="text-small text-default-500">Jun 17,2023</p>
                                </div>
                            </div>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            3
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </>
    );
}

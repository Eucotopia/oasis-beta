'use client'
import React from "react";
import clsx from "clsx";
import {Button, Chip, Divider, Link, Image, Spacer, Tab, Tabs, Input} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {fontAboutHeading} from "@/config/fonts"
import {siteConfig} from "@/config/site";
import {DiscordIcon, GithubIcon, MusicIcon, TwitterIcon} from "@/components/icons";
import {TracingBeam} from "@/components/timeline/TracingBeam";
import {motion} from "framer-motion";
import {useMediaQuery} from "usehooks-ts";
import {useGetProductsQuery} from "@/features/api/productApi";

import ScrollingBanner
    from "@/components/Application/Scrolling-Banners/brands-scrolling-banner-with-two-rows/scrolling-banner";
import ProductListItem from "@/components/list/goodthings/product-list-item";
import {StickyScroll} from "@/components/hobby/StickyScroll";
import {Game, Music, Program, T1} from "@/components/hobby/Content"
import {LayoutGrid} from "@/components/grid/LayoutGrid";

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">House in the woods</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A serene and tranquil retreat, this house in the woods offers a peaceful
                escape from the hustle and bustle of city life.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">House above the clouds</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Perched high above the world, this house offers breathtaking views and a
                unique living experience. It&apos;s a place where the sky meets home,
                and tranquility is a way of life.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Greens all over</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Rivers are serene</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house by the river is a place of peace and tranquility. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne/>,
        className: "md:col-span-2",
        thumbnail:"/hobby/t1/2016Worlds.jpg"
    },
    {
        id: 2,
        content: <SkeletonTwo/>,
        className: "col-span-1",
        thumbnail: "/lol.jpg"
    },
    {
        id: 3,
        content: <SkeletonThree/>,
        className: "col-span-1",
        thumbnail:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        content: <SkeletonFour/>,
        className: "md:col-span-2",
        thumbnail:
            "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

const TableItem = [
    {
        key: 'tools',
        Icon: () => <Icon icon="fluent:window-dev-tools-24-filled"/>,
        children: [
            {
                Icon: () => <Icon icon={'codicon:vscode'} width={35} height={35}/>,
                title: 'Vs Code',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'simple-icons:intellijidea'} width={35} height={35}/>,
                title: 'JetBrains IDE',
                href: 'https://www.jetbrains.com',
            }, {
                Icon: () => <Icon icon={'mdi:android-studio'} width={35} height={35}/>,
                title: 'Android Studio',
                href: 'https://developer.android.google.cn/studio?hl=zh-cn',
            }, {
                Icon: () => <Icon icon={'devicon-plain:xcode'} width={35} height={35}/>,
                title: 'Xcode',
                href: 'https://developer.apple.com/xcode/',
            }, {
                Icon: () => <Icon icon={'simple-icons:excalidraw'} width={35} height={35}/>,
                title: 'Excalidraw',
                href: 'https://excalidraw.com',
            }
        ]
    }, {
        key: 'languages',
        Icon: () => <Icon icon={'ph:code-bold'}/>,
        children: [
            {
                Icon: () => <Icon icon={'ri:java-line'} width={35} height={35}/>,
                title: 'Java',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'bxl:typescript'} width={35} height={35}/>,
                title: 'TypeScript',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'nonicons:html-16'} width={35} height={35}/>,
                title: 'Html',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'nonicons:css-16'} width={35} height={35}/>,
                title: 'CSS',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'bi:git'} width={35} height={35}/>,
                title: 'Git',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'simple-icons:cplusplus'} width={35} height={35}/>,
                title: 'C++',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'cib:swift'} width={35} height={35}/>,
                title: 'Swift',
                href: 'https://code.visualstudio.com/',
            }
        ]
    }, {
        key: 'frameworks',
        Icon: () => <Icon icon={'ph:code-bold'}/>,
        children: [
            {
                Icon: () => <Icon icon={'simple-icons:springboot'} width={35} height={35}/>,
                title: 'SpringBoot',
                href: 'https://spring.io/',
            }, {
                Icon: () => <Icon icon={'nonicons:vue-16'} width={35} height={35}/>,
                title: 'Vue',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'simple-icons:react'} width={35} height={35}/>,
                title: 'React/NextJS',
                href: 'https://code.visualstudio.com/',
            }
        ]
    }
]
const words = [
    {
        text: "Build",
    },
    {
        text: "awesome",
    },
    {
        text: "apps",
    },
    {
        text: "with",
    },
    {
        text: "Aceternity.",
        className: "text-blue-500 dark:text-blue-500",
    },
];
export default function App() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const {data} = useGetProductsQuery();
    const products = data?.data
    const productsWithRatingsAndDescription1 = products?.slice(0, Math.ceil(products.length / 4));
    const productsWithRatingsAndDescription2 = products?.slice(Math.ceil(products.length / 4), Math.ceil(products.length / 2));
    const productsWithRatingsAndDescription3 = products?.slice(Math.ceil(products.length / 2), Math.ceil(products.length * 3 / 4));
    const productsWithRatingsAndDescription4 = products?.slice(Math.ceil(products.length * 3 / 4), products.length);
    const fistColumn = React.useMemo(
        () => (isMobile ? products : productsWithRatingsAndDescription1),
        [isMobile, products, productsWithRatingsAndDescription1],
    );
    return (
        <>
            {/*cover*/}
            <motion.div
                className={clsx('h-screen font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4', fontAboutHeading.className)}>
                <motion.h1 className={"text-6xl mt-5"}>Always remember you&apos;re unique,</motion.h1>
                <motion.h1
                    className={"text-7xl mb-4 bg-gradient-to-br from-sky-500 to-blue-500 bg-clip-text text-transparent"}>just
                    like everyone else
                </motion.h1>
                <motion.h1 className={'text-2xl text-gray-500'}>No matter how bad or good you think life is,
                    wake up each
                    day and be
                    thankful. Someone somewhere is fighting to survive
                </motion.h1>
                <motion.div className={"flex flex-row gap-4 justify-center mt-10"}>
                    <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
                        <TwitterIcon className="text-default-500"/>
                    </Link>
                    <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
                        <DiscordIcon className="text-default-500"/>
                    </Link>
                    <Link isExternal href={siteConfig.links.github} aria-label="Github">
                        <GithubIcon className="text-default-500"/>
                    </Link>
                </motion.div>
            </motion.div>
            {/*GoodThings*/}
            <section
                className="gap-4 mx-auto w-full max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
                <div className={'text-center mb-10'}>
                    <h1
                        className="tracking-tight inline font-semibold from-[#FF705B] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">Daily
                        items.</h1>
                    <h2 className="w-full my-2 text-lg lg:text-xl font-normal text-default-500 max-w-full mt-4 md:w-full text-center flex justify-center items-center">
                        If a worker wants to do his job well, he must first sharpen his tools.
                    </h2>
                    <Spacer y={4}/>
                    <div className="flex w-full justify-center gap-4">
                        <Button variant={'shadow'} color={"primary"} radius={"lg"}>Details</Button>
                        <Button color="secondary" radius={"lg"} variant={"ghost"}>More</Button>
                    </div>
                </div>
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                    <ScrollingBanner isVertical duration={isMobile ? 12 : 20} shouldPauseOnHover={true}>
                        {fistColumn?.map((product) => (
                            <ProductListItem key={product.id} {...product} className="snap-start"/>
                        ))}
                    </ScrollingBanner>
                    <ScrollingBanner
                        isVertical
                        className="hidden sm:flex"
                        duration={15}
                        shouldPauseOnHover={true}
                    >
                        {productsWithRatingsAndDescription2?.map((product) => (
                            <ProductListItem key={product.id} {...product} className="snap-start"/>
                        ))}
                    </ScrollingBanner>
                    <ScrollingBanner
                        isVertical
                        className="hidden md:flex"
                        duration={18}
                        shouldPauseOnHover={true}
                    >
                        {productsWithRatingsAndDescription3?.map((product) => (
                            <ProductListItem key={product.id} {...product} className="snap-start"/>
                        ))}
                    </ScrollingBanner>
                    <ScrollingBanner
                        isVertical
                        className="hidden lg:flex"
                        duration={20}
                        shouldPauseOnHover={true}
                    >
                        {productsWithRatingsAndDescription4?.map((product) => (
                            <ProductListItem key={product.id} {...product} className="snap-start"/>
                        ))}
                    </ScrollingBanner>
                </div>
            </section>
            {/*/!*Personal experience*!/*/}
            <div className={"text-center "}>
                <h1 className="tracking-tight inline font-semibold from-[#6FEE8D] to-[#17c964] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">To
                    be or</h1>
                <br/>
                <h1 className="tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">not
                    to be.</h1>
                <h2 className="w-full my-2 text-lg lg:text-xl font-normal text-default-500 max-w-full mt-4 md:w-full text-center flex justify-center items-center">
                    If a worker wants to do his job well, he must first sharpen his tools.
                </h2>
                <Spacer y={4}/>
                <div className="flex w-full justify-center gap-4">
                    <Button variant={'shadow'} color={"primary"} radius={"lg"}>Details</Button>
                    <Button color="secondary" radius={"lg"} variant={"ghost"}>More</Button>
                </div>
            </div>
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative ">
                    <div>
                        <Chip
                            variant={"solid"}
                            color="success"
                            radius={"sm"}
                            startContent={<Icon icon="mingcute:birthday-2-fill"/>}
                        >
                            2001/01/02
                        </Chip>
                        <p className={'text-xl mb-4 mt-2'}>An unfortunate child was born on the the laba Rice
                            Porridge
                            Festival</p>
                        <p className={"text-medium "}>
                            According to what my mother said, they were on their way home that day and my mother
                            gave
                            birth to me while lying on a wooden handcart. I came into the world without an assistant
                            or
                            a doctor.
                        </p>
                        <p className={"text-medium "}>
                            According to what my mother said, they were on their way home that day and my mother
                            gave
                            birth to me while lying on a wooden handcart. I came into the world without an assistant
                            or
                            a doctor.
                        </p>
                    </div>
                    <Divider className="my-4 text-red-500"/>
                    <div>
                        <div className={"flex flex-row justify-between"}>
                            <Chip
                                variant="bordered"
                                color="primary"
                                radius={"sm"}
                                startContent={<Icon icon="mingcute:birthday-2-fill"/>}
                            >
                                2013/09/01
                            </Chip>
                            <Chip
                                variant="bordered"
                                color="danger"
                                radius={"sm"}
                                startContent={<Icon icon="mingcute:birthday-2-fill"/>}
                            >
                                2016/06/28
                            </Chip>
                        </div>
                        <p className={'text-xl mb-4 mt-2'}>Maybe it&apos;s the happiest time in my life.</p>
                        <Image src={"/school_3.jpg"} height={300} alt={""}/>
                        <p className={"text-medium mt-2"}>
                            There will always be a moment in a man&apos;s life when he grows up, but sooner or later.
                            Although growth requires a price, once it grows, the pain will accompany it for life.
                            Both lucky and sad,For me, this moment comes a little early.
                        </p>
                        <p className={"text-medium "}>
                            This period of time is the best I can recall. There are many guys with distinctive
                            personalities here, and dealing with them makes life full of fun. They are righteous and
                            mischievous.
                        </p>
                    </div>
                    <Divider className="my-4 text-red-500"/>
                    <div>
                        <div className={"flex flex-row justify-between"}>
                            <Chip
                                variant="faded"
                                color="success"
                                radius={"sm"}
                                startContent={<Icon icon="mingcute:birthday-2-fill"/>}
                            >
                                2016/09/01
                            </Chip>
                            <Chip
                                variant="faded"
                                color="warning"
                                radius={"sm"}
                                startContent={<Icon icon="mingcute:birthday-2-fill"/>}
                            >
                                2019/06/28
                            </Chip>
                        </div>
                        <p className={'text-xl mb-4 mt-2'}>From now on, my life has lost its color and cannot even
                            be
                            found.</p>
                        <Image src={"/school_4.jpg"} height={300}/>
                        <p className={"text-medium mt-2"}>
                            This was the most painful time in my life, where I lost my color and never got it back.
                            It&apos;s
                            hard to imagine that a teenager in his teens could become so negative and depressed
                            here. Of
                            course it&apos;s not its fault, it&apos;s my fault.
                        </p>
                        <p className={"text-medium "}>
                            Perhaps to this day, I am still suffering because I failed to study well here, but who
                            can
                            explain the reason for my unsatisfactory life? This is not a place worth staying in. It
                            suppresses me, disrespects me, and destroys my confidence.
                        </p>
                    </div>
                </div>
            </TracingBeam>
            {/*hobbies and professions*/}
            <section
                className="flex flex-col gap-4 mx-auto w-full max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40 items-center ">
                <div className={"text-center "}>
                    <h1 className="tracking-tight inline font-semibold from-[#6FEE8D] to-[#17c964] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">To
                        be or</h1>
                    <br/>
                    <h1 className="tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">not
                        to be.</h1>
                    <h2 className="w-full my-2 text-lg lg:text-xl font-normal text-default-500 max-w-full mt-4 md:w-full text-center flex justify-center items-center">
                        If a worker wants to do his job well, he must first sharpen his tools.
                    </h2>
                </div>
                <Tabs
                    aria-label="Options"
                    color={"default"}
                    variant={"underlined"}
                    classNames={{
                        tabList: "flex p-1 h-fit items-center flex-nowrap overflow-x-scroll scrollbar-hide bg-transparent dark:bg-transparent rounded-medium w-full justify-start gap-8 max-w-xl",
                        cursor: "w-full bg-primary",
                        tab: "max-w-fit px-0 h-24",
                    }}
                >
                    <Tab
                        key="game"
                        title={
                            <div className="flex items-center flex-col group-data-[selected=true]:text-primary ">
                                <Icon icon="ion:game-controller-outline" width={44} height={44}/>
                                <p className={"text-medium"}>Game</p>
                            </div>
                        }
                    >
                        <StickyScroll content={Game}/>
                    </Tab>
                    <Tab
                        key="music"
                        title={
                            <div className="flex items-center flex-col group-data-[selected=true]:text-danger">
                                <Icon icon="mingcute:music-fill" width={44} height={44}/>
                                <p className={"text-medium"}>Music</p>
                            </div>
                        }
                    >
                        <StickyScroll content={Music}/>

                    </Tab>
                    <Tab
                        key="program"
                        title={
                            <div className="flex items-center flex-col group-data-[selected=true]:text-warning">
                                <Icon icon="solar:programming-outline" width={44} height={44}/>
                                <p className={"text-medium"}>Program</p>
                            </div>
                        }
                    >
                        <StickyScroll content={Program}/>

                    </Tab>
                    <Tab
                        key="t1"
                        title={
                            <div className="flex items-center flex-col group-data-[selected=true]:text-info">
                                <Icon icon="solar:programming-outline" width={44} height={44}/>
                                <p className={"text-medium"}>T1</p>
                            </div>
                        }
                    >
                        <LayoutGrid cards={cards}/>
                        {/*<StickyScroll content={T1}/>*/}
                    </Tab>
                </Tabs>
            </section>
            {/*<GitHubCalendar username={"Eucotopia"} year={new Date().getFullYear()}/>*/}
            {/*<Github/>*/}
        </>
    );
}

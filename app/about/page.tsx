'use client'
import React from "react";
import clsx from "clsx";
import {Button, Chip, Divider, Image, Link, Spacer, Tab, Tabs} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {fontAboutHeading} from "@/config/fonts"
import {siteConfig} from "@/config/site";
import {DiscordIcon, GithubIcon, MusicIcon, TwitterIcon} from "@/components/icons";
import {TracingBeam} from "@/components/timeline/TracingBeam";
import {motion} from "framer-motion";
import {useMediaQuery} from "usehooks-ts";
import {useGetProductsQuery} from "@/features/api/productApi";
import Skill from "@/components/skills/App"
import ScrollingBanner
    from "@/components/Application/Scrolling-Banners/brands-scrolling-banner-with-two-rows/scrolling-banner";
import ProductListItem from "@/components/list/goodthings/product-list-item";

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
                    <h2 className="font-medium text-secondary">We&apos;re hiring!</h2>
                    <h1 className="text-4xl font-medium tracking-tight">Daily Equipment.</h1>
                    <Spacer y={4}/>
                    <h2 className="text-large text-default-500">
                        If a worker wants to do his job well, he must first sharpen his tools.
                    </h2>
                    <Spacer y={4}/>
                    <div className="flex w-full justify-center gap-2">
                        <Button variant={'faded'} color={"primary"} radius={"md"}>Details</Button>
                        <Button color="secondary" radius={"md"}>Open positions</Button>
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
                <h2 className="font-medium text-secondary">We&apos;re hiring!</h2>
                <h1 className="text-4xl font-medium tracking-tight">Daily Equipment.</h1>
                <Spacer y={4}/>
                <h2 className="text-large text-default-500">
                    If a worker wants to do his job well, he must first sharpen his tools.
                </h2>
                <Spacer y={4}/>
                <div className="flex w-full justify-center gap-2">
                    <Button variant={'faded'} color={"primary"} radius={"md"}>Details</Button>
                    <Button color="secondary" radius={"md"}>Open positions</Button>
                </div>
            </div>
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative ">
                    <div>
                        <Chip
                            variant="shadow"
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
                                variant="shadow"
                                color="primary"
                                radius={"sm"}
                                startContent={<Icon icon="mingcute:birthday-2-fill"/>}
                            >
                                2013/09/01
                            </Chip>
                            <Chip
                                variant="shadow"
                                color="danger"
                                radius={"sm"}
                                startContent={<Icon icon="mingcute:birthday-2-fill"/>}
                            >
                                2016/06/28
                            </Chip>
                        </div>
                        <p className={'text-xl mb-4 mt-2'}>Maybe it&apos;s the happiest time in my life.</p>
                        <Image src={"/school_3.jpg"} height={300}/>
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
                                variant="shadow"
                                color="primary"
                                radius={"sm"}
                                startContent={<Icon icon="mingcute:birthday-2-fill"/>}
                            >
                                2016/09/01
                            </Chip>
                            <Chip
                                variant="shadow"
                                color="danger"
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
            <section className={"flex flex-col justify-between items-center mt-8"}>
                <Tabs
                    aria-label="Options"
                    variant="solid"
                    classNames={{
                        // 设置标签页样式
                        // tabList: "w-full relative rounded-none p-0 flex-col overflow-scroll h-40",
                        // cursor: "w-full ",
                        // tab: "max-w-fit px-0 h-12 ",
                        // tabContent: "group-data-[selected=true]:text-[#06b6d4]"
                    }}
                >
                    <Tab
                        key="photos"
                        title={
                            <div className="flex items-center space-x-2 ">
                                <Icon icon="fluent:code-block-48-filled" width={24}/>
                                <span>Photos</span>
                                <Chip size="sm" variant="faded">9</Chip>
                            </div>
                        }
                    >
                        <Skill/>
                    </Tab>
                    <Tab
                        key="music"
                        title={
                            <div className="flex items-center space-x-2">
                                <MusicIcon/>
                                <span>Music</span>
                                <Chip size="sm" variant="faded">3</Chip>
                            </div>
                        }
                    >
                        <Skill/>
                    </Tab>
                    <Tab
                        key="videos"
                        title={
                            <div className="flex items-center space-x-2">
                                <Icon icon="mingcute:game-2-fill" width={24}/>
                                <span>Videos</span>
                                <Chip size="sm" variant="faded">1</Chip>
                            </div>
                        }
                    >
                        <Skill/>
                    </Tab>
                </Tabs>
            </section>
            {/*<GitHubCalendar username={"Eucotopia"} year={new Date().getFullYear()}/>*/}
            {/*<Github/>*/}
        </>
    );
}

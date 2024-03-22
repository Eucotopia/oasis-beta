'use client'
import React from "react";
import CraftCover from "./CraftCover"
import UserProfile from "@/components/Application/Cards/user-profile/App";
import Mac from './Mac'
import clsx from "clsx";

import {Chip, Link, Tab, Tabs} from "@nextui-org/react";
import {Icon} from "@iconify/react";

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
                Icon: () => <Icon icon={'ri:java-line'} width={35} height={35}/>,
                title: 'Java',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'ri:java-line'} width={35} height={35}/>,
                title: 'Java',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'ri:java-line'} width={35} height={35}/>,
                title: 'Java',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'ri:java-line'} width={35} height={35}/>,
                title: 'Java',
                href: 'https://code.visualstudio.com/',
            }
        ]
    }, {
        key: 'frameworks',
        Icon: () => <Icon icon={'ph:code-bold'}/>,
        children: [
            {
                Icon: () => <Icon icon={'ri:java-line'} width={35} height={35}/>,
                title: 'Java',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'ri:java-line'} width={35} height={35}/>,
                title: 'Java',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'ri:java-line'} width={35} height={35}/>,
                title: 'Java',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'ri:java-line'} width={35} height={35}/>,
                title: 'Java',
                href: 'https://code.visualstudio.com/',
            }, {
                Icon: () => <Icon icon={'ri:java-line'} width={35} height={35}/>,
                title: 'Java',
                href: 'https://code.visualstudio.com/',
            }
        ]
    }
]
export default function App() {
    return (
        <>
            <div
                className={clsx("relative w-screen h-screen bg-gradient-to-b from-background to-slate-700")}>
                <div className={'absolute top-48 left-50 min-w-content text-center'}>
                    <h1 className={'text-8xl font-bold'}>Jumpstart your career with</h1>
                    <h1 className={'text-8xl font-bold bg-gradient-to-br from-secondary-600 via-primary-400 to-content1 bg-clip-text text-transparent self-center'}>Opspy.dev</h1>
                    <h1 className={'text-2xl w-[700px] m-auto mt-6 text-gray-500'}>Find your next job in DevOps, SRE,
                        and
                        cloud engineering. We have a wide range of remote and on-site positions available.</h1>
                    <div className={'flex flex-row justify-center mt-6'}>
                        <Link isBlock href="https://opspy.dev" color="primary"
                              className={'text-3xl font-bold '}>Learn more</Link>
                        <Link isBlock href="https://opspy.dev" color="success"
                              className={'text-3xl font-bold'}>Learn more</Link>
                    </div>
                </div>
                <div className={'absolute top-20 right-16'}>
                    <CraftCover/>
                </div>
            </div>
            <div className={"flex flex-col bg-gradient-to-b from-slate-700 to-slate-800  h-screen"}>
                <h1 className={'text-8xl font-bold bg-gradient-to-r from-background to-slate-900 text-transparent bg-clip-text w-full text-center'}>SKILLS</h1>
                <h1 className={'text-gray-500 text-3xl font-bold bg-gradient-to-r from-background to-slate-900 text-transparent bg-clip-text w-full text-center'}>If
                    you really want to abuse yourself, learn programming</h1>
                <div className={'relative '}>
                    <div className={'absolute left-40 top-20 h-screen'}>
                        <div className="flex w-full flex-col p-6">
                            <Tabs
                                aria-label="Options"
                                color="primary"
                                variant="underlined"
                                classNames={{
                                    tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                                    cursor: "w-full bg-[#22d3ee]",
                                    tab: "max-w-fit px-0 h-12",
                                    tabContent: "group-data-[selected=true]:text-[#06b6d4] text-3xl",
                                }}
                            >
                                {
                                    TableItem.map((item, index) => {
                                        return (
                                            <Tab
                                                key={item.key}
                                                title={
                                                    <div className="flex items-center space-x-2 ">
                                                        {<item.Icon/>}
                                                        <span>{item.key.toUpperCase()}</span>
                                                        <Chip size="sm" variant="faded">{item.children.length}</Chip>
                                                    </div>
                                                }
                                            >
                                                <div className={"text-2xl grid-cols-1 grid gap-4 md:grid-cols-3"}>
                                                    {item.children.map((child, index) => {
                                                        return (
                                                            <>
                                                                <a href={child.href}
                                                                   className={'hover:scale-105'}>
                                                                    <div
                                                                        className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>
                                                                        <child.Icon/>
                                                                        <p>{child.title}</p>
                                                                    </div>
                                                                </a>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            </Tab>
                                        )
                                    })
                                }
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'simple-icons:excalidraw'} width={35} height={35}/>*/}
                                {/*            <p>Excalidraw</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    /!*强调爱好*!/*/}
                                {/*    /!*1. 忠实地 Apple 爱好者，android 狗都不用*!/*/}
                                {/*    /!*2. 忠实地 JetBrains 爱好者*!/*/}
                                {/*</Tab>*/}
                                {/*<Tab*/}
                                {/*    key="languages"*/}
                                {/*    title={*/}
                                {/*        <div className="flex items-center space-x-2">*/}
                                {/*            <Icon icon={'ph:code-bold'}/>*/}
                                {/*            <span>Languages</span>*/}
                                {/*            <Chip size="sm" variant="faded">9</Chip>*/}
                                {/*        </div>*/}
                                {/*    }*/}
                                {/*>*/}
                                {/*    <div className={"text-2xl grid-cols-1 grid gap-4 md:grid-cols-3"}>*/}
                                {/*        <div*/}
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'ri:java-line'} width={35} height={35}/>*/}
                                {/*            <p>Java</p>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'bi:git'} width={35} height={35}/>*/}
                                {/*            <p>Git</p>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'simple-icons:cplusplus'} width={35} height={35}/>*/}
                                {/*            <p>C++</p>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'cib:swift'} width={35} height={35}/>*/}
                                {/*            <p>Swift</p>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'bxl:typescript'} width={35} height={35}/>*/}
                                {/*            <p>TypeScript</p>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'nonicons:html-16'} width={35} height={35}/>*/}
                                {/*            <p>Html</p>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'nonicons:css-16'} width={35} height={35}/>*/}
                                {/*            <p>CSS</p>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'mdi:sql-query'} width={35} height={35}/>*/}
                                {/*            <p>Sql</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</Tab>*/}
                                {/*<Tab*/}
                                {/*    key="frameworks"*/}
                                {/*    title={*/}
                                {/*        <div className="flex items-center space-x-2">*/}
                                {/*            <Icon icon={'carbon:workspace'}/>*/}
                                {/*            <span>FRAMEWORKS</span>*/}
                                {/*            <Chip size="sm" variant="faded">3</Chip>*/}
                                {/*        </div>*/}
                                {/*    }*/}
                                {/*>*/}
                                {/*    <div className={"text-2xl grid-cols-1 grid gap-4 md:grid-cols-3"}>*/}
                                {/*        <div*/}
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'simple-icons:springboot'} width={35} height={35}/>*/}
                                {/*            <p>SpringBoot</p>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'simple-icons:react'} width={35} height={35}/>*/}
                                {/*            <p>React/Next</p>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={"flex flex-col items-center bg-gradient-to-br from-background to-slate-700 p-4 rounded-2xl drop-shadow-2xl backdrop-blur-2xl"}>*/}
                                {/*            <Icon icon={'nonicons:vue-16'} width={35} height={35}/>*/}
                                {/*            <p>Vue</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</Tab>*/}
                            </Tabs>
                        </div>
                    </div>
                    <div className={'absolute -top-36 right-1'}>
                        <Mac/>
                    </div>
                </div>
            </div>
            <UserProfile/>
            {/*<GitHubCalendar username={"Eucotopia"}/>*/}
        </>
    );
}

'use client'
import {Icon} from "@iconify/react";
import CraftCover from './CraftCover'
import UserProfile from "@/components/Application/Cards/user-profile/App";

const Item = [
    {
        date: '2024/01/02',
        content: 'content'
    },
    {
        date: '2024/01/02',
        content: 'content'
    },
    {
        date: '2024/01/02',
        content: 'content'
    },
    {
        date: '2024/01/02',
        content: 'content'
    },
    {
        date: '2024/01/02',
        content: 'content'
    },
    {
        date: '2024/01/02',
        content: 'content'
    },
    {
        date: '2024/01/02',
        content: 'content'
    },
    {
        date: '2024/01/02',
        content: 'content'
    },
    {
        date: '2024/01/02',
        content: 'content'
    },
    {
        date: '2024/01/02',
        content: 'content'
    },
    {
        date: '2024/01/02',
        content: 'content'
    }
]
const TimeLine = () => {
    return (
        <>
            <div
                className={"w-screen  flex flex-col items-center  "}>
                {/*时间线*/}
                {Item.map((item, index) => {
                    return (
                        <>
                            {index % 2 === 0 ?
                                (
                                    <div className={"flex flex-row w-screen justify-center"}>
                                        <div className={'w-1/2'}>
                                        </div>
                                        <div className={'w-1/2 flex flex-row'}>
                                            <div className={'flex flex-col items-center '}>
                                                <Icon icon={'fa6-solid:circle-dot'} width={20}/>
                                                <div
                                                    className={'w-2 h-full bg-gradient-to-br from-violet-500 to-pink-500 shadow-2xl rounded-full'}/>
                                            </div>
                                            <div>
                                                <UserProfile/>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={"flex flex-row w-screen justify-center"}>
                                        <div className={'w-1/2 flex flex-row justify-end'}>
                                            <div>
                                                <UserProfile/>
                                            </div>
                                            <div className={'flex flex-col items-center '}>
                                                <Icon icon={'fa6-solid:circle-dot'} width={20}/>
                                                <div
                                                    className={'w-2 h-full bg-gradient-to-br from-violet-500 to-pink-500 shadow-2xl rounded-full'}/>
                                            </div>
                                        </div>
                                        <div className={'w-1/2'}>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default TimeLine
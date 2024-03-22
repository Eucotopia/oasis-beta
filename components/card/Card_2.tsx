import Card_1 from "@/components/card/Card_1";
import {Icon} from "@iconify/react";

const Card_2 = () => {
    return (
        <>
            <div className={'flex flex-row bg-gray-500 backdrop-blur-2xl rounded-2xl p-5 gap-2 max-h-[350px]'}>
                {/*文章列表*/}
                <div className={"flex flex-col text-black overflow-scroll scrollbar-hide scroll-smooth"}>
                    <p>FEATURED COURSE</p>
                    <div className={'max-w-[80px]'}>
                        <ul>
                            <li>
                                <div className={'flex flex-row'}>
                                    <div className={"bg-blue-200 rounded-full"}>2</div>
                                    <div className={"line-clamp-2"}>
                                        Build a Meditation App
                                    </div>
                                    <div>
                                        11:48
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Card_1/>
            </div>
        </>
    )
}
export default Card_2
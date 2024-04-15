'use client'
import TestimonialsScrollingBanner from "@/components/testimonials-scrolling-banner/App";
import FaqsWithDivider from "@/components/faqs-with-divider/App"
import BasicTeamPage from "@/components/basic-team-page/App"
import BrandsScrollingBannerWithTwoRows
    from '@/components/brands-scrolling-banner-with-two-rows/App'
import LeftLoginWithImageBackground from "@/components/left-login-with-image-background/App";
import React from "react";
import FullStack from "@/components/code/FullStack";
import SpotlightCard from "@/components/schedule/App"
import {Spacer} from "@nextui-org/react";
import Horizontal from "@/components/pitcure/horizontal/Horizontal"
import Github from "@/components/github/App"
import ColumCard from "@/components/card/ColumCard";
import {useGetHotColumnsQuery} from "@/features/api/columnApi";

export default function Home() {
    const {data: hotColumns} = useGetHotColumnsQuery();
    console.log("hot", hotColumns)
    return (
        <section
            className="flex flex-col items-center justify-center gap-4">
            {/*流星雨*/}
            {/*<FUIMeteor/>*/}
            {/*热门专栏*/}
            <div className={"flex flex-row gap-6 "}>
                {
                    hotColumns?.data.map((item, index) => {
                        return (
                            <ColumCard isReverse={index % 2 === 0} key={index} columns={item}/>
                        )
                    })
                }
            </div>
            <Spacer y={10}/>
            <Horizontal/>
            <LeftLoginWithImageBackground/>
            <div className={"mt-8"}>
                <BasicTeamPage/>
            </div>
            <div className={"mt-8"}>
                <TestimonialsScrollingBanner/>
            </div>
            <div className={"mt-8"}>
                <FullStack/>
                <Github/>
            </div>
            <div className={"mt-8"}>
                <BrandsScrollingBannerWithTwoRows/>
            </div>
            <div className={"mt-8"}>
                <SpotlightCard/>
            </div>
            {/*<Card_3/>*/}
            <div className={"mt-8"}>
                <FaqsWithDivider/>
            </div>
        </section>
    );
}

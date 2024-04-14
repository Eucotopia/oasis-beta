'use client'
import TestimonialsScrollingBanner from "@/components/testimonials-scrolling-banner/App";
import FaqsWithDivider from "@/components/faqs-with-divider/App"
import BasicTeamPage from "@/components/basic-team-page/App"
import BrandsScrollingBannerWithTwoRows
    from '@/components/brands-scrolling-banner-with-two-rows/App'
import LeftLoginWithImageBackground from "@/components/left-login-with-image-background/App";
import React from "react";
import FullStack from "@/components/code/FullStack";
import SpotlightCard from "@/components/Schedule/App"
import {Spacer} from "@nextui-org/react";
import Horizontal from "@/components/pitcure/horizontal/Horizontal"
import Github from "@/components/github/App"

export default function Home() {
    return (
        <section
            className="flex flex-col items-center justify-center gap-4 overflow-hidden">
            {/*流星雨*/}
            {/*<FUIMeteor/>*/}
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
            {/*<div>*/}
            {/*    <T1Image/>*/}
            {/*</div>*/}
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

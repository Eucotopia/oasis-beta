'use client'
import TestimonialsScrollingBanner from "@/components/Application/Scrolling-Banners/testimonials-scrolling-banner/App";
import FaqsWithDivider from "@/components/Marketing/Faqs/faqs-with-divider/App"
import BasicTeamPage from "@/components/Marketing/Teams/basic-team-page/App"
import BrandsScrollingBannerWithTwoRows
    from '@/components/Application/Scrolling-Banners/brands-scrolling-banner-with-two-rows/App'
import LeftLoginWithImageBackground from "@/components/Application/Authentication/left-login-with-image-background/App";
import React from "react";
import FullStack from "@/components/code/FullStack";
import SpotlightCard from "@/components/Application/Cards/spotlight-card/App"
export default function Home() {
    return (
        <section
            className="flex flex-col items-center justify-center gap-4 overflow-hidden">
            <LeftLoginWithImageBackground/>
            <div className={"mt-8"}>
                <BasicTeamPage/>
            </div>
            <div className={"mt-8"}>
                <TestimonialsScrollingBanner/>
            </div>
            <div className={"mt-8"}>
                <FullStack/>
            </div>
            <div className={"mt-8"}>
                <BrandsScrollingBannerWithTwoRows/>
            </div>
            <div className={"mt-8"}>
                <FaqsWithDivider/>
            </div>
            <div className={"mt-8"}>
                <SpotlightCard/>
            </div>

        </section>
    );
}

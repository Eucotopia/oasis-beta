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
import Atropos from 'atropos/react';
import {FUIMeteor} from "@/components/toast/FUIMEtetor";
import {Spacer} from "@nextui-org/react";
import T1Image from "@/components/pitcure/T1/T1Image"
import Test2 from "@/components/cover/cloud/Test2"
import Card_3 from "@/components/pitcure/hobby/Card_3";
import Horizontal from "@/components/pitcure/horizontal/Horizontal"
import CardTest from "@/components/pitcure/CardTest";

export default function Home() {
    return (
        <section
            className="flex flex-col items-center justify-center gap-4 overflow-hidden">
            {/*<Test1/>*/}
            <Test2/>
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
            </div>
            <div>
                <T1Image/>
            </div>
            <div className={"mt-8"}>
                <BrandsScrollingBannerWithTwoRows/>
            </div>
            {/*<Card_3/>*/}
            <div className={"mt-8"}>
                <FaqsWithDivider/>
            </div>
            <div className={"mt-8"}>
                <SpotlightCard/>
            </div>
        </section>
    );
}

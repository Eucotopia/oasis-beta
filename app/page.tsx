import TestimonialsScrollingBanner from "@/components/Application/Scrolling-Banners/testimonials-scrolling-banner/App";
import FaqsWithDivider from "@/components/Marketing/Faqs/faqs-with-divider/App"
import BasicTeamPage from "@/components/Marketing/Teams/basic-team-page/App"
import BrandsScrollingBannerWithTwoRows
    from '@/components/Application/Scrolling-Banners/brands-scrolling-banner-with-two-rows/App'
import LeftLoginWithImageBackground from "@/components/Application/Authentication/left-login-with-image-background/App";
import GitHubCalendar from "react-github-calendar";
import React from "react";
import {Button, Spacer} from "@nextui-org/react";

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
            <div className={"mt-8  mb-10"}>
                <h2 className="font-medium text-secondary">We&apos;re hiring!</h2>
                <h1 className="text-4xl font-bold tracking-tight text-primary-700">Full Stack Developer</h1>
                <Spacer y={4}/>
                <h2 className="text-large text-default-500 before:content-['👩🏻‍🚀']">
                    WEB
                </h2>
                {/*<h2 className="text-large text-default-500 before:content-['【']">*/}
                {/*    Any fool can write code that a computer can understand,*/}
                {/*</h2>*/}
                {/*<h2 className="text-large text-default-500 after:content-['】']">*/}
                {/*    Good programmers write code that humans can understand.*/}
                {/*</h2>*/}
                <Spacer y={4}/>
                <div className="flex w-full  gap-2">
                    <Button variant={'faded'} color={"primary"} radius={"md"}>About us</Button>
                    <Button color="secondary" radius={"md"}>Open positions</Button>
                </div>
                <Spacer y={8}/>
                <GitHubCalendar username={"Eucotopia"} year={new Date().getFullYear()} />
            </div>
            <div className={"mt-8"}>
                <BrandsScrollingBannerWithTwoRows/>
            </div>
            <div className={"mt-8"}>
                <FaqsWithDivider/>
            </div>
        </section>
    );
}

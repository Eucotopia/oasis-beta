'use client'
import React from "react";
import RelatedArticles from '@/components/marquee/RelatedArticles'
import {Card, CardBody, CardFooter} from "@nextui-org/react";

export default function PricingPage() {

    return (
        <>
            <Card isFooterBlurred
                  radius="lg"
                  className="border-none ml-9">
                <CardBody>123123</CardBody>
                <CardFooter
                    className="flex flex-col justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">adf</p>
                    <div className="text-tiny text-white bg-black/20">
                        123131231
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}

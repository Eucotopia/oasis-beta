"use client";
import React from "react";
import Image from "next/image";
import {twMerge} from "tailwind-merge";
import {TracingBeam} from "./TracingBeam";
import {Button, Spacer} from "@nextui-org/react";

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        {/*<h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">*/}
                        {/*    {item.badge}*/}
                        {/*</h2>*/}

                        <p className={twMerge("text-xl mb-4")}>
                            {item.title}
                        </p>
                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "An unfortunate child was born on the the laba Rice Porridge Festival",
        description: (
            <>
                <p>
                    Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                    reprehenderit deserunt amet laborum consequat adipisicing officia qui
                    irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                    Amet culpa officia aliquip deserunt veniam deserunt officia
                    adipisicing aliquip proident officia sunt.
                </p>
            </>
        ),
        badge: "React",
        image:
            "https://cdn.pixabay.com/photo/2017/10/22/18/31/halloween-2878777_960_720.jpg",
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
            <>
                <p>
                    In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
                    veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
                    reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
                    cillum ut mollit.
                </p>
            </>
        ),
        badge: "Changelog",
        image:
            "https://cdn.pixabay.com/photo/2024/02/21/08/06/coast-8587004_960_720.jpg",
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
            <>
                <p>
                    Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
                    deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
                    non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
                    sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
                    velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
                    commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
                </p>
            </>
        ),
        badge: "Launch Week",
        image:
            "https://cdn.pixabay.com/photo/2024/02/21/08/06/coast-8587004_960_720.jpg",
    },
];

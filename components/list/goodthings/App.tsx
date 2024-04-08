"use client";

import React from "react";

import ProductListItem from "./product-list-item";
import {Button, Spacer} from "@nextui-org/react";
import ScrollingBanner
    from "@/components/Application/Scrolling-Banners/brands-scrolling-banner-with-two-rows/scrolling-banner";
import {useMediaQuery} from "usehooks-ts";
import {useGetProductsQuery} from "@/features/api/productApi";

export default function Component() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const {data} = useGetProductsQuery();
    const products = data?.data
    const productsWithRatingsAndDescription1 = products?.slice(0, Math.ceil(products.length / 4));
    const productsWithRatingsAndDescription2 = products?.slice(Math.ceil(products.length / 4), Math.ceil(products.length / 2));
    const productsWithRatingsAndDescription3 = products?.slice(Math.ceil(products.length / 2), Math.ceil(products.length * 3 / 4));
    const productsWithRatingsAndDescription4 = products?.slice(Math.ceil(products.length * 3 / 4), products.length);
    console.log(productsWithRatingsAndDescription1)
    console.log(productsWithRatingsAndDescription2)
    console.log(productsWithRatingsAndDescription3)
    console.log(productsWithRatingsAndDescription4)
    const fistColumn = React.useMemo(
        () => (isMobile ? products : productsWithRatingsAndDescription1),
        [isMobile, products, productsWithRatingsAndDescription1],
    );
    return (
        <>
            <section
                className="gap-4 mx-auto w-full max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
                <div className={'text-center mb-10'}>
                    <h2 className="font-medium text-secondary">We&apos;re hiring!</h2>
                    <h1 className="text-4xl font-medium tracking-tight">Message Board.</h1>
                    <Spacer y={4}/>
                    <h2 className="text-large text-default-500">
                        Our philosophy is to build a great team and then empower them to do great things.
                    </h2>
                    <Spacer y={4}/>
                    <div className="flex w-full justify-center gap-2">
                        <Button variant={'faded'} color={"primary"} radius={"md"}>About us</Button>
                        <Button color="secondary" radius={"md"}>Open positions</Button>
                    </div>
                </div>
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                    <ScrollingBanner isVertical duration={isMobile ? 12 : 20} shouldPauseOnHover={true}>
                        {fistColumn?.map((product) => (
                            <ProductListItem key={product.id} {...product} className="snap-start"/>
                        ))}
                    </ScrollingBanner>
                    <ScrollingBanner
                        isVertical
                        className="hidden sm:flex"
                        duration={15}
                        shouldPauseOnHover={true}
                    >
                        {productsWithRatingsAndDescription2?.map((product) => (
                            <ProductListItem key={product.id} {...product} className="snap-start"/>
                        ))}
                    </ScrollingBanner>
                    <ScrollingBanner
                        isVertical
                        className="hidden md:flex"
                        duration={18}
                        shouldPauseOnHover={true}
                    >
                        {productsWithRatingsAndDescription3?.map((product) => (
                            <ProductListItem key={product.id} {...product} className="snap-start"/>
                        ))}
                    </ScrollingBanner>
                    <ScrollingBanner
                        isVertical
                        className="hidden lg:flex"
                        duration={20}
                        shouldPauseOnHover={true}
                    >
                        {productsWithRatingsAndDescription4?.map((product) => (
                            <ProductListItem key={product.id} {...product} className="snap-start"/>
                        ))}
                    </ScrollingBanner>
                </div>
            </section>
        </>
    );
}

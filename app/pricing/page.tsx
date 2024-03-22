'use client'
import Card_1 from "@/components/card/Card_1";
import Card_2 from "@/components/card/Card_2";
import React, {Suspense, useRef, useState} from 'react';
import {Spinner} from "@nextui-org/react";
import SwiperTest from "@/components/pitcure/SwiperTest"
type CardProps = {}
export default function PricingPage() {

    return (
        <>
            {/*<Suspense fallback={null}>*/}
            {/*    <Horizontal/>*/}
            {/*</Suspense>*/}
            <SwiperTest/>
            <Card_1/>
            <Card_2/>
        </>
    );
}

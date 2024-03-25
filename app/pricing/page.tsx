'use client'
import Card_1 from "@/components/card/Card_1";
import Card_2 from "@/components/card/Card_2";
import React, {Suspense, useRef, useState} from 'react';
import {Spinner} from "@nextui-org/react";
import SwiperTest from "@/components/pitcure/SwiperTest"
import T1Image from "@/components/pitcure/T1/T1Image";
import Horizontal from "@/components/pitcure/horizontal/Horizontal";
import CardTest from "@/components/pitcure/CardTest";
import CardTest11 from "@/components/pitcure/CardTest11";
import PlanList from "@/components/futrue/PlanList";

const pexel = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
    // Front
    {position: [0, 0, 1.5], rotation: [0, 0, 0], url: '1.jpg'},
    // Back
    {position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430)},
    {position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452)},
    // Left
    {position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482)},
    {position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185)},
    {position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574)},
    // Right
    {position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675)},
    {position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738)},
    {position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986)},
]
type CardProps = {}
export default function PricingPage() {

    return (
        <>
            <PlanList/>
            <CardTest11 images={images}/>
            <SwiperTest/>
            <Card_1/>
            <Card_2/>
        </>
    );
}

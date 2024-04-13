'use client'
import React from "react";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import {Button} from "@nextui-org/button";
import {Code} from "@nextui-org/code";
import UserProfile from "@/components/Application/Cards/user-profile/App";
import {ParallaxScroll} from "@/components/grid/ParallaxScroll";
const images = [
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2622290/pexels-photo-2622290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
export default function App() {

    return (
        <>
            <ParallaxScroll images={images}/>
            <UserProfile/>
            <Button className={'bg-blue-600'}>123123</Button>
            <Code color={"primary"}>123123</Code>
            <div className={"text-danger-800"}> asdf</div>
            <Button color={"primary"}>new Theme</Button>
            <Button color={"danger"}>new Theme</Button>
            <ThemeSwitcher/>
        </>
    );
}

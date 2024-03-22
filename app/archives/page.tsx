'use client'
import React from "react";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import {Button} from "@nextui-org/button";
import {Code} from "@nextui-org/code";
import UserProfile from "@/components/Application/Cards/user-profile/App";
export default function App() {

    return (
        <>
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

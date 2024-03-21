'use client'
import React from "react";
import Clump from "@/components/cover/clumup/App"
import {Avatar, Spacer} from "@nextui-org/react";
import {motion} from "framer-motion"
import UserProfile from "@/components/Application/Cards/user-profile/App";
import Spherical from "@/components/three-fiber/Spherical"

export default function App() {
    return (
        <>
            <Clump/>
            <Spacer y={8}/>
            <div className={"flex flex-row"}>
                <Spherical/>
            </div>
            <UserProfile/>
            {/*<GitHubCalendar username={"Eucotopia"}/>*/}
        </>
    );
}

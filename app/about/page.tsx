'use client'
import React from "react";
import Clump from "@/components/cover/clumup/App"
import GitHubCalendar from "react-github-calendar";
import {Spacer} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
export default function App() {
    return (
        <>
            <Clump/>
            <Spacer y={8}/>
            <Button variant={'shadow'} color={'danger'}>adf</Button>
            {/*<GitHubCalendar username={"Eucotopia"}/>*/}
        </>
    );
}

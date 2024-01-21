'use client'
import React from "react";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import {Button} from "@nextui-org/button";


export default function App() {
    return (
        <>
            <div className={"text-danger-800"}> asdf</div>
            <Button color={"primary"} >new Theme</Button>
            <Button color={"danger"}>new Theme</Button>
            <ThemeSwitcher/>
        </>
    );
}

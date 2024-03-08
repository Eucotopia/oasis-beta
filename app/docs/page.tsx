'use client'
import React from "react";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import {Button} from "@nextui-org/button";
import {Code} from "@nextui-org/code";
import {Tooltip} from "@nextui-org/react";

const AA = () => {
    return (
        <>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </>
    )
}
export default function App() {

    return (
        <>
            <Code color={"primary"}>123123</Code>
            <div className={"text-danger-800"}> asdf</div>
            <Button color={"primary"}>new Theme</Button>
            <Button color={"danger"}>new Theme</Button>
            <ThemeSwitcher/>
            <Tooltip
                content=<AA/>
                delay={0}
                showArrow
                closeDelay={0}
                motionProps={{
                    variants: {
                        exit: {
                            opacity: 0,
                            transition: {
                                duration: 0.1,
                                ease: "easeIn",
                            }
                        },
                        enter: {
                            opacity: 1,
                            transition: {
                                duration: 0.15,
                                ease: "easeOut",
                            }
                        },
                    },
                }}
            >
                <Button variant="flat">Hover me</Button>
            </Tooltip>
        </>
    );
}

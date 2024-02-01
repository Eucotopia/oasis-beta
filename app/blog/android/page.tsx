'use client'
import * as React from "react";
import {title} from "@/components/primitives";

export default function App() {
    return (
        <>
            <h1 className={title({color: "blue"})}>这是一个标题2</h1>
        </>
    )
}
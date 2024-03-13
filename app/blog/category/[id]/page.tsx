'use client'
import * as React from "react";
import {title} from "@/components/primitives";

export default function Page({params}: { params: { id: string } }) {
    return (
        <>
            <h1 className={title({color: "blue"})}>这是一as个标题{params.id}</h1>
        </>
    )
}
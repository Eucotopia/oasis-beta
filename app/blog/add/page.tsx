'use client'
import * as React from "react";
import {useGetCategoriesQuery} from "@/features/api/categoryApi";
import {useState} from "react";
import AddPost from "@/components/post/AddPost";

export default function App() {
    return (
        <>
            <AddPost/>
        </>
    )
}
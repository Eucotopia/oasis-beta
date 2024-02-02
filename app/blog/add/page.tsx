'use client'
import * as React from "react";
import {useGetCategoriesQuery} from "@/features/api/categoryApi";
import {useState} from "react";
import AddPost from "@/components/post/AddPost";

export default function App() {
    const [value, setValue] = React.useState('');
    const [title, setTitle] = useState("")
    const onInputChange = (value: string) => {
        setValue(value)
    };
    const {data: categories} = useGetCategoriesQuery()

    if (categories === undefined) {
        return
    }
    return (
        <>
            <AddPost/>
        </>
    )
}
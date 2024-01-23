'use client'
import * as React from "react";
import {BlockEditor} from "@/extentions/tiptap/components/BlockEditor/BlockEditor";
import {Input} from "@nextui-org/input";
import {Autocomplete, AutocompleteItem, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {useGetCategoriesQuery} from "@/features/api/categoryApi";
import {useState} from "react";
import {ScrollShadow} from "@nextui-org/react";

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
            <div className={"flex flex-col"}>
                <p className={"font-bold text-4xl mb-4"}>Create a post</p>
                <div className={"border-2  rounded-2xl shadow-2xl w-[896px] p-4"}>
                    <div className={"space-y-2 mb-2"}>
                        <p className={"text-md"}>Post name</p>
                        <Input variant={"bordered"} size={"sm"} placeholder={"post name"} color={"default"}/>
                    </div>
                    <div className={"space-y-2 mb-2"}>
                        <p className={"text-md"}>Post type</p>
                        <div className={"flex flex-row gap-4"}>
                            <div className={"bg-green-200 h-20 basis-1/6 px-8 py-2 rounded-md hover:bg-green-950"}>123</div>
                            <div className={"bg-green-200 h-20 basis-1/6 px-8 py-2 rounded-md hover:bg-green-950"}>123</div>
                            <div className={"bg-green-200 h-20 basis-1/6 px-8 py-2 rounded-md hover:bg-green-950"}>123</div>
                            <div className={"bg-green-200 h-20 basis-1/6 px-8 py-2 rounded-md hover:bg-green-950"}>123</div>
                            <div className={"bg-green-200 h-20 basis-1/6 px-8 py-2 rounded-md hover:bg-green-950"}>123</div>
                            <div className={"bg-green-200 h-20 basis-1/6 px-8 py-2 rounded-md hover:bg-green-950"}>123</div>
                        </div>
                    </div>
                    <div className={"space-y-2 mb-4"}>
                        <p className={"text-md"}>Short description</p>
                        <Input variant={"bordered"} className={"h-12"} color={"default"}/>
                    </div>
                    <div className={"space-y-2 mb-2"}>
                        <p className={"text-md"}>Post body</p>
                        <div className={"border rounded-2xl h-96"}>
                            <BlockEditor/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
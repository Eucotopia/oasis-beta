'use client'
import * as React from "react";
import {BlockEditor} from "@/extentions/tiptap/components/BlockEditor/BlockEditor";
import {title} from "@/components/primitives";
import {Input} from "@nextui-org/input";
import {Autocomplete, AutocompleteItem, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {useGetCategoriesQuery} from "@/features/api/categoryApi";
import {useState} from "react";

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
            <div className="flex flex-col items-center justify-center">
                <p className={"font-bold text-xl bg-gradient-to-r from-primary-500 to-warning-500 text-transparent bg-clip-text"}>Create
                    a post</p>
                <div className={"flex flex-col border-8 w-[860px] h-full"}>
                    <div className={"flex flex-row "}>
                        <Input type="text" variant={"bordered"} label="Title" value={title} onChange={(e) => {
                            setTitle(e.target.value)
                        }}/>
                        <Autocomplete
                            variant={"bordered"}
                            defaultItems={categories?.data}
                            label="Select an category"
                            allowsCustomValue={true}
                            onInputChange={onInputChange}
                            className="max-w-sm"
                        >
                            {(item) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
                        </Autocomplete>
                    </div>
                    <div >
                        <BlockEditor/>
                    </div>
                </div>
            </div>
        </>
    )
}
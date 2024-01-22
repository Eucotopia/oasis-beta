'use client'
import * as React from "react";
import {BlockEditor} from "@/extentions/tiptap/components/BlockEditor/BlockEditor";
import {title} from "@/components/primitives";
import {Input} from "@nextui-org/input";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/button";

export default function App() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <>
            <div className="flex flex-col items-center justify-center w-[896px]">
                <p className={"font-bold text-xl bg-gradient-to-r from-primary-500 to-warning-500 text-transparent bg-clip-text"}>Create
                    a post</p>
                <div className={"bg-amber-700"}>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="bordered"
                                className="capitalize"
                            >
                                {selectedValue}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Single selection example"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys as any}
                        >
                            <DropdownItem key="text">Text</DropdownItem>
                            <DropdownItem key="number">Number</DropdownItem>
                            <DropdownItem key="date">Date</DropdownItem>
                            <DropdownItem key="single_date">Single Date</DropdownItem>
                            <DropdownItem key="iteration">Iteration</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}
import React, {useMemo} from 'react'
import {Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/button";

export type ContentTypePickerOption = {
    label: string
    id: string
    type: 'option'
    disabled: () => boolean
    isActive: () => boolean
    onClick: () => void
    iconClass: string
}

export type ContentTypePickerCategory = {
    label: string
    id: string
    type: 'category'
    children: ContentTypePickerOption[]
}

export type ContentPickerOptions = Array<ContentTypePickerCategory>

export type ContentTypePickerProps = {
    options: ContentPickerOptions
}

const isOption = (option: ContentTypePickerOption | ContentTypePickerCategory): option is ContentTypePickerOption =>
    option.type === 'option'
const isCategory = (option: ContentTypePickerOption | ContentTypePickerCategory): option is ContentTypePickerCategory =>
    option.type === 'category'

export const ContentTypePicker = ({options}: ContentTypePickerProps) => {
    // const activeItem = useMemo(() => options.find(option => option.type === 'option' && option.isActive()), [options])
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Paragraph"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant={"bordered"}>
                        {selectedValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    variant={'faded'}
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                    aria-label={"Dropdown menu with description"}
                >
                    {
                        options.map(option => (
                            <DropdownSection title={option.label} key={option.label}>
                                {
                                    option.children?.map(pre => (
                                        <DropdownItem key={pre.label} onClick={pre.onClick}>
                                            {pre.label}
                                        </DropdownItem>
                                    ))
                                }
                            </DropdownSection>
                        ))
                    }
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

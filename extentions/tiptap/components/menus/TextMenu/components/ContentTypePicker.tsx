import React, {useCallback, useMemo} from 'react'
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

export const ContentTypePicker = ({options}: ContentTypePickerProps) => {
    const activeItem = useCallback(() => {
        for (let option of options) {
            if (option.children) {
                const activeChild = option.children.find(child => child.isActive())
                if (activeChild === null || activeChild === undefined) {
                    continue
                }
                return activeChild?.label
            }
        }
        return undefined
    }, [options])
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([activeItem() || '']));

    React.useEffect(() => {
        setSelectedKeys(new Set([activeItem() || '']));
    }, [activeItem]);


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
                    defaultSelectedKeys={activeItem()}
                    selectedKeys={selectedKeys}
                    // @ts-ignore
                    onSelectionChange={setSelectedKeys}
                    aria-label={"Dropdown menu with description"}
                >
                    {
                        options.map(option => (
                            <DropdownSection title={option.label} key={option.id}>
                                {
                                    option.children?.map(pre => (
                                        <DropdownItem
                                            key={pre.label}
                                            onClick={pre.onClick}
                                            className={pre.isActive() ? "bg-default-100 dark:bg-default-800" : ""}>
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

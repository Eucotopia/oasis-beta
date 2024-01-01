import React, {useCallback} from 'react'
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/button";

const FONT_SIZES = [
    {label: 'Smaller', value: '12px'},
    {label: 'Small', value: '14px'},
    {label: 'Medium', value: ''},
    {label: 'Large', value: '18px'},
    {label: 'Extra Large', value: '24px'},
]

export type FontSizePickerProps = {
    onChange: (value: string) => void // eslint-disable-line no-unused-vars
    value: string
}

export const FontSizePicker = ({onChange, value}: FontSizePickerProps) => {
    const currentValue = FONT_SIZES.find(size => size.value === value)
    const currentSizeLabel = currentValue?.label.split(' ')[0] || 'Medium'
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([currentSizeLabel]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const selectSize = useCallback((size: string) => () => onChange(size), [onChange])

    return (
        <>
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
                    onSelectionChange={setSelectedKeys}
                >
                    {
                        FONT_SIZES.map(size => (
                            <DropdownItem
                                key={size.label}
                                onClick={selectSize(size.value)}
                            >
                                {size.label}
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

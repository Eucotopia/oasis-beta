import React, {useCallback} from 'react'
import {Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";

const FONT_FAMILY_GROUPS = [
    {
        label: 'Sans Serif',
        options: [
            {label: 'Inter', value: ''},
            {label: 'Arial', value: 'Arial'},
            {label: 'Helvetica', value: 'Helvetica'},
        ],
    },
    {
        label: 'Serif',
        options: [
            {label: 'Times New Roman', value: 'Times'},
            {label: 'Garamond', value: 'Garamond'},
            {label: 'Georgia', value: 'Georgia'},
        ],
    },
    {
        label: 'Monospace',
        options: [
            {label: 'Courier', value: 'Courier'},
            {label: 'Courier New', value: 'Courier New'},
        ],
    },
]

const FONT_FAMILIES = FONT_FAMILY_GROUPS.flatMap(group => [group.options]).flat()

export type FontFamilyPickerProps = {
    onChange: (value: string) => void // eslint-disable-line no-unused-vars
    value: string
}

export const FontFamilyPicker = ({onChange, value}: FontFamilyPickerProps) => {
    const currentValue = FONT_FAMILIES.find(size => size.value === value)
    const currentFontLabel = currentValue?.label.split(' ')[0] || 'Inter'
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([currentFontLabel]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const selectFont = useCallback((font: string) => () => onChange(font), [onChange])

    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <Link
                        color={"primary"}
                        className="capitalize"
                    >
                        {selectedValue}
                    </Link>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    // @ts-ignore
                    onSelectionChange={setSelectedKeys}
                >
                    {
                        FONT_FAMILY_GROUPS.map(group => (
                            <DropdownSection title={group.label} key={group.label}>
                                {
                                    group.options.map(font => (
                                        <DropdownItem
                                            key={`${font.label}_${font.value}`}
                                            onClick={selectFont(font.value)}
                                        >
                                            {font.label}
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

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {useTheme} from "next-themes";
import {useAppDispatch} from "@/hooks/store";
import {setCurrentTheme} from "@/features/theme/themeSlice";
import {useCurrentTheme} from "@/hooks/useCurrentTheme";

export default function ThemeSwitcher() {
    const dispatch = useAppDispatch()
    const currentTheme = useCurrentTheme();
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([currentTheme.currentTheme]));
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    const {theme, setTheme} = useTheme()

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
                    onAction={(key) => {
                        dispatch(setCurrentTheme(key.toLocaleString()))
                        setTheme(key.toLocaleString())
                    }}
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys as any}
                >
                    <DropdownItem key="light">Light</DropdownItem>
                    <DropdownItem key="dark">Dark</DropdownItem>
                    <DropdownItem key="purple-dark">purple-dark</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    );
}

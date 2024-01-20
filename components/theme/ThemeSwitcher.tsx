// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Button} from "@nextui-org/button";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
        <div>
            The current theme is: {theme}
            <Button onClick={() => setTheme('light')} color={"primary"}>Light Mode</Button>
            <Button onClick={() => setTheme('dark')} color={"primary"}>Dark Mode</Button>
            <Button onClick={()=> setTheme('purple-dark')} color={"primary"}>purple-dark</Button>
        </div>
    )
};
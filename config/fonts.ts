import {
    Fira_Code as FontMono,
    Inter as FontSans,
    Pacifico as FontHeading,
    Ceviche_One as FontHeading2
} from "next/font/google"

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
})
export const fontHeading = FontHeading({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: "400",
})
export const fontHeading2 = FontHeading2({
    subsets: ["latin"],
    variable: "--font-heading2",
    weight: "400",
})

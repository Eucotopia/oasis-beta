import {nextui} from '@nextui-org/theme'
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            layout: {
                disabledOpacity: "0.3",
                radius: {
                    small: "8px",
                    medium: "12px",
                    large: "16px",
                },
                borderWidth: {
                    small: "2px",
                    medium: "4px",
                    large: "6px",
                },
            },
            spacing: {
                px: '1px',
                0: '0',
                0.5: '0.125rem',
                1: '0.25rem',
                1.5: '0.375rem',
                2: '0.5rem',
                2.5: '0.625rem',
                3: '0.75rem',
                3.5: '0.875rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                7: '1.75rem',
                8: '2rem',
                9: '2.25rem',
                10: '2.5rem',
                11: '2.75rem',
                12: '3rem',
                14: '3.5rem',
                16: '4rem',
                20: '5rem',
                24: '6rem',
                28: '7rem',
                32: '8rem',
                36: '9rem',
                40: '10rem',
                44: '11rem',
                48: '12rem',
                52: '13rem',
                56: '14rem',
                60: '15rem',
                64: '16rem',
                72: '18rem',
                80: '20rem',
                96: '24rem',
                128: '32rem',
            },
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }
                'md': '768px',
                // => @media (min-width: 768px) { ... }
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            minWidth: {
                'content': '1280px',
                'screen': '1280px',
            },
            keyframes: {
                meteor: {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
                    "70%": { opacity: 1 },
                    "100%": {
                        transform: "rotate(215deg) translateX(-1000px)",
                        opacity: 0,
                    },
                },
                "scrolling-banner": {
                    from: {transform: "translateX(0)"},
                    to: {transform: "translateX(calc(-50% - var(--gap)/2))"},
                },
                "scrolling-banner-vertical": {
                    from: {transform: "translateY(0)"},
                    to: {transform: "translateY(calc(-50% - var(--gap)/2))"},
                },
            },
            animation: {
                "meteor-effect": "meteor 15s linear infinite",
                "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
                "scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
            },
            backgroundPosition: {
                'left-4': 'left 8rem top',
            },
            colors: {},
            fontFamily: {
                h1: ['STXINGKA', 'sans-serif'],
                cover:['NothingYouCouldDo', 'sans-serif']
            },
        },
    },
    darkMode: "class",
    plugins: [
        addVariablesForColors,
        nextui({
            themes: {
                light: {},
                dark: {},
                political: {
                    "colors": {
                        "background": {
                            "DEFAULT": "#F0ECD8",
                            "foreground": "#0c0c0d"
                        },
                        "content1": "#e3ddc0",
                        "content2": "#13325d",
                        "content3": "#721C24",
                        "content4": "#8B0000",
                        "danger": {
                            "50": "#fff9f5",
                            "100": "#fff3eb",
                            "200": "#ffe4d1",
                            "300": "#ffd5b8",
                            "400": "#ffc9a3",
                            "500": "#ffac70",
                            "600": "#ff9447",
                            "700": "#f06400",
                            "800": "#a34400",
                            "900": "#4d2000",
                            "DEFAULT": "#FF6A00"
                        },
                        "default": {
                            "50": "#f9f9fb",
                            "100": "#f2f3f7",
                            "200": "#e2e4ee",
                            "300": "#d2d6e5",
                            "400": "#c5cadd",
                            "500": "#a5acca",
                            "600": "#8b95bb",
                            "700": "#596597",
                            "800": "#3c4567",
                            "900": "#1c2030",
                            "DEFAULT": "#e2e4ee",
                            "foreground": "#1c2030"
                        },
                        "divider": "#000",
                        "focus": "#1C4191",
                        "foreground": {
                            "50": "#fafafa",
                            "100": "#f5f5f5",
                            "200": "#e8e8e8",
                            "300": "#dbdbdb",
                            "400": "#d1d1d1",
                            "500": "#b8b8b8",
                            "600": "#a3a3a3",
                            "700": "#787878",
                            "800": "#525252",
                            "900": "#262626",
                            "DEFAULT": "#000000",
                            "foreground": "#fafafa"
                        },
                        "overlay": "#F0ECD8",
                        "primary": {
                            "50": "#f6f9fe",
                            "100": "#edf3fd",
                            "200": "#d6e5fa",
                            "300": "#bfd7f8",
                            "400": "#accbf6",
                            "500": "#7eaef1",
                            "600": "#5a97ed",
                            "700": "#1868d8",
                            "800": "#104793",
                            "900": "#082145",
                            "DEFAULT": "#0D2240"
                        },
                        "secondary": {
                            "50": "#fef5f6",
                            "100": "#feeced",
                            "200": "#fcd4d7",
                            "300": "#fbbcc1",
                            "400": "#f9a9af",
                            "500": "#f67983",
                            "600": "#f45260",
                            "700": "#e10e20",
                            "800": "#990a16",
                            "900": "#48050a",
                            "DEFAULT": "#E31B2C"
                        },
                        "success": {
                            "50": "#f6fef9",
                            "100": "#edfcf3",
                            "200": "#d8f9e5",
                            "300": "#c2f5d6",
                            "400": "#b0f2ca",
                            "500": "#9fefbf",
                            "600": "#61e596",
                            "700": "#22ce67",
                            "800": "#178c46",
                            "900": "#0b4221",
                            "DEFAULT": "#36C26E"
                        },
                        "warning": {
                            "50": "#fdfaf6",
                            "100": "#fcf6ee",
                            "200": "#f8ebd8",
                            "300": "#f4dfc3",
                            "400": "#f0d6b2",
                            "500": "#e8c087",
                            "600": "#e2ae65",
                            "700": "#c98526",
                            "800": "#895b1a",
                            "900": "#402b0c",
                            "DEFAULT": "#F5AF4E"
                        }
                    },
                    "extend": "light"
                },
                posthog: {
                    "colors": {
                        "background": {
                            "DEFAULT": "#1C1E26",
                            "foreground": "#f9f9fb"
                        },
                        "content1": "#1c2030",
                        "content2": "#3c4567",
                        "content3": "#596597",
                        "content4": "#8b95bb",
                        "danger": {
                            "50": "#3f0d0d",
                            "100": "#871d1d",
                            "200": "#c62a2a",
                            "300": "#df6868",
                            "400": "#eba2a2",
                            "500": "#efb3b3",
                            "600": "#f3c4c4",
                            "700": "#f7d9d9",
                            "800": "#fbeeee",
                            "900": "#fdf7f7",
                            "DEFAULT": "#F25555"
                        },
                        "default": {
                            "50": "#262626",
                            "100": "#525252",
                            "200": "#787878",
                            "300": "#a3a3a3",
                            "400": "#c7c7c7",
                            "500": "#d1d1d1",
                            "600": "#dbdbdb",
                            "700": "#e8e8e8",
                            "800": "#f5f5f5",
                            "900": "#fafafa",
                            "DEFAULT": "#787878",
                            foreground: "#fafafa"
                        },
                        "divider": "#8b95bb",
                        "focus": "#F7A500",
                        "foreground": {
                            "50": "#262626",
                            "100": "#525252",
                            "200": "#787878",
                            "300": "#a3a3a3",
                            "400": "#c7c7c7",
                            "500": "#d1d1d1",
                            "600": "#dbdbdb",
                            "700": "#e8e8e8",
                            "800": "#f5f5f5",
                            "900": "#fafafa",
                            "DEFAULT": "#FAFAFA",
                            "foreground": "#262626"
                        },
                        "overlay": "#1C1E26",
                        "primary": {
                            "50": "#4d3300",
                            "100": "#a36d00",
                            "200": "#f0a000",
                            "300": "#ffc247",
                            "400": "#ffda8f",
                            "500": "#ffe0a3",
                            "600": "#ffe7b8",
                            "700": "#fff0d1",
                            "800": "#fff8eb",
                            "900": "#fffcf5",
                            "DEFAULT": "#F7A500"
                        },
                        "secondary": {
                            "50": "#072045",
                            "100": "#104494",
                            "200": "#1764d9",
                            "300": "#5994ee",
                            "400": "#99bef4",
                            "500": "#accaf6",
                            "600": "#bed6f8",
                            "700": "#d5e4fb",
                            "800": "#edf3fd",
                            "900": "#f6f9fe",
                            "DEFAULT": "#2F80FA"
                        },
                        "success": {
                            "50": "#0b4221",
                            "100": "#178c46",
                            "200": "#22ce67",
                            "300": "#61e596",
                            "400": "#9fefbf",
                            "500": "#b0f2ca",
                            "600": "#c2f5d6",
                            "700": "#d8f9e5",
                            "800": "#edfcf3",
                            "900": "#f6fef9",
                            "DEFAULT": "#36C26E"
                        },
                        "warning": {
                            "50": "#4d1800",
                            "100": "#a33400",
                            "200": "#f04c00",
                            "300": "#ff8247",
                            "400": "#ffb28f",
                            "500": "#ffc0a3",
                            "600": "#ffceb8",
                            "700": "#ffe0d1",
                            "800": "#fff1eb",
                            "900": "#fff8f5",
                            "DEFAULT": "#F54E00"
                        }
                    },
                    "extend": "dark"
                },
                blossomTheme: {
                    colors: {
                        background: "#F9EBEA",
                        foreground: "#333",
                        primary: "#E74C3C",
                        content1: "#e8b4ae",
                        content2: "#e89f97",
                        content3: "#e88a80",
                        content4: "#e88074",
                        danger: "#C0392B",
                        default: "#ff9393",
                        divider: "#3498DB",
                        focus: "#C0392B",
                        overlay: "#F9EBEA",
                        secondary: "#D35400",
                        success: "#6bc484",
                        warning: "#F39C12",
                    },
                    layout: {
                        borderWidth: {
                            small: "1px",
                            medium: "2px",
                            large: "3px",
                        },
                        radius: {
                            small: "8px",
                            medium: "12px",
                            large: "18px",
                        },
                    },
                },
                darkBlue: {
                    colors: {
                        background: {
                            "50": "#1C1F26",
                            "100": "#222933",
                            "200": "#293142",
                            "300": "#2F3951",
                            "400": "#35425F",
                            "500": "#3B4B6E",
                            "600": "#42547D",
                            "700": "#485D8C",
                            "800": "#4E669A",
                            "900": "#546FA9",
                            DEFAULT: "#1C1F26",
                            foreground: "#fafafa"
                        },
                        foreground: {
                            "50": "#ffffff",
                            "100": "#ffffff",
                            "200": "#ffffff",
                            "300": "#ffffff",
                            "400": "#ffffff",
                            "500": "#fafafa",
                            "600": "#eaeaea",
                            "700": "#d4d4d4",
                            "800": "#b7b7b7",
                            "900": "#999999",
                            DEFAULT: "#fafafa"
                        },
                        primary: {
                            "50": "#394989",
                            "100": "#3D4F9A",
                            "200": "#4154AB",
                            "300": "#4659BC",
                            "400": "#4A5FCD",
                            "500": "#4E64DE",
                            "600": "#5369EF",
                            "700": "#576EFF",
                            "800": "#5C73FF",
                            "900": "#6078FF",
                            DEFAULT: "#394989",
                            foreground: "#fafafa"
                        },
                        content1: "#36415B",
                        content2: "#44516F",
                        content3: "#556384",
                        content4: "#667498",
                        danger: "#CC4455",
                        default: {
                            "50": "#F0F1F4",
                            "100": "#D8DAE1",
                            "200": "#C0C3D8",
                            "300": "#A8ABCF",
                            "400": "#9196C6",
                            "500": "#7A81BD",
                            "600": "#6269B4",
                            "700": "#4B52AB",
                            "800": "#333AA2",
                            "900": "#1C2399",
                            DEFAULT: "#7A81BD",
                            foreground: "#36415B"
                        },
                        divider: "#59677E",
                        focus: "#394989",
                        overlay: "#1C1F26",
                        secondary: "#6C839D",
                        success: "#55AA77",
                        warning: "#FFAA55",
                    },
                    layout: {
                        borderWidth: {
                            small: "1px",
                            medium: "2px",
                            large: "3px"
                        },
                        radius: {
                            small: "8px",
                            medium: "12px",
                            large: "18px"
                        },
                    },
                },
                fluentTheme: {
                    backgroundImage: {},
                    "colors": {
                        "background": {
                            "DEFAULT": "#F8F8F8",
                            "foreground": "#000000"
                        },
                        "content1": "#E0E0E0",
                        "content2": "#D1D1D1",
                        "content3": "#B5B5B5",
                        "content4": "#A2A2A2",
                        "danger": {
                            "50": "#FEE8E8",
                            "100": "#FCC3C3",
                            "200": "#FA9999",
                            "300": "#F87575",
                            "400": "#F45151",
                            "500": "#F23636",
                            "600": "#E32929",
                            "700": "#D02020",
                            "800": "#B81818",
                            "900": "#9D1212",
                            "DEFAULT": "#E50000"
                        },
                        "default": {
                            "50": "#F8F8F8",
                            "100": "#F1F1F1",
                            "200": "#E1E1E1",
                            "300": "#CFCFCF",
                            "400": "#B1B1B1",
                            "500": "#979797",
                            "600": "#7C7C7C",
                            "700": "#616161",
                            "800": "#454545",
                            "900": "#2C2C2C",
                            "DEFAULT": "#000000",
                            "foreground": "#F8F8F8"
                        },
                        "divider": "#C6C6C6",
                        "focus": "#4C4CFF",
                        "foreground": {
                            "50": "#F8F8F8",
                            "100": "#F1F1F1",
                            "200": "#E1E1E1",
                            "300": "#CFCFCF",
                            "400": "#B1B1B1",
                            "500": "#979797",
                            "600": "#7C7C7C",
                            "700": "#616161",
                            "800": "#454545",
                            "900": "#2C2C2C",
                            "DEFAULT": "#000000",
                            "foreground": "#F8F8F8"
                        },
                        "overlay": "#F8F8F8",
                        "primary": {
                            "50": "#E5ECFF",
                            "100": "#BBD4FF",
                            "200": "#8BBFFF",
                            "300": "#5C9DFF",
                            "400": "#347FFF",
                            "500": "#206EFF",
                            "600": "#1651E3",
                            "700": "#1040C9",
                            "800": "#0D32A9",
                            "900": "#0A258C",
                            "DEFAULT": "#0053FF"
                        },
                        "secondary": {
                            "50": "#F1F9FF",
                            "100": "#D1E4FF",
                            "200": "#A3C9FF",
                            "300": "#75AFFF",
                            "400": "#4A90FF",
                            "500": "#2F78FF",
                            "600": "#1E62E3",
                            "700": "#144DBF",
                            "800": "#0F3D9E",
                            "900": "#0C307F",
                            "DEFAULT": "#0078D4"
                        },
                        "success": {
                            "50": "#E9FCEB",
                            "100": "#B9F7C5",
                            "200": "#88F2A1",
                            "300": "#58ED7D",
                            "400": "#2BE45F",
                            "500": "#14D84D",
                            "600": "#0CBF41",
                            "700": "#089E38",
                            "800": "#067F30",
                            "900": "#04682A",
                            "DEFAULT": "#0BDA51"
                        },
                        "warning": {
                            "50": "#FFFDE7",
                            "100": "#FFF9C4",
                            "200": "#FFF59D",
                            "300": "#FFF176",
                            "400": "#FFEE58",
                            "500": "#FFEB3B",
                            "600": "#FDD835",
                            "700": "#FBC02D",
                            "800": "#F9A825",
                            "900": "#F57F17",
                            "DEFAULT": "#FFC107"
                        }
                    },
                    layout: {
                        disabledOpacity: "0.3",
                        radius: {
                            small: "4px",
                            medium: "6px",
                            large: "8px",
                        },
                        borderWidth: {
                            small: "1px",
                            medium: "2px",
                            large: "3px",
                        },
                    },
                    "extend": "dark"
                },
                "purple-dark": {
                    extend: "dark",
                    backgroundColor: {
                        'site9': "linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
                    },
                    backgroundImage: {
                        'site': 'radial-gradient(circle, #d16ba5, #aa679f, #856193, #655880, #4d4e68, #4c566f, #4b5e75, #4b667a, #4f89a1, #4daec3, #4ed4de, #5ffbf1)',
                    },
                    colors: {
                        background: "#0D001A",
                        foreground: "#ffffff",
                        primary: {
                            50: "#3B096C",
                            100: "#520F83",
                            200: "#7318A2",
                            300: "#9823C2",
                            400: "#c031e2",
                            500: "#DD62ED",
                            600: "#F182F6",
                            700: "#FCADF9",
                            800: "#FDD5F9",
                            900: "#FEECFE",
                            DEFAULT: "#DD62ED",
                            foreground: "#ffffff",
                        },
                        success: {
                            50: "#FFD8D6",
                            100: "#FFD8D6",
                            200: "#FFAEB2",
                            300: "#FF8598",
                            400: "#FF678D",
                            500: "#FF357C",
                            600: "#DB2678",
                            700: "#B71A70",
                            800: "#931065",
                            900: "#7A0A5D",
                            DEFAULT: "#FF357C",
                            foreground: "#ffffff",
                        },
                        danger: {
                            50: "#FFD8D6",
                            100: "#FFD8D6",
                            200: "#FFAEB2",
                            300: "#FF8598",
                            400: "#FF678D",
                            500: "#FF357C",
                            600: "#DB2678",
                            700: "#B71A70",
                            800: "#931065",
                            900: "#7A0A5D",
                            DEFAULT: "#FF357C",
                            foreground: "#ffffff",
                        },
                        info: {
                            50: "#FFD8D6",
                            100: "#FFD8D6",
                            200: "#FFAEB2",
                            300: "#FF8598",
                            400: "#FF678D",
                            500: "#FF357C",
                            600: "#DB2678",
                            700: "#B71A70",
                            800: "#931065",
                            900: "#7A0A5D",
                            DEFAULT: "#FF357C",
                            foreground: "#ffffff",
                        },
                        focus: "#F182F6",
                    },
                    layout: {
                        disabledOpacity: "0.3",
                        radius: {
                            small: "4px",
                            medium: "6px",
                            large: "8px",
                        },
                        borderWidth: {
                            small: "1px",
                            medium: "2px",
                            large: "3px",
                        },
                    },
                },
            },
        }),
    ],
}
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
    addBase({
        ":root": newVars,
    });
}
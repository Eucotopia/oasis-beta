import {nextui} from '@nextui-org/theme'

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
            colors: {
            },
            fontFamily: {
                h1: ['STXINGKA', 'sans-serif']
            },

        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    backgroundImage: {
                        site: "url('../public/image/site-bg.jpg')",
                        about: "url('./assets/about.png')",
                        services: "url('./assets/services.png')",
                    },
                },
                dark: {
                    backgroundImage: {
                        site: "url('../public/image/site-bg.jpg')",
                        about: "url('./assets/about.png')",
                        services: "url('./assets/services.png')",
                    },
                },
                "purple-dark": {
                    extend: "dark",
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
                    backgroundImage: {
                        site: "url('../public/image/hero-image.png')",
                        about: "url('./assets/about.png')",
                        services: "url('./assets/services.png')",
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

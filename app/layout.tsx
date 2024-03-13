import "@/styles/globals.css";
import {Metadata} from "next";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import {Navbar} from "@/components/navbar";
import {Link} from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head/>
        <body
            className={clsx(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable,

            )}
        >
        <Providers themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            themes: ['light', 'dark', 'purple-dark']
        }}>
            <div className="relative flex flex-col h-screen">
                <Navbar/>
                <main className="container mx-auto max-w-full flex-grow">
                    {children}
                </main>
                <footer className="w-full flex items-center justify-center py-3">
                    <p className={"text-sm text-default-500"}>©&nbsp;</p>
                    <p className={"text-sm text-default-500"}>{new Date().getFullYear()}&nbsp;</p>
                    <p className={"text-sm text-default-500"}>Design by &nbsp;</p>
                    <Link
                        isExternal
                        href={"https://nextui-docs-v2.vercel.app?utm_source=next-app-template"}
                        title={"Eucotopia Homepage"}
                        className={"text-sm font-bold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text"}
                    >Eucotopia
                    </Link>
                </footer>
            </div>
        </Providers>
        </body>
        </html>
    );
}

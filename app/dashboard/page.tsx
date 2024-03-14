'use client'
import React from "react";
import Sidebar from "@/components/Application/Sidebars/sidebar-off-canvas-responsive/App"
import Aads from "@/app/dashboard/projects/page"
/**
 * 💡 TIP: You can use the usePathname hook from Next.js App Router to get the current pathname
 * and use it as the active key for the Sidebar component.
 *
 * ```tsx
 * import {usePathname} from "next/navigation";
 *
 * const pathname = usePathname();
 * const currentPath = pathname.split("/")?.[1]
 *
 * <Sidebar defaultSelectedKey="home" selectedKeys={[currentPath]} />
 * ```
 */
export default function App() {
    return (
        <>
            <div className={"flex justify-between h-screen"}>
                Tasks
            </div>
        </>
    );
}

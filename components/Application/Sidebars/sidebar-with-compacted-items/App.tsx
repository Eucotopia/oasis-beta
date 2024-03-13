"use client";

import React from "react";
import {Avatar, Button, ScrollShadow, Spacer, Tooltip} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {AcmeLogo} from "./acme";
import {sectionItemsWithTeams} from "./sidebar-items";

import Sidebar from "./sidebar";

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
export default function Component() {
  return (
    <div className="h-dvh">
      <div className="relative flex h-full w-16 flex-1 flex-col items-center border-r-small border-divider px-2 py-8">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
          <AcmeLogo className="text-background" />
        </div>

        <Spacer y={8} />

        <ScrollShadow className="-mr-2 h-full max-h-full py-6 pr-2">
          <div className="flex flex-col items-center gap-4">
            <Avatar isBordered size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            <Tooltip content="Search" placement="right">
              <Button isIconOnly aria-label="search" className="my-2" radius="lg" variant="light">
                <Icon className="text-default-500" icon="solar:magnifer-linear" width={20} />
              </Button>
            </Tooltip>
          </div>

          <Sidebar isCompact defaultSelectedKey="home" items={sectionItemsWithTeams} />

          <Spacer y={8} />

          <div className="mt-auto flex flex-col items-center">
            <Tooltip content="Help & Feedback" placement="right">
              <Button isIconOnly className="data-[hover=true]:text-foreground" variant="light">
                <Icon
                  className="text-default-500 "
                  icon="solar:info-circle-line-duotone"
                  width={24}
                />
              </Button>
            </Tooltip>
            <Tooltip content="Log Out" placement="right">
              <Button isIconOnly className="data-[hover=true]:text-foreground" variant="light">
                <Icon
                  className="rotate-180 text-default-500"
                  icon="solar:minus-circle-line-duotone"
                  width={24}
                />
              </Button>
            </Tooltip>
          </div>
        </ScrollShadow>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import {Avatar, Button, ScrollShadow, Spacer} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {AcmeLogo} from "./acme";
import {sectionNestedItems} from "./sidebar-items";
import Sidebar from "./sidebar";

export default function Component() {
  return (
    <div className="h-dvh">
      <div className="relative flex h-full w-72 flex-1 flex-col border-r-small border-divider p-6">
        <div className="flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
            <AcmeLogo className="text-background" />
          </div>
          <span className="text-small font-bold uppercase">Acme</span>
        </div>

        <Spacer y={8} />

        <div className="flex items-center gap-3 px-2">
          <Avatar isBordered size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          <div className="flex flex-col">
            <p className="text-small font-medium text-default-600">Kate Moore</p>
            <p className="text-tiny text-default-400">Customer Support</p>
          </div>
        </div>
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <Sidebar defaultSelectedKey="home" items={sectionNestedItems} />
        </ScrollShadow>

        <Spacer y={8} />

        <div className="mt-auto flex flex-col">
          <Button
            fullWidth
            className="justify-start text-default-500 data-[hover=true]:text-foreground"
            startContent={
              <Icon className="text-default-500" icon="solar:info-circle-line-duotone" width={24} />
            }
            variant="light"
          >
            Help & Information
          </Button>
          <Button
            className="justify-start text-default-500 data-[hover=true]:text-foreground"
            startContent={
              <Icon
                className="rotate-180 text-default-500"
                icon="solar:minus-circle-line-duotone"
                width={24}
              />
            }
            variant="light"
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}

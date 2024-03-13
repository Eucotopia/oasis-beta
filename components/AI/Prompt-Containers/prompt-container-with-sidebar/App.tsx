"use client";

import React from "react";
import {ScrollShadow, Tab, Tabs} from "@nextui-org/react";

import SidebarContainer from "./sidebar-with-gradient-background";

import Conversation from "./conversation";
import PromptInputWithBottomActions from "./prompt-input-with-bottom-actions";

export default function Component() {
  return (
    <div className="h-full w-full max-w-full">
      <SidebarContainer
        header={
          <Tabs className="justify-center">
            <Tab key="creative" title="Creative" />
            <Tab key="technical" title="Technical" />
            <Tab key="precise" title="Precise" />
          </Tabs>
        }
        title="Creative Uses for Kids' Art"
      >
        <div className="relative flex h-full flex-1 flex-col">
          <ScrollShadow className="flex h-full max-h-[53vh] flex-col gap-6 overflow-y-auto pb-8">
            <Conversation />
            <Conversation />
          </ScrollShadow>
          <div className="mt-auto flex flex-col gap-2">
            <PromptInputWithBottomActions />
            <p className="px-2 text-tiny text-default-400">
              Acme AI can make mistakes. Consider checking important information.
            </p>
          </div>
        </div>
      </SidebarContainer>
    </div>
  );
}

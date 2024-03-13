"use client";

import React from "react";
import {ScrollShadow, Tab, Tabs} from "@nextui-org/react";

import Conversation from "./conversation";
import PromptInputWithRegenerateButton from "./prompt-input-with-regenerate-button";

export default function Component() {
  return (
    <div className="flex h-full w-full max-w-full flex-col gap-8">
      <div className="flex w-full flex-wrap items-center justify-center gap-2 border-b-small border-divider pb-2 sm:justify-between">
        <p className="text-base font-medium">Creative Uses for Kids&apos; Art</p>
        <Tabs className="justify-center">
          <Tab key="creative" title="Creative" />
          <Tab key="technical" title="Technical" />
          <Tab key="precise" title="Precise" />
        </Tabs>
      </div>
      <ScrollShadow className="flex h-full flex-col">
        <Conversation />
      </ScrollShadow>
      <div className="flex flex-col gap-2">
        <PromptInputWithRegenerateButton />
        <p className="px-2 text-tiny text-default-400">
          Acme AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}

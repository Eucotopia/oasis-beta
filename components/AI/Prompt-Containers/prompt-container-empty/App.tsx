"use client";

import React from "react";
import {Avatar, Tab, Tabs} from "@nextui-org/react";

import FeaturesCards from "./features-cards";
import PromptInputWithBottomActions from "./prompt-input-with-bottom-actions";

export default function Component() {
  return (
    <div className="flex h-full w-full max-w-full flex-col gap-8">
      <Tabs className="w-full justify-center">
        <Tab key="creative" title="Creative" />
        <Tab key="technical" title="Technical" />
        <Tab key="precise" title="Precise" />
      </Tabs>
      <div className="flex h-full flex-col justify-center gap-10">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <Avatar
            size="lg"
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
          />
          <h1 className="text-xl font-medium text-default-700">How can I help you today?</h1>
        </div>
        <FeaturesCards />
      </div>
      <div className="flex flex-col gap-2">
        <PromptInputWithBottomActions />
        <p className="px-2 text-tiny text-default-400">
          Acme AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}

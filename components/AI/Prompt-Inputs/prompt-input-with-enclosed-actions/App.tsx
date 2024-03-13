"use client";

import React from "react";
import {Button, Tooltip} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {cn} from "./cn";

import PromptInput from "./prompt-input";

export default function Component() {
  const [prompt, setPrompt] = React.useState<string>("");

  return (
    <form className="flex w-full items-start gap-2">
      <PromptInput
        classNames={{
          innerWrapper: "items-center",
          input: "text-medium",
        }}
        endContent={
          <div className="flex gap-2">
            {!prompt && (
              <Tooltip showArrow content="Speak">
                <Button isIconOnly radius="full" variant="light">
                  <Icon className="text-default-500" icon="solar:microphone-3-linear" width={20} />
                </Button>
              </Tooltip>
            )}
            <Tooltip showArrow content="Send message">
              <Button
                isIconOnly
                color={!prompt ? "default" : "primary"}
                isDisabled={!prompt}
                radius="full"
                variant={!prompt ? "flat" : "solid"}
              >
                <Icon
                  className={cn(
                    "[&>path]:stroke-[2px]",
                    !prompt ? "text-default-500" : "text-primary-foreground",
                  )}
                  icon="solar:arrow-up-linear"
                  width={20}
                />
              </Button>
            </Tooltip>
          </div>
        }
        startContent={
          <Tooltip showArrow content="Add file">
            <Button isIconOnly radius="full" variant="light">
              <Icon className="text-default-500" icon="solar:paperclip-linear" width={20} />
            </Button>
          </Tooltip>
        }
        value={prompt}
        onValueChange={setPrompt}
      />
    </form>
  );
}

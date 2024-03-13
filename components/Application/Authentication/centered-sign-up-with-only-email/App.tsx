"use client";

import React from "react";
import {Button, Input, Link, Divider} from "@nextui-org/react";
import {Icon} from "@iconify/react";

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <p className="pb-2 text-xl font-medium">Sign Up</p>
        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
          <Input
            isRequired
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
          />
          <Button
            color="primary"
            startContent={
              <Icon className="pointer-events-none text-2xl" icon="solar:letter-bold" />
            }
            type="submit"
          >
            Continue with Email
          </Button>
        </form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button startContent={<Icon icon="flat-color-icons:google" width={24} />} variant="flat">
            Continue with Google
          </Button>
          <Button
            startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
            variant="flat"
          >
            Continue with Github
          </Button>
        </div>
        <p className="text-center text-small">
          Already have an account?&nbsp;
          <Link href="#" size="sm">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

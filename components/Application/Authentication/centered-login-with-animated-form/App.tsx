"use client";

import React from "react";
import {Button, Input, Link, Divider} from "@nextui-org/react";
import {AnimatePresence, motion} from "framer-motion";
import {Icon} from "@iconify/react";

export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        layout
        className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small"
      >
        <p className="pb-2 text-xl font-medium">Log In</p>
        <AnimatePresence mode="wait">
          {isVisible ? (
            <motion.form
              layout
              animate={{opacity: 1, y: 0}}
              className="flex flex-col gap-3"
              exit={{opacity: 0, y: 5}}
              initial={{opacity: 0, y: 0}}
              onSubmit={(e) => e.preventDefault()}
            >
              <Input label="Email Address" name="email" type="email" variant="bordered" />
              <Input label="Password" name="password" type="password" variant="bordered" />
              <Button color="primary" type="submit">
                Log In
              </Button>
            </motion.form>
          ) : (
            <Button
              color="primary"
              startContent={
                !isVisible ? (
                  <Icon className="pointer-events-none text-2xl" icon="solar:letter-bold" />
                ) : null
              }
              type="button"
              onPress={() => setIsVisible(true)}
            >
              Continue with Email
            </Button>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>
        <AnimatePresence>
          {!isVisible ? (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <Button
                  startContent={<Icon icon="flat-color-icons:google" width={24} />}
                  variant="flat"
                >
                  Continue with Google
                </Button>
                <Button
                  startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
                  variant="flat"
                >
                  Continue with Github
                </Button>
              </div>
              <p className="mt-3 text-center text-small">
                Need to create an account?&nbsp;
                <Link href="#" size="sm">
                  Sign Up
                </Link>
              </p>
            </div>
          ) : (
            <Button
              startContent={
                <Icon className="text-default-500" icon="solar:arrow-left-linear" width={18} />
              }
              variant="flat"
              onPress={() => setIsVisible(false)}
            >
              Other Login options
            </Button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

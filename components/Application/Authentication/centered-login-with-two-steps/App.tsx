"use client";

import React from "react";
import {Button, Input, Link, Divider, Tooltip} from "@nextui-org/react";
import {AnimatePresence, motion} from "framer-motion";
import {Icon} from "@iconify/react";

export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("example@mail.com");
  const [password, setPassword] = React.useState("");
  const [[page, direction], setPage] = React.useState([0, 0]);
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.length) {
      setIsEmailValid(false);

      return;
    }
    setIsEmailValid(true);
    paginate(1);
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password.length) {
      setIsPasswordValid(false);

      return;
    }
    setIsPasswordValid(true);
    // Here you can send the email and password to your API for authentication.
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleSubmit = page === 0 ? handleEmailSubmit : handlePasswordSubmit;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <div className="flex min-h-[40px] items-center gap-2 pb-2">
          {page === 1 && (
            <Tooltip content="Go back" delay={3000}>
              <Button isIconOnly size="sm" variant="flat" onPress={() => paginate(-1)}>
                <Icon className="text-default-500" icon="solar:alt-arrow-left-linear" width={16} />
              </Button>
            </Tooltip>
          )}
          <p className="text-xl font-medium">Log In</p>
        </div>
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.form
            key={page}
            animate="center"
            className="flex flex-col gap-3"
            custom={direction}
            exit="exit"
            initial="enter"
            transition={{
              x: {type: "spring", stiffness: 300, damping: 30},
              opacity: {duration: 0.2},
            }}
            variants={variants}
            onSubmit={handleSubmit}
          >
            {page === 0 ? (
              <Input
                errorMessage={!isEmailValid ? "Enter a valid email" : undefined}
                isInvalid={!isEmailValid}
                label="Email Address"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                variant="bordered"
                onValueChange={(value) => {
                  setIsEmailValid(true);
                  setEmail(value);
                }}
              />
            ) : (
              <Input
                endContent={
                  <button type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <Icon
                        className="pointer-events-none text-2xl text-default-400"
                        icon="solar:eye-closed-linear"
                      />
                    ) : (
                      <Icon
                        className="pointer-events-none text-2xl text-default-400"
                        icon="solar:eye-bold"
                      />
                    )}
                  </button>
                }
                errorMessage={!isPasswordValid ? "Enter a valid password" : undefined}
                label="Password"
                name="password"
                placeholder="Enter your password"
                type="password"
                validationState={isPasswordValid ? "valid" : "invalid"}
                value={password}
                variant="bordered"
                onValueChange={(value) => {
                  setIsPasswordValid(true);
                  setPassword(value);
                }}
              />
            )}

            <Button fullWidth color="primary" type="submit">
              {page === 0 ? "Continue with Email" : "Log In"}
            </Button>
          </motion.form>
        </AnimatePresence>
        <p className="text-center text-small">
          <Link href="#" size="sm">
            Forgot password?
          </Link>
        </p>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
          >
            Continue with Google
          </Button>
          <Button
            startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
            variant="bordered"
          >
            Continue with Github
          </Button>
        </div>
        <p className="text-center text-small">
          Need to create an account?&nbsp;
          <Link href="#" size="sm">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

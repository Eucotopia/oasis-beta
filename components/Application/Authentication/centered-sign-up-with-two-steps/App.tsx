"use client";

import React from "react";
import {Button, Input, Link, Divider, Tooltip} from "@nextui-org/react";
import {AnimatePresence, motion} from "framer-motion";
import {Icon} from "@iconify/react";

export default function Component() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [[page, direction], setPage] = React.useState([0, 0]);
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = React.useState(true);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (page === 0) {
      handleEmailSubmit();
    } else if (page === 1) {
      handlePasswordSubmit();
    } else {
      handleConfirmPasswordSubmit();
    }
  };

  const handleEmailSubmit = () => {
    if (!email.length) {
      setIsEmailValid(false);

      return;
    }
    setIsEmailValid(true);
    paginate(1);
  };

  const handlePasswordSubmit = () => {
    if (!password.length) {
      setIsPasswordValid(false);

      return;
    }
    setIsPasswordValid(true);
    paginate(1);
  };

  const handleConfirmPasswordSubmit = () => {
    if (!confirmPassword.length || confirmPassword !== password) {
      setIsConfirmPasswordValid(false);

      return;
    }
    setIsConfirmPasswordValid(true);
    // Here you can send the email and password to your API for registration
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        layout
        className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small"
      >
        <div className="flex min-h-[40px] items-center gap-2 pb-2">
          {page >= 1 && (
            <Tooltip content="Go back" delay={3000}>
              <Button isIconOnly size="sm" variant="flat" onPress={() => paginate(-1)}>
                <Icon className="text-default-500" icon="solar:alt-arrow-left-linear" width={16} />
              </Button>
            </Tooltip>
          )}
          <p className="text-xl font-medium">Sign Up</p>
        </div>

        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.form
            key={page}
            animate="center"
            className="flex flex-col gap-3"
            custom={direction}
            exit="exit"
            initial="enter"
            variants={variants}
            onSubmit={handleSubmit}
          >
            {page === 0 && (
              <Input
                isRequired
                label="Email Address"
                name="email"
                type="email"
                validationState={isEmailValid ? "valid" : "invalid"}
                value={email}
                onValueChange={(value) => {
                  setIsEmailValid(true);
                  setEmail(value);
                }}
              />
            )}
            {page === 1 && (
              <Input
                autoFocus
                isRequired
                endContent={
                  <button type="button" onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? (
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
                label="Password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                validationState={isPasswordValid ? "valid" : "invalid"}
                value={password}
                onValueChange={(value) => {
                  setIsPasswordValid(true);
                  setPassword(value);
                }}
              />
            )}
            {page === 2 && (
              <Input
                autoFocus
                isRequired
                endContent={
                  <button type="button" onClick={toggleConfirmPasswordVisibility}>
                    {isConfirmPasswordVisible ? (
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
                errorMessage={!isConfirmPasswordValid ? "Passwords do not match" : undefined}
                label="Confirm Password"
                name="confirmPassword"
                type={isConfirmPasswordVisible ? "text" : "password"}
                validationState={isConfirmPasswordValid ? "valid" : "invalid"}
                value={confirmPassword}
                onValueChange={(value) => {
                  setIsConfirmPasswordValid(true);
                  setConfirmPassword(value);
                }}
              />
            )}
            <Button fullWidth color="primary" type="submit">
              {page === 0
                ? "Continue with Email"
                : page === 1
                  ? "Enter Password"
                  : "Confirm Password"}
            </Button>
          </motion.form>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {page === 0 && (
            <motion.div
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              initial={{opacity: 1}}
              transition={{duration: 0.2}}
            >
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
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-small">
          Already have an account?&nbsp;
          <Link href="#" size="sm">
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

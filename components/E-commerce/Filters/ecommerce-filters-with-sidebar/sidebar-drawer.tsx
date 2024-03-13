"use client";

import type {ModalProps} from "@nextui-org/react";

import React from "react";
import {Modal, ModalBody, ModalContent} from "@nextui-org/react";

import {cn} from "./cn";

const SidebarDrawer = React.forwardRef<HTMLDivElement, ModalProps>(
  ({children, className, onOpenChange, isOpen, classNames = {}, ...props}, ref) => (
    <>
      <Modal
        ref={ref}
        {...props}
        classNames={{
          ...classNames,
          wrapper: cn("!items-start !justify-start max-w-[288px]", classNames?.wrapper),
          base: cn("justify-start !m-0 p-0 h-full max-h-full", classNames?.base, className),
          body: cn("p-0", classNames?.body),
          closeButton: cn("z-50", classNames?.closeButton),
        }}
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              x: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              x: -288,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            },
          },
        }}
        radius="none"
        scrollBehavior="inside"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
      <div className={cn("hidden h-full max-w-[288px] overflow-scroll sm:flex", className)}>
        {children}
      </div>
    </>
  ),
);

SidebarDrawer.displayName = "SidebarDrawer";

export default SidebarDrawer;

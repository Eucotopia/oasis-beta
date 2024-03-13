"use client";

import type {RadioProps} from "@nextui-org/react";

import React from "react";
import {Radio} from "@nextui-org/react";

import {cn} from "./cn";

const PricingRadioItem = React.forwardRef<HTMLInputElement, RadioProps>(
  ({classNames = {}, className, children, ...props}, ref) => (
    <Radio
      {...props}
      ref={ref}
      classNames={{
        ...classNames,
        label: cn("static", classNames?.label),
        base: cn(
          "relative max-w-full w-[280px] inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse cursor-pointer rounded-lg gap-4 p-4 !border-medium border-default-200",
          "data-[selected=true]:border-primary",
          classNames?.base,
          className,
        ),
      }}
    >
      {children}
    </Radio>
  ),
);

PricingRadioItem.displayName = "PricingRadioItem";

export default PricingRadioItem;

"use client";

import type {RadioGroupProps} from "@nextui-org/react";

import React from "react";
import {Radio, RadioGroup} from "@nextui-org/react";

import {cn} from "./cn";

const AddressTypeForm = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({className, classNames = {}, ...props}, ref) => {
    return (
      <RadioGroup
        {...props}
        ref={ref}
        classNames={{
          ...classNames,
          base: cn("mt-4", classNames?.base, className),
          wrapper: cn("gap-8", classNames?.wrapper),
        }}
        defaultValue="home"
        label="Address type"
        orientation="horizontal"
      >
        <Radio description="All Day Delivery" value="home">
          Home
        </Radio>
        <Radio description="Delivery Between 9AM - 6PM" value="office">
          Office
        </Radio>
      </RadioGroup>
    );
  },
);

AddressTypeForm.displayName = "AddressTypeForm";

export default AddressTypeForm;

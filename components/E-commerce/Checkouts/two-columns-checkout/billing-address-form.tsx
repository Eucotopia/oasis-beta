"use client";

import React from "react";
import {Autocomplete, AutocompleteItem, Avatar, Input, Spacer} from "@nextui-org/react";
import {motion, type HTMLMotionProps} from "framer-motion";

import {cn} from "./cn";
import countries from "./countries";

const BillingAddressForm = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({className, ...props}, ref) => {
    return (
      <motion.div
        {...props}
        ref={ref}
        animate={{opacity: 1, y: 0}}
        className={cn("flex flex-col", className)}
        exit={{opacity: 0, y: -5}}
        initial={{opacity: 0, y: -5}}
      >
        <Autocomplete
          defaultItems={countries}
          label="Country"
          labelPlacement="outside"
          placeholder="Select country"
          showScrollIndicators={false}
        >
          {(item) => (
            <AutocompleteItem
              key={item.code}
              startContent={
                <Avatar
                  alt="Country Flag"
                  className="h-6 w-6"
                  src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                />
              }
              value={item.code}
            >
              {item.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Spacer y={2} />
        <div className="flex gap-2">
          <Input labelPlacement="outside" placeholder="ZIP Code" />
          <Input labelPlacement="outside" placeholder="State" />
        </div>
      </motion.div>
    );
  },
);

BillingAddressForm.displayName = "BillingAddressForm";

export default BillingAddressForm;

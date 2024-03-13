"use client";

import React from "react";
import {Checkbox, Spacer} from "@nextui-org/react";
import {AnimatePresence} from "framer-motion";

import {cn} from "./cn";

import AddressTypeRadioGroup from "./address-type-radio-group";
import PaymentMethodRadioGroup from "./payment-method-radio-group";
import PaymentForm from "./payment-form";
import ShippingForm from "./shipping-form";
import BillingAddressForm from "./billing-address-form";

const CheckoutForm = React.forwardRef<HTMLFormElement, React.HTMLAttributes<HTMLFormElement>>(
  ({className, ...props}, ref) => {
    const [isBillingAsShipping, setIsBillingAsShipping] = React.useState(true);

    return (
      <form ref={ref} className={cn("flex flex-col gap-4 py-8", className)} {...props}>
        {/* Shipping */}
        <ShippingForm />
        {/* Address Type */}
        <AddressTypeRadioGroup />
        {/* Payment Method */}
        <PaymentMethodRadioGroup />
        {/* Payment Form */}
        <PaymentForm />
        {/* Billing Address */}
        <fieldset className="mt-4">
          <legend className="pb-2 text-foreground-500">Billing address</legend>
          <Checkbox isSelected={isBillingAsShipping} onValueChange={setIsBillingAsShipping}>
            Same as shipping address
          </Checkbox>
          <Spacer y={2} />
          <AnimatePresence>{!isBillingAsShipping && <BillingAddressForm />}</AnimatePresence>
        </fieldset>
      </form>
    );
  },
);

CheckoutForm.displayName = "CheckoutForm";

export default CheckoutForm;

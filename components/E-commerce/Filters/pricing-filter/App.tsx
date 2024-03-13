import type {PriceSliderProps} from "./price-slider";

import React from "react";

import PriceSlider from "./price-slider";

export default function Component(props: PriceSliderProps) {
  return (
    <div className="my-auto flex flex-col gap-2">
      <h3 className="text-medium font-medium leading-8 text-default-600">Price Range</h3>
      <PriceSlider
        aria-label="Pricing Filter"
        range={{
          min: 0,
          defaultValue: [100, 500],
          max: 2000,
          step: 1,
        }}
        {...props}
      />
    </div>
  );
}

"use client";

import React from "react";
import {ScrollShadow} from "@nextui-org/react";

import ProductListItem from "./product-list-item";
import products from "./products";

const productsWithAvailableColors = products.map((product) => ({
  ...product,
  availableColors: [
    {
      name: "Black",
      hex: "#18181b",
    },
    {
      name: "Red",
      hex: "#f871a0",
    },
    {
      name: "Yellow",
      hex: "#f9c97c",
    },
  ],
}));

export default function Component() {
  return (
    <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
      <ScrollShadow
        className="-mx-6 -my-5 flex w-full max-w-full snap-x justify-start gap-6 px-6 py-5"
        orientation="horizontal"
        size={20}
      >
        {productsWithAvailableColors.map((product) => (
          <ProductListItem key={product.id} {...product} className="snap-start" />
        ))}
      </ScrollShadow>
    </div>
  );
}

import React from "react";

import {cn} from "./cn";
import ProductsGrid from "./products-grid";

export default function Component({className}: {className?: string}) {
  return (
    <div className={cn("my-auto flex w-full max-w-7xl flex-col items-start gap-2", className)}>
      <ProductsGrid />
    </div>
  );
}

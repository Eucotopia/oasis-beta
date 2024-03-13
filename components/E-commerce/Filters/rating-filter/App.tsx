import React from "react";

import RatingRadioGroup from "./rating-radio-group";

export default function Component() {
  return (
    <div className="max-w-fit">
      <h3 className="text-medium font-medium leading-8 text-default-600">Property Rating</h3>
      <RatingRadioGroup className="mt-2 w-72" />
    </div>
  );
}

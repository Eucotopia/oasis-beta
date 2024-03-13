"use client";

import type {RadioGroupProps} from "@nextui-org/react";

import React from "react";
import {RadioGroup} from "@nextui-org/react";

import {cn} from "./cn";

import FeedbackRatingItem, {RatingValueEnum} from "./feedback-rating-item";

export default function Component({classNames, ...props}: RadioGroupProps) {
  const [value, setValue] = React.useState<RatingValueEnum | string>(RatingValueEnum.GOOD);

  return (
    <RadioGroup
      value={value}
      {...props}
      classNames={{
        ...classNames,
        base: cn(classNames?.base, "max-w-fit"),
        wrapper: cn(classNames?.wrapper, "gap-3"),
      }}
      defaultValue="1"
      orientation="horizontal"
      size="lg"
      onValueChange={setValue}
    >
      <FeedbackRatingItem value={RatingValueEnum.BAD} />
      <FeedbackRatingItem value={RatingValueEnum.NEUTRAL} />
      <FeedbackRatingItem value={RatingValueEnum.GOOD} />
      <FeedbackRatingItem value={RatingValueEnum.GREAT} />
    </RadioGroup>
  );
}

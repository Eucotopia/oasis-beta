"use client";

import type {RadioGroupProps} from "@nextui-org/react";

import React from "react";
import {RadioGroup} from "@nextui-org/react";

import {cn} from "@/config/variants";

import RatingRadioItem from "./rating-radio-item";

export type RatingRadioGroupProps = RadioGroupProps & {
    hideStarsText?: boolean;
    value: string,
    setValue?: (value: string) => void,
};

const RatingRadioGroup = React.forwardRef<HTMLDivElement, RatingRadioGroupProps>(
    ({className, label, value, setValue, hideStarsText, ...props}, ref) => {
        const starsText = React.useMemo(() => {
            // Special case for 5 stars
            if (value === "5") {
                return "5 stars";
            }
            // For 1 to 4 stars, use a generic approach
            return `${value} stars & up`;
        }, [value]);

        return (
            <div className={cn("flex items-center gap-3", className)}>
                <RadioGroup
                    ref={ref}
                    value={value}
                    defaultValue="1"
                    orientation="horizontal"
                    onValueChange={setValue}
                >
                    <RatingRadioItem value="1"/>
                    <RatingRadioItem value="2"/>
                    <RatingRadioItem value="3"/>
                    <RatingRadioItem value="4"/>
                    <RatingRadioItem value="5"/>
                </RadioGroup>
                {label ? label : null}
                {!hideStarsText && <p className="text-medium text-default-400">{starsText}</p>}
            </div>
        );
    },
);

RatingRadioGroup.displayName = "RatingRadioGroup";

export default RatingRadioGroup;

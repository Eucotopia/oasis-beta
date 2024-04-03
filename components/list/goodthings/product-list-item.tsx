"use client";

import React from "react";
import {Image} from "@nextui-org/react";

import {cn} from "./cn";

import RatingRadioGroup from "./rating-radio-group";
import {ProductItem} from "@/features/api/productApi";

// export type ProductListItemColor = {
//     name: string;
//     hex: string;
// };

// export type ProductItem = {
//     id: string;
//     name: string;
//     href: string;
//     price: number;
//     isNew?: boolean;
//     rating?: number;
//     ratingCount?: number;
//     description?: string;
//     imageSrc: string;
// };

export type ProductListItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> & {
    isPopular?: boolean;
    removeWrapper?: boolean;
} & ProductItem;

const ProductListItem = React.forwardRef<HTMLDivElement, ProductListItemProps>(
    (
        {
            name,
            price,
            rating,
            description,
            imageSrc,
            isPopular,
            removeWrapper,
            className,
            ...props
        },
        ref,
    ) => {
        const [isStarred, setIsStarred] = React.useState(false);

        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex w-64 max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large bg-content1 p-4 shadow-medium",
                    {
                        "rounded-none bg-transparent shadow-none": removeWrapper,
                    },
                    className,
                )}
                {...props}
            >
                <Image
                    removeWrapper
                    alt={name}
                    isBlurred
                    className={"hover:scale-105"}
                    radius={"md"}
                    src={imageSrc}
                />
                <div className="flex flex-col gap-3 px-1">
                    <div
                        className={cn("flex items-center justify-between", {
                            hidden: isPopular,
                        })}
                    >
                        <h3 className="text-medium font-medium text-default-700">{name}</h3>
                        <p className="text-medium font-medium text-default-500">{price}</p>
                    </div>
                    {description && !isPopular ? (
                        <p className="text-small text-default-500"
                           dangerouslySetInnerHTML={{__html: description.split('\n').join('<br>')}}/>
                    ) : null}
                    {rating !== undefined ? (
                        <RatingRadioGroup
                            hideStarsText
                            isReadOnly
                            className="gap-1"
                            label={<p className="text-small text-default-400">({rating})</p>}
                            size="sm"
                            value={`${rating}`}
                        />
                    ) : null}
                </div>
            </div>
        );
    },
);

ProductListItem.displayName = "ProductListItem";

export default ProductListItem;

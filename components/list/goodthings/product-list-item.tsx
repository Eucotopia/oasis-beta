"use client";

import React from "react";
import {Button, Image} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {cn} from "./cn";

import RatingRadioGroup from "./rating-radio-group";

// export type ProductListItemColor = {
//     name: string;
//     hex: string;
// };

export type ProductItem = {
    id: string;
    name: string;
    href: string;
    price: number;
    isNew?: boolean;
    rating?: number;
    // availableColors?: ProductListItemColor[];
    ratingCount?: number;
    description?: string;
    imageSrc: string;
};

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
            ratingCount,
            description,
            imageSrc,
            isNew,
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
                {isNew && isPopular ? (
                    <span className="absolute right-7 top-7 z-20 text-tiny font-semibold text-default-400">
            NEW
          </span>
                ) : null}
                {/*<Button*/}
                {/*  isIconOnly*/}
                {/*  className={cn("absolute right-6 top-6 z-20", {*/}
                {/*    hidden: isPopular,*/}
                {/*  })}*/}
                {/*  radius="full"*/}
                {/*  size="sm"*/}
                {/*  variant="flat"*/}
                {/*  onPress={() => setIsStarred(!isStarred)}*/}
                {/*>*/}
                {/*  <Icon*/}
                {/*    className={cn("text-default-500", {*/}
                {/*      "text-warning": isStarred,*/}
                {/*    })}*/}
                {/*    icon="solar:star-bold"*/}
                {/*    width={16}*/}
                {/*  />*/}
                {/*</Button>*/}
                <div
                    className={cn(
                        "relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2",
                        {
                            "h-full justify-between": isPopular,
                        },
                    )}
                >
                    <div
                        className={cn("flex flex-col gap-2 px-4 pt-6", {
                            hidden: !isPopular,
                        })}
                    >
                        <h3 className="text-xl font-semibold tracking-tight text-default-800">{name}</h3>
                        <p className="text-small text-default-500">{description}</p>
                    </div>
                    <Image
                        removeWrapper
                        alt={name}
                        className={cn(
                            "z-0 h-full max-h-full w-full  overflow-visible object-contain object-center hover:scale-110",
                            {
                                "flex h-56 w-56 items-center": isPopular,
                            },
                        )}
                        src={"mac.svg"}
                    />
                </div>
                <div className="flex flex-col gap-3 px-1">
                    <div
                        className={cn("flex items-center justify-between", {
                            hidden: isPopular,
                        })}
                    >
                        <h3 className="text-medium font-medium text-default-700">{name}</h3>
                        <p className="text-medium font-medium text-default-500">${price}</p>
                    </div>
                    {description && !isPopular ? (
                        <p className="text-small text-default-500">{description}</p>
                    ) : null}
                    {rating !== undefined ? (
                        <RatingRadioGroup
                            hideStarsText
                            isReadOnly
                            className="gap-1"
                            label={<p className="text-small text-default-400">({ratingCount})</p>}
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

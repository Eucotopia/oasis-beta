"use client";

import React from "react";
import {Button, useDisclosure} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import CardReview from "./card-review";
import reviews from "./reviews";
import ModalReview from "./modal-review";

export default function Component() {
  // Remove the defaultOpen property from useDisclosure when using the component
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure({defaultOpen: true});

  return (
    <section className="mx-auto w-full max-w-6xl px-2 md:px-6 lg:px-8">
      <header className="mb-8 flex flex-wrap justify-between gap-4 md:px-2">
        <div className="flex items-center gap-2">
          <h1 className="text-medium font-semibold md:text-large">Reviews</h1>
          <div className="flex items-center gap-1">
            <Icon className="text-warning-500" icon="solar:star-bold" width={20} />
            <span className="text-medium font-semibold md:text-large">4.4</span>
            <span className="text-right text-small text-default-500 lg:text-medium">
              (Based on {reviews.length} reviews)
            </span>
          </div>
        </div>
        <Button endContent={<Icon icon="solar:pen-linear" />} variant="bordered" onPress={onOpen}>
          Write a review
        </Button>
      </header>
      <div className="flex flex-col gap-4">
        {reviews.map((review, index) => (
          <CardReview key={index} {...review} />
        ))}
      </div>
      <ModalReview isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
    </section>
  );
}

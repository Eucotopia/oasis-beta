"use client";

import React from "react";

import {cn} from "./cn";
import PlaceListItem from "./place-list-item";
import {Post} from "@/types";

export default function Component({className,posts}: {className?: string,posts:Post[]}) {
  return (
    <div
      className={cn(
        "my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5",
        className,
      )}
    >
        {posts.map((post) => (
            <PlaceListItem key={post.id} {...post} />
        ))}
    </div>
  );
}

"use client";

import type {CardProps} from "@nextui-org/react";

import React from "react";
import {Card, CardBody, CardFooter, Button, Avatar, Chip} from "@nextui-org/react";

import {AcmeLogo} from "./acme";

export default function Component(props: CardProps) {
  return (
    <Card className="max-w-[320px] border-small border-default-100 p-3" shadow="sm" {...props}>
      <CardBody className="px-4 pb-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex max-w-[80%] flex-col gap-1">
            <p className="text-medium font-medium">Deploy Node.js app to Acme</p>
            <p className="text-small text-default-500">By The Acme Team</p>
          </div>
          <Avatar className="bg-content2" icon={<AcmeLogo />} />
        </div>
        <p className="pt-4 text-small text-default-500">
          Build the next generation of web experiences with the fastest and most reliable hosting
          for modern applications.
        </p>
      </CardBody>
      <CardFooter className="justify-between gap-2">
        <Button size="sm" variant="faded">
          Configure
        </Button>
        <Chip color="primary" variant="dot">
          Typescript
        </Chip>
      </CardFooter>
    </Card>
  );
}

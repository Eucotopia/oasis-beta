"use client";

import type {CardProps} from "@nextui-org/react";

import React from "react";
import {Card, CardBody, CardHeader, Listbox, ListboxItem, Progress} from "@nextui-org/react";
import {Icon} from "@iconify/react";

const items = [
  {
    key: "setup-company",
    icon: "solar:buildings-linear",
    title: "Setup your company",
    description: "Add some details about your company.",
    isCompleted: true,
  },
  {
    key: "add-your-team",
    icon: "solar:user-plus-linear",
    title: "Add your team",
    description: "Invite your team members to your organization.",
    isCompleted: true,
  },
  {
    key: "add-share-holders",
    icon: "solar:users-group-rounded-linear",
    title: "Add shareholders",
    description:
      "Add your share holders to your organization and captable so they can view their holdings.",
    isCompleted: true,
  },
  {
    key: "add-valuations",
    icon: "solar:graph-up-linear",
    title: "Add valuations",
    description: "Add your company valuations to your captable to help track your progress.",
    isCompleted: false,
  },
  {
    key: "create-option-pool",
    icon: "solar:pie-chart-2-linear",
    title: "Create option pool",
    description: "Create an option pool to grant options to your team.",
    isCompleted: false,
  },
  {
    key: "create-send-offer",
    icon: "solar:plain-outline",
    title: "Create and send an offer",
    description: "Create an offer and send it to a potential employee.",
  },
];

export default function Component(props: CardProps) {
  return (
    <Card {...props} className="max-w-[520px] py-1 md:py-4">
      <CardHeader className="flex items-center gap-3 px-4 pb-0 pt-3 md:px-10 md:pt-5">
        <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-br from-secondary-300 to-primary-500">
          <Icon className="text-white" icon="solar:skateboarding-line-duotone" width={30} />
        </div>
        <Progress
          showValueLabel
          classNames={{
            label: "font-medium",
            indicator: "bg-gradient-to-r from-primary-400 to-secondary-500",
            value: "text-foreground/60",
          }}
          label="Onboarding"
          value={50}
        />
      </CardHeader>
      <CardBody className="px-1 pt-3 sm:px-2 md:px-6">
        <Listbox
          hideSelectedIcon
          aria-label="Onboarding checklist"
          items={items}
          variant="flat"
          onAction={(selectedKey) => alert(selectedKey)}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              classNames={{
                base: "w-full px-2 md:px-4 min-h-[70px] gap-3",
                title: "text-medium font-medium",
                description: "text-small",
              }}
              description={item.description}
              endContent={
                <div className="flex flex-none">
                  {item.isCompleted ? (
                    <Icon className="text-secondary" icon="solar:check-circle-bold" width={30} />
                  ) : (
                    <Icon
                      className="text-default-400"
                      icon="solar:round-alt-arrow-right-bold"
                      width={30}
                    />
                  )}
                </div>
              }
              startContent={
                <div className="item-center flex rounded-medium border border-divider p-2">
                  <Icon className="text-secondary" icon={item.icon} width={24} />
                </div>
              }
              title={item.title}
            />
          )}
        </Listbox>
      </CardBody>
    </Card>
  );
}

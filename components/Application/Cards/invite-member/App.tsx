"use client";

import type {CardProps, Selection} from "@nextui-org/react";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  CardFooter,
  Spacer,
  Divider,
  AvatarGroup,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import UserCell from "./user-cell";

export default function Component(props: CardProps) {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["can-view"]));

  const permissionLabels: Record<string, string> = {
    "can-view": "Can View",
    "can-edit": "Can Edit",
  };

  // Memoize the user list to avoid re-rendering when changing the selected keys
  const userList = React.useMemo(
    () => (
      <div className="mt-2 flex flex-col gap-2">
        <UserCell
          avatar="https://i.pravatar.cc/150?u=a04258114e29026708c"
          name="Tony Reichert (you)"
          permission="Owner"
        />
        <Divider />
        <UserCell
          avatar="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          name="John Doe"
          permission="Can edit"
        />
        <Divider />
        <UserCell
          avatar="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          name="Jane Doe"
          permission="Can view"
        />
        <Divider />
        <UserCell
          avatar="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          name="John Smith"
          permission="Can view"
        />
      </div>
    ),
    [],
  );

  return (
    <Card className="w-full max-w-[400px]" {...props}>
      <CardHeader className="justify-center px-6 pb-0 pt-6">
        <div className="flex flex-col items-center">
          <AvatarGroup isBordered size="sm">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          </AvatarGroup>
          <Spacer y={2} />
          <h4 className="text-large">Invite Member</h4>
          <p className="text-center text-small text-default-500">
            Invite a new member to your organization.
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex items-end gap-2">
          <Input
            endContent={
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="text-default-500"
                    endContent={
                      <span className="hidden sm:flex">
                        <Icon icon="solar:alt-arrow-down-linear" />
                      </span>
                    }
                    size="sm"
                    variant="light"
                  >
                    {Array.from(selectedKeys)
                      .map((key) => permissionLabels[key])
                      .join(", ")}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  selectedKeys={selectedKeys}
                  selectionMode="single"
                  onSelectionChange={setSelectedKeys}
                >
                  <DropdownItem key="can-view">Can view</DropdownItem>
                  <DropdownItem key="can-edit">Can edit</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            }
            label="Email Address"
            labelPlacement="outside"
            placeholder="Email comma separated"
          />
          <Button color="primary" size="md">
            Invite
          </Button>
        </div>
        <Spacer y={4} />
        {userList}
      </CardBody>
      <CardFooter className="justify-end gap-2">
        <Button size="sm" variant="flat">
          Copy Link
        </Button>
        <Button size="sm" variant="flat">
          Get Embed Code
        </Button>
      </CardFooter>
    </Card>
  );
}

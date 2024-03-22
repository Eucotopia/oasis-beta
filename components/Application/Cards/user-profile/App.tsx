"use client";

import React from "react";
import {Card, CardHeader, CardBody, Button, Avatar, Tabs, Tab, Chip} from "@nextui-org/react";

export default function Component() {
    return (
        <div className="flex h-full w-full items-start justify-center overflow-hidden">
            <Card className="my-10 w-[400px]">
                <CardHeader
                    className="relative flex h-[100px] flex-col justify-end overflow-visible bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
                    <Avatar
                        className="h-20 w-20 translate-y-12"
                        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    />
                    <Button
                      className="absolute right-3 top-3 bg-white/20 text-white dark:bg-black/20"
                      radius="full"
                      size="sm"
                      variant="light"
                    >
                      Edit Profile
                    </Button>
                </CardHeader>
                <CardBody>
                    <div className="pb-4 pt-6">
                        <p className="text-large font-medium">LIWEI</p>
                        <p className="max-w-[90%] text-small text-default-400">@tony.reichert</p>
                        <div className="flex gap-2 pb-1 pt-2">
                            <Chip variant="faded" color={'primary'}>IOS</Chip>
                            <Chip variant="bordered" color={"secondary"}>UI/UX</Chip>
                            <Chip variant="flat" color={"danger"}>Full Stack Developer</Chip>
                        </div>
                        <p className="py-2 text-small text-foreground">
                            If you live each day as it was your last, someday you'll most certainly be right
                        </p>
                        <div className="flex gap-2">
                            <p>
                                <span className="text-small font-medium text-default-500">13</span>&nbsp;
                                <span className="text-small text-default-400">Following</span>
                            </p>
                            <p>
                                <span className="text-small font-medium text-default-500">2500</span>&nbsp;
                                <span className="text-small text-default-400">Followers</span>
                            </p>
                        </div>
                    </div>
                    <Tabs fullWidth>
                        <Tab key="posts" title="Posts"/>
                        <Tab key="likes" title="Likes"/>
                        <Tab key="comments" title="Media"/>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}

'use client'
import {AcmeLogo} from "@/components/Application/Sidebars/sidebar-off-canvas-responsive/acme";
import Sidebar from "@/components/Slidebar/sidebar";
import {sectionNestedItems} from "@/components/Slidebar/sidebar-items";
import {Icon} from "@iconify/react";
import {Button} from "@nextui-org/button";
import {
    Avatar,
    Modal,
    ModalBody,
    ModalContent, ScrollShadow,
    Spacer,
    useDisclosure
} from "@nextui-org/react";
import {usePathname} from "next/navigation";
import React from "react";

export default function DashboardLayout({children}: { children: React.ReactNode; }) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const pathname = usePathname();
    let currentPath = pathname.slice(pathname.lastIndexOf("/") + 1);
    return (
        <section className="flex flex-col justify-center items-center gap-4 md:py-10">
            <div className="inline-block w-4xl justify-center">
                <div className="flex h-dvh w-full">
                    <Modal
                        classNames={{
                            base: "justify-start sm:m-0 p-0 h-dvh max-h-full",
                            wrapper: "sm:items-start sm:justify-start max-w-[288px]",
                            body: "p-0",
                            closeButton: "z-50",
                        }}
                        isOpen={isOpen}
                        motionProps={{
                            variants: {
                                enter: {
                                    x: 0,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                    },
                                },
                                exit: {
                                    x: -288,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeOut",
                                    },
                                },
                            },
                        }}
                        radius="none"
                        scrollBehavior="inside"
                        onOpenChange={onOpenChange}
                    >
                        <ModalContent className={"rounded-2xl"}>
                            <ModalBody>
                                <div
                                    className="relative flex h-full w-72 flex-1 flex-col border-r-small border-divider p-6">
                                    <div className="flex items-center gap-2 px-2">
                                        <div
                                            className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                                            <AcmeLogo className="text-background"/>
                                        </div>
                                        <span className="text-small font-bold uppercase">Acme</span>
                                    </div>

                                    <Spacer y={8}/>

                                    <div className="flex items-center gap-3 px-2">
                                        <Avatar isBordered size="sm"
                                                src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
                                        <div className="flex flex-col">
                                            <p className="text-small font-medium text-default-600">Kate Moore</p>
                                            <p className="text-tiny text-default-400">Customer Support</p>
                                        </div>
                                    </div>
                                    <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                                        <Sidebar defaultSelectedKey="home" items={sectionNestedItems}
                                                 selectedKeys={[currentPath]}/>
                                    </ScrollShadow>

                                    <Spacer y={8}/>

                                    <div className="mt-auto flex flex-col">
                                        <Button
                                            fullWidth
                                            className="justify-start text-default-500 data-[hover=true]:text-foreground"
                                            startContent={
                                                <Icon className="text-default-500" icon="solar:info-circle-line-duotone"
                                                      width={24}/>
                                            }
                                            variant="light"
                                        >
                                            Help & Information
                                        </Button>
                                        <Button
                                            className="justify-start text-default-500 data-[hover=true]:text-foreground"
                                            startContent={
                                                <Icon
                                                    className="rotate-180 text-default-500"
                                                    icon="solar:minus-circle-line-duotone"
                                                    width={24}
                                                />
                                            }
                                            variant="light"
                                        >
                                            Log Out
                                        </Button>
                                    </div>
                                </div>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                    <Button isIconOnly size="sm" variant="light" onPress={onOpen}
                            className={"absolute top-8 left-24 z-50"}>
                        <Icon
                            className="text-default-500"
                            height={24}
                            icon="solar:hamburger-menu-outline"
                            width={24}
                        />
                    </Button>
                    <div className="w-3xl flex-1 flex-col">
                        <main className="mt-4 min-w-content overflow-visible">
                            <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium ">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </section>
    );
}

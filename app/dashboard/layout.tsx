'use client'
import {AcmeLogo} from "@/components/Application/Sidebars/sidebar-off-canvas-responsive/acme";
import Sidebar from "@/components/Application/Sidebars/sidebar-off-canvas-responsive/sidebar";
import SidebarDrawer from "@/components/Application/Sidebars/sidebar-off-canvas-responsive/sidebar-drawer";
import {sectionItemsWithTeams} from "@/components/Application/Sidebars/sidebar-off-canvas-responsive/sidebar-items";
import {Icon} from "@iconify/react";
import {Button} from "@nextui-org/button";
import {
    Avatar,
    BreadcrumbItem,
    Breadcrumbs,
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
    let currentPath = pathname.slice(pathname.lastIndexOf("/")+1);
    const content = (
        <div className="relative flex h-full w-72 flex-1 flex-col p-6">
            <div className="flex items-center gap-2 px-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                    <AcmeLogo className="text-background"/>
                </div>
                <span className="text-small font-bold uppercase text-foreground">Acme</span>
            </div>
            <Spacer y={8}/>
            <div className="flex items-center gap-3 px-3">
                <Avatar isBordered size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
                <div className="flex flex-col">
                    <p className="text-small font-medium text-default-600">John Doe</p>
                    <p className="text-tiny text-default-400">Product Designer</p>
                </div>
            </div>

            <Spacer y={8}/>

            <Sidebar defaultSelectedKey="home" items={sectionItemsWithTeams} selectedKeys={[currentPath]}/>

            <Spacer y={8}/>
            <div className="mt-auto flex flex-col">
                <Button
                    fullWidth
                    className="justify-start text-default-500 data-[hover=true]:text-foreground"
                    startContent={
                        <Icon className="text-default-500" icon="solar:info-circle-line-duotone" width={24}/>
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
    );
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
                        <ModalContent>
                            <ModalBody>
                                <div className="relative flex h-full w-72 flex-1 flex-col p-6">
                                    <div className="flex items-center gap-2 px-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                                            <AcmeLogo className="text-background" />
                                        </div>
                                        <span className="text-small font-bold uppercase text-foreground">Acme</span>
                                    </div>
                                    <Spacer y={8} />
                                    <div className="flex items-center gap-3 px-3">
                                        <Avatar
                                            isBordered
                                            size="sm"
                                            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                                        />
                                        <div className="flex flex-col">
                                            <p className="text-small font-medium text-default-600">John Doe</p>
                                            <p className="text-tiny text-default-400">Product Designer</p>
                                        </div>
                                    </div>

                                    <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                                        <Sidebar defaultSelectedKey="home" items={sectionItemsWithTeams} />
                                    </ScrollShadow>

                                    <Spacer y={8} />
                                    <div className="mt-auto flex flex-col">
                                        <Button
                                            fullWidth
                                            className="justify-start text-default-500 data-[hover=true]:text-foreground"
                                            startContent={
                                                <Icon
                                                    className="text-default-500"
                                                    icon="solar:info-circle-line-duotone"
                                                    width={24}
                                                />
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
                    <div className="w-3xl flex-1 flex-col p-4">
                        <header className="flex items-center gap-3 rounded-medium border-small border-divider p-4">
                            <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
                                <Icon
                                    className="text-default-500"
                                    height={24}
                                    icon="solar:hamburger-menu-outline"
                                    width={24}
                                />
                            </Button>
                            <h2 className="text-medium font-medium text-default-700">Overview</h2>
                        </header>
                        <main className="mt-4 min-w-content overflow-visible">
                            <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium " >
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client"
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Kbd} from "@nextui-org/kbd";
import {Link} from "@nextui-org/link";
import {Input} from "@nextui-org/input";

import {link as linkStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    SearchIcon,
} from "@/components/icons";

import {Logo} from "@/components/icons";
import React, {useState} from "react";
import {
    Card, CardBody,
    Checkbox,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader, Tab, Tabs,
    useDisclosure
} from "@nextui-org/react";
import {MailIcon} from "@nextui-org/shared-icons";

export const Navbar = () => {
    const [selected, setSelected] = useState("login");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [active, setActive] = useState("Home")
    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0"/>
            }
            type="search"
        />
    );
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                hideCloseButton
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <Card className="max-w-full w-[450px] h-[400px]">
                                <CardBody className="overflow-hidden">
                                    <Tabs
                                        fullWidth
                                        size="md"
                                        aria-label="Tabs form"
                                        selectedKey={selected}
                                        onSelectionChange={setSelected}
                                    >
                                        <Tab key="login" title="Login">
                                            <form className="flex flex-col gap-4">
                                                <Input isRequired label="Email" placeholder="Enter your email"
                                                       type="email"/>
                                                <Input
                                                    isRequired
                                                    label="Password"
                                                    placeholder="Enter your password"
                                                    type="password"
                                                />
                                                <p className="text-center text-small">
                                                    Need to create an account?{" "}
                                                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                                                        Sign up
                                                    </Link>
                                                </p>
                                                <div className="flex gap-2 justify-end">
                                                    <Button fullWidth color="primary">
                                                        Login
                                                    </Button>
                                                </div>
                                            </form>
                                        </Tab>
                                        <Tab key="sign-up" title="Sign up">
                                            <form className="flex flex-col gap-4 h-[300px]">
                                                <Input isRequired label="Name" placeholder="Enter your name"
                                                       type="password"/>
                                                <Input isRequired label="Email" placeholder="Enter your email"
                                                       type="email"/>
                                                <Input
                                                    isRequired
                                                    label="Password"
                                                    placeholder="Enter your password"
                                                    type="password"
                                                />
                                                <p className="text-center text-small">
                                                    Already have an account?{" "}
                                                    <Link size="sm" onPress={() => setSelected("login")}>
                                                        Login
                                                    </Link>
                                                </p>
                                                <div className="flex gap-2 justify-end">
                                                    <Button fullWidth color="primary">
                                                        Sign up
                                                    </Button>
                                                </div>
                                            </form>
                                        </Tab>
                                    </Tabs>
                                </CardBody>
                            </Card>
                            <ModalFooter>
                                <Button color="primary" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <NextUINavbar maxWidth="xl" position="sticky">
                <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                    <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <NextLink
                            className="flex justify-start items-center gap-1"
                            href="/"
                            onClick={() => setActive("Home")}>
                            <Logo/>
                            <p className="font-bold text-inherit">ACME</p>
                        </NextLink>
                    </NavbarBrand>
                    <ul className="hidden lg:flex gap-4 justify-start ml-2">
                        {siteConfig.navItems.map((item) => (
                            <NavbarItem key={item.href} isActive={active === item.label}>
                                <Link
                                    isBlock
                                    className={clsx(
                                        linkStyles({color: "foreground"}),
                                        "data-[active=true]:text-primary data-[active=true]:font-medium"
                                    )}
                                    color="foreground"
                                    href={item.href}
                                    onClick={() => setActive(item.label)}
                                >
                                    {item.label}
                                </Link>
                            </NavbarItem>
                        ))}
                    </ul>
                </NavbarContent>

                <NavbarContent
                    className="hidden sm:flex basis-1/5 sm:basis-full"
                    justify="end"
                >
                    <NavbarItem className="hidden sm:flex gap-2">
                        <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
                            <TwitterIcon className="text-default-500"/>
                        </Link>
                        <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
                            <DiscordIcon className="text-default-500"/>
                        </Link>
                        <Link isExternal href={siteConfig.links.github} aria-label="Github">
                            <GithubIcon className="text-default-500"/>
                        </Link>
                        <ThemeSwitch/>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
                    <NavbarItem className="hidden md:flex">
                        {/*<Button*/}
                        {/*    as={Link}*/}
                        {/*    className="text-medium font-normal text-default-600 bg-default-100"*/}
                        {/*    // startContent={<HeartFilledIcon className="text-danger"/>}*/}
                        {/*    variant={"solid"}*/}
                        {/*>*/}
                        {/*    Login*/}
                        {/*</Button>*/}
                        <Button onPress={onOpen} color="primary">Login</Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                    <Link isExternal href={siteConfig.links.github} aria-label="Github">
                        <GithubIcon className="text-default-500"/>
                    </Link>
                    <ThemeSwitch/>
                    <NavbarMenuToggle/>
                </NavbarContent>

                <NavbarMenu>
                    {searchInput}
                    <div className="mx-4 mt-2 flex flex-col gap-2">
                        {siteConfig.navMenuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color={
                                        index === 2
                                            ? "primary"
                                            : index === siteConfig.navMenuItems.length - 1
                                                ? "danger"
                                                : "foreground"
                                    }
                                    href="#"
                                    size="lg"
                                >
                                    {item.label}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </div>
                </NavbarMenu>
            </NextUINavbar>
        </>
    );
};

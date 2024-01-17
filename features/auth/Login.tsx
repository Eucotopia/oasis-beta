"use client"
import {LoginRequest} from "@/types";
import {Input} from "@nextui-org/input";
import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import {Button} from "@nextui-org/button";
import {setCredentials} from "@/features/auth/authSlice";
import {removeCredentials} from "@/features/auth/authSlice";
import {
    Avatar,
    Checkbox, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import {EyeFilledIcon, EyeSlashFilledIcon, MailIcon} from "@nextui-org/shared-icons";
import {useAuth} from "@/hooks/useAuth";
import {NavbarContent} from "@nextui-org/navbar";
import {useAppDispatch} from "@/hooks/store";
import {useLoginMutation} from "@/features/api/authApi";

export const Login = () => {

    const {currentUser} = useAuth()

    const dispatch = useAppDispatch()

    // 定义用户名和密码
    const [formState, setFormState] = useState<LoginRequest>({
        username: '',
        password: '',
    })

    const [login, {isLoading}] = useLoginMutation()

    const [isVisible, setIsVisible] = useState(false);

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    // 校验用户名格式
    const isInvalid = useMemo(() => {
        if (formState.username === "") return false;
        return !validateEmail(formState.username);
    }, [formState.username]);

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setFormState((prev) => ({
        ...prev,
        [name]: value
    }))

    // 用户登陆
    const Login = async () => {
        try {
            const user = await login(formState).unwrap()
            dispatch(setCredentials(user))
        } catch (err) {
            console.error(err)
        } finally {
            setFormState({
                username: '',
                password: '',
            })
        }
    }

    // 用户退出
    const Logout = () => {
        dispatch(removeCredentials())
    }
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            {currentUser ? (
                <NavbarContent as="div" justify="end">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name={currentUser.nickname}
                                size="sm"
                                src={currentUser.image}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">{currentUser.nickname}</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger" onClick={Logout}>
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            ) : (
                <Button onPress={onOpen} variant={"flat"}>Login</Button>
            )}
            <Modal
                isDismissable={false}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    value={formState.username}
                                    onChange={handleChange}
                                    name="username"
                                    isInvalid={isInvalid}
                                    color={isInvalid ? "danger" : "success"}
                                    errorMessage={isInvalid && "Please enter a valid email"}
                                    autoFocus
                                    endContent={
                                        <MailIcon
                                            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                                    }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <button className="focus:outline-none" type="button"
                                                onClick={() => setIsVisible(!isVisible)}>
                                            {isVisible ? (
                                                <EyeSlashFilledIcon
                                                    className="text-2xl text-default-400 pointer-events-none"/>
                                            ) : (
                                                <EyeFilledIcon
                                                    className="text-2xl text-default-400 pointer-events-none"/>
                                            )}
                                        </button>
                                    }
                                    label="Password"
                                    placeholder="Enter your password"
                                    name={"password"}
                                    value={formState.password}
                                    onChange={handleChange}
                                    type={isVisible ? "text" : "password"}
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={onClose}
                                    onClick={Login}
                                    isLoading={isLoading}
                                >
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
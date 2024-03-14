"use client"
import {UserLoginType, UserRegisterType} from "@/types";
import React, {ChangeEvent, useMemo, useState} from "react";
import {Button} from "@nextui-org/button";
import {setCredentials} from "@/features/auth/authSlice";
import {removeCredentials} from "@/features/auth/authSlice";
import {
    Avatar,
    Checkbox, Divider,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Link,
    Modal,
    ModalContent,
    useDisclosure
} from "@nextui-org/react";
import {useAuth} from "@/hooks/useAuth";
import {NavbarContent} from "@nextui-org/navbar";
import {useAppDispatch} from "@/hooks/store";
import {useLoginMutation, useRegisterMutation} from "@/features/api/authApi";
import {Icon} from "@iconify/react";

export const Login = () => {
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [isVisible, setIsVisible] = React.useState(false);
    // 获取当前用户
    const {currentUser} = useAuth()
    const dispatch = useAppDispatch()
    const [loginState, setLoginState] = useState<UserLoginType>({
        username: '',
        password: '',
    })
    const [registerState, setRegisterState] = useState<UserRegisterType>(
        {
            username: '',
            password: '',
            nickname: '',
        }
    );
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isSelectRemember, setIsSelectRemember] = useState(false)
    const [login, {isLoading}] = useLoginMutation()
    const [register] = useRegisterMutation();

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    // 校验用户名格式
    const isInvalid = useMemo(() => {
        if (loginState.username === "") return false;
        return !validateEmail(loginState.username);
    }, [loginState.username]);

    const handleLoginChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setLoginState((prev) => ({
        ...prev,
        [name]: value
    }))

    const handleRegisterChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setRegisterState((prev) => ({
        ...prev,
        [name]: value
    }))

    // 用户登陆
    const Login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const user = await login(loginState).unwrap()
            dispatch(setCredentials(user))
        } catch (err: any) {
            console.error(err)
        } finally {
            setLoginState({
                username: '',
                password: '',
            })
        }
    }

    // 用户退出
    const Logout = () => {
        dispatch(removeCredentials())
    }

    const Register = async () => {
        const user = await register(registerState).unwrap()
        console.log(user.code)
    }
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
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                hideCloseButton
                size={"sm"}
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <div className="flex h-full w-full items-center justify-center">
                                <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
                                    <p className="pb-2 text-xl font-medium">Log In</p>
                                    <form className="flex flex-col gap-3" onSubmit={(e)=>Login(e)}>
                                        <Input
                                            value={loginState.username}
                                            onChange={handleLoginChange}
                                            name="username"
                                            label="Email Address"
                                            errorMessage={isInvalid && "Please enter a valid email"}
                                            placeholder="Enter your email"
                                            type="email"
                                            variant="bordered"
                                        />
                                        <Input
                                            endContent={
                                                <button type="button" onClick={toggleVisibility}>
                                                    {isVisible ? (
                                                        <Icon
                                                            className="pointer-events-none text-2xl text-default-400"
                                                            icon="solar:eye-closed-linear"
                                                        />
                                                    ) : (
                                                        <Icon
                                                            className="pointer-events-none text-2xl text-default-400"
                                                            icon="solar:eye-bold"
                                                        />
                                                    )}
                                                </button>
                                            }
                                            label="Password"
                                            name={"password"}
                                            value={loginState.password}
                                            onChange={handleLoginChange}
                                            placeholder="Enter your password"
                                            type={isVisible ? "text" : "password"}
                                            variant="bordered"
                                        />
                                        <div className="flex items-center justify-between px-1 py-2">
                                            <Checkbox name="remember" size="sm" isSelected={isSelectRemember} onValueChange={setIsSelectRemember}>
                                                Remember me
                                            </Checkbox>
                                            <Link className="text-default-500" href="#" size="sm">
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <Button color="primary" type="submit" onPress={onClose}>
                                            Log In
                                        </Button>
                                    </form>
                                    <div className="flex items-center gap-4 py-2">
                                        <Divider className="flex-1" />
                                        <p className="shrink-0 text-tiny text-default-500">OR</p>
                                        <Divider className="flex-1" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Button
                                            startContent={<Icon icon="flat-color-icons:google" width={24} />}
                                            variant="bordered"
                                        >
                                            Continue with Google
                                        </Button>
                                        <Button
                                            startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
                                            variant="bordered"
                                        >
                                            Continue with Github
                                        </Button>
                                    </div>
                                    <p className="text-center text-small">
                                        Need to create an account?&nbsp;
                                        <Link href="#" size="sm">
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
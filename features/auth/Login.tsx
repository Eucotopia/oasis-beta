"use client"
import {LoginRequest, UserLoginType, UserRegisterType} from "@/types";
import {Input} from "@nextui-org/input";
import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import {Button} from "@nextui-org/button";
import {setCredentials} from "@/features/auth/authSlice";
import {removeCredentials} from "@/features/auth/authSlice";
import {
    Avatar, Card, CardBody, CardFooter, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger,
    Link,
    Modal,
    ModalContent,
    Tab, Tabs,
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
    const [selected, setSelected] = useState("login");

    // 定义用户名和密码
    const [loginState, setLoginState] = useState<UserLoginType>({
        username: '',
        password: '',
    })

    const [registerState, setRegisterState] = useState<UserRegisterType>(
        {
            username: '',
            password: '',
            nickname: '',
            image: ''
        }
    );


    const [login, {isLoading}] = useLoginMutation()

    const [isVisible, setIsVisible] = useState(false);

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    // 校验用户名格式
    const isInvalid = useMemo(() => {
        if (loginState.username === "") return false;
        return !validateEmail(loginState.username);
    }, [loginState.username]);

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setLoginState((prev) => ({
        ...prev,
        [name]: value
    }))

    // 用户登陆
    const Login = async () => {
        try {
            const user = await login(loginState).unwrap()
            dispatch(setCredentials(user))
        } catch (err) {
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
                            <Card
                                className="max-w-full w-[340px] h-[400px]"
                            >
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-xl">Log
                                    in</CardHeader>
                                <CardBody className="overflow-hidden">
                                    <Tabs
                                        fullWidth
                                        size="md"
                                        aria-label="Tabs form"
                                        selectedKey={selected}
                                        // @ts-ignore
                                        onSelectionChange={setSelected}
                                    >
                                        <Tab key="login" title="Login">
                                            <form className="flex flex-col gap-4">
                                                <Input
                                                    value={loginState.username}
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
                                                    value={loginState.password}
                                                    onChange={handleChange}
                                                    type={isVisible ? "text" : "password"}
                                                    variant="bordered"
                                                />
                                                <Button fullWidth color="primary" isDisabled>
                                                    Wechat Login(待开发)
                                                </Button>
                                                <p className="text-center text-small">
                                                    Need to create an account?{" "}
                                                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                                                        Sign up
                                                    </Link>
                                                </p>
                                            </form>
                                        </Tab>
                                        <Tab key="sign-up" title="Sign up">
                                            <form className="flex flex-col gap-4 h-[300px]">
                                                <Input
                                                    variant="bordered"
                                                    isRequired
                                                    name={"nickname"}
                                                    value={registerState.nickname}
                                                    label="Nickname"
                                                    placeholder="Enter your nickname"
                                                    type="text"/>
                                                <Input
                                                    value={registerState.username}
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
                                                    value={registerState.password}
                                                    onChange={handleChange}
                                                    type={isVisible ? "text" : "password"}
                                                    variant="bordered"
                                                />
                                                <Input type={"file"}/>
                                                <p className="text-center text-small">
                                                    Already have an account?{" "}
                                                    <Link size="sm" onPress={() => setSelected("login")}>
                                                        Login
                                                    </Link>
                                                </p>
                                            </form>
                                        </Tab>
                                    </Tabs>
                                </CardBody>
                                <CardFooter className={"flex flex-row justify-between gap-4"}>
                                    <Button color="primary" variant="light" onPress={onClose} fullWidth>
                                        Close
                                    </Button>
                                    {
                                        selected === "login" ? (
                                            <Button onPress={onClose} fullWidth color="primary">
                                                Login
                                            </Button>
                                        ) : (
                                            <Button onPress={onClose} fullWidth color="primary">
                                                Sign up
                                            </Button>
                                        )
                                    }
                                </CardFooter>
                            </Card>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
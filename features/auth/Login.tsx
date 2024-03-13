"use client"
import {UserLoginType, UserRegisterType} from "@/types";
import React, {ChangeEvent, useEffect, useImperativeHandle, useMemo, useState} from "react";
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
import SimpleLogin from "@/components/Application/Authentication/simple-login/App";
import {useAuth} from "@/hooks/useAuth";
import {NavbarContent} from "@nextui-org/navbar";
import {useAppDispatch} from "@/hooks/store";
import {useLoginMutation, useRegisterMutation} from "@/features/api/authApi";

export const Login = () => {
    const {currentUser} = useAuth()

    const dispatch = useAppDispatch()
    const [selected, setSelected] = useState("login");

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

    const [login, {isLoading}] = useLoginMutation()
    const [register] = useRegisterMutation();

    const [isVisible, setIsVisible] = useState(false);

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
    const Login = async () => {
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
                            <SimpleLogin/>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
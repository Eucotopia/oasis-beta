import React, {useEffect, useState} from "react";
import {Button, Link, Spacer} from "@nextui-org/react";
import {Icon, type IconProps} from "@iconify/react";
import GitHubCalendar from "react-github-calendar";
import SettingTable from "@/components/Application/Cards/settings-tabs/App"
type SocialIconProps = Omit<IconProps, "icon">;
const socialItems = [
    {
        name: "Java",
        href: "https://www.java.com/en/",
        icon: (props: SocialIconProps) => <Icon {...props} icon={"ri:java-line"}/>,
    },
    {
        name: "Swift",
        href: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/",
        icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:swift"}/>,
    },
    {
        name: "React",
        href: "https://react.dev",
        icon: (props: SocialIconProps) => <Icon {...props} icon={"nonicons:react-16"}/>,
    },
    {
        name: "Typescript",
        href: "https://www.typescriptlang.org/",
        icon: (props: SocialIconProps) => <Icon {...props} icon={"simple-icons:typescript"}/>,
    },
    {
        name: "Mysql",
        href: "https://www.mysql.com",
        icon: (props: SocialIconProps) => <Icon {...props} icon={"tabler:brand-mysql"}/>,
    },
    {
        name: "SpringBoot",
        href: "https://spring.io/projects/spring-boot",
        icon: (props: SocialIconProps) => <Icon {...props} icon={"simple-icons:springboot"}/>,
    },
    {
        name: "Redis",
        href: "https://redis.io/",
        icon: (props: SocialIconProps) => <Icon {...props} icon={"cib:redis"}/>,
    },
    {
        name: "RabbitMQ",
        href: "https://www.rabbitmq.com/",
        icon: (props: SocialIconProps) => <Icon {...props} icon={"simple-icons:rabbitmq"}/>,
    },
    {
        name: "Html",
        href: "https://www.w3schools.com/html/",
        icon: (props: SocialIconProps) => <Icon {...props} icon={"nonicons:html-16"}/>,
    },
    {
        name: "CSS",
        href: "https://www.w3schools.com/css/",
        icon: (props: SocialIconProps) => <Icon {...props} icon={"nonicons:css-16"}/>,
    },
];
export default function FullStack() {

    return (
        <>
            <div className={"text-center mb-10 "}>
                <h2 className="font-medium text-secondary">We&apos;re hiring!</h2>
                <h1 className="text-4xl font-bold tracking-tight text-primary-700">Full Stack Developer</h1>
                <Spacer y={4}/>
                <h2 className="text-large text-default-500 before:content-['important'] before:text-focus before:font-bold">
                    &nbsp;Don&apos;t easily embark on the path of code farmers
                </h2>
                <Spacer y={4}/>
                <div className={"flex flex-row gap-8 justify-center"}>
                    {socialItems.map((item) => (
                        <Link key={item.name} isExternal className="text-default-900 gap-8" href={item.href}>
                            <span className="sr-only">{item.name}</span>
                            <item.icon aria-hidden="true" className="w-6" width={24}/>
                        </Link>
                    ))}
                </div>
                <Spacer y={6}/>
                <div className="flex w-full gap-2 justify-center">
                    <Button
                        disableAnimation
                        className="bg-gradient-to-br from-foreground to-foreground-600 font-medium text-background"
                        endContent={<Icon icon="lucide:chevron-right" width={24} />}
                        size="lg"
                        variant="shadow"
                    >
                        Learn More
                    </Button>
                </div>
                <Spacer y={8}/>
                <GitHubCalendar username={"Eucotopia"} year={new Date().getFullYear()}/>
                <Spacer y={8}/>
                <SettingTable className={'bg-background border-none shadow-none'}/>
            </div>
        </>
    );
}

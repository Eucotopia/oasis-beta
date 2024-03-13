import NextLink from "next/link";
import {Link} from "@nextui-org/link";
import {Snippet} from "@nextui-org/snippet";
import {Code} from "@nextui-org/code"
import {button as buttonStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import {GithubIcon} from "@/components/icons";
import {title} from "@/components/primitives";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";

export default function Home() {
    return (
        <section
            className="flex flex-col items-center justify-center gap-4 -mt-10 overflow-hidden">
            <div
                className="flex flex-row justify-end items-start h-screen w-screen bg-index-bg-image bg-no-repeat bg-left-4">
                <div className={"flex flex-col mr-36 tracking-wide leading-10 mt-40"}>
                    <h1 className={title({color: "yellow"})}>You brought life's breath,</h1>
                    <h1 className={title({color: "cyan", class: "mt-5"})}>and I found my reason to be.</h1>
                </div>
            </div>
            <div className="mt-8">
                <Card>
                    <CardHeader>
                        adf
                    </CardHeader>
                    <CardBody>123123213</CardBody>
                    <CardFooter>adfasdfsdf</CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        adf
                    </CardHeader>
                    <CardBody>123123213</CardBody>
                    <CardFooter>adfasdfsdf</CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        adf
                    </CardHeader>
                    <CardBody>123123213</CardBody>
                    <CardFooter>adfasdfsdf</CardFooter>
                </Card>
                <Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
                </Snippet>
            </div>
        </section>
    );
}

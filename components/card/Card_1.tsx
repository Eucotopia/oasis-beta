import {Card,Image,CardBody} from "@nextui-org/react";
import {Icon} from "@iconify/react";

const Card_1 = () => {
    return (
        <>
            <Card className={"max-w-[250px] h-full bg-black flex flex-col items-center"}>
                <Image
                    width={250}
                    height={100}
                    radius={"none"}
                    className={'object-cover mx-auto'}
                    alt="NextUI hero Image"
                    src="/img_1.png"
                />
                <CardBody className={"flex flex-col text-white text-center items-center"}>
                    <div className={"font-bold text-2xl"}>
                        Master No-Code Web Design with Framer
                    </div>
                    <p className={'text-tiny text-gray-400 mt-4'}>
                        2o videos - 3 hours
                    </p>
                    <p className={'text-tiny text-gray-400 mt-4'}>
                        <Icon icon="ph:star-fill"/>
                    </p>
                </CardBody>
            </Card>
        </>
    )
}
export default Card_1

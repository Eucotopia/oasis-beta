import {Card, Image, CardBody} from "@nextui-org/react";
import {Icon} from "@iconify/react";

const Colum = () => {
    return (
        <>
            <Card
                className={"max-w-[250px] h-full bg-blue-300 backdrop-blur-3xl drop-shadow-2xl  flex flex-col items-center"}>
                <Image
                    className={'max-h-[150px]'}
                    width={250}
                    height={100}
                    radius={"none"}
                    alt="NextUI hero Image"
                    src="/image/iiiiii.svg"
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
export default Colum

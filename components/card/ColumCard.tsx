import Colum from "@/components/card/Colum";
import {Card, CardBody, Image, Listbox, ListboxItem} from "@nextui-org/react";
import {AddNoteIcon, EditDocumentIcon} from "@/components/icons";
import clsx from "clsx";
import {ColumnType} from "@/types";
import {Icon} from "@iconify/react";
import RatingRadioGroup from "@/components/rating/rating-radio-group";
import React from "react";

const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
const ColumCard = ({isReverse, columns}: { isReverse: boolean, columns: ColumnType }) => {
    if (columns === undefined) {
        return null
    }
    return (
        <>
            <div
                className={clsx('flex p-8 rounded-2xl gap-4 max-h-[380px] py-6 px-4 bg-content1',
                    {"flex-row-reverse ": isReverse})}>
                <div className={"flex flex-col text-black max-w-[220px] "}>
                    <p className={"text-tiny text-gray-400"}>FEATURED COURSE</p>
                    <div className={'max-w-[270px] overflow-y-scroll overflow-x-hidden text-foreground'}>
                        <Listbox variant="flat" aria-label="Listbox menu with descriptions">
                            {
                                columns.posts?.map((post, index) => (
                                    <ListboxItem
                                        key={index}
                                        value={String(post.id)}
                                        description="Create a new file"
                                        startContent={<AddNoteIcon className={iconClasses}/>}
                                    >
                                        {post.title}
                                    </ListboxItem>
                                ))
                            }
                        </Listbox>
                    </div>
                </div>
                <Card
                    className={"max-w-[220px] h-full flex flex-col items-center"}>
                    <Image
                        className={'max-h-[150px]'}
                        width={250}
                        height={100}
                        radius={"none"}
                        alt="NextUI hero Image"
                        src={columns.avatar}
                    />
                    <CardBody className={"flex flex-col text-white text-center items-center "}>
                        <div className={"font-bold text-2xl"}>
                            {columns.name}
                        </div>
                        <p className={'text-tiny text-gray-400 mt-4 line-clamp-3'}>
                            {columns.description}
                        </p>
                        <p className={'text-tiny text-gray-400 mt-4 flex flex-row'}>
                            <RatingRadioGroup value={String(columns.rating)} size={"sm"}/>
                        </p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}
export default ColumCard
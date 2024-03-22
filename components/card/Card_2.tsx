import Card_1 from "@/components/card/Card_1";
import {Icon} from "@iconify/react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {AddNoteIcon, EditDocumentIcon} from "@/components/icons";

const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
const Card_2 = () => {
    return (
        <>
            <div
                className={'flex flex-row  backdrop-blur-2xl rounded-2xl bg-gradient-to-br from-default-300 to-default-500 gap-4 max-h-[380px] shadow-2xl py-6 px-4'}>
                <div className={"flex flex-col text-black"}>
                    <p className={"text-tiny text-gray-400"}>FEATURED COURSE</p>
                    <div className={'max-w-[270px] overflow-scroll scrollbar-hide scroll-smooth'}>
                        <Listbox variant="flat" aria-label="Listbox menu with descriptions">
                            <ListboxItem
                                key="new"
                                description="Create a new file"
                                startContent={<AddNoteIcon className={iconClasses}/>}
                            >
                                New file
                            </ListboxItem>
                            <ListboxItem
                                key="copy"
                                description="Copy the file link"
                                startContent={<EditDocumentIcon className={iconClasses}/>}
                            >
                                Copy link
                            </ListboxItem>
                            <ListboxItem
                                key="edit"
                                description="Allows you to edit the file"
                                startContent={<EditDocumentIcon className={iconClasses}/>}
                            >
                                Edit file
                            </ListboxItem>
                            <ListboxItem
                                key="delete"
                                className="text-danger"
                                description="Permanently delete the file"
                                startContent={<EditDocumentIcon className={iconClasses}/>}
                            >
                                Delete file
                            </ListboxItem>
                            <ListboxItem
                                key="new"
                                description="Create a new file"
                                startContent={<AddNoteIcon className={iconClasses}/>}
                            >
                                New file
                            </ListboxItem>
                            <ListboxItem
                                key="copy"
                                description="Copy the file link"
                                startContent={<EditDocumentIcon className={iconClasses}/>}
                            >
                                Copy link
                            </ListboxItem>
                            <ListboxItem
                                key="edit"
                                description="Allows you to edit the file"
                                startContent={<EditDocumentIcon className={iconClasses}/>}
                            >
                                Edit file
                            </ListboxItem>
                            <ListboxItem
                                key="delete"
                                className="text-danger"
                                description="Permanently delete the file"
                                startContent={<EditDocumentIcon className={iconClasses}/>}
                            >
                                Delete file
                            </ListboxItem>
                        </Listbox>
                    </div>
                </div>
                <Card_1/>
            </div>
        </>
    )
}
export default Card_2
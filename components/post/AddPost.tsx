import React, {ChangeEvent, useEffect, useState} from "react";
import {
    Modal,
    ModalContent,
    Button,
    useDisclosure,
    Divider, Input, CardBody, CardFooter, cn, Card, Link
} from "@nextui-org/react";
import {PostDTO} from "@/types";
import {useAddBlogMutation} from "@/features/api/postApi";
import {useGetCategoriesQuery} from "@/features/api/categoryApi";
import {Icon} from "@iconify/react";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";

const AddPost = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [addBlog, isLoading] = useAddBlogMutation()
    const [open, setOpen] = useState<boolean>(false)
    const handleChildContent = (html: string) => {
        setPostState((pre) => ({
            ...pre,
            content: html
        }))
    }
    const [isSelected, setIsSelected] = React.useState(false);
    // const {editor, characterCount} = useBlockEditor({onContentChange: handleChildContent})
    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setPostState((prev) => ({
        ...prev,
        [name]: value
    }))

    const [postState, setPostState] = useState<PostDTO>({
        title: "",
        content: "",
        summary: "",
        isTop: false,
        cover: "https://nextui.org/images/album-cover.png",
        categoryId: ''
    })
    const HandeCategoryIdChange = (id: string) => {
        setPostState(prevState => ({
            ...prevState,
            categoryId: id
        }))
    }
    const onIsTopChange = () => {
        setPostState(prevState => ({
            ...prevState,
            isTop: !prevState.isTop
        }))
    }

    const {data: categories} = useGetCategoriesQuery()
    // if (!editor) {
    //     return undefined
    // }
    // const addPost = async () => {
    //     const updatedPostState = {
    //         ...postState,
    //         content: editor?.getHTML()
    //     };
    //     const blog = await addBlog(updatedPostState).unwrap()
    //     if (blog.code === "200") {
    //         setPostState(prevState => ({
    //             title: "",
    //             content: "",
    //             summary: "",
    //             isTop: true,
    //             cover: "https://nextui.org/images/album-cover.png",
    //             categoryId: ''
    //         }))
    //     }
    // }
    const {editor, characterCount} = useBlockEditor()
    if (!editor) {
        return null
    }
    return (
        <>
            <Button onPress={onOpen}>Add new</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop={"blur"}
                size={"5xl"}
                scrollBehavior={"inside"}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <Card className="relative w-full pb-[120px]">
                                <Button
                                    className="absolute right-4 top-4 z-10"
                                    isIconOnly={open}
                                    radius="full"
                                    size="sm"
                                    onPress={() => setOpen((prev) => !prev)}
                                >
                                    {open ? <Icon icon="ci:close-sm" width={24}/> : "Apply"}
                                </Button>
                                <CardBody
                                    className="relative min-h-[300px] bg-gradient-to-br from-content1 to-default-100/50 p-8 before:inset-0 before:h-full before:w-full before:content-['']">
                                    <BlockEditor height={"300px"} editor={editor}/>
                                </CardBody>
                                <CardFooter
                                    className={cn(
                                        "absolute bottom-0 h-[120px] overflow-visible bg-content1 px-6 duration-300 ease-in-out transition-height",
                                        {
                                            "h-full": open,
                                            "border-t-1 border-default-100": !open,
                                        },
                                    )}
                                >
                                    {
                                        open ? (
                                            <div
                                                className="h-full w-full items-start justify-center overflow-scroll px-4 pb-24 pt-20">
                                                <div className="flex flex-col gap-2">
                                                    <Input
                                                        autoFocus
                                                        fullWidth
                                                        aria-label="Affiliate code"
                                                        classNames={{
                                                            inputWrapper: "group-data-[focus-visible=true]:outline-foreground",
                                                        }}
                                                        label="Enter post title"
                                                        labelPlacement="outside"
                                                        placeholder="E.g. ACME123"
                                                    />
                                                </div>
                                                <Divider className="mb-8 mt-10"/>
                                                <Button color="danger" variant="light" onPress={onClose}>
                                                    Close
                                                </Button>
                                                <Button color="primary" onPress={onClose}>
                                                    Action
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className={"flex flex-row justify-between w-full"}>
                                                <div className={"flex flex-col"}>
                                                    <p className="text-small text-default-500">{characterCount.words()}&nbsp;words</p>
                                                    <p className="text-small text-default-500">{characterCount.characters()}&nbsp;characters</p>
                                                </div>
                                                <div className="mt-1 flex w-full items-center justify-end gap-2 px-1">
                                                    <Icon
                                                        className="text-default-400 dark:text-default-300"
                                                        icon="la:markdown"
                                                        width={20}
                                                    />
                                                    <p className="text-tiny text-default-400 dark:text-default-300">
                                                        <Link
                                                            className="text-tiny text-default-500"
                                                            color="foreground"
                                                            href="https://guides.github.com/features/mastering-markdown/"
                                                            rel="noreferrer"
                                                            target="_blank"
                                                        >
                                                            Markdown
                                                            <Icon className="[&>path]:stroke-[2px]"
                                                                  icon="solar:arrow-right-up-linear"/>
                                                        </Link>
                                                        &nbsp;supported.
                                                    </p>
                                                </div>

                                            </div>
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

export default AddPost

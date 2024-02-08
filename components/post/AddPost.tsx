import React, {ChangeEvent, useEffect, useState} from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Divider, Switch
} from "@nextui-org/react";
import {BlockEditor} from "@/extentions/tiptap/components/BlockEditor/BlockEditor";
import {PostDTO} from "@/types";
import {useAddBlogMutation} from "@/features/api/postApi";
import {Textarea} from "@nextui-org/input";
import {useBlockEditor} from "@/extentions/tiptap/hooks/useBlockEditor";

import ChoseCategory from "./ChoseCategory";
import {useGetCategoriesQuery} from "@/features/api/categoryApi";
import ChoseTag from "./ChoseTag";

const AddPost = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [addBlog, isLoading] = useAddBlogMutation()

    const handleChildContent = (html: string) => {
        setPostState((pre) => ({
            ...pre,
            content: html
        }))
    }
    const [isSelected, setIsSelected] = React.useState(false);
    const {editor, characterCount} = useBlockEditor({onContentChange: handleChildContent})
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
    if (!editor) {
        return undefined
    }
    const addPost = async () => {
        const updatedPostState = {
            ...postState,
            content: editor?.getHTML()
        };
        const blog = await addBlog(updatedPostState).unwrap()
        if (blog.code === "200") {
            setPostState(prevState => ({
                title: "",
                content: "",
                summary: "",
                isTop: true,
                cover: "https://nextui.org/images/album-cover.png",
                categoryId: ''
            }))
        }
    }
    return (
        <>
            <Button onPress={onOpen}>Add new</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={false}
                backdrop={"blur"}
                size={"5xl"}
                scrollBehavior={"outside"}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Keep Writing</ModalHeader>
                            <ModalBody>
                                <p className={"font-bold text-medium "}>Content</p>
                                <BlockEditor editor={editor}/>
                            </ModalBody>
                            <ModalFooter className={"flex flex-col"}>
                                <div className={"flex flex-row justify-between gap-10"}>
                                    <div className={'basis-1/2'}>
                                        <p className={"font-bold text-medium"}>Title</p>
                                        <Textarea
                                            variant="flat"
                                            name={"title"}
                                            onChange={handleChange}
                                            labelPlacement="outside"
                                            placeholder="Enter your title"
                                            className="mt-3"
                                            size={"md"}
                                        />
                                    </div>
                                    <div className={'basis-1/2'}>
                                        <p className={"font-bold text-medium"}>Summary</p>
                                        <Textarea
                                            variant="flat"
                                            name={"summary"}
                                            onChange={handleChange}
                                            labelPlacement="outside"
                                            placeholder="Enter your summary"
                                            className="mt-3"
                                            size={"md"}
                                        />
                                    </div>
                                </div>
                                <div className={"flex flex-row justify-between gap-10"}>

                                    <div>
                                        <p className={"font-bold text-medium mb-4"}>Category</p>
                                        <ChoseCategory category={categories?.data}
                                                       setCategoryId={HandeCategoryIdChange}/>
                                    </div>
                                    <div>
                                        <p className={"font-bold text-medium mb-4 mt-1"}>IsTop</p>
                                        <Switch isSelected={postState.isTop} onValueChange={onIsTopChange}
                                                color="secondary">Top</Switch>
                                    </div>
                                    <div>
                                        <p className={"font-bold text-medium mb-4 mt-1"}>Tag</p>
                                        <div className={"flex flex-row gap-2 flex-nowrap"}>
                                            {
                                                categories?.data.map((item, index) => (
                                                    <ChoseTag key={index} tag={item.name}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <Divider/>
                                <div className={"flex flex-row justify-between"}>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose} onClick={addPost}>
                                        Action
                                    </Button>
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddPost

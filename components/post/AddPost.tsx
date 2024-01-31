import React, {useState} from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    CardHeader, CardBody, CardFooter, Divider
} from "@nextui-org/react";
import {BlockEditor} from "@/extentions/tiptap/components/BlockEditor/BlockEditor";
import {PostDTO} from "@/types";
import {useAddBlogMutation} from "@/features/api/postApi";
import {Input, Textarea} from "@nextui-org/input";

export default function App() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [addBlog, isLoading] = useAddBlogMutation()
    const [postState, setPostState] = useState<PostDTO>({
        title: "nn",
        content: "ads",
        summary: "asdasd",
        isTop: 1,
        cover: "https://nextui.org/images/album-cover.png"
    })
    const handleChildContent = (html: string) => {
        setPostState((pre) => ({
            ...pre,
            content: html
        }))
    }
    const addPost = async () => {
        const blog = await addBlog(postState).unwrap()
        if (blog.code === "200") {
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
                            <ModalHeader className="flex flex-col gap-1">Add Post</ModalHeader>
                            <ModalBody>
                                <BlockEditor onContentChange={handleChildContent}/>
                            </ModalBody>
                            <Divider/>
                            <ModalFooter className={"flex flex-col"}>
                                <div>
                                    <Input
                                        variant={"bordered"}
                                        size={"sm"}
                                        placeholder={'请输入标题'}/>
                                </div>
                                <div>
                                    <Textarea
                                        label="Description"
                                        variant="bordered"
                                        labelPlacement="outside"
                                        placeholder="Enter your description"
                                        defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                        className="max-w-xs"
                                    />
                                </div>
                                <div>

                                </div>
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

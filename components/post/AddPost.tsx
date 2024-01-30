import React, {useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {BlockEditor} from "@/extentions/tiptap/components/BlockEditor/BlockEditor";
import {PostDTO} from "@/types";
import {useAddBlogMutation} from "@/features/api/postApi";

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
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} onClick={addPost}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

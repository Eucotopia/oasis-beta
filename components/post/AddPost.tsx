import React, {useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {BlockEditor} from "@/extentions/tiptap/components/BlockEditor/BlockEditor";
import {PostDTO} from "@/types";

export default function App() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [postState, setPostState] = useState<PostDTO>({
        title: "",
        content: "",
        summary: "",
        isTop: false,
        cover: "https://nextui.org/images/album-cover.png"
    })
    const handleChildContent = (html: string) => {
        setPostState((pre) => ({
            ...pre,
            content: html
        }))
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
                                <Button color="primary" onPress={onClose}>
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

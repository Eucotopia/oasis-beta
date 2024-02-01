import React, {ChangeEvent, useState} from "react";
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
import {Input, Textarea} from "@nextui-org/input";
import {useBlockEditor} from "@/extentions/tiptap/hooks/useBlockEditor";

export default function App() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [addBlog, isLoading] = useAddBlogMutation()

    const handleChildContent = (html: string) => {
        setPostState((pre) => ({
            ...pre,
            content: html
        }))
    }
    const {editor, characterCount} = useBlockEditor({onContentChange: handleChildContent})
    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setPostState((prev) => ({
        ...prev,
        [name]: value
    }))
    const addPost = async () => {
        const blog = await addBlog(postState).unwrap()
        if (blog.code === "200") {
        }
    }
    const [postState, setPostState] = useState<PostDTO>({
        title: "",
        content: "",
        summary: "",
        isTop: false,
        cover: "https://nextui.org/images/album-cover.png"
    })
    const onIsTopChange = () => {
        setPostState((pre) => ({
            ...pre,
            isTop: !pre.isTop
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
                                <BlockEditor editor={editor}/>
                            </ModalBody>
                            <ModalFooter className={"flex flex-col"}>
                                <Divider/>
                                <div>
                                    <Input
                                        value={postState.title}
                                        variant={"bordered"}
                                        onChange={handleChange}
                                        name={"title"}
                                        size={"sm"}
                                        placeholder={'请输入标题'}/>
                                </div>
                                <div>
                                    <Textarea
                                        label="Description"
                                        variant="bordered"
                                        name={"summary"}
                                        onChange={handleChange}
                                        labelPlacement="outside"
                                        placeholder="Enter your description"
                                        className="max-w-xs"
                                    />
                                </div>
                                <div>
                                    <Switch isSelected={postState.isTop} onValueChange={onIsTopChange}
                                            color="secondary">置顶</Switch>
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

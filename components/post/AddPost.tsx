import React, {ChangeEvent, useEffect, useState} from "react";
import {
    Modal,
    ModalContent,
    Button,
    useDisclosure,
    Divider, Input, CardBody, CardFooter, cn, Card, Link, Autocomplete, AutocompleteItem, Image, Switch
} from "@nextui-org/react";
import {PostDTO} from "@/types";
import {useAddBlogMutation} from "@/features/api/postApi";
import {useGetCategoriesQuery, useGetRootCategoriesQuery} from "@/features/api/categoryApi";
import {Icon} from "@iconify/react";
import {BlockEditor} from "@/components/tiptap/BlockEditor";
import {useBlockEditor} from "@/components/tiptap/useBlockEditor";
import {CheckboxGroup} from "@nextui-org/checkbox";
import TagGroupItem from "@/components/tag-group-filter/tag-group-item";
import {PlusIcon} from "@/components/icons";
import {useUploadMutation} from "@/features/api/fileApi";
import RatingRadioGroup from "@/components/rating/rating-radio-group";
import {useGetTagQuery} from "@/features/api/tagApi";

const AddPost = () => {
    const {data: tags} = useGetTagQuery()
    const {data: rootCategories} = useGetRootCategoriesQuery()
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setSelectedFile(e.target.files[0]);
    };
    const [uploadFile] = useUploadMutation();

    const [selectedFile, setSelectedFile] = useState(null);

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            const imageUrl = await uploadFile(formData).unwrap();
            console.log(imageUrl)
            // @ts-ignore
            handleChange({target: {name: 'cover', value: imageUrl.data}})
        }
    };
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
    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setPostState((prev) => ({
        ...prev,
        [name]: value
    }))
    const [postState, setPostState] = useState<PostDTO>({
        title: "",
        content: "",
        summary: "",
        isTop: false,
        cover: "",
        categoryId: '',
        rating: "5",
        isPrivate: false,
        tagId: []
    })
    const setRating = (value: string) => {
        // @ts-ignore
        handleChange({target: {name: 'rating', value: value}})
    }
    const handeCategoryIdChange = (id: string) => {
        setPostState(prevState => ({
            ...prevState,
            categoryId: id
        }))
    }
    const handeTagChange = (id: string[]) => {
        setPostState(prevState => ({
            ...prevState,
            tagId: id
        }))
    }
    const onIsTopChange = () => {
        setPostState(prevState => ({
            ...prevState,
            isTop: !prevState.isTop
        }))
    }
    const onIsPrivateChange = () => {
        setPostState(prevState => ({
            ...prevState,
            isPrivate: !prevState.isPrivate
        }))
    }
    const {data: categories} = useGetCategoriesQuery()
    // if (!editor) {
    //     return undefined
    // }
    const {editor, characterCount} = useBlockEditor()
    const addPost = async () => {
        const updatedPostState = {
            ...postState,
            content: editor?.getHTML()
        };
        const blog = await addBlog(updatedPostState).unwrap()
        setPostState(prevState => ({
            title: "",
            content: "",
            summary: "",
            isTop: false,
            cover: "",
            categoryId: '',
            rating: "5",
            isPrivate: false,
            tagId: []
        }))
        setSelectedFile(null)
    }
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
                                                {/*cover*/}
                                                <div>
                                                    <input type="file" onChange={handleFileChange} name="image"
                                                           className="hidden"
                                                           id="upload-input"/>
                                                    <label htmlFor="upload-input"
                                                           className="rounded-full w-20 h-20 bg-gray-200 flex items-center justify-center cursor-pointer">
                                                        {
                                                            selectedFile && postState.cover ? (
                                                                    <Image src={postState.cover}
                                                                           height={100}
                                                                           radius={"full"}
                                                                           alt=""/>
                                                                )
                                                                : (<PlusIcon/>)
                                                        }
                                                    </label>
                                                    <input type={'file'} onChange={handleFileChange} name={"image"}
                                                           className={"rounded-full w-20 h-full"}/>
                                                    <button onClick={handleUpload}>上传图片</button>
                                                </div>
                                                <div className="flex flex-row gap-6">
                                                    <Input
                                                        autoFocus
                                                        fullWidth
                                                        aria-label="Affiliate code"
                                                        name={"title"}
                                                        onChange={handleChange}
                                                        classNames={{
                                                            inputWrapper: "group-data-[focus-visible=true]:outline-foreground",
                                                        }}
                                                        label="Enter post title"
                                                        labelPlacement="outside"
                                                        placeholder="E.g. ACME123"
                                                    />
                                                    <Input
                                                        autoFocus
                                                        fullWidth
                                                        aria-label="Affiliate code"
                                                        classNames={{
                                                            inputWrapper: "group-data-[focus-visible=true]:outline-foreground",
                                                        }}
                                                        label="Enter post summary"
                                                        name={"summary"}
                                                        onChange={handleChange}
                                                        labelPlacement="outside"
                                                        placeholder="E.g. ACME123"
                                                    />
                                                </div>
                                                <Switch isSelected={postState.isTop} onValueChange={onIsTopChange}
                                                        name={"isTop"}>
                                                    isTop
                                                </Switch>
                                                <Switch isSelected={postState.isPrivate}
                                                        onValueChange={onIsPrivateChange}
                                                        name={"isPrivate"}>
                                                    isPrivate
                                                </Switch>
                                                <Autocomplete
                                                    defaultItems={rootCategories?.data}
                                                    label="Favorite Animal"
                                                    placeholder="Search an animal"
                                                    className="max-w-xs"
                                                    onSelectionChange={handeCategoryIdChange as any}
                                                >
                                                    {(category) => <AutocompleteItem
                                                        key={category.id}>{category.name}</AutocompleteItem>}
                                                </Autocomplete>
                                                <div className="my-auto flex max-w-lg flex-col gap-2">
                                                    <h3 className="text-medium font-medium leading-8 text-default-600">Tags</h3>
                                                    <CheckboxGroup aria-label="Select amenities" className="gap-1"
                                                                   orientation="horizontal"
                                                                   value={postState.tagId}
                                                                   onChange={handeTagChange as any}>
                                                        {
                                                            tags?.data.map((item, index) => {
                                                                return (
                                                                    <TagGroupItem icon="ic:baseline-apple"
                                                                                  value={String(item.id)} key={item.id}>
                                                                        {item.name}
                                                                    </TagGroupItem>
                                                                )
                                                            })
                                                        }
                                                    </CheckboxGroup>
                                                    <RatingRadioGroup className="mt-2 w-72" value={postState.rating}
                                                                      setValue={setRating}/>
                                                    <p>{postState.cover}</p>
                                                </div>
                                                <Divider className="mb-8 mt-10"/>

                                                <Button color="danger" variant="light" onPress={onClose}>
                                                    Close
                                                </Button>
                                                <Button color="primary" onPress={onClose} onClick={addPost}>
                                                    Publish
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

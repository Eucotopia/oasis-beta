import React, {ChangeEvent, useState} from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Chip,
    User,
    Pagination,
    Selection,
    ChipProps,
    SortDescriptor, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Image, Textarea
} from "@nextui-org/react";
import {columns, users, statusOptions} from "./data2";
import RatingRadioGroup from "@/components/rating/rating-radio-group";

import {ChevronDownIcon} from "../icons";
import {VerticalDotsIcon} from "../icons";
import {PlusIcon} from "../icons";
import {SearchIcon} from "../icons";
import {capitalize} from "../utils";
import {useUploadMutation} from "@/features/api/fileApi";
import {ProductItem, useAddProductMutation} from "@/features/api/productApi";


const statusColorMap: Record<string, ChipProps["color"]> = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

type User = typeof users[0];

export default function Equipment() {
    const [product, setProduct] = useState<ProductItem>({
        name: '',
        href: '',
        price: '',
        rating: "1",
        description: '',
        imageSrc: '',
        information: '',
    })
    const [addProduct] = useAddProductMutation()
    const handleProductChange = ({
                                     target: {
                                         name,
                                         value
                                     }
                                 }: ChangeEvent<HTMLInputElement>) => setProduct((prev) => ({
        ...prev,
        [name]: value
    }))
    const [uploadFile, {isLoading}] = useUploadMutation();
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setSelectedFile(e.target.files[0]);
    };
    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            const imageUrl = await uploadFile(formData).unwrap();
            console.log(imageUrl.data)
            // @ts-ignore
            handleProductChange({target: {name: 'imageSrc', value: imageUrl.data}})
        }
    };
    const addProductHandler = async () => {
        console.log(product)
        await addProduct(product).unwrap()
        setProduct({
            name: '',
            href: '',
            price: '',
            rating: "1",
            description: '',
            imageSrc: '',
            information: '',
        })
    }
    const setRating = (value: string) => {
        // @ts-ignore
        handleProductChange({target: {name: 'rating', value: value}})
    }
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
        column: "age",
        direction: "ascending",
    });

    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...users];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.name.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(statusFilter).includes(user.status),
            );
        }

        return filteredUsers;
    }, [users, filterValue, statusFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a: User, b: User) => {
            const first = a[sortDescriptor.column as keyof User] as number;
            const second = b[sortDescriptor.column as keyof User] as number;
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
        const cellValue = user[columnKey as keyof User];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{radius: "lg", src: user.avatar}}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue}</p>
                        <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <VerticalDotsIcon className="text-default-300"/>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem>View</DropdownItem>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        startContent={<SearchIcon/>}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small"/>} variant="flat">
                                    Status
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={setStatusFilter}
                            >
                                {statusOptions.map((status) => (
                                    <DropdownItem key={status.uid} className="capitalize">
                                        {capitalize(status.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small"/>} variant="flat">
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Button color="primary" endContent={<PlusIcon/>} onPress={onOpen}>
                            Add New
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {users.length} users</span>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onSearchChange,
        onRowsPerPageChange,
        users.length,
        hasSearchFilter,
    ]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
              ? "All items selected"
              : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
                <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                        Previous
                    </Button>
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
                        Next
                    </Button>
                </div>
            </div>
        );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    return (
        <>
            <Modal
                isOpen={isOpen}
                placement={"center"}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add New Equipment</ModalHeader>
                            <ModalBody>
                                {/*上传图片*/}
                                <div>
                                    <input type="file" onChange={handleFileChange} name="image" className="hidden"
                                           id="upload-input"/>
                                    <label htmlFor="upload-input"
                                           className="rounded-full w-20 h-20 bg-gray-200 flex items-center justify-center cursor-pointer">
                                        {
                                            selectedFile && product.imageSrc ? (
                                                    <Image src={product.imageSrc} isLoading={isLoading} height={100}
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
                                {/*name*/}
                                <div>
                                    <h3 className="text-medium font-medium leading-8 text-default-600">name</h3>
                                    <Input type={'text'} placeholder={"please type equipment name"} variant={"faded"}
                                           color={"default"} name={"name"} onChange={handleProductChange}/>
                                </div>
                                {/*href*/}
                                <div>
                                    <h3 className="text-medium font-medium leading-8 text-default-600">href</h3>
                                    <Input type={'text'} placeholder={"please type equipment address"} variant={"faded"}
                                           color={"default"} name={"href"} onChange={handleProductChange}/>
                                </div>
                                {/*price*/}
                                <div>
                                    <h3 className="text-medium font-medium leading-8 text-default-600">price</h3>
                                    <Input type={'number'} placeholder={"please type equipment price"} variant={"faded"}
                                           color={"default"} name={"price"} onChange={handleProductChange}/>
                                </div>
                                {/*description*/}
                                <div>
                                    <Textarea
                                        isRequired
                                        label="Description"
                                        labelPlacement="outside"
                                        placeholder="Enter your description"
                                        className="max-w-xs"
                                        name="description"
                                        onChange={handleProductChange}
                                    />
                                </div>
                                {/*information*/}
                                <div>
                                    <Textarea
                                        isRequired
                                        label="Information"
                                        labelPlacement="outside"
                                        placeholder="Enter your information"
                                        className="max-w-xs"
                                        name="information"
                                        onChange={handleProductChange}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-medium font-medium leading-8 text-default-600">Property
                                        Rating</h3>
                                    <RatingRadioGroup className="mt-2 w-72" value={product.rating}
                                                      setValue={setRating}/>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} onClick={addProductHandler}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )
                    }
                </ModalContent>
            </Modal>
            <Table
                aria-label="Example table with custom cells, pagination and sorting"
                isHeaderSticky
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                classNames={{
                    wrapper: "max-h-[382px]",
                }}
                selectedKeys={selectedKeys}
                selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={"No users found"} items={sortedItems}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
        ;
}

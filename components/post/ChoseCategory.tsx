import React from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {Category} from "@/types";

export default function App({category, setCategoryId}: {
    category: Category[] | undefined,
    setCategoryId: (id: string) => void
}) {
    const [value, setValue] = React.useState<string>('');
    const [selectedKey, setSelectedKey] = React.useState<React.Key | null>(null);

    const onSelectionChange = (key: React.Key) => {
        setSelectedKey(key);
        setCategoryId(key.toLocaleString())
    };


    return (
        <div className="flex w-full flex-col">
            <Autocomplete
                label="Select Category"
                variant="flat"
                defaultItems={category}
                className="max-w-xs"
                allowsCustomValue={true}
                onSelectionChange={onSelectionChange}
            >
                {(item) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
            </Autocomplete>
        </div>
    );
}

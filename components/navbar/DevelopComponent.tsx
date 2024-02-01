import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ClearFormat} from "@/extentions/tiptap/lib/svg/icon";

export default function App() {
    return (
        <Listbox
            aria-label="User Menu"
            onAction={(key) => alert(key)}
            className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible  rounded-medium"
            itemClasses={{
                base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3  data-[hover=true]:bg-default-100/80 py-4",
            }}
        >
            <ListboxItem
                key="issues"
                startContent={<ClearFormat/>}

            >
                Android
            </ListboxItem>
            <ListboxItem
                key="pull_requests"
                startContent={<ClearFormat/>}

            >
                Apple
            </ListboxItem>
            <ListboxItem
                key="discussions"
                startContent={<ClearFormat/>}

            >
                Web
            </ListboxItem>
        </Listbox>
    );
}

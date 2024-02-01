import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ClearFormat} from "@/extentions/tiptap/lib/svg/icon";

export default function App() {
    return (
        <Listbox
            aria-label="User Menu"
            onAction={(key) => alert(key)}
            className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
            itemClasses={{
                base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
            }}
        >
            <ListboxItem
                key="issues"
                startContent={<ClearFormat/>}

            >
                Issues
            </ListboxItem>
            <ListboxItem
                key="pull_requests"
                startContent={<ClearFormat/>}

            >
                Pull Requests
            </ListboxItem>
            <ListboxItem
                key="discussions"
                startContent={<ClearFormat/>}

            >
                Discussions
            </ListboxItem>
            <ListboxItem
                key="actions"
                startContent={<ClearFormat/>}

            >
                Actions
            </ListboxItem>
            <ListboxItem
                key="projects"
                startContent={<ClearFormat/>}

            >
                Projects
            </ListboxItem>
            <ListboxItem
                key="releases"
                className="group h-auto py-3"
                startContent={<ClearFormat/>}

                textValue="Releases"
            >
                <div className="flex flex-col gap-1">
                    <span>Releases</span>
                    <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
                        <span className="text-tiny text-default-600">@nextui-org/react@2.0.10</span>
                        <div className="flex gap-2 text-tiny">
                            <span className="text-default-500">49 minutes ago</span>
                            <span className="text-success">Latest</span>
                        </div>
                    </div>
                </div>
            </ListboxItem>
            <ListboxItem
                key="contributors"
                startContent={<ClearFormat/>}

            >
                Contributors
            </ListboxItem>
            <ListboxItem
                key="watchers"
                startContent={<ClearFormat/>}

            >
                Watchers
            </ListboxItem>
            <ListboxItem
                key="license"
                startContent={<ClearFormat/>}

            >
                License
            </ListboxItem>
        </Listbox>
    );
}

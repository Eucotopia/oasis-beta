import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Switch} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import React, {useCallback, useMemo, useState} from "react";

export type EditLinkPopoverProps = {
    onSetLink: (link: string, openInNewTab?: boolean) => void
}

export const EditLinkPopover = ({onSetLink}: EditLinkPopoverProps) => {
    // url
    const [url, setUrl] = useState('')
    // 是否开启新标签页
    const [openInNewTab, setOpenInNewTab] = useState(false)
    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value)
    }, [])

    const isValidUrl = useMemo(() => /^(\S+):(\/\/)?\S+$/.test(url), [url])

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault()
            if (isValidUrl) {
                console.log(url, isSelected)
                onSetLink(url, isSelected)
            }
        },
        [url, isValidUrl, openInNewTab, onSetLink],
    )
    const [isSelected, setIsSelected] = useState(true)
    return (
        <>
            <Dropdown closeOnSelect={false}>
                <DropdownTrigger>
                    <Button>
                        Link
                    </Button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem isReadOnly>
                        <Input type={"text"} value={url} onChange={onChange}/>
                        <Button disabled={!isValidUrl} onClick={handleSubmit}>Set Link</Button>
                    </DropdownItem>
                    <DropdownItem isReadOnly>
                        <Switch isSelected={isSelected} onValueChange={setIsSelected}>
                            Open in new tab
                        </Switch>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {/*<Surface className="p-2">*/}
            {/*    <form onSubmit={state.handleSubmit} className="flex items-center gap-2">*/}
            {/*        <label className="flex items-center gap-2 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 cursor-text">*/}
            {/*            <Icon name="Link" className="flex-none text-black dark:text-white" />*/}
            {/*            <input*/}
            {/*                type="url"*/}
            {/*                className="flex-1 bg-transparent outline-none min-w-[12rem] text-black text-sm dark:text-white"*/}
            {/*                placeholder="Enter URL"*/}
            {/*                value={state.url}*/}
            {/*                onChange={state.onChange}*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*        <Button variant="primary" buttonSize="small" type="submit" disabled={!state.isValidUrl}>*/}
            {/*            Set Link*/}
            {/*        </Button>*/}
            {/*    </form>*/}
            {/*    <div className="mt-3">*/}
            {/*        <label className="flex items-center justify-start gap-2 text-sm font-semibold cursor-pointer select-none text-neutral-500 dark:text-neutral-400">*/}
            {/*            Open in new tab*/}
            {/*            <Toggle active={state.openInNewTab} onChange={state.setOpenInNewTab} />*/}
            {/*        </label>*/}
            {/*    </div>*/}
            {/*</Surface>*/}
        </>
    )
}

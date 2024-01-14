import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Switch} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import React, {useCallback, useMemo, useState} from "react";
import {Link} from "@nextui-org/link";

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
                    <Link size={"sm"}>
                        Link
                    </Link>
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
        </>
    )
}

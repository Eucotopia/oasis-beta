import {BubbleMenu as BaseBubbleMenu} from '@tiptap/react'
import React, {useCallback, useState} from 'react'

import {MenuProps} from '../types'
import {Link} from "@nextui-org/link";
import {Divider} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import IconComponentsMap from "@/extentions/tiptap/lib/svg/IconComponents";

export const LinkMenu = ({editor, appendTo}: MenuProps): JSX.Element => {
    const [showEdit, setShowEdit] = useState(false)

    const shouldShow = useCallback(() => {
        return editor.isActive('link')
    }, [editor])

    const {href: link, target} = editor.getAttributes('link')

    const handleEdit = useCallback(() => {
        setShowEdit(true)
    }, [])

    const onSetLink = useCallback(
        (url: string, openInNewTab?: boolean) => {
            editor
                .chain()
                .focus()
                .extendMarkRange('link')
                .setLink({href: url, target: openInNewTab ? '_blank' : ''})
                .run()
            setShowEdit(false)
        },
        [editor],
    )

    const onUnsetLink = useCallback(() => {
        editor.chain().focus().extendMarkRange('link').unsetLink().run()
        setShowEdit(false)
        return null
    }, [editor])

    const onShowEdit = useCallback(() => {
        setShowEdit(true)
    }, [])

    const onHideEdit = useCallback(() => {
        setShowEdit(false)
    }, [])

    return (
        <BaseBubbleMenu
            editor={editor}
            pluginKey="textMenu"
            shouldShow={shouldShow}
            updateDelay={0}
            tippyOptions={{
                popperOptions: {
                    modifiers: [{name: 'flip', enabled: false}],
                },
                appendTo: () => {
                    return appendTo?.current
                },
                onHidden: () => {
                    setShowEdit(false)
                },
            }}
        >
            {showEdit ? (
                <div>adfadsf</div>
                // <LinkEditorPanel initialUrl={link} initialOpenInNewTab={target === '_blank'} onSetLink={onSetLink}/>
            ) : (
                // <LinkPreviewPanel url={link} onClear={onUnsetLink} onEdit={handleEdit}/>
                // <Surface className="flex items-center gap-2 p-2">
                //     <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm underline">
                //         {url}
                //     </a>
                //     <Toolbar.Divider />
                //     <Tooltip title="Edit link">
                //         <Toolbar.Button onClick={onEdit}>
                //             <Icon name="Pen" />
                //         </Toolbar.Button>
                //     </Tooltip>
                //     <Tooltip title="Remove link">
                //         <Toolbar.Button onClick={onClear}>
                //             <Icon name="Trash2" />
                //         </Toolbar.Button>
                //     </Tooltip>
                // </Surface>
                <div>
                    <Link href={link} rel={"noopener noreferrer"} underline={"always"}>{link}</Link>
                    <Divider orientation="vertical" />
                    <Button onClick={handleEdit}>
                        {IconComponentsMap["Bold"]}
                    </Button>
                    <Button onClick={onUnsetLink}>
                        {IconComponentsMap["Bold"]}
                    </Button>
                </div>
            )}
        </BaseBubbleMenu>
    )
}

export default LinkMenu

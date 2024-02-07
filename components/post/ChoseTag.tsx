import React from "react";
import {useCheckbox, Chip, VisuallyHidden, tv} from "@nextui-org/react";

const checkbox = tv({
    slots: {
        base: "border-default hover:bg-default-200",
        content: "text-default-500"
    },
    variants: {
        isSelected: {
            true: {
                base: "border-primary bg-primary hover:bg-primary-500 hover:border-primary-500",
                content: "text-primary-foreground pl-1"
            }
        },
        isFocusVisible: {
            true: {
                base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
            }
        }
    }
})

export default function App({tag}: { tag: string }) {
    const {
        children,
        isSelected,
        isFocusVisible,
        getBaseProps,
        getLabelProps,
        getInputProps,
    } = useCheckbox({
        defaultSelected: true,
    })

    const styles = checkbox({isSelected, isFocusVisible})

    return (
        <label {...getBaseProps()}>
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <Chip
                classNames={{
                    base: styles.base(),
                    content: styles.content(),
                }}
                color="primary"
                variant="faded"
                {...getLabelProps()}
            >
                {tag}
                {/*{children ? children : isSelected ? "Enabled" : "Disabled"}*/}
            </Chip>
        </label>
    );
}

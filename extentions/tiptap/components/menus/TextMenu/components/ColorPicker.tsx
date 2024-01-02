import { HexColorPicker } from 'react-colorful'
export type ColorPickerProps = {
    color?: string
    onChange?: (color: string) => void
    onClear?: () => void
}
export const ColorPicker = ({ color, onChange, onClear }: ColorPickerProps) => {
    return(
        <>
            <HexColorPicker className="w-full" color={color || ''} onChange={onChange} />
        </>
    )
}
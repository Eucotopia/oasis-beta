import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import {selectCurrentTheme, setCurrentTheme} from '@/features/theme/themeSlice'

export const useCurrentTheme = () => {
    const currentTheme = useSelector(selectCurrentTheme)

    return useMemo(() => ({currentTheme}), [currentTheme])
}

import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getCurrentUsers } from '@/features/user/userSlice'

export const useCurrentUsers = () => {
    const currentUsers = useSelector(getCurrentUsers)

    return useMemo(() => ({ currentUsers }), [currentUsers])
}

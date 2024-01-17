import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '@/app/store'
import {UserV0} from "@/features/api/authApi";

type AuthState = {
    user: UserV0 | null
}

const slice = createSlice({
    name: 'auth',
    initialState: {user: null} as AuthState,
    reducers: {
        setCredentials: (
            state,
            {payload: {data}}: PayloadAction<{
                data: UserV0
            }>
        ) => {
            state.user = data
        },
        removeCredentials: (state) => {
            state.user = null
        }
    },
})

export const {setCredentials,removeCredentials} = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user

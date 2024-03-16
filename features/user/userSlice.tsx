import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '@/app/store'
import {UserType} from "@/types";

const slice = createSlice({
    name: 'user',
    initialState: {users: null} as { users: UserType[] | null },
    reducers: {
        setUsers: (state, {payload: {data}}: PayloadAction<{ data: UserType[] }>) => {
            state.users = data
        },
        removeUsers: (state) => {
            state.users = null
        },
        updateUser: (state, {payload: {data}}: PayloadAction<{ data: UserType }>) => {
            const updatedUsers = state.users!.map((user) =>
                user.id === data.id ? data : user
            );
            return {...state, users: updatedUsers};
        },

        removeUser: (state, {payload: {id}}: PayloadAction<{ id: number }>) => {
            state.users = state.users!.filter((user) => user.id !== id)
        },
        addUser: (state, {payload: {data}}: PayloadAction<{ data: UserType }>) => {
            state.users = [...(state.users || []), data]
        },
    },
})

export const {setUsers, removeUser, removeUsers, updateUser, addUser} = slice.actions

export default slice.reducer

export const getCurrentUsers = (state: RootState) => state.user.users

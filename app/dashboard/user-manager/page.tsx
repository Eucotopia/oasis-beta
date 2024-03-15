'use client'
import React from "react";
import {useGetUsersQuery} from "@/features/api/authApi";
import UserTable from "@/components/table/UserTable";
import {useCurrentUsers} from "@/hooks/useCurrentUsers";
import {setUsers} from "@/features/user/userSlice";
import {useAppDispatch} from "@/hooks/store";

export default function App() {
    const dispatch = useAppDispatch()
    /**
     * 1. 首先从 redux 中获取用户
     */
    const {currentUsers} = useCurrentUsers()
    const users = useGetUsersQuery(null, {skip: currentUsers !== null});
    if (currentUsers != null) {
        return <UserTable userList={currentUsers}/>
    }
    if (users.data === undefined) {
        return null
    }
    dispatch(setUsers({data: users.data?.data}))
    return <UserTable userList={users.data.data}/>
}

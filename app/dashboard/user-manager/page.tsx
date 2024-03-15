'use client'
import React from "react";
import {useGetUsersQuery} from "@/features/api/authApi";
import UserTable from "@/components/table/UserTable";

export default function App() {
    const {data} = useGetUsersQuery()
    const userList = data?.data
    if (userList === undefined) return null
    return (
        <>
            <UserTable userList={userList}/>
        </>
    );
}

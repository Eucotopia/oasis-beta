import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ResultResponse, UserLoginType, UserRegisterType} from '@/types'
import {LoginRequest} from "@/types";
import {RootState} from "@/app/store";
import {Result} from "postcss";

export interface UserV0 {
    id: number
    nickname: string
    username: string
    token: string
    image: string
}

export interface User {
    id: number
    username: string
    password: string
    registrationDate: string
    email: string
    biography: string
    profileImage: string
    roles: string[]
}


export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8082/user',
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.user?.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        // 用户登录
        login: builder.mutation<ResultResponse<UserV0>, UserLoginType>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        // 根据 ID 获取用户
        getUserById: builder.query<void, number>({
            query: (id) => ({url: `/${id}`}),
        }),
        getUsers: builder.query<ResultResponse<User[]>, void>({
            query: () => ({url: ``}),
        }),
        register: builder.mutation<ResultResponse<string>, UserRegisterType>({
            query: (body) => ({
                url: '',
                method: 'POST',
                body: body
            })
        })
    }),
})

export const {useLoginMutation, useGetUserByIdQuery, useGetUsersQuery, useRegisterMutation} = authApi
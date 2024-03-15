import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ResultResponse, UserLoginType, UserRegisterType, UserType} from '@/types'
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
    reducerPath: 'authApi',
    tagTypes: ['Auth'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/user',
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
        login: builder.mutation<ResultResponse<UserV0>, UserLoginType>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        getUserById: builder.query<void, number>({
            query: (id) => ({url: `/${id}`}),
        }),
        getUsers: builder.query<ResultResponse<UserType[]>, void>({
            query: () => ({url: ''}),
        }),
        register: builder.mutation<ResultResponse<string>, UserRegisterType>({
            query: (body) => ({
                url: '',
                method: 'POST',
                body: body
            })
        }),
        getCount: builder.query<ResultResponse<number>, void>({
            query: () => ({url: '/count'}),
        }),
        deleteUser: builder.mutation<void, number>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
        })
    }),
})

export const {useLoginMutation, useRegisterMutation, useGetCountQuery,useGetUsersQuery,useGetUserByIdQuery,useDeleteUserMutation} = authApi

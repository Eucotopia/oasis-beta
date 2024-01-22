import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ResultResponse, UserLoginType, UserRegisterType} from '@/types'
import {RootState} from "@/app/store";


export const categoryApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/category',
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
        getCount: builder.query<ResultResponse<number>, void>({
            query: () => ({url: '/count'}),
        }),
        getCategories: builder.query<ResultResponse<string[]>, void>({
            query: () => ({url: ''})
        })
    }),
})

export const {useGetCountQuery} = categoryApi

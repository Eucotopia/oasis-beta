import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Category, ResultResponse} from '@/types'
import {RootState} from "@/app/store";


export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    tagTypes: ['Category'],
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
        getCategories: builder.query<ResultResponse<Category[]>, void>({
            query: () => ({url: ''}),
        }),
        getRootCategories: builder.query<ResultResponse<Category[]>, void>({
            query: () => ({url: '/root'}),
        })
    }),
})

export const {useGetCountQuery, useGetCategoriesQuery, useGetRootCategoriesQuery} = categoryApi

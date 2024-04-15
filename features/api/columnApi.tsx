import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Category, ColumnType, ResultResponse} from '@/types'
import {RootState} from "@/app/store";


export const columnApi = createApi({
    reducerPath: 'columnApi',
    tagTypes: ['ColumnApi'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/column',
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
        getColumnById: builder.query<ResultResponse<ColumnType>, number>({
            query: (id) => ({url: `/${id}`}),
        }),
        getColumns: builder.query<ResultResponse<ColumnType[]>, void>({
            query: () => ({url: ''}),
        }),
        getHotColumns: builder.query<ResultResponse<ColumnType[]>, void>({
            query: () => ({url: '/hot'})
        })
    }),
})

export const {useGetColumnByIdQuery, useGetColumnsQuery,useGetHotColumnsQuery} = columnApi

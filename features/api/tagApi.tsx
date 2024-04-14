import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {ResultResponse, Tag} from "@/types";


export const tagApi = createApi({
    reducerPath: 'tagApi',
    tagTypes: ['TagApi'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/tag',
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
        getTag: builder.query<ResultResponse<Tag[]>, void>({
            query: () => ``,
        }),
    }),
})

export const {useGetTagQuery} = tagApi

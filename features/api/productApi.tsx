import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ResultResponse} from '@/types'
import {RootState} from "@/app/store";

export type ProductItem = {
    id?: string;
    name: string;
    href: string;
    price: string;
    rating: string;
    description: string;
    imageSrc: string;
    information: string;
};
export const productApi = createApi({
    reducerPath: 'productApi',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/product',
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
        getProducts: builder.query<ResultResponse<ProductItem[]>, void>({
            query: () => ({url: ''}),
        }),
        addProduct: builder.mutation<ResultResponse<string>, ProductItem>({
            query: (product) => ({
                url: '',
                method: 'POST',
                body: product,
            }),
        })
    }),
})

export const {useGetProductsQuery,useAddProductMutation} = productApi

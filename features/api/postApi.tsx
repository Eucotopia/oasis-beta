import {ResultResponse, Post, PostDTO} from "@/types";
import {RootState} from "@/app/store";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export interface Page {
    page: number,
    size: number
}

export const postApi = createApi({
        reducerPath: 'postApi',
        tagTypes: ['Post'],
        baseQuery: fetchBaseQuery({
            baseUrl: 'http://localhost:8080',
            prepareHeaders: (headers, {getState}) => {
                // By default, if we have a token in the store, let's use that for authenticated requests
                const token = (getState() as RootState).auth.user?.token
                console.log(token)
                if (token) {
                    headers.set('Authorization', `Bearer ${token}`)
                }
                return headers
            },
        }),
        endpoints: builder => ({
            getBlog: builder.query<ResultResponse<Post[]>, Page>({
                query: (page: Page) => `/post/${page.page}/${page.size}`,
                // providesTags: ['Post']
            }),
            getBlogById: builder.query<ResultResponse<Post>, number>({
                query: (id: number) => `/post/${id}`,
                // providesTags: ['Post']
            }),
            // 获取博客总数
            getPostCount: builder.query<ResultResponse<number>, void>({
                query: () => `/post/count`,
                // providesTags: ['Post']
            }),
            addBlog: builder.mutation<ResultResponse<string>, PostDTO>({
                query: (post) => ({
                    url: '/post',
                    method: 'POST',
                    body: post,
                }),
                // invalidatesTags: ['Post'],
            }),
            likeBlog: builder.query<ResultResponse<string>, number>({
                query: (id) => `/post/like/${id}`,
            }),
            isLiked: builder.query<ResultResponse<boolean>, number>({
                query: (id) => `/post/isLiked/${id}`,
            }),
            // 获取相关文章
            getRelatedArticles:builder.query<ResultResponse<Post[]>,number>({
                query:(id)=>`/post/related/${id}`
            }),
            getHostArticles:builder.query<ResultResponse<Post[]>,void>({
                query:(id)=>`/post/hot`
            })
        }),
    }
)

export const {
    useGetBlogQuery,
    useIsLikedQuery,
    useGetHostArticlesQuery,
    useGetRelatedArticlesQuery,
    useGetBlogByIdQuery,
    useLikeBlogQuery,
    useAddBlogMutation,
    useGetPostCountQuery
} = postApi

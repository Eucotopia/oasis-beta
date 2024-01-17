import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Post} from "@/types";

type PostList = {
    posts: Post[] | null
}
const postSlice = createSlice({
    name: 'post',
    initialState: {posts: null} as PostList,
    reducers: {
        setPosts: (
            state,
            {payload: {data}}: PayloadAction<{
                data: Post[]
            }>
        ) => {
            console.log(data)
            state.posts = data
        }
    }
})
export const {setPosts} = postSlice.actions
export default postSlice.reducer
import {combineReducers, configureStore,} from '@reduxjs/toolkit'
import authReducer from '@/features/auth/authSlice'
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {authApi} from "@/features/api/authApi";
import {postApi} from "@/features/api/postApi";
import themeReducer from '@/features/theme/themeSlice'
import postReducer from "@/features/post/postSlice";
import {themeApi} from "@/features/api/themeApi";
import {thunk} from "redux-thunk";


// 定义配置信息
const persistConfig = {
    key: "root",
    storage: storage,
    // 如果不想将部分state持久化，可以将其放入黑名单(blacklist)中.黑名单是设置
    blacklist: ['post']
}
const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    theme: themeReducer,
    [postApi.reducerPath]: postApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [themeApi.reducerPath]: themeApi.reducer
})
// 创建持久化的配置persist的信息
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(postApi.middleware).concat(authApi.middleware).concat(themeApi.middleware).concat(thunk)
})

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
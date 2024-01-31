"use client"
import {useBlockEditor} from "@/extentions/tiptap/hooks/useBlockEditor";
import {EditorContent} from "@tiptap/react";
import {BlockEditor} from "@/extentions/tiptap/components/BlockEditor/BlockEditor";
import {useGetBlogByIdQuery} from "@/features/api/postApi";
import React from "react";

export default function PricingPage() {
    const {
        data: post,
        isFetching,
        isLoading
    } = useGetBlogByIdQuery(32, {
        // 每 3s 轮询，实现实时数据更新的效果
        pollingInterval: 3000,
        // 用于控制查询的自动触发行为
        refetchOnMountOrArgChange: true,
        skip: false,
    })
    return (
        <>
            <BlockEditor content={post?.data.content}/>
        </>
    );
}

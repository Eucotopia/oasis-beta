import {SVGProps} from "react";
import exp from "node:constants";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export type UserType = {
    id: number,
    username: string,
    email: string,
    password: string,
    motto: string,
    createTime: string,
    avatar: string,
    role: string,
    age: number,
    status: number,
    address: string
}

export interface Category {
    id: number
    name: string
    parentId: string
}

export interface LoginRequest {
    username: string
    password: string
}

export type UserLoginType = {
    username: string,
    password: string
}
export type UserRegisterType = {
    nickname: string,
    username: string,
    password: string,
}

// 博客类型
export type Post = {
    id: number,
    title: string,
    content: string,
    summary: string,
    createTime: string,
    isTop: number,
    userId: number,
    likes: number,
    views: number,
    comments: number,
    cover: string,
    rating: number,
}

export type PostDTO = {
    title: string,
    content: string,
    summary: string,
    isTop: boolean,
    cover: string,
    categoryId: string
}

export interface ResultResponse<T> {
    code: string
    data: T
    message: string
}


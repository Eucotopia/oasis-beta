'use client'
import React from "react";
import {Card, CardBody, CardFooter, CardHeader, Divider, Image, user,} from "@nextui-org/react";
import {FaUsers, FaHeart, FaRegFileLines, FaRankingStar} from "react-icons/fa6";
import {title} from "@/components/primitives";
import {ChartComponent} from "@/components/chart/ChartComponent";
import {Link} from "@nextui-org/link";
import {useGetCountQuery} from "@/features/api/authApi";
import {useGetPostCountQuery} from "@/features/api/postApi";
import Sidebar from "@/components/Application/Sidebars/sidebar-with-long-list/App"
export default function App() {
    return (
        <>
            <Sidebar/>
        </>
    );
}

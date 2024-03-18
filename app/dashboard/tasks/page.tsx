'use client'
import React from "react";
import {useGetColumnByIdQuery, useGetColumnsQuery} from "@/features/api/columnApi";
import {Avatar, Button, Spacer} from "@nextui-org/react";
export default function App() {
    const {data:columns} = useGetColumnsQuery();
    console.log(columns?.data)
    return (
        <>
            <section className="flex max-w-7xl flex-col items-center py-24">
                <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        columns?.data.map((column, index) => (
                            <Avatar className="h-20 w-20" src={column.avatar} key={index}/>
                        ))
                    }
                    {/*{teamMembers.map((member, index) => (*/}
                    {/*    <TeamMemberCard key={index} {...member} />*/}
                    {/*))}*/}
                </div>
            </section>
        </>
    );
}

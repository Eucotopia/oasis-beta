"use client"
import {useGetCategoriesQuery} from "@/features/api/categoryApi";

export default function PricingPage() {
    const {data} = useGetCategoriesQuery()
    console.log(data)
    return (
        <>
            <div className={"flex justify-self-start"}>
				<div className={"flex flex-row  bg-amber-700  h-96 w-96"}>
                    1231232132132321321
				</div>
            </div>
        </>
    );
}

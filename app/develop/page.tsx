'use client'
import React from "react";
import ActionCard from "@/components/card/actions-cards/App";
import AccountDetails from "@/components/card/account-details/App"
import CardFieldset from "@/components/card/card-fieldset/App"
import FeatureCard from "@/components/AI/Features/features-cards/App";
import AssistantMessage from "@/components/AI/Messages/assistant-message/App";
import PlaceListItem from "@/components/E-commerce/Product-List/place-list-grid/App";
import EcommerceFilters from "@/components/E-commerce/Filters/ecommerce-filters-with-sidebar/App"
export default function App() {
    return (
        <>
            <div className={"w-screen h-screen p-8 flex items-start justify-center flex-col"}>
                <EcommerceFilters/>

                <ActionCard/>
                <AccountDetails/>
                <CardFieldset/>
                <FeatureCard/>
                <AssistantMessage/>
                <PlaceListItem/>
            </div>
        </>
    );
}

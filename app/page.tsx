import {title} from "@/components/primitives";
import TestimonialsScrollingBanner from "@/components/Application/Scrolling-Banners/testimonials-scrolling-banner/App";
import FaqsWithDivider from "@/components/Marketing/Faqs/faqs-with-divider/App"
import BasicTeamPage from "@/components/Marketing/Teams/basic-team-page/App"
import LeftLoginWithImageBackground from "@/components/Application/Authentication/left-login-with-image-background/App"
import UserTable from "@/components/table/UserTable";
export default function Home() {
    return (
        <section
            className="flex flex-col items-center justify-center gap-4  overflow-hidden">
            <LeftLoginWithImageBackground/>
            <div className={"mt-8"}>
                <BasicTeamPage/>
            </div>
            <div className={"mt-8"}>
                <TestimonialsScrollingBanner/>
            </div>
            <div className={"mt-8"}>
                <FaqsWithDivider/>
            </div>
        </section>
    );
}

import {fontHeading, fontHeading2} from "@/config/fonts"
import clsx from "clsx";

export default function AboutLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4">
                <div className={clsx(fontHeading2.className, "inline-block  justify-center")}>
                    {children}
                </div>
            </section>
        </>

    );
}

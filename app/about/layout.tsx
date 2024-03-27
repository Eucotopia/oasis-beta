import clsx from "clsx";

export default function AboutLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <section className="flex flex-col justify-center gap-4">
                {children}
            </section>
        </>

    );
}

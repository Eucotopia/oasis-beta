export default function BlogLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <section className="flex flex-col justify-center items-center gap-4  md:py-10">
                <div className="inline-block w-4xl justify-center">
                    {children}
                </div>
            </section>
        </>
    );
}

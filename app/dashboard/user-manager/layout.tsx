import {Button} from "@nextui-org/button";

export default function ProjectsLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 w-3xl ">
                {children}
            </section>
        </>

    );
}

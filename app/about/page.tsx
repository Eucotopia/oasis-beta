'use client'
import React from "react";
import TechnologyStack from "@/components/Marquee/TechnologyStack";
import ProgrammingTools from "@/components/Marquee/ProgrammingTools"
import ProgrammingLanguage from "@/components/Marquee/ProgrammingLanguage"
import {subtitle, title} from "@/components/primitives";
import {color} from "framer-motion";


export default function App() {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className={"flex flex-col"}>
                    <div className={"inline-block"}>
                        <h2 className={title({color: "pink"})}>Life&nbsp;&&nbsp;</h2>
                        <h2 className={title({color: "violet"})}>Code</h2>
                    </div>
                    <h2 className={subtitle({class: "my-6"})}>
                        Programming, like composing poetry, every line of code is a word, every line of program is a
                        rhyme
                    </h2>
                    <div
                        className="flex flex-row justify-start w-[1280px] mt-4">
                        <TechnologyStack/>
                        <ProgrammingLanguage/>
                        <ProgrammingTools/>
                    </div>
                </div>
            </section>
        </>
    );
}

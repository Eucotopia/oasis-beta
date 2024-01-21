'use client'
import React from "react";
import TechnologyStack from "@/components/Marquee/TechnologyStack";
import ProgrammingTools from "@/components/Marquee/ProgrammingTools"
import ProgrammingLanguage from "@/components/Marquee/ProgrammingLanguage"
import {subtitle, title} from "@/components/primitives";
import {motion} from "framer-motion";


const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.4,
        }
    }
};

const item = {
    hidden: {
        y: -20,
        x: -20,
        opacity: 0
    },
    visible: {
        y: 0,
        x: 0,
        opacity: 1
    }
};
export default function App() {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <motion.div
                    className={"flex flex-col"}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className={"inline-block"}
                        variants={item}>
                        <h2 className={title({color: "pink"})}>Life&nbsp;&&nbsp;</h2>
                        <h2 className={title({color: "violet"})}>Code</h2>
                    </motion.div>
                    <motion.div
                        className={subtitle({class: "my-6"})}
                        variants={item}>
                        Programming, like composing poetry, every line of code is a word, every line of program is a
                        rhyme
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="flex flex-row justify-start w-[1280px] mt-4">
                        <TechnologyStack/>
                        <ProgrammingLanguage/>
                        <ProgrammingTools/>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}

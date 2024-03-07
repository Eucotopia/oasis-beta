'use client'
import React from "react";
import TechnologyStack from "@/components/marquee/TechnologyStack";
import ProgrammingTools from "@/components/marquee/ProgrammingTools"
import ProgrammingLanguage from "@/components/marquee/ProgrammingLanguage"
import {subtitle, title} from "@/components/primitives";
import {motion} from "framer-motion";
import {fadeIn} from "@/config/variants";

export default function App() {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <motion.div
                    className={"flex flex-col"}
                    variants={fadeIn({direction: "up", delay: 0.4})}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
                >
                    <motion.div
                        className={"inline-block"}
                        variants={fadeIn({direction: "up", delay: 0.5})}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}>
                        <h2 className={title({color: "pink"})}>Life&nbsp;&&nbsp;</h2>
                        <h2 className={title({color: "violet"})}>Code</h2>
                    </motion.div>
                    <motion.div
                        className={subtitle({class: "my-6"})}
                        variants={fadeIn({direction: "up", delay: 0.6})}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}>
                        Programming, like composing poetry, every line of code is a word, every line of program is a
                        rhyme
                    </motion.div>
                    <motion.div
                        variants={fadeIn({direction: "up", delay: 0.7})}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
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

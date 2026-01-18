"use client";

import { motion } from "framer-motion";
import { DataFlowBackground } from "@/components/ui/data-flow-background";
import { HolographicCard } from "@/components/ui/holographic-card";
import { CV } from "@/lib/data";

export function EngineerSection() {
    return (
        <section className="relative min-h-[200vh] bg-black text-white z-20">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                <DataFlowBackground />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10" />

                {/* Gradient transitions */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-950/20 via-black to-transparent pointer-events-none z-20" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-purple-950/20 pointer-events-none z-20" />
            </div>

            <div className="relative -mt-[100vh] container mx-auto px-6 z-10 pb-32">
                <div className="min-h-screen flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="pl-4 border-l-4 border-cyan-500"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">THE DATA ENGINEER</h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-32">
                    <div className="space-y-24">
                        {CV.projects.map((project, i) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ margin: "-100px" }}
                            >
                                <HolographicCard className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                                    <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools?.map(tool => (
                                            <span key={tool} className="text-xs font-mono px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </HolographicCard>
                            </motion.div>
                        ))}
                    </div>

                    <div className="hidden md:block sticky top-24 h-fit text-right">
                        <h3 className="text-2xl font-bold text-gray-500 mb-8 border-b border-gray-800 pb-4">CORE STACK</h3>
                        <ul className="space-y-4 font-mono text-lg text-gray-300">
                            {CV.skills.slice(0, 10).map((skill, i) => (
                                <motion.li
                                    key={skill}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

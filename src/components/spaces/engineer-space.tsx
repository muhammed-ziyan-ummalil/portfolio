"use client";

import { motion } from "framer-motion";
import { CV } from "@/lib/data";
import { SkillTerminal } from "./engineer/skill-terminal";
import { ProjectDeck } from "./engineer/project-deck";

export function EngineerSpace() {
    return (
        <motion.div
            key="engineer-space"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="container mx-auto px-6 py-20 min-h-screen"
        >
            {/* Hero Section */}
            <section className="min-h-[60vh] flex flex-col justify-center border-l-2 border-accent pl-8 ml-4 md:ml-12 mb-24">
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-mono text-accent mb-4"
                >
                    Initialize: User_Profile
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl font-mono font-bold text-white mb-6 uppercase tracking-tighter"
                >
                    {CV.name}
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 font-mono"
                >
                    &gt; {CV.role}
                </motion.div>

                <div className="mt-8 flex gap-6 text-sm font-mono text-gray-500">
                    <a href={`mailto:${CV.contact.email}`} className="hover:text-accent transition-colors">
                        EMAIL
                    </a>
                    <a href={`https://${CV.contact.linkedin}`} target="_blank" className="hover:text-accent transition-colors">
                        LINKEDIN
                    </a>
                    <a href={`https://${CV.contact.github}`} target="_blank" className="hover:text-accent transition-colors">
                        GITHUB
                    </a>
                </div>
            </section>

            {/* Experience Section */}
            <section className="mb-32">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-[1px] bg-gray-800 flex-grow" />
                    <h2 className="font-mono text-2xl text-gray-500">
                        01_EXPERIENCE_LOG
                    </h2>
                </div>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {CV.experience.map((exp, i) => (
                        <div key={i} className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 border-l border-white/10 pl-6 md:pl-0 md:border-l-0">
                            <div className="font-mono text-sm text-gray-500 md:text-right pt-1">
                                {exp.duration}
                            </div>
                            <div className="relative pb-12 border-b border-white/5 last:border-0 last:pb-0">
                                {/* Timeline dot for desktop */}
                                <div className="hidden md:block absolute -left-[37px] top-2 w-3 h-3 bg-surface border border-gray-600 rounded-full group-hover:bg-accent group-hover:border-accent transition-colors" />

                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                <h4 className="text-accent mb-4 font-mono text-sm">{exp.company}</h4>
                                <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx} className="flex gap-3">
                                            <span className="text-gray-600 mt-1.5 h-1.5 w-1.5 bg-gray-600 rounded-full flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-32">
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="font-mono text-2xl text-gray-500">
                        02_SYSTEM_CAPABILITIES
                    </h2>
                    <div className="h-[1px] bg-gray-800 flex-grow" />
                </div>
                <SkillTerminal skills={CV.skills} />
            </section>

            {/* Projects Section */}
            <section className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-[1px] bg-gray-800 flex-grow" />
                    <h2 className="font-mono text-2xl text-gray-500">
                        03_PROJECT_ARCHIVES
                    </h2>
                </div>
                <ProjectDeck projects={CV.projects} />
            </section>
        </motion.div>
    );
}

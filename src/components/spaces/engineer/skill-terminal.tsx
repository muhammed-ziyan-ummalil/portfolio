"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface SkillTerminalProps {
    skills: string[];
}

export function SkillTerminal({ skills }: SkillTerminalProps) {
    return (
        <div className="w-full max-w-4xl mx-auto my-12 font-mono text-sm sm:text-base">
            <div className="rounded-t-lg bg-gray-900 border border-gray-700 border-b-0 p-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-4 text-gray-500 text-xs">mz_skills.exe</div>
            </div>
            <div className="bg-black/90 border border-gray-700 rounded-b-lg p-6 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%]" />

                <div className="relative z-20 text-green-500">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="mb-4 text-accent">&gt; initializing system scan...</p>
                        <p className="mb-4 text-accent">&gt; loading core_modules...</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-2 hover:text-accent cursor-crosshair transition-colors"
                                >
                                    <span className="text-gray-600">[</span>
                                    <span className="text-white">{skill}</span>
                                    <span className="text-gray-600">]</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-8 animate-pulse"
                        >
                            <span className="text-accent">&gt;_</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

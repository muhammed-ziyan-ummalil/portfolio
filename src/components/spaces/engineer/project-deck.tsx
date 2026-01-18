"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, X } from "lucide-react";

interface Project {
    name: string;
    description: string;
    details: string[];
    tools?: string[];
}

interface ProjectDeckProps {
    projects: Project[];
}

export function ProjectDeck({ projects }: ProjectDeckProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            {projects.map((project) => (
                <motion.div
                    key={project.name}
                    layoutId={project.name}
                    onClick={() => setSelectedId(project.name)}
                    className="cursor-pointer group relative bg-surface border border-white/5 hover:border-accent/50 p-6 rounded-lg transition-colors overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-accent" />
                    </div>
                    <motion.h3 className="text-xl font-mono font-bold text-gray-200 mb-2 group-hover:text-accent transition-colors">
                        {project.name}
                    </motion.h3>
                    <motion.p className="text-gray-400 text-sm line-clamp-3">
                        {project.description}
                    </motion.p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tools?.slice(0, 3).map((tool) => (
                            <span key={tool} className="text-xs border border-white/10 px-2 py-1 rounded text-gray-500">
                                {tool}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            layoutId={selectedId}
                            className="bg-surface border border-accent/20 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl shadow-2xl relative"
                        >
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedId(null);
                                }}
                                className="absolute top-4 right-4 p-1 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                                style={{ zIndex: 60 }} // Ensure button is clickable
                            >
                                <X size={20} />
                            </button>

                            {(() => {
                                const project = projects.find((p) => p.name === selectedId);
                                if (!project) return null;
                                return (
                                    <div className="p-8">
                                        <motion.h2 className="text-2xl font-mono font-bold text-accent mb-4">
                                            {project.name}
                                        </motion.h2>
                                        <p className="text-lg text-gray-300 mb-6">
                                            {project.description}
                                        </p>

                                        <div className="space-y-4">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Key Details</h4>
                                            <ul className="space-y-2">
                                                {project.details.map((detail, i) => (
                                                    <li key={i} className="flex gap-2 text-gray-400 text-sm">
                                                        <span className="text-accent mt-1">▹</span>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {project.tools && (
                                            <div className="mt-8 pt-6 border-t border-white/10">
                                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tools.map((tool) => (
                                                        <span key={tool} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-mono border border-accent/20">
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })()}
                        </motion.div>

                        {/* Backdrop click to close */}
                        <div
                            className="absolute inset-0 -z-10"
                            onClick={() => setSelectedId(null)}
                        />
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

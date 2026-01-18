"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TimelineEvent {
    id: number;
    title: string;
    date: string;
    description: string;
    category: string;
}

interface TimelineProps {
    events: TimelineEvent[];
}

export function TimelineGrowth({ events }: TimelineProps) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0.1, 0.9], ["20%", "-80%"]);

    return (
        <>
            {/* DESKTOP VIEW: Horizontal Scroll */}
            <section ref={targetRef} className="hidden md:block relative h-[400vh] bg-black">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-24 px-24 items-center">
                        {/* Intro Card */}
                        <div className="flex-shrink-0 w-[400px] flex flex-col justify-center border-l-2 border-white pl-8">
                            <h2 className="text-6xl font-outfit font-bold text-white mb-6 leading-none">
                                TIMELINE<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800">
                                    ARCHIVE
                                </span>
                            </h2>
                            <p className="text-lg text-gray-500 font-mono">
                 // SCROLL_DOWN_TO_EXPLORE &gt;&gt;
                            </p>
                        </div>

                        {events.map((event, index) => (
                            <div
                                key={event.id}
                                className="group relative flex-shrink-0 w-[500px] h-[600px] bg-gradient-to-br from-purple-900/20 via-neutral-900/50 to-black backdrop-blur-md border border-purple-500/20 hover:border-purple-400/60 transition-all duration-500 overflow-hidden rounded-3xl shadow-2xl hover:shadow-purple-500/20"
                                style={{
                                    transform: 'perspective(1000px)',
                                }}
                            >
                                {/* Holographic shimmer overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent animate-shimmer" />
                                </div>

                                {/* Noise texture */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

                                {/* Gradient overlays */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 h-full p-12 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        {/* Large number watermark */}
                                        <span className="text-8xl font-outfit font-black text-white/5 group-hover:text-purple-500/20 transition-all duration-500 group-hover:scale-110">
                                            0{index + 1}
                                        </span>

                                        {/* Date badge */}
                                        <span className="font-mono text-xs border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 rounded-full text-purple-300 backdrop-blur-sm">
                                            {event.date}
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Category tag */}
                                        <span className="inline-block text-xs font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                                            {event.category}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-4xl font-outfit font-bold text-white mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-300">
                                            {event.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-300 font-mono text-sm leading-relaxed border-l-2 border-purple-500/30 pl-4 group-hover:border-purple-400/60 transition-colors">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom glow effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>

            {/* MOBILE VIEW: Vertical Stack */}
            <section className="md:hidden bg-black px-6 py-20 pb-32">
                <div className="mb-16 border-l-2 border-white pl-6">
                    <h2 className="text-5xl font-outfit font-bold text-white mb-4 leading-none">
                        TIMELINE<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800">
                            ARCHIVE
                        </span>
                    </h2>
                    <p className="text-sm text-gray-500 font-mono">
             // HISTORY_LOG_V1
                    </p>
                </div>

                <div className="space-y-12">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className="relative w-full h-[500px] bg-gradient-to-br from-purple-900/20 via-neutral-900/50 to-black backdrop-blur-md border border-purple-500/20 rounded-3xl overflow-hidden shadow-xl"
                        >
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="text-7xl font-outfit font-black text-white/5">
                                        0{index + 1}
                                    </span>
                                    <span className="font-mono text-xs border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 rounded-full text-purple-300">
                                        {event.date}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <span className="inline-block text-xs font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                                        {event.category}
                                    </span>

                                    <h3 className="text-3xl font-outfit font-bold text-white mb-4 leading-tight">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-300 font-mono text-xs leading-relaxed border-l-2 border-purple-500/30 pl-4">
                                        {event.description}
                                    </p>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

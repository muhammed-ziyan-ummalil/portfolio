"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MuLearnBackground } from "@/components/ui/mulearn-background";

interface TimelineEvent {
    id: number;
    title: string;
    date: string;
    description: string;
    category: string;
}

interface StaircaseTimelineProps {
    events: TimelineEvent[];
}

export function StaircaseTimeline({ events }: StaircaseTimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="relative bg-transparent py-32 px-6">
            <MuLearnBackground />
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="space-y-32">
                    {events.map((event, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: isEven ? -100 : 100, y: 50 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}
                            >
                                <div
                                    className="group relative w-full md:w-[500px] h-[400px] bg-gradient-to-br from-purple-900/20 via-neutral-900/50 to-black backdrop-blur-md border border-purple-500/20 hover:border-purple-400/60 transition-all duration-500 overflow-hidden rounded-3xl shadow-2xl hover:shadow-purple-500/20"
                                    style={{
                                        marginLeft: isEven ? `${index * 40}px` : '0',
                                        marginRight: isEven ? '0' : `${index * 40}px`,
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

                                    <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            {/* Large number watermark */}
                                            <span className="text-7xl font-outfit font-black text-white/5 group-hover:text-purple-500/20 transition-all duration-500 group-hover:scale-110">
                                                0{index + 1}
                                            </span>

                                            {/* Date badge */}
                                            <span className="font-mono text-xs border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 rounded-full text-purple-300 backdrop-blur-sm">
                                                {event.date}
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            {/* Category tag */}
                                            <span className="inline-block text-xs font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                                                {event.category}
                                            </span>

                                            {/* Title */}
                                            <h3 className="text-3xl font-outfit font-bold text-white mb-3 leading-tight group-hover:translate-x-2 transition-transform duration-300">
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
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
        </section>
    );
}

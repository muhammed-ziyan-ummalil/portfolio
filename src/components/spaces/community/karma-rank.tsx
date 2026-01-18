"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface Rank {
    name: string;
    achieved: boolean;
    date: string;
}

interface KarmaRankProps {
    stats: {
        karma: string;
        rank: string;
        total_peers: string;
    };
    ranks: Rank[];
}

export function KarmaRank({ stats, ranks }: KarmaRankProps) {
    return (
        <div className="w-full max-w-5xl mx-auto my-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                    { label: "KARMA POINTS", value: stats.karma, color: "text-purple-400" },
                    { label: "GLOBAL RANK", value: "#" + stats.rank, color: "text-accent" },
                    { label: "PEERS CONNECTED", value: stats.total_peers, color: "text-orange-400" },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
                    >
                        <h3 className="text-sm font-bold text-gray-500 mb-2 tracking-widest">{stat.label}</h3>
                        <p className={`text-4xl md:text-5xl font-black ${stat.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                            {stat.value}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="relative pt-12">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-900 via-accent to-orange-500 -z-10 opacity-30" />

                <div className="flex justify-between items-center relative z-10 overflow-x-auto pb-8 md:pb-0 px-4">
                    {ranks.map((rank, i) => (
                        <motion.div
                            key={rank.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.15 }}
                            className="flex flex-col items-center min-w-[100px]"
                        >
                            <div
                                className={clsx(
                                    "w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 shadow-[0_0_20px_rgba(189,0,255,0.3)] transition-all duration-500",
                                    rank.achieved
                                        ? "bg-black border-accent text-accent"
                                        : "bg-gray-900 border-gray-700 text-gray-700"
                                )}
                            >
                                <div className={clsx("w-3 h-3 rounded-full", rank.achieved ? "bg-accent animate-pulse" : "bg-gray-700")} />
                            </div>
                            <div className="mt-4 text-center">
                                <h4 className={clsx("font-bold text-sm md:text-base", rank.achieved ? "text-white" : "text-gray-600")}>
                                    {rank.name}
                                </h4>
                                <span className="text-xs text-gray-500">{rank.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

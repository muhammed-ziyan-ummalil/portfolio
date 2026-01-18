"use client";

import { motion } from "framer-motion";
import { COMMUNITY_DATA } from "@/lib/data";
import { KarmaRank } from "./community/karma-rank";
import { TimelineGrowth } from "./community/timeline-growth";

import { NetworkBackground } from "./community/network-background";

export function CommunitySpace() {
    return (
        <motion.div
            key="community-space"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen pb-20 relative"
        >
            <NetworkBackground />

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Background Ambient Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[128px] animate-pulse delay-1000" />

                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-accent font-bold tracking-[0.2em] mb-6 uppercase"
                >
                    Community Builder
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-serif font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-gray-400"
                >
                    The µLearn<br />Journey
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light"
                >
                    From a novice learner to a Strategist Fellow. <br />
                    Leading, mentoring, and growing with 60k+ peers.
                </motion.p>
            </section>

            {/* Stats & Ranks */}
            <section className="px-6 mb-32 relative z-10">
                <KarmaRank stats={COMMUNITY_DATA.stats} ranks={COMMUNITY_DATA.ranks} />
            </section>

            {/* Horizontal Timeline */}
            <TimelineGrowth events={COMMUNITY_DATA.timeline} />

            {/* Footer / Call to Action */}
            <section className="container mx-auto px-6 py-32 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                    Ready to Collaborate?
                </h2>
                <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                    Whether it's building data pipelines or scaling communities,
                    I bring passion and precision to the table.
                </p>
                <a
                    href="mailto:mziyan777.mz@gmail.com"
                    className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                    Get in Touch
                </a>
            </section>
        </motion.div>
    );
}

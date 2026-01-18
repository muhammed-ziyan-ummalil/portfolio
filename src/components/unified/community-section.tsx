"use client";

import { motion } from "framer-motion";
import { NetworkBackground } from "../spaces/community/network-background";
import { StaircaseTimeline } from "../spaces/community/staircase-timeline";
import { FloatingMuSymbols } from "@/components/ui/floating-mu-symbols";
import { COMMUNITY_DATA } from "@/lib/data";

export function CommunitySection() {
    return (
        <section className="relative z-30 bg-black">
            {/* Intro / Title Part - Matching Engineer Section Layout */}
            <div className="relative min-h-[100vh]">
                {/* Sticky 3D Background */}
                <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                    <NetworkBackground />
                    <FloatingMuSymbols />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10" />

                    {/* Gradient transition from previous section */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-950/20 via-black to-transparent pointer-events-none z-20" />
                </div>

                {/* Floating Title */}
                <div className="relative -mt-[100vh] container mx-auto px-6 z-20">
                    <div className="min-h-screen flex flex-col justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter text-white uppercase">
                                The Interest Group<br />Strategist
                            </h2>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Staircase Timeline - Scrolls naturally after the title screen */}
            <div className="relative z-10 bg-black">
                <StaircaseTimeline events={COMMUNITY_DATA.timeline} />
            </div>
        </section>
    );
}

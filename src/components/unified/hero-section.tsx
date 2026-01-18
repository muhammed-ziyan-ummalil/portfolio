"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GlitchText } from "@/components/ui/glitch-text";
import { AnimatedGridBackground } from "@/components/ui/animated-grid-background";

export function HeroSection() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="h-screen flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
            <AnimatedGridBackground />

            <motion.div style={{ y, opacity }} className="text-center z-10 px-4 relative">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-gray-400 text-lg md:text-xl font-light tracking-[0.2em] mb-8"
                >
                    HELLO WORLD!
                </motion.p>

                <GlitchText
                    text="I AM ZIYAN"
                    className="text-7xl md:text-[10rem] font-bold tracking-tighter mb-8 text-white"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-xl md:text-2xl text-gray-400 font-light max-w-lg mx-auto"
                >
                    Architecting Data. Building Communities.
                </motion.p>
            </motion.div>

            <motion.div
                style={{ opacity }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 z-10"
            >
                <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
                    <span>SCROLL TO EXPLORE</span>
                    <ArrowDown size={20} />
                </div>
            </motion.div>

            {/* Gradient transitions for smooth blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none z-5" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-cyan-950/20 pointer-events-none z-5" />
        </section>
    );
}

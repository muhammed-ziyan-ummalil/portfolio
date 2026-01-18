"use client";

import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

export function Navigation() {
    const lenis = useLenis();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element && lenis) {
            lenis.scrollTo(element, { offset: -80 });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => scrollToSection('hero')}
                    className="text-xl font-bold tracking-tighter hover:text-purple-400 transition-colors cursor-pointer"
                >
                    MZ
                </motion.button>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-8"
                >
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-sm font-mono text-gray-400 hover:text-white transition-colors"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection('engineer')}
                        className="text-sm font-mono text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        Engineer
                    </button>
                    <button
                        onClick={() => scrollToSection('community')}
                        className="text-sm font-mono text-gray-400 hover:text-purple-400 transition-colors"
                    >
                        µLearn
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="text-sm font-mono text-gray-400 hover:text-purple-400 transition-colors"
                    >
                        Contact
                    </button>
                </motion.div>
            </div>
        </motion.nav>
    );
}

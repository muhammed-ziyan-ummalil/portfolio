"use client";

import { useDuality } from "@/components/ui/duality-provider";
import { motion } from "framer-motion";

export function StickyHeader() {
    const { mode, toggleMode } = useDuality();

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-opacity-50 bg-background border-b border-white/10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
        >
            <div className="text-xl font-bold">
                {mode === "engineer" ? (
                    <span className="font-mono text-accent">&lt;M.Z /&gt;</span>
                ) : (
                    <span className="font-serif text-white">M. Ziyan</span>
                )}
            </div>

            <button
                onClick={toggleMode}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-surface border border-white/20 transition-colors focus:outline-none"
            >
                <span className="sr-only">Toggle Mode</span>
                <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-accent transition duration-300 ease-in-out ${mode === "community" ? "translate-x-9" : "translate-x-1"
                        }`}
                />
            </button>
        </motion.header>
    );
}

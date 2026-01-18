"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function FloatingMuSymbols() {
    const symbols = useMemo(() => {
        return Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 20 + Math.random() * 40,
            duration: 15 + Math.random() * 10,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            {symbols.map((symbol) => (
                <motion.div
                    key={symbol.id}
                    className="absolute font-bold text-purple-400"
                    style={{
                        left: `${symbol.x}%`,
                        top: `${symbol.y}%`,
                        fontSize: `${symbol.size}px`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: symbol.duration,
                        repeat: Infinity,
                        delay: symbol.delay,
                        ease: "easeInOut",
                    }}
                >
                    µ
                </motion.div>
            ))}
        </div>
    );
}

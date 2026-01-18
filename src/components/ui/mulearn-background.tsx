"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function MuLearnBackground() {
    // Fixed positions to avoid hydration errors
    const particles = useMemo(() =>
        Array.from({ length: 10 }, (_, i) => ({
            id: i,
            left: (i * 10) % 100,
            top: ((i * 15) % 80) + 10,
            duration: 3 + (i % 3),
            delay: (i % 4) * 0.5,
        })),
        []
    );

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Softer gradient background - reduced opacity for smoother transition */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent animate-pulse-slow" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-600/20 via-transparent to-transparent animate-pulse-slower" />
            </div>

            {/* Large watermark µ - more subtle */}
            <div className="absolute inset-0 flex items-center justify-center opacity-3">
                <span className="text-[30rem] font-bold text-pink-500">µ</span>
            </div>

            {/* Floating geometric shapes - reduced opacity */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/8 to-purple-500/8 rounded-full blur-3xl"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-pink-500/8 to-purple-500/8 rounded-full blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Animated grid overlay - more subtle */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0 animate-grid-move"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Floating particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-pink-400 rounded-full"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Scanline effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(transparent 50%, rgba(236, 72, 153, 0.02) 50%)',
                    backgroundSize: '100% 4px',
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '0% 100%'],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
      `}</style>
        </div>
    );
}

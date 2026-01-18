"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface HolographicCardProps {
    children: ReactNode;
    className?: string;
}

export function HolographicCard({ children, className = "" }: HolographicCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setMousePosition({ x, y });
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Holographic overlay */}
            <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 240, 255, 0.15), transparent 50%)`,
                }}
            />

            {/* Rainbow shimmer effect */}
            <div
                className={`absolute inset-0 opacity-0 ${isHovered ? 'opacity-30' : ''} transition-opacity duration-500 pointer-events-none`}
                style={{
                    background: `linear-gradient(135deg, 
            rgba(255, 0, 255, 0.1) 0%, 
            rgba(0, 240, 255, 0.1) 25%, 
            rgba(255, 255, 0, 0.1) 50%, 
            rgba(0, 240, 255, 0.1) 75%, 
            rgba(255, 0, 255, 0.1) 100%)`,
                    backgroundSize: '200% 200%',
                    animation: isHovered ? 'shimmer 3s ease infinite' : 'none',
                }}
            />

            {children}

            <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
        </motion.div>
    );
}

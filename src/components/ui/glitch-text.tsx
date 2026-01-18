"use client";

import { useEffect, useState } from "react";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Start flickering almost immediately (0.5s delay)
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <h1 className={`${className} ${isVisible ? 'animate-flicker-once' : 'opacity-0'}`}>
            {text}

            <style jsx>{`
        @keyframes flickerOnce {
          0% { opacity: 0; }
          2% { opacity: 0.3; }
          4% { opacity: 0; }
          6% { opacity: 0.8; }
          8% { opacity: 0.2; }
          10% { opacity: 1; }
          12% { opacity: 0.4; }
          14% { opacity: 1; }
          16% { opacity: 0.1; }
          18% { opacity: 0.9; }
          20% { opacity: 0.5; }
          22% { opacity: 1; }
          24% { opacity: 0.3; }
          26% { opacity: 1; }
          28% { opacity: 0.7; }
          30% { opacity: 1; }
          32% { opacity: 0.2; }
          34% { opacity: 0.9; }
          36% { opacity: 0.4; }
          38% { opacity: 1; }
          40% { opacity: 0.6; }
          42% { opacity: 1; }
          44% { opacity: 0.3; }
          46% { opacity: 0.95; }
          48% { opacity: 0.5; }
          50% { opacity: 1; }
          55% { opacity: 0.8; }
          60% { opacity: 1; }
          65% { opacity: 0.9; }
          70% { opacity: 1; }
          75% { opacity: 0.95; }
          80% { opacity: 1; }
          85% { opacity: 0.98; }
          90%, 100% { opacity: 1; }
        }
        
        .animate-flicker-once {
          animation: flickerOnce 4s ease-in-out forwards;
        }
      `}</style>
        </h1>
    );
}

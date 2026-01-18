"use client";

import { useDuality } from "@/components/ui/duality-provider";
import { StickyHeader } from "@/components/ui/sticky-header";
import { EngineerSpace } from "@/components/spaces/engineer-space";
import { CommunitySpace } from "@/components/spaces/community-space";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "lenis/react";

export function DualityHome() {
    const { mode } = useDuality();

    return (
        <ReactLenis root>
            <div className="min-h-screen relative transition-colors duration-500">
                <StickyHeader />

                <main className="pt-24 relative min-h-screen">
                    <AnimatePresence mode="wait">
                        {mode === "engineer" ? (
                            <EngineerSpace key="engineer" />
                        ) : (
                            <CommunitySpace key="community" />
                        )}
                    </AnimatePresence>
                </main>
            </div>
        </ReactLenis>
    );
}

"use client";

import { ReactLenis } from "lenis/react";
import { HeroSection } from "./unified/hero-section";
import { EngineerSection } from "./unified/engineer-section";
import { CommunitySection } from "./unified/community-section";
import { ContactSection } from "./unified/contact-section";
import { ScrollToTop } from "./ui/scroll-to-top";
import { CustomCursor } from "./ui/custom-cursor";
import { Navigation } from "./ui/navigation";
import { LoadingScreen } from "./ui/loading-screen";
import { useEffect } from "react";

export function UnifiedHome() {
    useEffect(() => {
        // Scroll to top on page load/refresh
        window.scrollTo(0, 0);
    }, []);

    return (
        <ReactLenis root>
            <Navigation />
            <main className="bg-black min-h-screen selection:bg-purple-500 selection:text-white cursor-none">
                <CustomCursor />
                <div id="hero">
                    <HeroSection />
                </div>
                <div id="engineer">
                    <EngineerSection />
                </div>
                <div id="community">
                    <CommunitySection />
                </div>
                <div id="contact">
                    <ContactSection />
                </div>
                <ScrollToTop />
            </main>
        </ReactLenis>
    );
}

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Mode = "engineer" | "community";

interface DualityContextType {
    mode: Mode;
    toggleMode: () => void;
    setMode: (mode: Mode) => void;
}

const DualityContext = createContext<DualityContextType | undefined>(undefined);

export function DualityProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<Mode>("engineer");

    useEffect(() => {
        // Update the data-mode attribute on the root element
        document.documentElement.setAttribute("data-mode", mode);
    }, [mode]);

    const toggleMode = () => {
        setMode((prev) => (prev === "engineer" ? "community" : "engineer"));
    };

    return (
        <DualityContext.Provider value={{ mode, toggleMode, setMode }}>
            {children}
        </DualityContext.Provider>
    );
}

export function useDuality() {
    const context = useContext(DualityContext);
    if (context === undefined) {
        throw new Error("useDuality must be used within a DualityProvider");
    }
    return context;
}

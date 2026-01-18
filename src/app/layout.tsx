import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { DualityProvider } from "@/components/ui/duality-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "The Duality | M. Ziyan",
    description: "Data Engineer & Community Builder",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} ${mono.variable} ${outfit.variable}`}>
            <body className={inter.className}>
                <DualityProvider>
                    {children}
                </DualityProvider>
            </body>
        </html>
    );
}

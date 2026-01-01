import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    title: "Debasmit Sahoo | Front-End Developer & UI/UX Designer",
    description: "Debasmit Sahoo is a Front-End Developer and Designer with 2+ years of experience building scalable, accessible, and performance-first web applications.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, jetbrainsMono.variable, "font-sans min-h-screen bg-background text-foreground antialiased")}>
                {children}
            </body>
        </html>
    );
}

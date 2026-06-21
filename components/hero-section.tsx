"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TechProfile } from "./tech-profile";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ROLES = ["FullStack_Developer", "Cloud_Architect"];

function useTypewriter(words: string[], typeSpeed = 85, deleteSpeed = 40, pause = 1800) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState(words[0]);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[index % words.length];

        if (!deleting && text === current) {
            const t = setTimeout(() => setDeleting(true), pause);
            return () => clearTimeout(t);
        }

        if (deleting && text === "") {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
            return;
        }

        const t = setTimeout(() => {
            setText((prev) =>
                deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
            );
        }, deleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(t);
    }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

    return text;
}

const DESCRIPTION_TOKENS: { t?: string; e?: boolean; br?: boolean }[] = [
    { t: "Building" },
    { t: "scalable", e: true }, { t: "web", e: true }, { t: "applications", e: true },
    { t: "and" },
    { t: "intelligent", e: true }, { t: "AI", e: true }, { t: "agents.", e: true },
    { br: true },
    { t: "I" }, { t: "turn" }, { t: "complex" }, { t: "ideas" }, { t: "into" },
    { t: "elegant,", e: true }, { t: "high-performance", e: true },
    { t: "digital" }, { t: "experiences." },
];

const descContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04, delayChildren: 0.5 } },
};

const descWord = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
};

function AnimatedDescription() {
    const reduce = useReducedMotion();
    return (
        <motion.p
            variants={descContainer}
            initial={reduce ? "visible" : "hidden"}
            animate="visible"
            className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
        >
            {DESCRIPTION_TOKENS.map((tok, i) =>
                tok.br ? (
                    <br key={i} className="hidden md:block" />
                ) : (
                    <span key={i}>
                        <motion.span
                            variants={descWord}
                            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className={cn(
                                "inline-block cursor-default",
                                tok.e
                                    ? "bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent animate-text-shimmer font-normal"
                                    : "transition-colors hover:text-foreground"
                            )}
                        >
                            {tok.t}
                        </motion.span>{" "}
                    </span>
                )
            )}
        </motion.p>
    );
}

export function HeroSection() {
    const role = useTypewriter(ROLES);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 md:pt-0">
            {/* Aurora glow — soft drifting accent light */}
            <div className="absolute top-1/4 left-0 md:left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-[120px] animate-aurora pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 md:right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-[120px] animate-aurora pointer-events-none" style={{ animationDelay: '-6s' }} />

            <div className="container px-4 md:px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                {/* Text Content - Optimized LCP: CSS Animation instead of Framer Motion */}
                <div className="flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="flex flex-col space-y-6 relative">
                        <div className="absolute -left-12 top-0 hidden lg:flex flex-col gap-2 text-[10px] font-mono text-muted-foreground/40 select-none">
                            <span>01</span>
                            <span>02</span>
                            <span>03</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-secondary/30 w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-mono text-muted-foreground">SYSTEM_ONLINE</span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground via-muted-foreground to-foreground animate-text-shimmer leading-[1.1] pb-1">
                                Debasmit Sahoo
                            </h1>
                            <h2 className="text-xl md:text-2xl font-mono font-medium mt-2 flex items-center h-8">
                                <span className="text-primary/60 mr-1">&lt;</span>
                                <span className="text-foreground">{role}</span>
                                <span className="inline-block w-[3px] h-6 bg-primary ml-1 animate-blink" />
                                <span className="text-primary/60 ml-1">/&gt;</span>
                            </h2>
                        </div>

                        <div className="max-w-lg relative pl-6 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">
                            <AnimatedDescription />
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button asChild size="lg" className="rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-widest h-12 px-8">
                                <Link href="/contact">Initialize_Project</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-none border-2 h-12 px-8 text-xs font-mono uppercase tracking-widest hover:bg-secondary">
                                <a href="/Debasmit_Sahoo_Full_Stack_Developer_Resume.pdf" download="Debasmit_Sahoo_Resume.pdf">
                                    Download_Data
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 3D Canvas / Tech Profile */}
                <div
                    className="w-full max-w-[500px] mx-auto md:ml-auto relative animate-in zoom-in-95 fade-in duration-1000 fill-mode-forwards"
                    style={{ animationDelay: '300ms' }}
                >
                    <TechProfile />
                </div>
            </div>

            {/* Background Texture - Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        </section>
    );
}

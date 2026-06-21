"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Lock scroll while the loader is visible
        document.body.style.overflow = "hidden";

        const reduceMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const duration = reduceMotion ? 400 : 1500;
        const start = performance.now();
        let raf = 0;

        const tick = (now: number) => {
            const elapsed = now - start;
            const pct = Math.min(100, Math.round((elapsed / duration) * 100));
            setProgress(pct);
            if (pct < 100) {
                raf = requestAnimationFrame(tick);
            } else {
                setTimeout(() => setLoading(false), 350);
            }
        };
        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            document.body.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        if (!loading) document.body.style.overflow = "";
    }, [loading]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {/* Subtle grid backdrop — matches the site */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />

                    <motion.div
                        className="relative z-10 flex flex-col items-center gap-8"
                        exit={{ scale: 1.06, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Status eyebrow */}
                        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em]">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                            </span>
                            Initializing_Interface
                        </div>

                        {/* Logo mark */}
                        <div className="text-5xl md:text-7xl font-bold tracking-tighter">
                            Debasmit<span className="text-primary">.</span>
                        </div>

                        {/* Progress */}
                        <div className="w-64 max-w-[80vw]">
                            <div className="flex justify-between mb-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                                <span>Loading_Assets</span>
                                <span className="tabular-nums text-foreground">
                                    {progress.toString().padStart(3, "0")}%
                                </span>
                            </div>
                            <div className="relative h-px w-full bg-border/60 overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-75 ease-linear"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

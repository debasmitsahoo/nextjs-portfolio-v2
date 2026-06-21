"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQ = { q: string; a: string };
type Category = { name: string; items: FAQ[] };

export function FaqSection({ categories }: { categories: Category[] }) {
    const [activeCat, setActiveCat] = useState(0);
    const [open, setOpen] = useState<string | null>(categories[0]?.items[0]?.q ?? null);

    return (
        <section className="py-16 md:py-20 border-b border-border/40 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute right-0 top-1/4 w-[600px] h-[400px] max-w-full bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-14">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-border/60 bg-secondary/30 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            FAQ
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                            Answers to the questions <br className="hidden md:block" />
                            <span className="text-muted-foreground">that come up most.</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed md:self-end md:max-w-sm md:ml-auto">
                        Get to know who I am, the stack I build with, the work I&apos;ve shipped, and how
                        to start a project together.
                    </p>
                </div>

                {/* Body: category nav + cards */}
                <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-10">
                    {/* Category nav */}
                    <div className="h-fit flex flex-row md:flex-col gap-1 p-2 rounded-2xl border border-border/50 bg-secondary/10 md:sticky md:top-28 overflow-x-auto">
                        {categories.map((c, i) => (
                            <button
                                key={c.name}
                                onClick={() => {
                                    setActiveCat(i);
                                    setOpen(c.items[0]?.q ?? null);
                                }}
                                className={cn(
                                    "flex-1 md:flex-none whitespace-nowrap text-center md:text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                                    i === activeCat
                                        ? "bg-background border border-border/60 text-foreground shadow-sm"
                                        : "border border-transparent text-muted-foreground hover:text-foreground hover:bg-background/40"
                                )}
                            >
                                {c.name}
                            </button>
                        ))}
                    </div>

                    {/* Cards — every category rendered (inactive hidden) so all answers stay in the SSR HTML for FAQ rich results */}
                    <div>
                        {categories.map((c, ci) => (
                            <div key={c.name} className={cn("space-y-4", ci === activeCat ? "block" : "hidden")}>
                                {c.items.map((f) => {
                                    const isOpen = open === f.q;
                                    return (
                                        <div
                                            key={f.q}
                                            className={cn(
                                                "rounded-xl border bg-secondary/5 transition-colors duration-300",
                                                isOpen ? "border-primary/40 bg-secondary/10" : "border-border/50 hover:border-primary/25"
                                            )}
                                        >
                                            <button
                                                onClick={() => setOpen(isOpen ? null : f.q)}
                                                aria-expanded={isOpen}
                                                className="group w-full flex items-center justify-between gap-4 p-6 text-left"
                                            >
                                                <span
                                                    className={cn(
                                                        "text-base md:text-lg font-semibold tracking-tight transition-colors",
                                                        isOpen ? "text-primary" : "text-foreground/90 group-hover:text-foreground"
                                                    )}
                                                >
                                                    {f.q}
                                                </span>
                                                <span
                                                    className={cn(
                                                        "shrink-0 grid place-items-center w-8 h-8 rounded-full border transition-all duration-300",
                                                        isOpen
                                                            ? "border-primary text-primary rotate-180 bg-primary/5"
                                                            : "border-border text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground"
                                                    )}
                                                >
                                                    <ChevronDown className="w-4 h-4" />
                                                </span>
                                            </button>

                                            <motion.div
                                                initial={false}
                                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                                aria-hidden={!isOpen}
                                            >
                                                <p className="px-6 pb-6 -mt-1 text-muted-foreground leading-relaxed max-w-2xl">
                                                    {f.a}
                                                </p>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

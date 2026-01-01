"use client";

import { motion } from "framer-motion";

const techs = [
    "Next.js 14", "React", "TypeScript", "Tailwind CSS", "Node.js", "Three.js", "Figma",
    "Supabase", "Git", "Redux", "GraphQL", "PostgreSQL", "Framer Motion", "Docker", "AWS"
];

export function TechTicker() {
    return (
        <section className="border-y border-border/40 bg-muted/20 py-8 overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex">
                <motion.div
                    className="flex gap-16 pr-16 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {[...techs, ...techs, ...techs].map((tech, i) => (
                        <span key={i} className="text-sm font-mono text-muted-foreground font-medium uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

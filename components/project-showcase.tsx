"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, CornerDownRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: "01",
        title: "Volunteer-Ops",
        category: "Platform Engineering",
        year: "2024",
        description: "A centralized platform connecting volunteers with non-profits, featuring real-time event discovery, automated coordination, and impact tracking.",
        tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        link: "https://hackfest-volunteers.vercel.app/"
    },
    {
        id: "02",
        title: "Suraksha Samriddhi",
        category: "InsurTech / Platform",
        year: "2024",
        description: "A professional digital platform empowering insurance agents to establish their online identity, showcase services, and connect with clients.",
        tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
        link: "https://surakshasamriddhi.in/"
    }
];

export function ProjectShowcase() {
    return (
        <section className="py-32 border-t border-border/40 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border/40 pb-4">
                    <div className="space-y-2">
                        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                            Featured_Work
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                            Engineering <span className="text-primary">Impact</span>.
                        </h3>
                    </div>

                    <Link href="/projects" className="hidden md:block">
                        <Button variant="ghost" className="h-auto p-0 text-xs font-mono text-muted-foreground hover:text-primary hover:bg-transparent">
                            [ VIEW_ARCHIVE ] <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                    </Link>
                </div>

                {/* Project Index List */}
                <div className="border-t border-border/40">
                    <div className="grid grid-cols-12 gap-4 py-4 border-b border-border/40 text-xs font-mono text-muted-foreground uppercase tracking-widest px-4">
                        <div className="col-span-1 md:col-span-1">ID</div>
                        <div className="col-span-11 md:col-span-5">Project</div>
                        <div className="hidden md:col-span-3 md:block">Category</div>
                        <div className="hidden md:col-span-2 md:block text-right">Year</div>
                        <div className="hidden md:col-span-1 md:block text-right">Link</div>
                    </div>

                    {projects.map((project) => (
                        <ProjectRow key={project.id} project={project} />
                    ))}
                </div>

                <div className="mt-16 md:hidden">
                    <Link href="/projects" className="w-full">
                        <Button variant="outline" className="w-full font-mono text-xs h-12 border-primary/20">VIEW_ALL_PROJECTS</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ProjectRow({ project }: { project: typeof projects[0] }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={project.link} className="block group" target="_blank" rel="noopener noreferrer">
            <motion.div
                className="relative border-b border-border/40 bg-background/50 hover:bg-muted/30 transition-colors"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="grid grid-cols-12 gap-4 py-8 px-4 items-start relative z-10">
                    {/* ID */}
                    <div className="col-span-1 md:col-span-1 font-mono text-xs text-muted-foreground/60 group-hover:text-primary transition-colors pt-1">
                        {project.id}
                    </div>

                    {/* Title */}
                    <div className="col-span-11 md:col-span-5">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                            {project.title}
                        </h3>
                        {/* Mobile Category */}
                        <div className="md:hidden mt-2 font-mono text-xs text-muted-foreground">
                            {project.category}
                        </div>
                    </div>

                    {/* Category */}
                    <div className="hidden md:col-span-3 md:flex items-center">
                        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wide border border-border/50 px-3 py-1 rounded-full">
                            {project.category}
                        </span>
                    </div>

                    {/* Year */}
                    <div className="hidden md:col-span-2 md:block text-right font-mono text-sm text-muted-foreground pt-1">
                        {project.year}
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:col-span-1 md:flex justify-end pt-1">
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
                    </div>
                </div>

                {/* Expanded Details on Hover (Desktop) */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="hidden md:block overflow-hidden bg-muted/20"
                        >
                            <div className="grid grid-cols-12 gap-4 pb-8 px-4 pt-2">
                                <div className="col-span-1"></div>
                                <div className="col-span-5">
                                    <div className="flex gap-4">
                                        <CornerDownRight className="w-5 h-5 text-primary/40 shrink-0 mt-1" />
                                        <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-6 flex items-end justify-end gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-mono text-primary/80 bg-primary/5 border border-primary/10 px-2 py-1">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </Link>
    );
}

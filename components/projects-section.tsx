"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Lightbulb, Grid, ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "CraftSmith",
        subtitle: "Luxury Handicraft Commerce (Startup)",
        tech: ["React", "Vite", "Framer Motion", "Tailwind"],
        problem: "Traditional artisans lacked a digital presence that matched the premium quality of their craftsmanship.",
        solution: "Architected a 'Digital Boutique' experience with deep cultural storytelling and immersive scroll animations.",
        learnings: "Mastered the translation of physical luxury into digital aesthetics, focusing on visual performance and brand identity.",
        link: "https://craftsmithglobal.in"
    },
    {
        title: "SurakshaSamridhi",
        subtitle: "Insurance Platform (Client Project)",
        tech: ["React", "TypeScript", "Vite", "Shadcn UI"],
        problem: "Legacy insurance processes were offline and opaque, leading to customer trust issues.",
        solution: "Developed a modern, trust-building digital platform with transparent policy details and lead generation.",
        learnings: "Refined skills in building high-trust UI for financial sectors and responsive data presentation.",
        link: "https://surakshasamriddhi.in/"
    },
    {
        title: "Volunteers-ops",
        subtitle: "Volunteer Recruitment Platform",
        tech: ["Next.js 14", "TypeScript", "Tailwind", "Supabase"],
        problem: "Managing volunteer applications for Hackfests was unstructured, lacking status tracking and transparency.",
        solution: "Built a dedicated portal with role-based application forms, real-time validation, and a comprehensive Admin Dashboard.",
        learnings: "Implemented Supabase Row Level Security (RLS) and optimized complex multi-step form states.",
        link: "https://hackfest-volunteers.vercel.app/"
    },
    {
        title: "EduNexus",
        subtitle: "Educational Management System",
        tech: ["React 18", "Shadcn", "Vite", "Tailwind CSS"],
        problem: "Complex institutional data needed a streamlined, accessible interface.",
        solution: "Built a responsive dashboard with role-based access and real-time updates.",
        learnings: "Deepened understanding of scalable component architecture and state management.",
        link: "https://edu-nexus-two.vercel.app/"
    },
    {
        title: "Swasthya Saathi",
        subtitle: "Patient Management Platform",
        tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
        problem: "Patient records were fragmented and difficult to access securely.",
        solution: "Developed a centralized, secure platform for patient history and appointment scheduling.",
        learnings: "Gained expertise in secure authentication and real-time database subscription.",
        link: "https://swasthya-saathi-connect.vercel.app/"
    },
    {
        title: "Patient Management System",
        subtitle: "Data Analysis Pipeline",
        tech: ["Python", "Pandas", "Data Viz"],
        problem: "Raw patient data was unstructured and hard to analyze.",
        solution: "Created a data processing pipeline to clean and visualize patient trends.",
        learnings: "Improved data manipulation skills and understanding of backend logic.",
        link: "https://github.com/debasmitsahoo/Patient-Management-System",
        isGithub: true
    }
];

export function ProjectsSection() {
    return (
        <section id="projects" className="pb-24">
            <div className="container px-4 md:px-6">
                <div className="flex items-center gap-2 mb-12 border-b border-border/40 pb-2">
                    <Grid className="w-4 h-4 text-primary" />
                    <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        // CASE_STUDIES
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative flex flex-col justify-between p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div>
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-primary/50 underline-offset-4 flex items-center gap-2">
                                                {project.title}
                                                {project.isGithub ? (
                                                    <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                                ) : (
                                                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                                )}
                                            </a>
                                        </h3>
                                    </div>
                                    <p className="text-sm text-foreground/60 italic mb-4">{project.subtitle}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-mono uppercase border border-primary/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="space-y-4">
                                    <div className="p-3 rounded-lg bg-background/40 border border-border/50">
                                        <div className="flex items-center gap-2 mb-1 text-xs font-mono text-muted-foreground uppercase tracking-wide">
                                            <AlertCircle className="w-3 h-3 text-red-400" /> Problem
                                        </div>
                                        <p className="text-sm text-foreground/90 leading-relaxed">
                                            {project.problem}
                                        </p>
                                    </div>

                                    <div className="p-3 rounded-lg bg-background/40 border border-border/50">
                                        <div className="flex items-center gap-2 mb-1 text-xs font-mono text-muted-foreground uppercase tracking-wide">
                                            <CheckCircle2 className="w-3 h-3 text-green-400" /> Solution
                                        </div>
                                        <p className="text-sm text-foreground/90 leading-relaxed">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer: Learnings */}
                            <div className="mt-6 pt-6 border-t border-border/40">
                                <div className="flex items-start gap-2">
                                    <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide block mb-1">
                                            Key Learnings
                                        </span>
                                        <p className="text-sm text-muted-foreground italic">
                                            "{project.learnings}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

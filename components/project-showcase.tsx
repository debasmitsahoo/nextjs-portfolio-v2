"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ProjectShowcase() {
    return (
        <section className="py-24 border-t border-b border-border/40 bg-muted/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="space-y-4 max-w-3xl">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                            <span className="w-8 h-[1px] bg-primary/40"></span>
                            Featured_Work
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                            Selected Case Studies. <br />
                            <span className="text-muted-foreground">Architecting solutions for complex domains.</span>
                        </h2>
                    </div>

                    <Link href="/projects" className="hidden md:block">
                        <Button variant="outline" className="group font-mono text-xs h-12 px-8 rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all">
                            VIEW_ALL_PROJECTS <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Project 1: Volunteer-Ops */}
                    <ProjectCard
                        title="Volunteer-Ops"
                        description="Platform connecting volunteers with non-profits, featuring event discovery and real-time coordination."
                        tech={['React', 'Node.js', 'MongoDB']}
                        color="orange"
                    >
                        <VolunteerUI />
                    </ProjectCard>

                    {/* Project 2: Suraksha Samriddhi */}
                    <ProjectCard
                        title="Suraksha Samriddhi"
                        description="Blockchain-enabled insurance platform delivering micro-coverage and automated claim settlements to rural families."
                        tech={['Next.js', 'Solidity', 'Web3']}
                        color="blue"
                    >
                        <InsuranceUI />
                    </ProjectCard>
                </div>

                <div className="mt-12 md:hidden">
                    <Link href="/projects" className="w-full">
                        <Button variant="outline" className="w-full font-mono text-xs rounded-none h-12">VIEW_ALL_PROJECTS</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ title, description, tech, children, color }: { title: string, description: string, tech: string[], children: React.ReactNode, color: string }) {
    return (
        <Link href="/projects" className="group block h-full">
            <div className={`relative aspect-video bg-muted/5 rounded-xl overflow-hidden mb-6 border border-border/40 group-hover:border-${color}-500/50 transition-all duration-500 shadow-2xl`}>

                {/* Visual Content */}
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-grid-white/[0.02]">
                    <div className="w-full max-w-sm">
                        {children}
                    </div>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>

            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{title}</h3>
                    <div className="flex gap-2">
                        {tech.map((t, i) => (
                            <span key={i} className="text-[10px] uppercase font-mono border border-border px-2 py-0.5 rounded-full text-muted-foreground bg-secondary/20">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
        </Link>
    );
}

function VolunteerUI() {
    return (
        <div className="relative rounded-lg border border-border/50 bg-card/50 backdrop-blur-md p-4 space-y-3 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 p-20 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none" />

            <div className="flex items-center justify-between border-b border-border/30 pb-3">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                    <div>
                        <div className="text-xs font-bold">Community Cleanup</div>
                        <div className="text-[10px] text-muted-foreground">Organizer: EcoWarriors</div>
                    </div>
                </div>
                <div className="text-[10px] font-mono bg-green-500/10 text-green-500 px-2 py-1 rounded">OPEN</div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>Volunteers</span>
                    <span>12 / 50</span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-[24%]" />
                </div>
            </div>

            <div className="flex gap-2 pt-2">
                <div className="flex-1 h-8 bg-primary/10 rounded flex items-center justify-center text-[10px] font-bold text-primary">JOIN_EVENT</div>
                <div className="w-8 h-8 rounded border border-border/50 flex items-center justify-center">
                    <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                </div>
            </div>
        </div>
    )
}


function InsuranceUI() {
    return (
        <div className="relative rounded-lg border border-border/50 bg-card/50 backdrop-blur-md p-4 space-y-4 shadow-xl overflow-hidden">
            <div className="absolute bottom-0 left-0 p-20 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />

            <div className="flex items-center justify-between">
                <div className="text-xs font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    Policy Dashboard
                </div>
                <div className="text-[10px] font-mono text-muted-foreground">Health Shield+</div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 rounded bg-background/40 border border-border/30">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-mono truncate">Claim #CLM-9281</div>
                        <div className="text-[9px] text-muted-foreground">Approved</div>
                    </div>
                    <div className="text-[10px] font-bold">₹12,400</div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded bg-background/40 border border-border/30">
                    <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-mono truncate">Renewal Due</div>
                        <div className="text-[9px] text-muted-foreground">In 5 Days</div>
                    </div>
                    <Button size="sm" variant="outline" className="h-5 text-[9px] px-2 bg-blue-500/10 border-blue-500/20 text-blue-500 hover:bg-blue-500/20">Pay</Button>
                </div>
            </div>
            <div className="text-[9px] font-mono text-center text-muted-foreground border-t border-border/20 pt-2 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                COVERAGE_ACTIVE
            </div>
        </div>
    )
}

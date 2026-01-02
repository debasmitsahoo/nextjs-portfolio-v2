"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ExperienceSection } from "@/components/experience-section";
import { TechEvents } from "@/components/tech-events";
import { CommunityImpact } from "@/components/community-impact";
import { ArrowDown } from "lucide-react";

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <div className="pt-32 pb-12">
                <div className="container px-4 md:px-6 mb-16">
                    {/* Cinematic Header */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-12 bg-primary"></div>
                            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                System_Log: v.2.6
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                            PROFESSIONAL <br className="hidden md:block" />
                            <span className="text-muted-foreground stroke-text">EXPERIENCE</span>
                        </h1>

                        <p className="max-w-xl text-lg text-muted-foreground/80 leading-relaxed font-light border-l-2 border-primary/20 pl-6">
                            Execution of scalable systems and product architectures.
                            <span className="block mt-2 font-mono text-xs text-primary/60">
                                // DEPLOYMENT_STATUS: ACTIVE
                            </span>
                        </p>
                    </div>
                </div>

                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-[1fr_300px] gap-12 relative">
                        {/* Left Column: Content */}
                        <div className="space-y-24">
                            <div id="deployment-history">
                                <ExperienceSection />
                            </div>
                            <div id="community-initiatives">
                                <CommunityImpact />
                            </div>
                            <div id="field-notes">
                                <TechEvents />
                            </div>
                        </div>

                        {/* Right Column: Sticky Sidebar (HUD) */}
                        <aside className="hidden lg:block relative">
                            <div className="sticky top-32 space-y-12">
                                {/* Navigation */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 mb-4 border-b border-border/40 pb-2">
                                        <ArrowDown className="w-4 h-4 text-primary" />
                                        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                            // NAVIGATION
                                        </h2>
                                    </div>
                                    <nav className="flex flex-col gap-2">
                                        <a href="#deployment-history" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors"></span>
                                            Deployment History
                                        </a>
                                        <a href="#community-initiatives" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors"></span>
                                            Community Initiatives
                                        </a>
                                        <a href="#field-notes" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors"></span>
                                            Field Notes & Events
                                        </a>
                                    </nav>
                                </div>

                                {/* Core Focus */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 mb-4 border-b border-border/40 pb-2">
                                        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                            // CORE_FOCUS
                                        </h2>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["UI Engineering", "Full-Stack Web Development", "Cloud & Deployment Fundamentals", "System Design (Foundations)", "Community & Leadership"].map(tag => (
                                            <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-secondary/30 text-secondary-foreground border border-border/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
                                    <div className="text-xs font-mono text-primary uppercase tracking-widest mb-1">
                                        Status
                                    </div>
                                    <div className="font-bold text-foreground">
                                        Open to Opportunities
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <SiteFooter />
        </main>
    )
}

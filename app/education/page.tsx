"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { InteractiveEducation } from "@/components/interactive-education";

export default function EducationPage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <div className="pt-32 pb-12 container px-4 md:px-6">
                <div>
                    {/* Cinematic Header */}
                    <div className="mb-16 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-12 bg-primary"></div>
                            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                System_Log: v.2.0
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                            EDUCATION <br className="hidden md:block" />
                            <span className="text-muted-foreground stroke-text">& HONORS</span>
                        </h1>

                        <p className="max-w-xl text-lg text-muted-foreground/80 leading-relaxed font-light border-l-2 border-primary/20 pl-6">
                            Verified documentation of academic milestones and institutional recognitions.
                            <span className="block mt-2 font-mono text-xs text-primary/60">
                                // LAST_UPDATED: 2026-01-01
                            </span>
                        </p>
                    </div>

                    <InteractiveEducation />
                </div>
            </div>
            <SiteFooter />
        </main>
    )
}

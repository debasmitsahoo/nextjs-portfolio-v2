"use client";

import { ArrowRight } from "lucide-react";

export function ArchitectBio() {
    return (
        <section className="w-full">
            {/* Header / Eyebrow */}
            <div className="mb-8 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-primary"></div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Engineering_Profile / 2026
                </span>
            </div>

            <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-24">
                {/* Left Column: The Manifesto */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
                        I build resilient infrastructure for the <span className="text-primary">Intelligence Era</span>.
                    </h2>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                        <p>
                            Code is the medium; impact is the goal. As a Full Stack Developer, I don&apos;t just deliver features—I engineer systems that scale, endure, and perform under pressure.
                        </p>
                        <p>
                            My approach combines mathematical precision with creative problem-solving. Whether it&apos;s orchestrating distributed cloud clusters or integrating LLMs into production apps, I focus on the intersection of **reliability** and **velocity**.
                        </p>
                        <p>
                            I believe that true innovation happens when complex backend logic meets intuitive, accessible design.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-border/40">
                        <div className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-wider">
                            <ArrowRight className="w-4 h-4" />
                            <span>SystemStatus: Operational</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Specifications */}
                <div className="space-y-12">
                    {/* Spec Block 1 */}
                    <div className="space-y-4">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/40 pb-2">
                            Core_Directives
                        </h3>
                        <ul className="space-y-3 text-sm font-medium">
                            <li className="flex items-start justify-between">
                                <span>Distributed Systems</span>
                                <span className="text-muted-foreground font-mono">01</span>
                            </li>
                            <li className="flex items-start justify-between">
                                <span>Cloud Native Arch</span>
                                <span className="text-muted-foreground font-mono">02</span>
                            </li>
                            <li className="flex items-start justify-between">
                                <span>AI Model Integration</span>
                                <span className="text-muted-foreground font-mono">03</span>
                            </li>
                        </ul>
                    </div>

                    {/* Spec Block 2 */}
                    <div className="space-y-4">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/40 pb-2">
                            Selected_Stack
                        </h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground font-mono">
                            <span>Next.js 14</span>
                            <span>React / TypeScript</span>
                            <span>Firebase / Supabase</span>
                            <span>PostgreSQL / MySQL</span>
                            <span>GCP / Vercel</span>
                            <span>Docker / Nginx</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { MapPin, Activity } from "lucide-react";
import Image from "next/image";

export function ProfileHero() {
    return (
        <section className="w-full">
            <div className="grid md:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-start">
                <div className="relative group mx-auto md:mx-0 w-full max-w-[400px]">
                    {/* Frame */}
                    <div className="relative aspect-[3/4] border-2 border-primary/20 bg-muted/20 overflow-hidden">
                        <Image
                            src="/me.jpg"
                            alt="Debasmit Sahoo"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                            priority
                        />

                        {/* Scanline Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[size:4px_4px] pointer-events-none opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

                        {/* Corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary"></div>
                    </div>

                    {/* Vitals Panel */}
                    <div className="mt-6 p-4 border border-border/40 bg-card/30 backdrop-blur-sm space-y-3 font-mono text-sm max-w-[400px] mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Activity className="w-4 h-4 text-green-500 animate-pulse" />
                                <span>Status</span>
                            </div>
                            <span className="text-green-500 font-bold">ONLINE</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>Base_Ops</span>
                            </div>
                            <span>Bhubaneswar, IN</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-10 pt-4 text-left">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Engineering Intelligence
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                            I architect systems for the <span className="text-primary">Intelligence Era</span>.
                        </h1>
                    </div>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            <span className="text-foreground font-semibold">Code is ephemeral; architecture is foundational.</span> As a Full Stack Architect and AI Engineer, I don&apos;t just deliver features—I engineer systems that scale, endure, and perform under pressure.
                        </p>
                        <p>
                            My approach combines mathematical precision with creative problem-solving. Whether it&apos;s orchestrating distributed cloud clusters or fine-tuning neural network inference, I focus on the intersection of <span className="text-foreground font-medium">reliability</span> and <span className="text-foreground font-medium">velocity</span>.
                        </p>
                        <p>
                            True innovation happens when complex backend logic meets intuitive, accessible design.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border/40">
                        <div>
                            <div className="text-3xl font-bold text-foreground">2+</div>
                            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">Years Active</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-foreground">15+</div>
                            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">Deployments</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-foreground">99.9%</div>
                            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { Button } from "@/components/ui/button";
import { TechProfile } from "./tech-profile";

export function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 md:pt-0">
            <div className="container px-4 md:px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                {/* Text Content - Optimized LCP: CSS Animation instead of Framer Motion */}
                <div className="flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="flex flex-col space-y-6 relative">
                        <div className="absolute -left-12 top-0 hidden lg:flex flex-col gap-2 text-[10px] font-mono text-muted-foreground/40 select-none">
                            <span>01</span>
                            <span>02</span>
                            <span>03</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-secondary/30 w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-mono text-muted-foreground">SYSTEM_ONLINE</span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground leading-[1.1] pb-1">
                                Debasmit Sahoo
                            </h1>
                            <h2 className="text-xl md:text-2xl font-mono font-medium mt-2">
                                <span className="text-primary/60 mr-1">&lt;</span>
                                <span className="text-foreground">FullStack_Developer</span>
                                <span className="text-primary/60 ml-1">/&gt;</span>
                            </h2>
                        </div>

                        <div className="max-w-lg relative pl-6 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                                Building <span className="text-foreground font-normal">scalable web applications</span> and <span className="text-foreground font-normal">intelligent AI agents</span>.
                                <br className="hidden md:block" />
                                I turn complex ideas into <span className="text-foreground font-normal">elegant, high-performance</span> digital experiences.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-widest h-12 px-8">
                                Initialize_Project
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-none border-2 h-12 px-8 text-xs font-mono uppercase tracking-widest hover:bg-secondary">
                                Download_Data
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 3D Canvas / Tech Profile */}
                <div
                    className="w-full max-w-[500px] mx-auto md:ml-auto relative animate-in zoom-in-95 fade-in duration-1000 fill-mode-forwards"
                    style={{ animationDelay: '300ms' }}
                >
                    <TechProfile />
                </div>
            </div>

            {/* Background Texture - Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        </section>
    );
}

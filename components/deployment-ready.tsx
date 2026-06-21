"use client";

import { Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function DeploymentReady() {
    return (
        <section className="py-16 md:py-20 border-b border-border/40 relative overflow-hidden bg-background">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:60px_60px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    System_Status: Ready_For_Commissions
                </div>

                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                    READY TO DEPLOY?
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                    Let's architect the next generation of your digital infrastructure.
                    From scalable backends to immersive frontends, I'm ready to execute.
                </p>

                <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
                    <Link href="/contact" className="w-full">
                        <Button className="w-full h-14 text-base font-mono uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 rounded-none border-2 border-primary shadow-[0_0_20px_-5px_theme(colors.primary.DEFAULT/0.5)] transition-all hover:scale-[1.02]">
                            Initialize_Project
                        </Button>
                    </Link>
                    <Link href="/about" className="w-full">
                        <Button variant="outline" className="w-full h-14 text-base font-mono uppercase tracking-widest rounded-none hover:bg-secondary/50">
                            Read_Documentation
                        </Button>
                    </Link>
                </div>

                {/* Footer Metadata */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[10px] font-mono text-muted-foreground uppercase opacity-50">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-3 h-3" />
                        <span>Build_v2026.1.0</span>
                    </div>
                    <div>Latency: 12ms</div>
                    <div>Region: GLOBAL</div>
                </div>
            </div>
        </section>
    );
}

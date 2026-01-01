"use client";

import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function IntelFeed() {
    return (
        <section className="py-24 border-b border-border/40 relative">
            {/* Background Element */}
            <div className="absolute right-0 top-0 p-32 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                            <span className="w-8 h-[1px] bg-primary/40"></span>
                            Latest_Intel
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Thoughts & <span className="text-muted-foreground">Technical Notes</span>
                        </h2>
                    </div>
                    <Link href="/blog">
                        <Button variant="ghost" className="group font-mono text-xs hidden md:flex">
                            ACCESS_ARCHIVES <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Log 01 */}
                    <LogCard
                        id="0x01"
                        date="2025-12-15"
                        latency="5min"
                        tag="SYS_ARCH"
                        title="Optimizing Next.js 14 Performance for Scale"
                        summary="Deep dive into server components, image optimization, and route handling for maximum speed."
                    />

                    {/* Log 02 */}
                    <LogCard
                        id="0x02"
                        date="2025-11-20"
                        latency="7min"
                        tag="VISUAL_ENG"
                        title="Building Immersive 3D Web Experiences"
                        summary="How to integrate React Three Fiber without sacrificing accessibility or load times."
                    />
                </div>

                <div className="mt-8 md:hidden">
                    <Link href="/blog" className="w-full">
                        <Button variant="outline" className="w-full font-mono text-xs rounded-none h-12">ACCESS_ARCHIVES</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function LogCard({ id, date, latency, tag, title, summary }: { id: string, date: string, latency: string, tag: string, title: string, summary: string }) {
    return (
        <Link href="/blog" className="group block relative">
            <div className="h-full bg-secondary/5 border border-border/50 p-8 rounded-xl hover:border-primary/50 transition-all duration-300 hover:bg-secondary/10 hover:translate-x-1">

                {/* Header Meta */}
                <div className="flex items-center justify-between mb-6 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center gap-3">
                        <span className="text-primary/50">[{id}]</span>
                        <span>LOGGED: {date}</span>
                    </div>
                    <span className="border border-border/50 px-2 py-0.5 rounded bg-background/50">
                        LATENCY: {latency}
                    </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <div className="inline-block text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {tag}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {summary}
                    </p>
                </div>

                {/* Footer Decor */}
                <div className="absolute bottom-4 right-4 text-muted-foreground/10 group-hover:text-primary/20 transition-colors">
                    <Terminal className="w-6 h-6" />
                </div>
            </div>
        </Link>
    )
}

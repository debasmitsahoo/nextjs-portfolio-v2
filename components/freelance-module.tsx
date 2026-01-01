"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FreelanceModule() {
    return (
        <div className="h-full bg-secondary/5 border border-border/50 rounded-xl overflow-hidden backdrop-blur-sm relative group hover:border-primary/50 transition-colors duration-500 flex flex-col">
            {/* Header: Status Line */}
            <div className="p-6 border-b border-border/50 bg-secondary/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Status: <span className="text-green-500 font-bold">Online</span>
                    </span>
                </div>
                <Zap className="w-4 h-4 text-primary" />
            </div>

            {/* Body: Capacity Info */}
            <div className="p-6 space-y-6 flex-1">
                <div>
                    <h3 className="text-lg font-bold mb-1">Accepting Commissions</h3>
                    <p className="text-sm text-muted-foreground">Q1 2026 Schedule</p>
                </div>

                {/* Capacity Meter */}
                <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono uppercase text-muted-foreground">
                        <span>Current_Bandwidth</span>
                        <span>66% Free</span>
                    </div>
                    <div className="flex gap-1 h-2">
                        <div className="flex-1 bg-green-500 rounded-sm" />
                        <div className="flex-1 bg-green-500 rounded-sm" />
                        <div className="flex-1 bg-secondary rounded-sm opacity-20" />
                    </div>
                </div>

                <div className="text-xs text-muted-foreground leading-relaxed pl-3 border-l-2 border-primary/20">
                    Specializing in High-Performance Web Apps, AI Integrations, and 3D Interactive Experiences.
                </div>
            </div>

            {/* Footer: Action */}
            <div className="p-6 pt-0 mt-auto">
                <Link href="/contact" className="block w-full">
                    <Button variant="outline" className="w-full font-mono text-xs uppercase h-12 border-primary/20 hover:bg-primary/10 hover:text-primary transition-all group-hover:border-primary/50">
                        [ OPEN_CHANNEL ] <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

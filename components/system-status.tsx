"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function SystemStatus() {
    const [time, setTime] = useState<string>("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return <div className="h-full bg-muted/10 animate-pulse rounded" />;

    return (
        <div className="h-full flex flex-col justify-between font-mono text-xs text-muted-foreground w-full">
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary border-b border-primary/20 pb-2">
                    <span className="animate-spin duration-[3000ms]">✦</span>
                    <span className="tracking-widest uppercase">System_Metrics</span>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center group cursor-default">
                        <span className="group-hover:text-primary transition-colors">&gt; LAST_LOGIN</span>
                        <span className="text-foreground bg-muted/20 px-1 rounded">{time}</span>
                    </div>

                    <div className="flex justify-between items-center group cursor-default">
                        <span className="group-hover:text-primary transition-colors">&gt; STATUS</span>
                        <span className="text-green-500 font-bold flex items-center gap-2 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                            </span>
                            AVAILABLE
                        </span>
                    </div>

                    <div className="flex justify-between items-center group cursor-default">
                        <span className="group-hover:text-primary transition-colors">&gt; LOCATION</span>
                        <span className="text-foreground flex items-center gap-2">
                            BHUBANESWAR
                            <span className="text-[10px] opacity-50">[IN]</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Simulated Data Graph */}
            <div className="mt-6 space-y-1">
                <div className="flex justify-between text-[10px] opacity-50 uppercase tracking-wider">
                    <span>Performance</span>
                    <span>100%</span>
                </div>
                <div className="flex gap-0.5 h-8 items-end">
                    {[40, 70, 30, 80, 50, 90, 60, 40, 80, 50, 70, 90, 60, 40, 80, 30, 50, 90, 70, 40].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: "10%" }}
                            animate={{ height: `${h}%` }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: i * 0.1,
                                ease: "easeInOut"
                            }}
                            className="bg-primary/20 flex-1 rounded-sm hover:bg-primary transition-colors"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

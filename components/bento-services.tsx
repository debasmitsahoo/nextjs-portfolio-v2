"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Layout, Smartphone, LineChart, Zap, Server } from "lucide-react";
import { useEffect, useState } from "react";

export function BentoServices() {
    return (
        <section className="py-16 md:py-20 border-b border-border/40 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                            <span className="w-8 h-[1px] bg-primary/40"></span>
                            Technical_Capabilities
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                            Beyond Just Code. <br />
                            <span className="text-muted-foreground">Engineered for Growth.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {/* Large Card: System Architecture */}
                    <div className="md:col-span-2 relative group overflow-hidden border border-border/50 bg-secondary/5 rounded-xl p-8 hover:border-primary/50 transition-colors duration-500">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="p-3 bg-background/50 backdrop-blur w-fit rounded-lg border border-border/50 text-primary mb-4">
                                <Server className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Distributed Cloud Architecture</h3>
                                <p className="text-muted-foreground max-w-sm">
                                    Designing resilient, scalable systems using microservices patterns, GCP infrastructure, and Docker for scalable, high-throughput deployments.
                                </p>
                            </div>
                        </div>

                        {/* Interactive Background: Network Nodes */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <NetworkAnimation />
                        </div>
                        <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                    </div>

                    {/* AI Card */}
                    <div className="md:col-span-1 relative group overflow-hidden border border-border/50 bg-secondary/5 rounded-xl p-8 hover:border-primary/50 transition-colors duration-500">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="p-3 bg-background/50 backdrop-blur w-fit rounded-lg border border-border/50 text-blue-400 mb-4">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">AI Integration</h3>
                                <p className="text-muted-foreground text-sm">
                                    Deploying LLMs and intelligent agents that automate complex workflows.
                                </p>
                            </div>
                        </div>
                        {/* Animation: Data Stream */}
                        <div className="absolute inset-0 opacity-10 font-mono text-[10px] leading-3 overflow-hidden p-4 text-right pointer-events-none">
                            <DataStream />
                        </div>
                    </div>

                    {/* Performance Card */}
                    <div className="md:col-span-1 relative group overflow-hidden border border-border/50 bg-secondary/5 rounded-xl p-8 hover:border-primary/50 transition-colors duration-500">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="p-3 bg-background/50 backdrop-blur w-fit rounded-lg border border-border/50 text-yellow-500 mb-4">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Performance & Speed</h3>
                                <p className="text-muted-foreground text-sm">
                                    Core Web Vitals auditing and optimization for sub-100ms interactions.
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 text-4xl font-bold text-muted-foreground/10 group-hover:text-primary/20 transition-colors font-mono">
                            100
                        </div>
                    </div>

                    {/* UI/UX Card */}
                    <div className="md:col-span-2 relative group overflow-hidden border border-border/50 bg-secondary/5 rounded-xl p-8 hover:border-primary/50 transition-colors duration-500">
                        <div className="grid md:grid-cols-2 gap-8 h-full">
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="p-3 bg-background/50 backdrop-blur w-fit rounded-lg border border-border/50 text-pink-500 mb-4">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Interactive UX Engineering</h3>
                                    <p className="text-muted-foreground">
                                        Crafting fluid, framer-motion powered interfaces that feel alive and responsive across all devices.
                                    </p>
                                </div>
                            </div>
                            {/* Visual Representation */}
                            <div className="relative h-full flex items-center justify-center">
                                <div className="relative w-full aspect-video bg-background border border-border/60 rounded-lg shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-grid-white/[0.05]" />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    </div>
                                    <motion.div
                                        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/20 rounded-full blur-xl"
                                    />
                                    <div className="absolute bottom-4 right-4 w-1/2 h-2 bg-muted rounded" />
                                    <div className="absolute bottom-8 right-4 w-1/3 h-2 bg-muted rounded opacity-50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function NetworkAnimation() {
    return (
        <svg className="w-full h-full" viewBox="0 0 400 300">
            <motion.path
                d="M50,150 Q200,50 350,150 T50,150"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle cx="50" cy="150" r="3" fill="currentColor" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.circle cx="350" cy="150" r="3" fill="currentColor" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
            <motion.circle cx="200" cy="120" r="3" fill="currentColor" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
        </svg>
    );
}


function DataStream() {
    return (
        <div className="break-all opacity-50 font-mono text-[10px] leading-3 h-full overflow-hidden select-none">
            {/* Static Content with CSS Animation - Zero JS Overhead */}
            <div className="animate-pulse">
                01010100101101010010100101101010
                01010010100101011010100101010010
                10100101101010010100101101010010
                10100101001001010100101101010110
                10100101010010101001011010100101
                01001011010100101001011010100101
            </div>
        </div>
    );
}

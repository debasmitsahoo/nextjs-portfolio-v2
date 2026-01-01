"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ThreeDElement } from "./three-d-element";

export function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 md:pt-0">
            <div className="container px-4 md:px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col space-y-6"
                >
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
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                                Debasmit Sahoo
                            </h1>
                            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium font-mono">
                                &lt;FrontEnd_Developer /&gt;
                            </h2>
                        </div>

                        <p className="text-base md:text-lg text-muted-foreground/80 max-w-lg leading-relaxed border-l-2 border-primary/20 pl-4">
                            Debasmit Sahoo is a Front-End Developer and Designer with 2+ years of experience building scalable, accessible, and performance-first web applications using React, Next.js, and TypeScript.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-widest h-12 px-8">
                                Initialize_Project
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-none border-2 h-12 px-8 text-xs font-mono uppercase tracking-widest hover:bg-secondary">
                                Download_Data
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* 3D Canvas */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-[400px] md:h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-700"
                >
                    <Canvas className="h-full w-full" dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[5, 5, 5]} intensity={2} />
                        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="blue" />
                        <Suspense fallback={null}>
                            <ThreeDElement />
                        </Suspense>
                    </Canvas>
                </motion.div>
            </div>

            {/* Background Texture - Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        </section>
    );
}

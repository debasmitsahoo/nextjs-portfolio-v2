"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getAllPosts } from "@/lib/blog-data";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogPage() {
    const blogPosts = getAllPosts();

    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <div className="pt-32 pb-12">
                <div className="container px-4 md:px-6 mb-16">
                    {/* Cinematic Header */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-12 bg-primary"></div>
                            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                System_Log: v.4.0
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                            THOUGHTS & <br className="hidden md:block" />
                            <span className="text-muted-foreground stroke-text">INSIGHTS</span>
                            <span className="sr-only"> — Debasmit Sahoo Blog</span>
                        </h1>

                        <p className="max-w-xl text-lg text-muted-foreground/80 leading-relaxed font-light border-l-2 border-primary/20 pl-6">
                            Writing about web development, design systems, and the future of digital interfaces.
                            <span className="block mt-2 font-mono text-xs text-primary/60">
                                // DEV_LOGS: ACTIVE
                            </span>
                        </p>
                    </div>
                </div>

                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full group outline-none">
                                    <article className="flex-1 relative flex flex-col justify-between p-0 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">

                                        {/* Image Header */}
                                        <div className="relative h-48 w-full overflow-hidden border-b border-border/40">
                                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />

                                            <div>
                                                {/* Meta */}
                                                <div className="flex items-center justify-between mb-4 text-xs font-mono text-muted-foreground">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="w-3 h-3" />
                                                        {post.date}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="w-3 h-3" />
                                                        {post.readTime}
                                                    </div>
                                                </div>

                                                <h2 className="text-2xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
                                                    {post.title}
                                                </h2>

                                                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                                                    {post.summary}
                                                </p>
                                            </div>

                                            <div className="mt-auto pt-6 border-t border-border/40 flex flex-col gap-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {post.tags.map(tag => (
                                                        <span key={tag} className="px-2 py-0.5 rounded bg-secondary/50 border border-border/50 text-xs font-mono text-secondary-foreground">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex items-center text-sm font-bold text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                                                    Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <SiteFooter />
        </main>
    )
}

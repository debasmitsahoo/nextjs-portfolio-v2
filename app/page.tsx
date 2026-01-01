import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ChevronRight } from "lucide-react";
import { TechTicker } from "@/components/tech-ticker";
import { ServicesGrid } from "@/components/services-grid";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Debasmit Sahoo",
                        "jobTitle": "Front-End Developer & Designer",
                        "url": "https://debasmitsahoo.com",
                        "sameAs": [
                            "https://linkedin.com/in/debasmitsahoo",
                            "https://github.com/debasmitsahoo"
                        ],
                        "description": "Debasmit Sahoo is a Freelance Front-End Developer and Designer building scalable, accessible web applications."
                    })
                }}
            />
            <SiteHeader />
            <HeroSection />

            <TechTicker />

            {/* About Teaser */}
            <section className="py-24 border-b border-border/40">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                                <span className="w-8 h-[1px] bg-primary/40"></span>
                                Operator_Profile
                            </div>
                            <h2 className="text-3xl font-bold max-w-lg">Engineered for Performance. Designed for Humans.</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I don't just write code; I build digital ecosystems. With a background in both creative direction and full-stack engineering, I bridge the gap between aesthetic vision and technical reality.
                            </p>
                            <Link href="/about">
                                <Button variant="outline" className="rounded-none border-2 font-mono text-xs uppercase h-12 px-6">
                                    Read_Full_Profile <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="flex-1 w-full max-w-sm">
                            {/* Abstract graphic representation */}
                            <div className="aspect-square bg-secondary/20 tech-border relative p-8 flex flex-col justify-between">
                                <div className="space-y-2 font-mono text-xs text-muted-foreground">
                                    <p>&gt; LAST_LOGIN: TODAY</p>
                                    <p>&gt; STATUS: AVAILABLE</p>
                                    <p>&gt; LOCATION: BHUBANESWAR</p>
                                </div>
                                <div className="w-full h-1/2 bg-gradient-to-t from-background to-transparent border-b border-r border-border/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesGrid />

            {/* Featured Preview Section */}
            <section className="py-24 border-t border-b border-border/40 bg-muted/20">
                <div className="container px-4 md:px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                                <span className="w-8 h-[1px] bg-primary/40"></span>
                                Case_Studies
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
                            <p className="text-muted-foreground font-mono text-sm max-w-[600px]">
                                / SELECT_PROJECTS_FROM_DATABASE
                            </p>
                        </div>
                        <Link href="/projects">
                            <Button variant="ghost" className="group font-mono text-xs hidden md:flex">
                                VIEW_ALL_PROJECTS <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Preview Card 1 */}
                        <Link href="/projects" className="group block h-full">
                            <div className="relative aspect-video bg-background border tech-border overflow-hidden mb-4 group-hover:border-primary/50 transition-colors">
                                {/* Placeholder image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
                                    <span className="font-mono text-xs text-muted-foreground">[PROJECT_IMAGE: EDUNEXUS]</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">EduNexus</h3>
                            <p className="text-muted-foreground text-sm line-clamp-2">Front-end system for institution management with role-based access.</p>
                        </Link>
                        {/* Preview Card 2 */}
                        <Link href="/projects" className="group block h-full">
                            <div className="relative aspect-video bg-background border tech-border overflow-hidden mb-4 group-hover:border-primary/50 transition-colors">
                                {/* Placeholder image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
                                    <span className="font-mono text-xs text-muted-foreground">[PROJECT_IMAGE: SWASTHYA]</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Swasthya Saathi</h3>
                            <p className="text-muted-foreground text-sm line-clamp-2">Healthcare patient management platform focusing on privacy and security.</p>
                        </Link>
                    </div>

                    <div className="mt-8 md:hidden">
                        <Link href="/projects" className="w-full">
                            <Button variant="outline" className="w-full font-mono text-xs rounded-none">VIEW_ALL_PROJECTS</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Blog Teaser */}
            <section className="py-24">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-[1fr_300px] gap-12">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                                <span className="w-8 h-[1px] bg-primary/40"></span>
                                Latest_Intel
                            </div>
                            <h2 className="text-3xl font-bold mb-8">Thoughts & Technical Notes</h2>

                            <div className="space-y-6">
                                <Link href="/blog" className="block group">
                                    <div className="border-l-2 border-border pl-6 py-2 group-hover:border-primary transition-colors">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Optimizing Next.js 14 Performance for Scale</h3>
                                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">Deep dive into server components, image optimization, and route handling for maximum speed.</p>
                                        <span className="text-xs font-mono text-muted-foreground">2025-12-15 • 5 min read</span>
                                    </div>
                                </Link>
                                <Link href="/blog" className="block group">
                                    <div className="border-l-2 border-border pl-6 py-2 group-hover:border-primary transition-colors">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Building Immersive 3D Web Experiences</h3>
                                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">How to integrate React Three Fiber without sacrificing accessibility or load times.</p>
                                        <span className="text-xs font-mono text-muted-foreground">2025-11-20 • 7 min read</span>
                                    </div>
                                </Link>
                            </div>

                            <div className="mt-8">
                                <Link href="/blog" className="text-sm font-bold flex items-center hover:text-primary transition-colors">
                                    READ_ALL_ARTICLES <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-primary text-primary-foreground p-8 flex flex-col justify-between relative overflow-hidden tech-border border-none">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 font-mono uppercase tracking-wider">Freelance</h3>
                                <p className="text-sm opacity-90 mb-8 leading-relaxed">
                                    Have a project in mind? I'm currently accepting new freelance commissions for Q1 2026.
                                </p>
                                <Link href="/contact" className="w-full">
                                    <Button variant="secondary" className="w-full rounded-none font-mono text-xs uppercase h-12">
                                        Initiate_Request
                                    </Button>
                                </Link>
                            </div>
                            {/* Decorative background */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}

import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ChevronRight } from "lucide-react";
import { TechTicker } from "@/components/tech-ticker";
import { BentoServices } from "@/components/bento-services";
import { SystemStatus } from "@/components/system-status";
import { ProjectShowcase } from "@/components/project-showcase";
// import { IntelFeed } from "@/components/intel-feed"; // temporarily hidden
import { DeploymentReady } from "@/components/deployment-ready";

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
                        "jobTitle": "Full Stack Developer & AI Engineer",
                        "url": "https://debasmit.com",
                        "sameAs": [
                            "https://linkedin.com/in/debasmitsahoo",
                            "https://github.com/debasmitsahoo"
                        ],
                        "description": "Debasmit Sahoo is a Full Stack Developer and AI Engineer building intelligent web applications.",
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
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
                                Engineered for Performance. <br />
                                <span className="text-muted-foreground">Designed for Humans.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I engineer systems where performance meets precision. Moving beyond simple implementations, I design distributed cloud architectures and intelligent interfaces that drive real business impact at scale.
                            </p>
                            <Link href="/about" className="pt-4 block">
                                <Button variant="outline" className="rounded-none border-2 font-mono text-xs uppercase h-12 px-6">
                                    Read_Full_Profile <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="flex-1 w-full max-w-sm">
                            {/* Abstract graphic representation */}
                            <div className="aspect-square bg-secondary/10 tech-border relative p-6 flex flex-col justify-between overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]" />
                                <div className="absolute top-0 right-0 p-2 opacity-50">
                                    <div className="w-16 h-16 border-t border-r border-primary/20 rounded-tr-xl" />
                                </div>

                                <div className="relative z-10 h-full">
                                    <SystemStatus />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BentoServices />

            <ProjectShowcase />

            {/* Blog Teaser */}
            {/* Blog Section — temporarily hidden */}
            {/* <IntelFeed /> */}

            {/* Final CTA Section */}
            <DeploymentReady />

            <SiteFooter />
        </main>
    );
}

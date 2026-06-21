import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { TechTicker } from "@/components/tech-ticker";
import { BentoServices } from "@/components/bento-services";
import { SystemStatus } from "@/components/system-status";
import { ProjectShowcase } from "@/components/project-showcase";
// import { IntelFeed } from "@/components/intel-feed"; // temporarily hidden
import { DeploymentReady } from "@/components/deployment-ready";
import { FaqSection } from "@/components/faq-section";
import { schemaGraph, faqNode } from "@/lib/schema";

const FAQ_CATEGORIES = [
    {
        name: "General",
        items: [
            {
                q: "Who is Debasmit Sahoo?",
                a: "Debasmit Sahoo is a Full Stack Developer and Product Engineering Intern based in Bhubaneswar, Odisha, India. He is pursuing an MCA at Regional College of Management and builds scalable web applications with Next.js, React, Firebase, and Google Cloud Platform.",
            },
            {
                q: "Where is Debasmit Sahoo based?",
                a: "Debasmit is based in Bhubaneswar, Odisha, India, and is available for both remote and on-site opportunities.",
            },
            {
                q: "What is Debasmit Sahoo currently working on?",
                a: "He is a Product Engineering Intern at VireonTech — working on production web and IoT dashboards — while completing his Master of Computer Applications (MCA).",
            },
        ],
    },
    {
        name: "Skills & Projects",
        items: [
            {
                q: "What technologies does Debasmit Sahoo work with?",
                a: "He works across the full stack with JavaScript, TypeScript, Python, React, Next.js, Tailwind CSS, Firebase, Supabase, PostgreSQL, MySQL, GCP, Docker, and Nginx.",
            },
            {
                q: "What kind of projects has Debasmit built?",
                a: "Projects include CraftSmith (a handicraft commerce platform), Suraksha Samriddhi (an InsurTech platform), EduNexus, and Volunteer-Ops — spanning full-stack web apps, dashboards, and real-time platforms.",
            },
        ],
    },
    {
        name: "Work & Availability",
        items: [
            {
                q: "Is Debasmit Sahoo available for freelance or full-time work?",
                a: "Yes. Debasmit is open to freelance projects, full-time roles, and collaborations. You can reach him through the contact page.",
            },
            {
                q: "How can I contact Debasmit Sahoo?",
                a: "You can reach Debasmit through the contact page, or connect on LinkedIn and GitHub. He typically responds within a day.",
            },
        ],
    },
];

const ALL_FAQS = FAQ_CATEGORIES.flatMap((c) => c.items);

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph(faqNode(ALL_FAQS))) }}
            />
            <SiteHeader />
            <HeroSection />

            <TechTicker />

            {/* About Teaser */}
            <section className="py-16 md:py-20 border-b border-border/40">
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

            {/* FAQ */}
            <FaqSection categories={FAQ_CATEGORIES} />

            {/* Final CTA Section */}
            <DeploymentReady />

            <SiteFooter />
        </main>
    );
}

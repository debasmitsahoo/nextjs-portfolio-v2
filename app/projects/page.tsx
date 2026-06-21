import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectsSection } from "@/components/projects-section";
import { buildMetadata } from "@/lib/seo";
import { schemaGraph, breadcrumbNode } from "@/lib/schema";

export const metadata = buildMetadata({
    title: "Projects | Debasmit Sahoo — Full Stack Developer",
    description:
        "Full stack projects by Debasmit Sahoo built with Next.js, React, Firebase, and Supabase — including CraftSmith, Suraksha Samriddhi, EduNexus, and more.",
    path: "/projects",
});

const breadcrumb = schemaGraph(
    breadcrumbNode([
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
    ])
);

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <SiteHeader />
            <div className="pt-32 pb-12">
                <div className="container px-4 md:px-6 mb-16">
                    {/* Cinematic Header */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-12 bg-primary"></div>
                            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                System_Log: v.3.0
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                            FEATURED <br className="hidden md:block" />
                            <span className="text-muted-foreground stroke-text">PROJECTS</span>
                            <span className="sr-only"> by Debasmit Sahoo</span>
                        </h1>

                        <p className="max-w-xl text-lg text-muted-foreground/80 leading-relaxed font-light border-l-2 border-primary/20 pl-6">
                            A collection of projects highlighting my approach to problem-solving, design, and engineering.
                            <span className="block mt-2 font-mono text-xs text-primary/60">
                                // ARCHIVE_ACCESS: GRANTED
                            </span>
                        </p>
                    </div>
                </div>
                <ProjectsSection />
            </div>
            <SiteFooter />
        </main>
    )
}

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectsSection } from "@/components/projects-section";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <div className="pt-32 pb-12">
                <div className="container px-4 md:px-6 mb-8">
                    <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        <span className="w-8 h-[1px] bg-primary/40"></span>
                        Portfolio_Database
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">Featured Projects</h1>
                    <p className="text-muted-foreground mt-4 max-w-2xl">
                        A collection of projects highlighting my approach to problem-solving, design, and engineering.
                    </p>
                </div>
                <ProjectsSection />
            </div>
            <SiteFooter />
        </main>
    )
}

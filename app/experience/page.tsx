import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ExperienceSection } from "@/components/experience-section";
import { TechEvents } from "@/components/tech-events";
import { CommunityImpact } from "@/components/community-impact";

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <div className="pt-32 pb-12">
                <div className="container px-4 md:px-6 mb-12">
                    <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        <span className="w-8 h-[1px] bg-primary/40"></span>
                        Career_Log.json
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">Professional Journey</h1>
                </div>

                <ExperienceSection />

                <div className="py-12">
                    <CommunityImpact />
                </div>

                <TechEvents />
            </div>
            <SiteFooter />
        </main>
    )
}

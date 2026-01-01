import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EducationSection } from "@/components/education-section";
import { SkillsSection } from "@/components/skills-section";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <div className="pt-32 pb-12 container px-4 md:px-6">
                <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                            <span className="w-8 h-[1px] bg-primary/40"></span>
                            About_Me.md
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight mb-8">Crafting Digital Experiences</h1>
                        <div className="prose prose-slate dark:prose-invert prose-lg text-muted-foreground leading-relaxed">
                            <p>
                                I’m Debasmit Sahoo, a Creative Manager and Front-End Engineer with a strong foundation in both design systems and modern web development. I specialize in building intuitive, visually refined, and high-performance digital experiences that scale.
                            </p>
                            <p>
                                My work sits at the intersection of design thinking and engineering execution—bridging creative vision with clean, maintainable code. I focus on user-centered design, accessibility, and performance to deliver products that are both elegant and reliable.
                            </p>
                            <p>
                                Outside of development, I explore cinematic video editing as a creative outlet—experimenting with visual storytelling and sharing my work on Instagram.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-bold mb-6 font-mono">&lt;Core_Competencies /&gt;</h3>
                            <SkillsSection />
                        </div>
                    </div>

                    {/* Profile Image Column */}
                    <div className="w-full">
                        <div className="aspect-[3/4] bg-muted relative rounded-none tech-border overflow-hidden group">
                            {/* Placeholder for Profile IMG */}
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary/20">
                                <span className="font-mono text-xs text-muted-foreground text-center p-4">
                                    [UPLOAD IMAGE]<br />
                                    /public/images/profile.jpg
                                </span>
                            </div>
                            {/* Overlay Scanline Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[size:4px_4px] pointer-events-none" />
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="p-4 border bg-card/50 text-sm space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Status</span>
                                    <span className="font-mono text-green-600">ONLINE</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Location</span>
                                    <span className="font-mono">Bhubaneswar, IN</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Experience</span>
                                    <span className="font-mono">2+ Years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24">
                    <EducationSection />
                </div>
            </div>
            <SiteFooter />
        </main>
    )
}

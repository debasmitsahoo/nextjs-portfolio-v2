import { Separator } from "@/components/ui/separator";
import { Badge } from "lucide-react"; // Wait, I need Badge component or icon. Using simple div for badge or import from ui if created.
// I haven't created Badge ui component, so I'll use simple divs.

export function EducationSection() {
    return (
        <section id="education" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Education */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
                        <div className="space-y-8">
                            <div className="relative pl-6 border-l-2 border-muted hover:border-foreground/50 transition-colors">
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-foreground/50" />
                                <h3 className="text-xl font-bold">Master of Computer Applications (MCA)</h3>
                                <p className="text-muted-foreground">Regional College of Management</p>
                                <p className="text-sm text-muted-foreground">Biju Pattnaik University of Technology • 2025 – 2027</p>
                                <p className="mt-2 text-sm font-medium">Core Member, Cybernauts IT Club</p>
                            </div>

                            <div className="relative pl-6 border-l-2 border-muted hover:border-foreground/50 transition-colors">
                                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-foreground/50" />
                                <h3 className="text-xl font-bold">Bachelor of Computer Applications (BCA)</h3>
                                <p className="text-muted-foreground">Regional College of Management</p>
                                <p className="text-sm text-muted-foreground">Utkal University • 2022 – 2025</p>
                                <p className="mt-2 text-sm text-foreground/80 font-semibold mb-1">CGPA: 8.01</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Student of the Year 2025</li>
                                    <li>• UG Head, RCM Pulse (2023–24)</li>
                                    <li>• Core Member, Cybernauts IT Club</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Awards */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Awards & Recognition</h2>
                        <div className="space-y-6">
                            <div className="p-6 bg-background rounded-lg border shadow-sm">
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    Student of the Year – 2025
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">Regional College of Management</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Recognized for leadership, academic excellence, and impact across tech and media communities. Represented 500+ students through cross-campus initiatives.
                                </p>
                            </div>

                            <div className="p-6 bg-background rounded-lg border shadow-sm">
                                <h3 className="text-lg font-bold">1st Runners-Up – App Pitch Challenge</h3>
                                <p className="text-sm text-muted-foreground mb-4">MCA Orientation Cohort (2025–2027)</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Delivered a human-centered app pitch combining storytelling, UI strategy, and technical feasibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

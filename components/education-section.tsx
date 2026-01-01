"use client";

import { Trophy, GraduationCap } from "lucide-react";

export function EducationSection() {
    return (
        <section className="bg-background pt-12 border-t border-border/40">
            <div className="grid md:grid-cols-2 gap-16">
                {/* Column 1: Education */}
                <div>
                    <div className="mb-8 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                            Academic_History
                        </h2>
                    </div>

                    <div className="space-y-12">
                        <div className="relative pl-6 border-l border-border/40">
                            <span className="absolute -left-[3px] top-2 w-1.5 h-1.5 bg-primary rounded-full" />
                            <h3 className="text-lg font-bold">Master of Computer Applications (MCA)</h3>
                            <div className="text-sm text-muted-foreground mt-1 mb-2">
                                Regional College of Management • 2025 – 2027
                            </div>
                            <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                Specializing in Advanced Algorithms and Distributed Computing. Core Member of Cybernauts IT Club.
                            </p>
                        </div>

                        <div className="relative pl-6 border-l border-border/40">
                            <span className="absolute -left-[3px] top-2 w-1.5 h-1.5 bg-muted rounded-full" />
                            <h3 className="text-lg font-bold">Bachelor of Computer Applications (BCA)</h3>
                            <div className="text-sm text-muted-foreground mt-1 mb-2">
                                Utkal University • 2022 – 2025
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono bg-secondary/10 w-fit px-2 py-1 rounded text-primary mb-3">
                                CGPA: 8.01 / 10.0
                            </div>
                            <ul className="text-sm text-muted-foreground/80 space-y-1">
                                <li>• Student of the Year 2025</li>
                                <li>• UG Head, RCM Pulse (Media Body)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Column 2: Awards */}
                <div>
                    <div className="mb-8 flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-primary" />
                        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                            Honors_&_Awards
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {/* Award 1 */}
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="font-bold group-hover:text-primary transition-colors">Student of the Year</h3>
                                <span className="font-mono text-xs text-muted-foreground">2025</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-transparent pl-3 group-hover:border-primary/20 transition-all">
                                Awarded for exceptional leadership, academic excellence, and impact across tech and media communities.
                            </p>
                        </div>

                        {/* Award 2 */}
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="font-bold group-hover:text-primary transition-colors">1st Runners-Up: App Pitch</h3>
                                <span className="font-mono text-xs text-muted-foreground">2025</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-transparent pl-3 group-hover:border-primary/20 transition-all">
                                Recognized for "EduNexus" concept – combining UI strategy with technical feasibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

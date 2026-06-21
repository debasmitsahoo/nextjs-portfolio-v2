"use client";

import { Check } from "lucide-react";

const SKILL_GROUPS = [
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    },
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Tailwind CSS", "Material UI", "shadcn/ui", "Framer Motion"],
    },
    {
        title: "Backend & Database",
        skills: ["Firebase", "Supabase", "PostgreSQL", "MySQL", "Oracle SQL"],
    },
    {
        title: "Cloud & DevOps",
        skills: ["GCP", "Docker", "Ubuntu Linux", "Nginx", "Vercel"],
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "Postman", "VS Code", "Adobe Creative Cloud", "WordPress", "Elementor"],
    },
    {
        title: "Leadership",
        skills: ["Community Building", "Technical Events", "Team Management", "Public Speaking"],
    },
];

export function SkillsSection() {
    return (
        <section className="bg-background">
            {/* Eyebrow */}
            <div className="mb-8 border-b border-border/40 pb-2">
                <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Capability_Matrix
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                {SKILL_GROUPS.map((group) => (
                    <div key={group.title} className="space-y-4">
                        <h3 className="text-xl font-bold tracking-tight">{group.title}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {group.skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-2">
                                    <Check className="w-3 h-3 text-primary flex-shrink-0" /> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

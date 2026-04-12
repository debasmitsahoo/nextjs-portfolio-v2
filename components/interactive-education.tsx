"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, BookOpen } from "lucide-react";

const educationList = [
    {
        id: "mca",
        type: "education",
        year: "2027",
        title: "Master of Computer Applications",
        institution: "Regional College of Management",
        subtitle: "Advanced Algorithms & Distributed Systems",
        description: "Focusing on the convergence of Cloud Native Architectures and AI-driven DevSecOps. Serving as President of the Radient Club and Technical Lead for the Cybernauts IT Club, I orchestrate hackathons and peer-learning clusters to drive technical innovation.",
        tags: ["Distributed Systems", "Cloud Arch", "Leadership"],
    },
    {
        id: "bca",
        type: "education",
        year: "2025",
        title: "Bachelor of Computer Applications",
        institution: "Regional College of Management",
        subtitle: "Graduated with Distinction (8.01 CGPA)",
        description: "Spearheaded the digital presence for RCM Pulse (Media Body). consistently ranking in the top 5% of the cohort to merging full-stack development with community leadership.",
        tags: ["Full Stack", "Data Structures"],
    },
];

const awardList = [
    {
        id: "award-ai-volution",
        type: "award",
        year: "2026",
        title: "Top 10 National Emerging Team",
        institution: "AI-Volution, IIT Kharagpur",
        subtitle: "NSCIF 2026 | New Delhi",
        description: "Advanced as a Semi-Finalist in AI-Volution at IIT Kharagpur, subsequently representing at the National Student Change Initiatives Fest (NSCIF) in New Delhi. Ranked among the Top 10 National Emerging Teams for innovative technical architecture.",
        tags: ["AI Innovation", "National Finalist", "Scalable Tech"],
    },
    {
        id: "award-metaweb",
        type: "award",
        year: "2026",
        title: "1st Rank: Metaweb UI/UX",
        institution: "Metaweb Hackathon",
        subtitle: "Excellence in Interface Architecture",
        description: "Clinched the top spot in the Metaweb UI/UX Hackathon by engineering an immersive design system. Focused on bridging the gap between high-performance logic and intuitive, human-centric user experiences.",
        tags: ["UI/UX Engineering", "Product Design", "Design Systems"],
    },
    {
        id: "award-startup-quiz",
        type: "award",
        year: "2026",
        title: "Winner: National Startup Quiz",
        institution: "GES 2026, IIT Kharagpur",
        subtitle: "Global Entrepreneurship Summit",
        description: "Secured victory in the Startup Quiz at the Global Entrepreneurship Summit (GES), IIT Kharagpur. Demonstrated exceptional acumen in business strategy, startup ecosystems, and disruptive innovation trends.",
        tags: ["Entrepreneurship", "Business Strategy", "Intelligence"],
    },
    {
        id: "award-student-year",
        type: "award",
        year: "2025",
        title: "Student of the Year",
        institution: "Regional College of Management",
        subtitle: "Institutional Recognition",
        description: "Selected from a cohort of 500+ peers for demonstrating exceptional capacity in technical innovation, academic resilience, and community impact. Recognized for bridging the gap between engineering and student governance.",
        tags: ["Leadership", "Community Impact"],
    },
    {
        id: "award-pitch",
        type: "award",
        year: "2025",
        title: "Innovation Pitch: Runner Up",
        institution: "MCA Orientation Cohort",
        subtitle: "EduNexus Concept",
        description: "Validated the 'EduNexus' architecture for commercial viability, securing 2nd rank. Commended by jury for addressing real-world scalability constraints and intuitive UI/UX patterns.",
        tags: ["Product Strategy", "UI/UX"],
    },
];

export function InteractiveEducation() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-24">
            {/* Column 1: Education */}
            <div className="space-y-6">
                <div className="flex items-center gap-2 mb-8 border-b border-border/40 pb-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        // ACADEMIC_LOG
                    </h2>
                </div>

                {educationList.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group relative flex flex-col justify-between p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                    >
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="font-mono text-3xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                                    {item.year}
                                </span>
                                <BookOpen className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>

                            <div className="space-y-2 mb-6">
                                <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                                    {item.institution}
                                </div>
                                <div className="text-sm text-foreground/80 italic">
                                    {item.subtitle}
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {item.tags.map(tag => (
                                <span key={tag} className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-secondary/50 text-secondary-foreground border border-transparent group-hover:border-primary/20 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Column 2: Awards */}
            <div className="space-y-6">
                <div className="flex items-center gap-2 mb-8 border-b border-border/40 pb-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        // HONOR_ROLL
                    </h2>
                </div>

                {awardList.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }} // Staggered slightly after education
                        className="group relative flex flex-col justify-between p-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                    >
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="font-mono text-3xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                                    {item.year}
                                </span>
                                <Trophy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>

                            <div className="space-y-2 mb-6">
                                <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                                    {item.institution}
                                </div>
                                <div className="text-sm text-foreground/80 italic">
                                    {item.subtitle}
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {item.tags.map(tag => (
                                <span key={tag} className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-secondary/50 text-secondary-foreground border border-transparent group-hover:border-primary/20 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

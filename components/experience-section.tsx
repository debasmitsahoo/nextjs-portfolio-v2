"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2, Terminal } from "lucide-react";

const experienceList = [
    {
        id: "vireontech",
        year: "2026",
        title: "Product Engineering Intern",
        company: "VireonTech",
        location: "",
        period: "June 2026 - Present",
        type: "Internship",
        description: [
            "Migrated 22,000+ telemetry records from Google Sheets to Firestore",
            "Provisioned an Ubuntu VM on GCP",
            "Dockerized React applications",
            "Implemented a Firebase dual-write architecture",
            "Assisted in production deployment of an IoT dashboard"
        ],
        tags: ["Firestore", "GCP", "Docker", "Firebase", "React"]
    },
    {
        id: "craftsmith",
        year: "2021",
        title: "Founder",
        company: "CraftSmith",
        location: "Bhubaneswar, India",
        period: "Jan 2021 - Present",
        type: "Full-time",
        description: [
            "Designed and developed the official CraftSmith website from scratch using Next.js, focusing on performance, SEO, and responsive design",
            "Implemented modern UI components with clean layouts to showcase Odisha handicraft products and brand identity",
            "Optimized page load performance and SEO, achieving strong Lighthouse scores",
            "Deployed and managed the production site, including domain and DNS configuration",
            "Translated business requirements into a scalable web presence supporting brand growth and customer engagement"
        ],
        tags: ["Next.js", "SEO", "Performance", "UI/UX", "Product Design"]
    },
    {
        id: "tpipay",
        year: "2025",
        title: "Creative Manager (Frontend & UI Engineering)",
        company: "TPIPAY FINTECH PRIVATE LIMITED",
        location: "Bhubaneswar, India",
        period: "Mar – Jun",
        type: "Full-time",
        description: [
            "Led frontend development initiatives during early-stage product development",
            "Built and maintained responsive UI components using modern JavaScript frameworks",
            "Translated academic and business requirements into scalable frontend solutions",
            "Collaborated with product and engineering stakeholders during active development cycles",
            "Ensured technical feasibility, performance, and usability while managing creative direction"
        ],
        tags: ["React / Next.js", "UI Engineering", "Frontend Architecture", "Performance"]
    }
];

export function ExperienceSection() {
    return (
        <section id="experience" className="pb-24">
            <div className="container px-4 md:px-6">
                <div className="flex items-center gap-2 mb-12 border-b border-border/40 pb-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        // DEPLOYMENT_HISTORY
                    </h2>
                </div>

                <div className="space-y-8 max-w-4xl">
                    {experienceList.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative p-8 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
                        >
                            {/* Tech Corners */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary/20 group-hover:border-primary transition-colors"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary/20 group-hover:border-primary transition-colors"></div>

                            <div className="grid md:grid-cols-[200px_1fr] gap-8">
                                {/* Left: Meta */}
                                <div className="space-y-4">
                                    <div className="font-mono text-4xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                                        {item.year}
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wide">
                                            <Calendar className="w-3 h-3" />
                                            {item.period}
                                        </div>
                                        {item.location && (
                                            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wide">
                                                <MapPin className="w-3 h-3" />
                                                {item.location}
                                            </div>
                                        )}
                                    </div>
                                    <div className="inline-block px-2 py-1 rounded bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest border border-primary/20">
                                        {item.type}
                                    </div>
                                </div>

                                {/* Right: Content */}
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                                        <Building2 className="w-4 h-4" />
                                        <span className="font-medium">{item.company}</span>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {item.description.map((desc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-secondary/30 border border-border/50 text-xs font-mono text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

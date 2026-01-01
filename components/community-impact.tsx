"use client";

import { motion } from "framer-motion";
import { Users, Megaphone, Calendar, MapPin, ArrowUpRight, Zap } from "lucide-react";

const communityList = [
    {
        id: "radiant",
        role: "President",
        organization: "Radiant Club (Techno-Management)",
        period: "Dec 2025 – Present",
        icon: Zap,
        description: [
            "Elected to steer the strategic vision of the institution's premier Techno-Management body.",
            "Orchestrating the convergence of technical innovation and management principles through high-impact summits.",
            "Governing student initiatives and fostering interdisciplinary collaboration across departments."
        ]
    },
    {
        id: "gdg",
        role: "Creative Strategist & Event Lead",
        organization: "GDG & GDG Cloud Bhubaneswar",
        period: "Mar 2025 – Present",
        icon: Megaphone,
        description: [
            "Architected cohesive visual systems and brand strategy for 'Build With AI' and regional tech summits.",
            "Orchestrated end-to-end execution of 'HackForge x Build With AI' (100+ attendees), ensuring seamless logistics.",
            "Co-led speaker operations and marketing assets for Cloud Community Days 2025, driving record engagement."
        ]
    },
    {
        id: "cybernauts",
        role: "Technical Community Lead",
        organization: "Team Cybernauts (RCM)",
        period: "Apr 2024 – Present",
        icon: Users,
        description: [
            "Spearheaded UI/UX hackathons and technical enablement sessions, fostering a culture of innovation.",
            "Co-hosted 'Build With AI' workshops in partnership with GDG, bridging academic and professional ecosystems.",
            "Managed strategic partnerships, speaker coordination, and community outreach for campus-wide initiatives."
        ]
    }
];

export function CommunityImpact() {
    return (
        <section className="pb-24">
            <div className="container px-4 md:px-6">
                <div className="flex items-center gap-2 mb-12 border-b border-border/40 pb-2">
                    <Users className="w-4 h-4 text-primary" />
                    <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        // COMMUNITY_INITIATIVES
                    </h2>
                </div>

                <div className="space-y-8 max-w-4xl">
                    {communityList.map((item, index) => (
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

                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                {/* Icon Column */}
                                <div className="hidden md:flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div className="h-full w-[1px] bg-border/50 my-4 group-hover:bg-primary/50 transition-colors"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                                                {item.organization}
                                                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                            </h3>
                                            <div className="text-sm font-medium text-foreground/80 mt-1">
                                                {item.role}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wide bg-secondary/30 px-3 py-1 rounded-full border border-border/50">
                                            <Calendar className="w-3 h-3" />
                                            {item.period}
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {item.description.map((desc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

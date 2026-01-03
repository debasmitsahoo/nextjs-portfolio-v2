"use client";

import { motion } from "framer-motion";
import { Ticket, MapPin, Calendar, Activity } from "lucide-react";

export function TechEvents() {
    const events = [
        {
            name: "Purvodaya",
            year: "2025",
            role: "Delegate",
            detail: "Ministry of External Affairs",
            location: "Bhubaneswar"
        },
        {
            name: "Cloud Community Days",
            year: "2025",
            role: "Volunteer",
            detail: "Event Ops",
            location: "Bhubaneswar"
        },
        {
            name: "DevFest Bhubaneswar",
            year: "2025",
            role: "Volunteer",
            detail: "Event Ops & Social Media",
            location: "Bhubaneswar"
        },
        {
            name: "Make in Odisha Conclave",
            year: "2025",
            role: "Delegate",
            detail: "Business Summit",
            location: "Bhubaneswar"
        },
        {
            name: "Global Entrepreneurship Summit",
            year: "2025",
            role: "Attendee",
            detail: "Investment Forum",
            location: "IIT Kharagpur"
        },
        {
            name: "DevFest Bhubaneswar",
            year: "2024",
            role: "Participant",
            detail: "Developer Conference",
            location: "Bhubaneswar"
        },
        {
            name: "Cloud Community Days",
            year: "2024",
            role: "Participant",
            detail: "Cloud Native Track",
            location: "Bhubaneswar"
        },
        {
            name: "GitHub Constellation",
            year: "2024",
            role: "Attendee",
            detail: "Open Source Summit",
            location: "Bangalore"
        },
    ];

    return (
        <section className="py-24 border-t border-border/40">
            <div className="container px-4 md:px-6 mb-12">
                <div className="flex items-center gap-2 mb-8 border-b border-border/40 pb-2">
                    <Ticket className="w-4 h-4 text-primary" />
                    <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        // FIELD_NOTES_&_EVENTS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group relative flex flex-col justify-between p-6 rounded-xl bg-muted/20 border border-border/50 hover:border-primary/50 transition-all hover:bg-muted/30"
                        >
                            <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/50 group-hover:text-primary/50">
                                {event.year}
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors pr-12">
                                    {event.name}
                                </h3>
                                <div className="inline-flex items-center px-2 py-1 rounded bg-background border border-border/50 text-xs font-medium text-foreground/80">
                                    {event.role}
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs text-muted-foreground font-mono uppercase tracking-wide border-t border-border/40 pt-4">
                                <div className="flex items-center gap-1.5">
                                    <Activity className="w-3 h-3" />
                                    <span>{event.detail}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3" />
                                    <span>{event.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

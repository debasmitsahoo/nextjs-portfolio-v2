import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, CheckCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ContactSection() {
    return (
        <section id="contact" className="py-12">
            <div className="container px-4 max-w-3xl mx-auto">
                {/* Cinematic Card */}
                <div className="relative p-8 md:p-12 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-xl shadow-2xl overflow-hidden">
                    {/* Background Grid/Glow */}
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative space-y-8 text-center">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-mono uppercase tracking-widest text-primary">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Communication_Uplink_Established
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                                I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="mailto:work@debasmit.com" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full rounded-lg gap-2 font-mono text-xs uppercase tracking-wider">
                                    <Mail size={16} /> Send Email
                                </Button>
                            </a>
                            <a href="https://linkedin.com/in/debasmitsahoo" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full rounded-lg gap-2 font-mono text-xs uppercase tracking-wider bg-background/50">
                                    <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} className="opacity-50" />
                                </Button>
                            </a>
                            <a href="https://github.com/debasmitsahoo" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full rounded-lg gap-2 font-mono text-xs uppercase tracking-wider bg-background/50">
                                    <Github size={16} /> GitHub <ArrowUpRight size={14} className="opacity-50" />
                                </Button>
                            </a>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-border/50 max-w-xs mx-auto my-8"></div>

                        {/* Status Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
                            {[
                                "Available for freelance projects",
                                "Open to full-time roles",
                                "Interested in collaborations",
                                "Happy to mentor"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border/30 bg-secondary/10 hover:bg-secondary/20 transition-colors">
                                    <CheckCircle size={14} className="text-primary" />
                                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 text-xs font-mono text-muted-foreground flex items-center justify-center gap-2 opacity-60">
                            <MapPin size={14} />
                            Bhubaneswar, India
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

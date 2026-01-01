import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, CheckCircle } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 border-t">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
                <p className="text-lg text-muted-foreground w-full max-w-2xl mx-auto">
                    I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="flex flex-wrap justify-center gap-4 py-6">
                    <a href="mailto:debasmitfordev@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Button size="lg" className="rounded-full gap-2">
                            <Mail size={18} /> Send Email
                        </Button>
                    </a>
                    <a href="https://linkedin.com/in/debasmitsahoo" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="rounded-full gap-2">
                            <Linkedin size={18} /> LinkedIn
                        </Button>
                    </a>
                    <a href="https://github.com/debasmitsahoo" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="rounded-full gap-2">
                            <Github size={18} /> GitHub
                        </Button>
                    </a>
                </div>

                <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground pt-4">
                    <p className="flex items-center gap-2">
                        <MapPin size={16} /> Bhubaneswar, India
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                        <span className="flex items-center gap-1.5 bg-green-500/10 text-green-700 px-3 py-1 rounded-full border border-green-500/20 text-xs font-medium">
                            <CheckCircle size={12} /> Available for freelance projects
                        </span>
                        <span className="flex items-center gap-1.5 bg-blue-500/10 text-blue-700 px-3 py-1 rounded-full border border-blue-500/20 text-xs font-medium">
                            <CheckCircle size={12} /> Open to full-time roles
                        </span>
                        <span className="flex items-center gap-1.5 bg-purple-500/10 text-purple-700 px-3 py-1 rounded-full border border-purple-500/20 text-xs font-medium">
                            <CheckCircle size={12} /> Interested in collaborations
                        </span>
                        <span className="flex items-center gap-1.5 bg-orange-500/10 text-orange-700 px-3 py-1 rounded-full border border-orange-500/20 text-xs font-medium">
                            <CheckCircle size={12} /> Happy to mentor
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

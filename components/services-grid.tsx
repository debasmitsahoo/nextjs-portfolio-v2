import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Monitor, Gauge, PencilRuler, Search, Database, Smartphone } from "lucide-react";

const services = [
    {
        icon: <Monitor className="h-6 w-6" />,
        title: "Web App Development",
        description: "Building scalable, secure, and high-performance web applications using Next.js and React. Focus on clean architecture and maintainability."
    },
    {
        icon: <PencilRuler className="h-6 w-6" />,
        title: "UI/UX Engineering",
        description: "Translating sophisticated design concepts into pixel-perfect, accessible code. specialized in complex animations and micro-interactions."
    },
    {
        icon: <Gauge className="h-6 w-6" />,
        title: "Performance Optimization",
        description: "Auditing and improving Core Web Vitals. Reducing LCP, CLS, and FID for lightning-fast user experiences and better SEO."
    },
    {
        icon: <Smartphone className="h-6 w-6" />,
        title: "Mobile-First Design",
        description: "Ensuring flawless functionality across all device sizes with responsive layouts and touch-optimized interfaces."
    },
    {
        icon: <Search className="h-6 w-6" />,
        title: "Technical SEO",
        description: "Implementing semantic HTML, structured data (JSON-LD), and metadata strategies to maximize search engine visibility."
    },
    {
        icon: <Database className="h-6 w-6" />,
        title: "Full-Stack Integration",
        description: "Architecting robust backend services, APIs, and seamless front-end integrations."
    }
];

export function ServicesGrid() {
    return (
        <section className="py-24">
            <div className="container px-4 md:px-6">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        <span className="w-8 h-[1px] bg-primary/40"></span>
                        Freelance_Services
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">Technical Capabilities</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl">
                        I collaborate with startups and businesses to build digital products that are not just visually stunning but engineered for growth and stability.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <Card key={i} className="rounded-none tech-border bg-card/60 hover:bg-card hover:border-primary/40 transition-all group">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                    {service.icon}
                                </div>
                                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

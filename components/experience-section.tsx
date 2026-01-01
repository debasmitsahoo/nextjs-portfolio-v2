import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24">
            <div className="container px-4 md:px-6 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
                    <p className="text-muted-foreground mt-2 md:mt-0">Impact-Driven Professional Journey</p>
                </div>

                <div className="space-y-8">
                    <Card className="border-none shadow-none bg-accent/20 hover:bg-accent/30 transition-colors">
                        <CardHeader>
                            <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                                <div>
                                    <CardTitle className="text-xl font-bold">Creative Manager & Front-End Developer</CardTitle>
                                    <CardDescription className="text-base mt-1 text-foreground/80">Tpipay Fintech Private Ltd • Bhubaneswar, India</CardDescription>
                                </div>
                                <span className="text-sm font-medium bg-background border px-4 py-1.5 rounded-full whitespace-nowrap">Mar 2025 – Jun 2025</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground/90">
                                <li>Led front-end development and creative direction for fintech and education-focused digital products</li>
                                <li>Spearheaded the development of Feel Education, a modern educational platform</li>
                                <li>Collaborated with cross-functional teams to ensure seamless integration and delivery</li>
                                <li>Implemented modern web standards, performance optimizations, and scalable UI architecture</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

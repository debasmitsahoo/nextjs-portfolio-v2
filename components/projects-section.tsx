import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
    const projects = [
        {
            title: "EduNexus",
            description: "Front-end system for institution management",
            tech: ["React 18", "Shadcn", "Vite", "Tailwind CSS"],
            problem: "Complex institutional data needed a streamlined, accessible interface.",
            solution: "Built a responsive dashboard with role-based access and real-time updates.",
            learnings: "Deepened understanding of scalable component architecture and state management."
        },
        {
            title: "Swasthya Saathi",
            description: "Healthcare patient management platform",
            tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
            problem: "Patient records were fragmented and difficult to access securely.",
            solution: "Developed a centralized, secure platform for patient history and appointment scheduling.",
            learnings: "Gained expertise in secure authenticaion and real-time database subscription."
        },
        {
            title: "Patient Management System",
            description: "Python-based data analysis system",
            tech: ["Python", "Pandas"],
            problem: "Raw patient data was unstructured and hard to analyze.",
            solution: "Created a data processing pipeline to clean and visualize patient trends.",
            learnings: "Improved data manipulation skills and understanding of backend logic."
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="container px-4 md:px-6 max-w-6xl">
                <h2 className="text-3xl font-bold tracking-tight mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                                <CardDescription className="text-base">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => <Badge key={t} variant="secondary">{t}</Badge>)}
                                </div>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <p><span className="font-semibold text-foreground">Problem:</span> {project.problem}</p>
                                    <p><span className="font-semibold text-foreground">Solution:</span> {project.solution}</p>
                                    <p><span className="font-semibold text-foreground">Learnings:</span> {project.learnings}</p>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-4">
                                {/* Links could go here */}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
    {
        slug: "optimizing-nextjs-performance",
        title: "Optimizing Next.js 14 Performance for Scale",
        summary: "Deep dive into server components, image optimization, and route handling for maximum speed.",
        date: "2025-12-15",
        tags: ["Next.js", "Performance", "React"],
        readTime: "5 min read"
    },
    {
        slug: "3d-web-experiences",
        title: "Building Immersive 3D Web Experiences",
        summary: "How to integrate React Three Fiber without sacrificing accessibility or load times.",
        date: "2025-11-20",
        tags: ["Three.js", "R3F", "Design"],
        readTime: "7 min read"
    },
    {
        slug: "design-systems-engineering",
        title: "Bridging Design & Engineering with Systems",
        summary: "Creating a shared language between Figma and Code using Tailwind and Shadcn.",
        date: "2025-10-05",
        tags: ["Design Systems", "Workflow", "UI/UX"],
        readTime: "6 min read"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <div className="pt-32 pb-12">
                <div className="container px-4 md:px-6 mb-12">
                    <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        <span className="w-8 h-[1px] bg-primary/40"></span>
                        Dev_Logs
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">Thoughts & Insights</h1>
                    <p className="text-muted-foreground mt-4 max-w-2xl">
                        Writing about web development, design systems, and the future of digital interfaces.
                    </p>
                </div>

                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Card key={post.slug} className="flex flex-col h-full hover:border-primary/50 transition-colors group">
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-mono text-muted-foreground">{post.date}</span>
                                        <span className="text-xs font-mono text-muted-foreground">{post.readTime}</span>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="text-base line-clamp-3">
                                        {post.summary}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="flex flex-col items-start gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="font-mono text-[10px]">{tag}</Badge>
                                        ))}
                                    </div>
                                    <Link href={`#`} className="w-full">
                                        <div className="flex items-center text-sm font-medium text-primary mt-2">
                                            Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                        </div>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <SiteFooter />
        </main>
    )
}

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getPostBySlug, getAllPosts } from "@/lib/blog-data";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return (
            <main className="min-h-screen bg-background flex flex-col">
                <SiteHeader />
                <div className="flex-1 flex flex-col items-center justify-center container px-4">
                    <h1 className="text-4xl font-bold mb-4">404: File Not Found</h1>
                    <p className="text-muted-foreground mb-8">The requested log entry does not exist.</p>
                    <Link href="/blog" className="text-primary hover:underline">
                        Return to Archives
                    </Link>
                </div>
                <SiteFooter />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <article className="pt-32 pb-24">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 space-y-8">
                        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Logs
                        </Link>

                        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest border-b border-border/40 pb-4">
                            <span>System_Log: {post.slug}</span>
                            <span className="flex-1"></span>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3 h-3" />
                                {post.date}
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl border border-border/50 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <Badge key={tag} variant="outline" className="font-mono text-[10px] text-muted-foreground">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    {/* Content */}
                    <div
                        className="prose prose-invert prose-lg max-w-none 
                        prose-headings:font-bold prose-headings:tracking-tight 
                        prose-p:text-muted-foreground prose-p:leading-relaxed
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-pre:bg-secondary/20 prose-pre:border prose-pre:border-border/50
                        prose-code:text-primary prose-code:font-mono prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Footer */}
                    <div className="mt-16 pt-8 border-t border-border/40 flex justify-between items-center bg-muted/10 p-6 rounded-xl">
                        <div>
                            <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Log Status</p>
                            <p className="font-bold text-sm">Reading Complete</p>
                        </div>
                        <Link href="/blog">
                            <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono">
                                Return
                            </Badge>
                        </Link>
                    </div>
                </div>
            </article>
            <SiteFooter />
        </main>
    )
}

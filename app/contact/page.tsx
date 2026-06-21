import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";
import { buildMetadata } from "@/lib/seo";
import { schemaGraph, breadcrumbNode } from "@/lib/schema";

export const metadata = buildMetadata({
    title: "Contact Debasmit Sahoo | Full Stack Developer in Bhubaneswar",
    description:
        "Get in touch with Debasmit Sahoo for full stack development, product engineering, and freelance collaborations in Bhubaneswar, India.",
    path: "/contact",
});

const breadcrumb = schemaGraph(
    breadcrumbNode([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
    ])
);

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <SiteHeader />
            <div className="pt-32 pb-12">
                <div className="container px-4 md:px-6 mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Let's Connect<span className="sr-only"> — Contact Debasmit Sahoo</span></h1>
                    <p className="text-muted-foreground">Open channels for collaboration.</p>
                </div>
                <ContactSection />
            </div>
            <SiteFooter />
        </main>
    )
}

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <div className="pt-32 pb-12">
                <div className="container px-4 md:px-6 mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Let's Connect</h1>
                    <p className="text-muted-foreground">Open channels for collaboration.</p>
                </div>
                <ContactSection />
            </div>
            <SiteFooter />
        </main>
    )
}

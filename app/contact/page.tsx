import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <div className="pt-32 pb-12">
                <div className="container px-4 md:px-6 mb-8 text-center">
                    <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-muted-foreground uppercase tracking-widest justify-center">
                        <span className="w-8 h-[1px] bg-primary/40"></span>
                        Communication_Uplink
                        <span className="w-8 h-[1px] bg-primary/40"></span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">Let's Connect</h1>
                </div>
                <ContactSection />
            </div>
            <SiteFooter />
        </main>
    )
}

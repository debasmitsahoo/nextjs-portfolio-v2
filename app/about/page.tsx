"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SkillsSection } from "@/components/skills-section";
import { Badge } from "@/components/ui/badge";
import { ProfileHero } from "@/components/profile-hero";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <SiteHeader />
            <div className="pt-32 pb-12 container px-4 md:px-6 space-y-24">
                {/* 1. The Architect Profile */}
                <ProfileHero />

                {/* 2. Technical Capabilities */}
                <SkillsSection />

            </div>
            <SiteFooter />
        </main>
    )
}

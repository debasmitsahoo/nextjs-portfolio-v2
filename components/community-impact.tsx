export function CommunityImpact() {
    return (
        <section className="py-24">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight mb-12">Community Impact</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* GDG */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">GDG & GDG Cloud Bhubaneswar</h3>
                        <p className="text-muted-foreground font-medium flex items-center gap-2">
                            Social Media Designer & Event Manager
                            <span className="h-1 w-1 rounded-full bg-foreground opacity-50"></span>
                            Mar 2025 – Present
                        </p>
                        <ul className="space-y-3 text-muted-foreground list-disc pl-5 leading-relaxed">
                            <li>Designed cohesive visual systems and social content for Build With AI and community events</li>
                            <li>Managed end-to-end execution of HackForge x Build With AI (100+ participants)</li>
                            <li>Co-led branding, promotions, and speaker assets for Cloud Community Days 2025</li>
                        </ul>
                    </div>

                    {/* Cybernauts */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Team Cybernauts — RCM</h3>
                        <p className="text-muted-foreground font-medium flex items-center gap-2">
                            Core Member & Organizer
                            <span className="h-1 w-1 rounded-full bg-foreground opacity-50"></span>
                            Apr 2024 – Present
                        </p>
                        <ul className="space-y-3 text-muted-foreground list-disc pl-5 leading-relaxed">
                            <li>Organized UI/UX hackathons and technical events</li>
                            <li>Co-hosted Build With AI workshop with GDG Bhubaneswar</li>
                            <li>Led logistics, speaker coordination, and community outreach</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

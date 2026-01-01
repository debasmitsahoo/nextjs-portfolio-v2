export function SkillsSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight mb-12">Skills & Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Frontend</h3>
                        <p className="text-muted-foreground leading-loose">React, TypeScript, JavaScript, HTML/CSS, Tailwind CSS, Next.js</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Design & UX</h3>
                        <p className="text-muted-foreground leading-loose">Figma, UI/UX Design, Prototyping, User Research, Design Systems</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Backend & Tools</h3>
                        <p className="text-muted-foreground leading-loose">Firebase, Supabase, Git, REST APIs, Authentication, Database Management</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Leadership</h3>
                        <p className="text-muted-foreground leading-loose">Team Leadership, Agile/Scrum, Mentoring, Client Communication, Problem Solving</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

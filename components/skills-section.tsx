"use client";

import { Check } from "lucide-react";

export function SkillsSection() {
    return (
        <section className="bg-background">
            {/* Eyebrow */}
            <div className="mb-8 border-b border-border/40 pb-2">
                <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Capability_Matrix
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {/* Domain 1 */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
                        Frontend Architecture
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> React / Next.js 14 (Server Components)</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> TypeScript / Strict Mode</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> Tailwind / Design Systems</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> WebGL / Framer Motion</li>
                    </ul>
                </div>

                {/* Domain 2 */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold tracking-tight">
                        Backend & Infrastructure
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> Node.js / Python (FastAPI)</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> PostgreSQL / Redis / Vector DBs</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> Docker / Kubernetes</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> AWS / CI/CD Pipelines</li>
                    </ul>
                </div>

                {/* Domain 3 */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold tracking-tight">
                        AI & Data Engineering
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> LLM Integration (OpenAI/Anthropic)</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> RAG System Architecture</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> PyTorch / TensorFlow</li>
                    </ul>
                </div>

                {/* Domain 4 */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold tracking-tight">
                        Leadership & Process
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> Technical Strategy</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> System Design Documentation</li>
                        <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> Agile / Scrum Methodologies</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

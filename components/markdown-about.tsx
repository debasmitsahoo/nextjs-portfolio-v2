"use client";

import { FileText, Monitor, Cpu, Layers } from "lucide-react";

export function MarkdownAbout() {
    return (
        <div className="w-full bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-[#333] font-mono text-sm leading-relaxed">
            {/* Header / Tabs */}
            <div className="bg-[#252526] flex items-center px-4 overflow-x-auto border-b border-[#333]">
                <div className="flex items-center gap-2 px-3 py-2 bg-[#1e1e1e] border-t-2 border-primary text-gray-100 min-w-fit">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>about_me.md</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:text-gray-300 transition-colors min-w-fit cursor-not-allowed">
                    <Monitor className="w-4 h-4 text-purple-400" />
                    <span>tech_stack.json</span>
                </div>
            </div>

            {/* Editor Body */}
            <div className="flex p-4 md:p-6 bg-[#1e1e1e] text-gray-300 overflow-x-auto">
                <div className="flex flex-col text-right select-none text-[#858585] pr-4 border-r border-[#333] mr-4 font-mono">
                    {Array.from({ length: 18 }).map((_, i) => (
                        <span key={i} className="leading-7">{i + 1}</span>
                    ))}
                </div>
                <div className="flex-1 min-w-[500px]">
                    <div className="leading-7 space-y-7">
                        {/* H1 */}
                        <div>
                            <span className="text-blue-500 font-bold"># Architecting Intelligent Systems</span>
                        </div>

                        {/* Intro */}
                        <div>
                            <span className="text-[#6A9955] italic">// 2026_PROFILE_UPDATE</span><br />
                            I don&apos;t just write code; I <span className="text-yellow-400">engineer outcomes</span>.
                        </div>

                        {/* Bio Paragraph */}
                        <div className="text-gray-300">
                            As a <span className="text-purple-400 font-bold">Full Stack Architect</span> & <span className="text-purple-400 font-bold">AI Engineer</span>, I specialize in building heavy-lifting distributed infrastructure. My work bridges the gap between <span className="text-green-400">complex backend logic</span> and <span className="text-green-400">intuitive user experiences</span>.
                        </div>

                        {/* Philosophy */}
                        <div>
                            <span className="text-blue-500 font-bold">## Core Philosophy</span><br />
                            <span className="block pl-4 border-l-2 border-gray-700 text-gray-400 my-2">
                                &quot;Code is temporary. <span className="text-orange-400 font-bold">Architecture is forever</span>. If it doesn&apos;t scale, it doesn&apos;t ship.&quot;
                            </span>
                        </div>

                        {/* Creative */}
                        <div>
                            <span className="text-blue-500 font-bold">## Beyond the Terminal</span><br />
                            When I&apos;m not deploying containers or training models, I&apos;m exploring <span className="text-pink-400">cinematic video editing</span> to master visual storytelling.
                        </div>

                        <div>
                            <span className="text-[#6A9955] italic">// Ready to collaborate? Check the contact modules.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="bg-primary text-primary-foreground px-4 py-1 flex justify-between items-center text-xs">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1"><Cpu className="w-3 h-3" /> MASTER</span>
                    <span>UTF-8</span>
                </div>
                <div className="flex gap-4">
                    <span>Ln 18, Col 52</span>
                    <span className="flex items-center gap-1"><Layers className="w-3 h-3" /> Markdown</span>
                </div>
            </div>
        </div>
    );
}

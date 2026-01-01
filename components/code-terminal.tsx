"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TERMINAL_LINES = [
    { text: "> initializing_system...", color: "text-green-500", delay: 0 },
    { text: "> loading_user_profile...", color: "text-blue-400", delay: 800 },
    { text: "> NAME: Debasmit Sahoo", color: "text-white font-bold", delay: 1500 },
    { text: "> ROLE: Front-End Developer", color: "text-purple-400", delay: 2200 },
    { text: "> STACK: [React, Next.js, TS]", color: "text-yellow-300", delay: 3000 },
    { text: "> STATUS: Available for Work", color: "text-green-400", delay: 3800 },
    { text: "> initializing_connection...", color: "text-slate-400", delay: 4500 },
    { text: "> access_granted.", color: "text-green-500", delay: 5200 },
];

export function CodeTerminal() {
    const [lines, setLines] = useState<typeof TERMINAL_LINES>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentLineIndex < TERMINAL_LINES.length) {
            const timeout = setTimeout(() => {
                setLines((prev) => [...prev, TERMINAL_LINES[currentLineIndex]]);
                setCurrentLineIndex((prev) => prev + 1);
            }, TERMINAL_LINES[currentLineIndex].delay - (currentLineIndex > 0 ? TERMINAL_LINES[currentLineIndex - 1].delay : 0));

            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div className="w-full max-w-lg mx-auto bg-[#0f172a] rounded-lg border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm md:text-base relative z-20">
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-auto text-xs text-slate-400">~/user/profile</div>
            </div>

            {/* Terminal Body */}
            <div
                ref={scrollRef}
                className="p-6 h-[200px] md:h-[300px] overflow-y-auto space-y-2"
            >
                {lines.map((line, index) => (
                    <TypewriterLine key={index} text={line.text} color={line.color} />
                ))}

                {/* Cursor */}
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-green-500 ml-1 align-middle"
                />
            </div>
        </div>
    );
}

function TypewriterLine({ text, color }: { text: string, color: string }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30); // Typing speed

        return () => clearInterval(interval);
    }, [text]);

    return <div className={`break-words ${color}`}>{displayedText}</div>;
}

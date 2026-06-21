"use client";



export function TechProfile() {
    return (
        <div className="w-full max-w-[450px] mx-auto bg-background/50 backdrop-blur-md rounded-xl border border-border/50 overflow-hidden font-mono text-sm shadow-2xl relative group hover:border-primary/20 transition-colors duration-500">
            {/* Simple IDE Header - Minimalist */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-muted/20">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-border" />
                    <span className="text-xs text-muted-foreground/60">developer.ts</span>
                </div>
                <div className="text-[10px] text-muted-foreground/40 uppercase tracking-wider">ReadOnly</div>
            </div>

            {/* Code Content */}
            <div className="p-6 relative bg-background/40 font-mono text-sm">
                {/* Line Numbers */}
                <div className="absolute left-4 top-6 bottom-6 flex flex-col items-end text-muted-foreground/20 select-none text-xs leading-6 w-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <span key={i}>{i + 1}</span>
                    ))}
                </div>

                {/* Code Block - Optimized with CSS Animations instead of JS Framer Motion */}
                <div className="pl-8 leading-6 text-foreground/80 overflow-x-auto">
                    <div className="animate-in fade-in slide-in-from-left-2 duration-500" style={{ animationDelay: '100ms' }}>
                        <span className="text-purple-400">interface</span> <span className="text-yellow-400">FullStackArch</span> <span className="text-foreground">{`{`}</span>
                    </div>

                    <div className="animate-in fade-in slide-in-from-left-2 duration-500 whitespace-nowrap" style={{ animationDelay: '200ms' }}>
                        &nbsp;&nbsp;<span className="text-blue-400">name</span>: <span className="text-green-400">'Debasmit Sahoo'</span>;
                    </div>

                    <div className="animate-in fade-in slide-in-from-left-2 duration-500 whitespace-nowrap" style={{ animationDelay: '300ms' }}>
                        &nbsp;&nbsp;<span className="text-blue-400">roles</span>: [
                    </div>

                    <div className="animate-in fade-in slide-in-from-left-2 duration-500 whitespace-nowrap" style={{ animationDelay: '400ms' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Full Stack'</span>, <span className="text-green-400">'Cloud Arch.'</span>
                    </div>

                    <div className="animate-in fade-in slide-in-from-left-2 duration-500 whitespace-nowrap" style={{ animationDelay: '600ms' }}>
                        &nbsp;&nbsp;];
                    </div>

                    <div className="animate-in fade-in slide-in-from-left-2 duration-500 whitespace-nowrap" style={{ animationDelay: '700ms' }}>
                        &nbsp;&nbsp;<span className="text-blue-400">expertStack</span>: [
                    </div>

                    <div className="animate-in fade-in slide-in-from-left-2 duration-500 whitespace-nowrap" style={{ animationDelay: '800ms' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'GCP'</span>,
                    </div>

                    <div className="animate-in fade-in slide-in-from-left-2 duration-500 whitespace-nowrap" style={{ animationDelay: '900ms' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Python'</span>, <span className="text-green-400">'Docker'</span>
                    </div>

                    <div className="animate-in fade-in slide-in-from-left-2 duration-500 whitespace-nowrap" style={{ animationDelay: '1000ms' }}>
                        &nbsp;&nbsp;];
                    </div>

                    <div className="animate-in fade-in slide-in-from-left-2 duration-500" style={{ animationDelay: '1100ms' }}>
                        <span className="text-foreground">{`}`}</span>
                    </div>
                </div>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
        </div>
    );
}

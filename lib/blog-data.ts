export interface BlogPost {
    slug: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
    readTime: string;
    image: string;
    content: string; // HTML string
}

const posts: BlogPost[] = [
    {
        slug: "optimizing-nextjs-performance",
        title: "Optimizing Next.js 14 Performance for Scale",
        summary: "Deep dive into server components, image optimization, and route handling for maximum speed.",
        date: "2025-12-15",
        tags: ["Next.js", "Performance", "React"],
        readTime: "5 min read",
        image: "/blog/nextjs-performance.png",
        content: `
            <p class="text-xl text-muted-foreground leading-relaxed mb-8">
                Next.js 14 marks a major leap forward in how modern React applications are built and optimized for performance at scale. With Server Components enabled by default, improved data fetching patterns, and smarter asset handling, developers can now ship faster, leaner, and more SEO-friendly web applications.
            </p>
            
            <div class="my-8 p-6 bg-secondary/20 rounded-xl border border-border/50">
                <p class="mb-0 font-medium">In this log, we explore:</p>
                <ul class="mt-4 grid gap-2">
                    <li class="flex items-center gap-2 text-sm text-foreground/80">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary"></span> Server Components vs Client Components
                    </li>
                    <li class="flex items-center gap-2 text-sm text-foreground/80">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary"></span> Image Optimization Strategies
                    </li>
                    <li class="flex items-center gap-2 text-sm text-foreground/80">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary"></span> Dynamic Imports
                    </li>
                </ul>
            </div>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">01.</span> Why Performance Matters
            </h2>
            <p>Performance directly impacts:</p>
            <ul class="my-6 space-y-2">
                <li class="flex items-start gap-3">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40"></div>
                    <span>SEO rankings</span>
                </li>
                <li class="flex items-start gap-3">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40"></div>
                    <span>Core Web Vitals (LCP, CLS, FID)</span>
                </li>
                <li class="flex items-start gap-3">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40"></div>
                    <span>User experience and conversion rates</span>
                </li>
            </ul>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">02.</span> Server Components
            </h2>
            <p>One of the biggest paradigm shifts in Next.js 14 is the use of React Server Components by default.</p>
            
            <div class="my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                <h3 class="text-lg font-bold text-primary mb-2">The Golden Rule</h3>
                <p class="mb-0 text-foreground/90">Fetch on the server, interact on the client.</p>
            </div>

            <div class="rounded-lg overflow-hidden border border-border/50 bg-[#1e1e1e] my-8 shadow-2xl">
                <div class="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-white/5">
                    <div class="flex gap-1.5">
                        <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div class="text-[10px] font-mono text-white/40 ml-2">server-component.tsx</div>
                </div>
                <div class="p-4 overflow-x-auto">
<pre><code class="language-tsx text-sm"><span class="text-purple-400">async</span> <span class="text-blue-400">function</span> <span class="text-yellow-400">getData</span>() {
  <span class="text-purple-400">const</span> res = <span class="text-purple-400">await</span> fetch(<span class="text-green-400">'https://api.example.com/data'</span>)
  <span class="text-purple-400">return</span> res.json()
}

<span class="text-purple-400">export default</span> <span class="text-purple-400">async</span> <span class="text-blue-400">function</span> <span class="text-yellow-400">Page</span>() {
  <span class="text-purple-400">const</span> data = <span class="text-purple-400">await</span> <span class="text-yellow-400">getData</span>()
  <span class="text-purple-400">return</span> &lt;h1&gt;{data.title}&lt;/h1&gt;
}</code></pre>
                </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 my-8">
                <div class="text-green-500 mt-1">✓</div>
                <div>
                    <strong class="text-green-500 block text-xs uppercase tracking-wider mb-1">SEO Tip</strong>
                    <p class="text-sm m-0 text-foreground/80">Server-rendered content improves crawlability and boosts rankings immediately.</p>
                </div>
            </div>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">03.</span> Image Optimization
            </h2>
            <p>Images are often the largest contributors to slow page loads. Next.js handles this automatically.</p>

            <div class="grid md:grid-cols-2 gap-4 my-8">
                <div class="p-4 rounded-lg border border-border/50 bg-secondary/10">
                    <div class="text-xs font-mono text-muted-foreground uppercase mb-2">Benefit 01</div>
                    <div class="font-bold">Auto Resizing</div>
                </div>
                <div class="p-4 rounded-lg border border-border/50 bg-secondary/10">
                    <div class="text-xs font-mono text-muted-foreground uppercase mb-2">Benefit 02</div>
                    <div class="font-bold">WebP & AVIF</div>
                </div>
                <div class="p-4 rounded-lg border border-border/50 bg-secondary/10">
                    <div class="text-xs font-mono text-muted-foreground uppercase mb-2">Benefit 03</div>
                    <div class="font-bold">Prevents CLS</div>
                </div>
                <div class="p-4 rounded-lg border border-border/50 bg-secondary/10">
                    <div class="text-xs font-mono text-muted-foreground uppercase mb-2">Benefit 04</div>
                    <div class="font-bold">Lazy Load</div>
                </div>
            </div>

            <div class="rounded-lg overflow-hidden border border-border/50 bg-[#1e1e1e] my-8 shadow-2xl">
                 <div class="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-white/5">
                    <div class="flex gap-1.5">
                        <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                </div>
                <div class="p-4 overflow-x-auto">
<pre><code class="language-tsx text-sm"><span class="text-purple-400">import</span> Image <span class="text-purple-400">from</span> <span class="text-green-400">'next/image'</span>

&lt;Image
  src=<span class="text-green-400">"/hero.png"</span>
  alt=<span class="text-green-400">"Next.js 14 Performance"</span>
  width={<span class="text-orange-400">800</span>}
  height={<span class="text-orange-400">400</span>}
  priority
/&gt;</code></pre>
                </div>
            </div>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">04.</span> Dynamic Imports
            </h2>
            <p>Use <code>next/dynamic</code> to lazy load heavy components like charts or maps.</p>

           <div class="rounded-lg overflow-hidden border border-border/50 bg-[#1e1e1e] my-8 shadow-2xl">
                 <div class="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-white/5">
                    <div class="flex gap-1.5">
                        <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                </div>
                <div class="p-4 overflow-x-auto">
<pre><code class="language-tsx text-sm"><span class="text-purple-400">import</span> dynamic <span class="text-purple-400">from</span> <span class="text-green-400">'next/dynamic'</span>

<span class="text-purple-400">const</span> Chart = dynamic(() => <span class="text-yellow-400">import</span>(<span class="text-green-400">'@/components/Chart'</span>), {
  ssr: <span class="text-orange-400">false</span>,
  loading: () => &lt;p&gt;Loading...&lt;/p&gt;,
})</code></pre>
                </div>
            </div>

             <div class="flex items-start gap-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 my-8">
                <div class="text-yellow-500 mt-1">⚡</div>
                <div>
                    <strong class="text-yellow-500 block text-xs uppercase tracking-wider mb-1">Performance Tip</strong>
                    <p class="text-sm m-0 text-foreground/80">Lazy loading improves scalability by keeping initial bundles small.</p>
                </div>
            </div>

            <hr class="border-border/40 my-12" />

            <p class="text-lg font-medium text-foreground">
                Next.js 14 redefines how we build fast, scalable, and SEO-optimized React applications.
            </p>
            <p className="opacity-80">
                Happy building with Next.js 🚀
            </p>
        `
    },
    {
        slug: "3d-web-experiences",
        title: "Building Immersive 3D Web Experiences",
        summary: "How to integrate React Three Fiber without sacrificing accessibility or load times.",
        date: "2025-11-20",
        tags: ["Three.js", "R3F", "Design"],
        readTime: "7 min read",
        image: "/blog/3d-web-experiences.png",
        content: `
            <p class="text-xl text-muted-foreground leading-relaxed mb-8">
                The web is traditionally flat—but it doesn’t have to be. With <strong>React Three Fiber (R3F)</strong>, developers can bring rich, immersive 3D web experiences to life while staying inside the familiar React ecosystem. Built on top of Three.js, R3F makes 3D declarative, composable, and easier to manage at scale.
            </p>

            <div class="my-8 p-6 bg-secondary/20 rounded-xl border border-border/50">
                <p class="mb-0 font-medium">In this article, we explore:</p>
                <ul class="mt-4 grid gap-2">
                    <li class="flex items-center gap-2 text-sm text-foreground/80">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary"></span> High-performance 3D websites
                    </li>
                    <li class="flex items-center gap-2 text-sm text-foreground/80">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary"></span> Accessibility in WebGL
                    </li>
                    <li class="flex items-center gap-2 text-sm text-foreground/80">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary"></span> Optimization techniques (Draco, Instancing)
                    </li>
                </ul>
            </div>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">01.</span> Why React Three Fiber?
            </h2>
            <p>React Three Fiber is a React renderer for Three.js. Instead of imperatively controlling a 3D scene, you describe it using JSX.</p>

            <div class="grid sm:grid-cols-2 gap-4 my-8">
                <div class="p-4 bg-secondary/10 border border-border/50 rounded-lg">
                    <h4 class="font-bold text-sm mb-1 text-foreground">Declarative</h4>
                    <p class="text-xs text-muted-foreground m-0">Managed via standard React state & hooks.</p>
                </div>
                <div class="p-4 bg-secondary/10 border border-border/50 rounded-lg">
                    <h4 class="font-bold text-sm mb-1 text-foreground">Ecosystem</h4>
                    <p class="text-xs text-muted-foreground m-0">Access to powerful libraries like <code>drei</code> and physics.</p>
                </div>
            </div>

             <div class="flex items-start gap-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 my-8">
                <div class="text-green-500 mt-1">🚀</div>
                <div>
                    <strong class="text-green-500 block text-xs uppercase tracking-wider mb-1">SEO Insight</strong>
                    <p class="text-sm m-0 text-foreground/80">Lightweight, well-optimized 3D experiences improve engagement metrics like time-on-site, indirectly boosting SEO.</p>
                </div>
            </div>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">02.</span> The Performance Cost
            </h2>
            <p>Let’s be honest: <strong>3D is heavy</strong>. High-resolution textures, complex models, and lighting can drop FPS and overload the GPU.</p>
            
            <div class="my-8 p-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-lg">
                <h3 class="text-lg font-bold text-yellow-500 mb-2">Optimization is Mandatory</h3>
                <p class="mb-0 text-foreground/90">With the right techniques, 3D on the web can be smooth and scalable.</p>
            </div>

            <h3 class="text-xl font-bold mt-8 mb-4">1. Draco Compression (Must-Have)</h3>
            <p>Always compress your GLTF / GLB models using Draco compression.</p>
            <ul class="my-4 space-y-2">
                <li class="flex items-start gap-3">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40"></div>
                    <span>Reduces model size by up to 90%</span>
                </li>
                <li class="flex items-start gap-3">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40"></div>
                    <span>Faster network loading & lower memory usage</span>
                </li>
            </ul>

            <h3 class="text-xl font-bold mt-8 mb-4">2. Geometry Instancing</h3>
            <p>If the same object appears multiple times (trees, particles), <strong>do not duplicate geometry</strong>. Use instancing to drastically lower draw calls.</p>
            
            <h3 class="text-xl font-bold mt-8 mb-4">3. Disable Anti-Aliasing on High-DPI</h3>
             <p>On high pixel density screens (Retina), anti-aliasing is expensive and often unnecessary. Disabling it saves GPU power.</p>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">03.</span> Accessibility (A11y)
            </h2>
            <p>Immersion should never come at the cost of accessibility.</p>

             <div class="rounded-lg overflow-hidden border border-border/50 bg-[#1e1e1e] my-8 shadow-2xl">
                <div class="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-white/5">
                    <div class="text-[10px] font-mono text-white/40">A11y Checklist</div>
                </div>
                <div class="p-4 text-sm font-mono text-gray-300 space-y-2">
                    <div class="flex gap-3"><span class="text-red-400">❌</span> Don't trap keyboard focus inside canvas</div>
                    <div class="flex gap-3"><span class="text-green-400">✅</span> Allow users to tab past the scene</div>
                    <div class="flex gap-3"><span class="text-green-400">✅</span> Provide HTML overlays for controls</div>
                    <div class="flex gap-3"><span class="text-green-400">✅</span> Ensure screen-reader fallbacks</div>
                </div>
            </div>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">04.</span> Final Thoughts
            </h2>
            <p class="text-lg">
                The future of the web is interactive and immersive. With R3F, you can push beyond flat layouts without sacrificing performance.
            </p>
            <p class="opacity-80 mt-4">
                When done right, 3D doesn’t just look cool—it tells a story.
            </p>
            <p class="font-bold mt-4 text-primary">
                Welcome to the next dimension of the web 🌌
            </p>
        `
    },
    {
        slug: "design-systems-engineering",
        title: "Bridging Design & Engineering with Systems",
        summary: "Creating a shared language between Figma and Code using Tailwind and Shadcn.",
        date: "2025-10-05",
        tags: ["Design Systems", "Workflow", "UI/UX"],
        readTime: "6 min read",
        image: "/blog/design-systems-engineering.png",
        content: `
            <p class="text-xl text-muted-foreground leading-relaxed mb-8">
                A <strong>Design System</strong> is more than a UI kit or a collection of components. It’s the <strong>infrastructure of your product</strong>—the shared language that aligns <strong>design (Figma)</strong> and <strong>engineering (code)</strong>. When both teams speak different languages, velocity drops, inconsistencies grow, and scaling becomes painful.
            </p>

             <div class="my-8 p-6 bg-secondary/20 rounded-xl border border-border/50">
                <p class="mb-0 font-medium">In this log, we explore:</p>
                <ul class="mt-4 grid gap-2">
                    <li class="flex items-center gap-2 text-sm text-foreground/80">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary"></span> Design Tokens Strategy
                    </li>
                    <li class="flex items-center gap-2 text-sm text-foreground/80">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary"></span> Shadcn UI as Infrastructure
                    </li>
                    <li class="flex items-center gap-2 text-sm text-foreground/80">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary"></span> Workflow Alignment
                    </li>
                </ul>
            </div>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">01.</span> Why Design Systems Matter
            </h2>
            <p>A strong design system improves collaboration, ensures consistency, and accelerates product development.</p>

             <div class="flex items-start gap-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 my-8">
                <div class="text-green-500 mt-1">🚀</div>
                <div>
                    <strong class="text-green-500 block text-xs uppercase tracking-wider mb-1">SEO Insight</strong>
                    <p class="text-sm m-0 text-foreground/80">Consistent UI/UX improves usability, accessibility, and engagement—signals search engines value.</p>
                </div>
            </div>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">02.</span> Design Tokens
            </h2>
            <p>Design tokens are the <strong>atomic values</strong> of your design system. Instead of duplicating values, we define them once and share them everywhere.</p>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                 <div class="p-4 bg-[#f24e1e]/10 border border-[#f24e1e]/20 rounded-lg flex flex-col items-center justify-center text-center">
                    <div class="text-[#f24e1e] mb-2 text-lg">🎨</div>
                    <div class="text-xs font-mono uppercase tracking-wider font-bold">Colors</div>
                 </div>
                 <div class="p-4 bg-[#a259ff]/10 border border-[#a259ff]/20 rounded-lg flex flex-col items-center justify-center text-center">
                    <div class="text-[#a259ff] mb-2 text-lg">📏</div>
                    <div class="text-xs font-mono uppercase tracking-wider font-bold">Spacing</div>
                 </div>
                 <div class="p-4 bg-[#1abcfe]/10 border border-[#1abcfe]/20 rounded-lg flex flex-col items-center justify-center text-center">
                    <div class="text-[#1abcfe] mb-2 text-lg">Aa</div>
                    <div class="text-xs font-mono uppercase tracking-wider font-bold">Typography</div>
                 </div>
            </div>

            <h3 class="text-xl font-bold mt-8 mb-4">Figma → Code → Browser</h3>
            <p>By mapping Figma variables directly to CSS variables, detailed design decisions become instantly consumable by the frontend.</p>

            <div class="rounded-lg overflow-hidden border border-border/50 bg-[#1e1e1e] my-8 shadow-2xl">
                 <div class="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-white/5">
                    <div class="flex gap-1.5">
                         <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                         <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div class="text-[10px] font-mono text-white/40 ml-2">tailwind.config.js</div>
                </div>
                <div class="p-4 overflow-x-auto">
<pre><code class="language-js text-sm"><span class="text-purple-400">theme</span>: {
  <span class="text-purple-400">colors</span>: {
    <span class="text-blue-400">primary</span>: <span class="text-green-400">"var(--primary)"</span>,
    <span class="text-blue-400">background</span>: <span class="text-green-400">"var(--background)"</span>,
  }
}</code></pre>
                </div>
            </div>

             <div class="flex items-start gap-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 my-8">
                <div class="text-yellow-500 mt-1">💡</div>
                <div>
                    <strong class="text-yellow-500 block text-xs uppercase tracking-wider mb-1">Pro Tip</strong>
                    <p class="text-sm m-0 text-foreground/80">Treat tokens as product infrastructure, not styling shortcuts. One source of truth, zero drift.</p>
                </div>
            </div>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">03.</span> Shadcn UI Strategy
            </h2>
            <p>Shadcn UI is not a traditional component library—it’s a <strong>strategy</strong>.</p>
            <ul class="my-6 space-y-2">
                 <li class="flex items-start gap-3">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40"></div>
                    <span>Built on Radix UI primitives</span>
                </li>
                <li class="flex items-start gap-3">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40"></div>
                    <span>Fully accessible by default</span>
                </li>
                 <li class="flex items-start gap-3">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40"></div>
                    <span>No black-box abstraction: <strong>You own the code</strong></span>
                </li>
            </ul>

            <h2 class="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
                <span class="text-primary font-mono text-lg">04.</span> Final Thoughts
            </h2>
            <p class="text-lg">
                Great products aren’t built by design or engineering alone—they’re built by <strong>systems that unify both</strong>.
            </p>
            <p class="opacity-80 mt-4">
               When design tokens, Shadcn UI, and workflow alignment come together, design and engineering finally move at the same speed.
            </p>
            <p class="font-bold mt-4 text-primary">
               That’s not just good UI—it’s great product infrastructure.
            </p>
        `
    }
];

export function getAllPosts(): BlogPost[] {
    return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find(post => post.slug === slug);
}

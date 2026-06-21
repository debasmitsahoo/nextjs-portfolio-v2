import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LoadingScreen } from "@/components/loading-screen";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    metadataBase: new URL("https://debasmit.com"),
    icons: [
        {
            url: '/icon.png',
            sizes: 'any',
            type: 'image/png',
        },
    ],
    title: {
        default: "Debasmit Sahoo | Full Stack Developer & AI Engineer",
        template: "%s | Debasmit Sahoo"
    },
    description: "Debasmit Sahoo is a Full Stack Developer and AI Engineer specializing in scalable web applications, intelligent agents, and modern user interfaces.",
    keywords: ["Debasmit Sahoo", "Debasmit", "Full Stack Developer", "AI Engineer", "Software Engineer India", "Next.js Expert", "React Developer", "Web Development", "Bhubaneswar Developer"],
    authors: [{ name: "Debasmit Sahoo", url: "https://debasmit.com" }],
    creator: "Debasmit Sahoo",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://debasmit.com",
        title: "Debasmit Sahoo | Full Stack Developer & AI Engineer",
        description: "Building the future of intelligent web experiences.",
        siteName: "Debasmit Sahoo Portfolio",
        images: [
            {
                url: "/me.jpg", // Using the profile image as OG image
                width: 1200,
                height: 630,
                alt: "Debasmit Sahoo - Full Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Debasmit Sahoo | Full Stack Developer & AI Engineer",
        description: "Building the future of intelligent web experiences.",
        images: ["/me.jpg"],
        creator: "@debasmitsahoo", // Assuming handle
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Debasmit Sahoo",
    "url": "https://debasmit.com",
    "image": "https://debasmit.com/me.jpg",
    "sameAs": [
        "https://linkedin.com/in/debasmitsahoo",
        "https://github.com/debasmitsahoo",
        "https://twitter.com/debasmitsahoo"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
        "@type": "Organization",
        "name": "Freelance / Independent"
    },
    "description": "Full Stack Developer and AI Engineer building scalable web solutions."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, jetbrainsMono.variable, "font-sans min-h-screen bg-background text-foreground antialiased")}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <LoadingScreen />
                {children}
            </body>
        </html>
    );
}

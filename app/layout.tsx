import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LoadingScreen } from "@/components/loading-screen";
import { SITE } from "@/lib/seo";
import { schemaGraph, personNode, websiteNode, organizationNode } from "@/lib/schema";

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
        default: SITE.title,
        template: "%s | Debasmit Sahoo"
    },
    description: SITE.description,
    keywords: SITE.keywords,
    authors: [{ name: "Debasmit Sahoo", url: SITE.url }],
    creator: "Debasmit Sahoo",
    alternates: {
        canonical: SITE.url,
    },
    openGraph: {
        type: "website",
        locale: SITE.locale,
        url: SITE.url,
        title: SITE.title,
        description: SITE.description,
        siteName: SITE.name,
        images: [
            {
                url: SITE.ogImage, // Using the profile image as OG image
                width: 1200,
                height: 630,
                alt: "Debasmit Sahoo — Full Stack Developer & Product Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE.title,
        description: SITE.description,
        images: [SITE.ogImage],
        creator: SITE.twitterHandle,
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

// Global entity graph: Person + WebSite + Organization, cross-referenced by @id.
const jsonLd = schemaGraph(personNode(), websiteNode(), organizationNode());

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

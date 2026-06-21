import type { Metadata } from "next";

/**
 * Single source of truth for site-wide SEO.
 * ⚠️ VERIFY the Twitter/Instagram URLs below actually exist before deploying —
 * a wrong `sameAs` weakens Google's entity confidence for your name.
 */
export const SITE = {
    name: "Debasmit Sahoo",
    url: "https://debasmit.com",
    title: "Debasmit Sahoo | Full Stack Developer & Product Engineer",
    description:
        "Debasmit Sahoo is a Full Stack Developer & Product Engineering Intern in Bhubaneswar, India. MCA student building scalable web apps with Next.js, React, Firebase & GCP.",
    locale: "en_US",
    ogImage: "/me.jpg",
    twitterHandle: "@debasmitsahoo",
    jobTitle: "Product Engineering Intern",
    location: {
        city: "Bhubaneswar",
        region: "Odisha",
        country: "IN",
    },
    sameAs: [
        "https://github.com/debasmitsahoo",
        "https://linkedin.com/in/debasmitsahoo",
        "https://twitter.com/debasmitsahoo",
        "https://instagram.com/debasmitsahoo",
    ],
    keywords: [
        "Debasmit Sahoo",
        "Debasmit",
        "Debasmit Sahoo Portfolio",
        "Debasmit Sahoo Developer",
        "Debasmit Sahoo MCA",
        "Debasmit Sahoo Bhubaneswar",
        "Debasmit Sahoo Product Engineer",
        "Debasmit Sahoo Full Stack Developer",
        "Next.js Developer Bhubaneswar",
        "Firebase Developer Odisha",
        "GCP Developer Odisha",
        "Full Stack Developer Odisha",
        "Product Engineer India",
    ],
};

type BuildArgs = {
    title: string;
    description: string;
    path?: string;
    image?: string;
    keywords?: string[];
    type?: "website" | "article" | "profile";
};

/** Per-page metadata builder. Sets an absolute title (bypasses the layout template), canonical, OG + Twitter. */
export function buildMetadata({
    title,
    description,
    path = "/",
    image,
    keywords,
    type = "website",
}: BuildArgs): Metadata {
    const url = `${SITE.url}${path}`;
    const ogImage = image ?? SITE.ogImage;

    return {
        title: { absolute: title },
        description,
        keywords: keywords ?? SITE.keywords,
        alternates: { canonical: url },
        openGraph: {
            type: type === "profile" ? "profile" : type,
            url,
            title,
            description,
            siteName: SITE.name,
            locale: SITE.locale,
            images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
            creator: SITE.twitterHandle,
        },
    };
}

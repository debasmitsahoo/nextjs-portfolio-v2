import { SITE } from "./seo";
import type { BlogPost } from "./blog-data";

/**
 * Schema.org JSON-LD nodes (no @context — they are composed into an @graph).
 * Stable @id values let nodes cross-reference each other (e.g. an Article's
 * author points at the Person node) so Google builds one connected entity graph.
 */

const PERSON_ID = `${SITE.url}/#person`;
const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function personNode() {
    return {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Debasmit Sahoo",
        alternateName: "Debasmit",
        url: SITE.url,
        image: `${SITE.url}/me.jpg`,
        jobTitle: SITE.jobTitle,
        description:
            "Full Stack Developer and Product Engineering Intern from Bhubaneswar, Odisha, India, specializing in Next.js, React, Firebase, and Google Cloud Platform.",
        worksFor: { "@type": "Organization", name: "VireonTech" },
        affiliation: [
            { "@type": "Organization", name: "VireonTech" },
            { "@type": "CollegeOrUniversity", name: "Regional College of Management" },
        ],
        alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Regional College of Management" },
            { "@type": "CollegeOrUniversity", name: "Utkal University" },
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: SITE.location.city,
            addressRegion: SITE.location.region,
            addressCountry: SITE.location.country,
        },
        knowsAbout: [
            "Full Stack Development",
            "Next.js",
            "React",
            "TypeScript",
            "Firebase",
            "Google Cloud Platform",
            "Supabase",
            "Product Engineering",
        ],
        sameAs: SITE.sameAs,
    };
}

export function organizationNode() {
    return {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "Debasmit Sahoo",
        url: SITE.url,
        logo: `${SITE.url}/icon.png`,
        image: `${SITE.url}/me.jpg`,
        sameAs: SITE.sameAs,
    };
}

export function websiteNode() {
    return {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": PERSON_ID },
        inLanguage: "en-US",
    };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
    return {
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: it.name,
            item: `${SITE.url}${it.path}`,
        })),
    };
}

export function articleNode(post: BlogPost) {
    const url = `${SITE.url}/blog/${post.slug}`;
    return {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.summary,
        image: `${SITE.url}${post.image}`,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@id": PERSON_ID },
        publisher: { "@id": ORG_ID },
        mainEntityOfPage: url,
        keywords: post.tags.join(", "),
        inLanguage: "en-US",
    };
}

export function faqNode(faqs: { q: string; a: string }[]) {
    return {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };
}

/** Wrap one or more nodes into a single @graph document for one <script> tag. */
export function schemaGraph(...nodes: object[]) {
    return {
        "@context": "https://schema.org",
        "@graph": nodes,
    };
}

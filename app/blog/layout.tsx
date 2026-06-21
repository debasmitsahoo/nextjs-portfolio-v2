import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Blog | Debasmit Sahoo — Web Development & Product Engineering",
    description:
        "Articles by Debasmit Sahoo on Next.js, React, web performance, Firebase, GCP, and product engineering — practical notes from building real-world apps.",
    path: "/blog",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}

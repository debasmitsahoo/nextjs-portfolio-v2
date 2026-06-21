import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
    title: "About Debasmit Sahoo | Full Stack Developer in Bhubaneswar",
    description:
        "About Debasmit Sahoo — Full Stack Developer and Product Engineering Intern from Bhubaneswar, Odisha. Skilled in Next.js, React, TypeScript, Firebase, and Google Cloud.",
    path: "/about",
    type: "profile",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}

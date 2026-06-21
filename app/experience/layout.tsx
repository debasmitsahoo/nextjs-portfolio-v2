import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Experience | Debasmit Sahoo — Product Engineering Intern",
    description:
        "Professional experience of Debasmit Sahoo — Product Engineering Intern at VireonTech and founder of CraftSmith, building scalable web platforms with Next.js and GCP.",
    path: "/experience",
});

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
    return children;
}

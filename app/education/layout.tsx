import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Education & Honors | Debasmit Sahoo — MCA Student",
    description:
        "Education and honors of Debasmit Sahoo — MCA at Regional College of Management and BCA from Utkal University, including Student of the Year and hackathon awards.",
    path: "/education",
});

export default function EducationLayout({ children }: { children: React.ReactNode }) {
    return children;
}

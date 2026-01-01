import Link from "next/link"

export function SiteFooter() {
    return (
        <footer className="w-full border-t py-6 bg-background">
            <div className="container flex flex-col items-center justify-center gap-4 md:h-24">
                <p className="text-center text-sm leading-loose text-muted-foreground">
                    &copy; 2026 Debasmit Sahoo. Built with ❤️ using React & Tailwind CSS.
                </p>
            </div>
        </footer>
    )
}

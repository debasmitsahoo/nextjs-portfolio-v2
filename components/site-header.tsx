"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={cn(
            "fixed top-0 z-50 w-full transition-all duration-300",
            isScrolled ? "bg-background border-b py-2 shadow-sm" : "bg-transparent py-4"
        )}>
            <div className="container flex items-center justify-between px-6 md:px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tight">Debasmit<span className="text-primary">.</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <Link href="/about" className="transition-colors hover:text-foreground text-foreground/60 font-mono text-xs uppercase tracking-wide">About</Link>
                    <Link href="/education" className="transition-colors hover:text-foreground text-foreground/60 font-mono text-xs uppercase tracking-wide">Education</Link>
                    <Link href="/experience" className="transition-colors hover:text-foreground text-foreground/60 font-mono text-xs uppercase tracking-wide">Experience</Link>
                    <Link href="/projects" className="transition-colors hover:text-foreground text-foreground/60 font-mono text-xs uppercase tracking-wide">Projects</Link>
                    <Link href="/blog" className="transition-colors hover:text-foreground text-foreground/60 font-mono text-xs uppercase tracking-wide">Blog</Link>
                    <Link href="/contact">
                        <Button variant="default" size="sm" className="rounded-none px-6 font-mono text-xs uppercase">Contact</Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background border-b md:hidden p-4 flex flex-col space-y-4 shadow-lg animate-in slide-in-from-top-2 z-40">
                    <Link href="/about" className="text-sm font-medium py-2 font-mono uppercase" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link href="/education" className="text-sm font-medium py-2 font-mono uppercase" onClick={() => setMobileMenuOpen(false)}>Education</Link>
                    <Link href="/experience" className="text-sm font-medium py-2 font-mono uppercase" onClick={() => setMobileMenuOpen(false)}>Experience</Link>
                    <Link href="/projects" className="text-sm font-medium py-2 font-mono uppercase" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                    <Link href="/blog" className="text-sm font-medium py-2 font-mono uppercase" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                    <Link href="/contact" className="text-sm font-medium py-2 font-mono uppercase" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    )
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5",
                "backdrop-blur-md transition-all duration-300",
                scrolled
                    ? "border-b border-[var(--border)] bg-[var(--bg)]/85"
                    : "bg-transparent"
            )}
        >
            <Link
                href="#hero"
                className="font-black text-lg tracking-tight font-mono"
            >
                MK<span className="text-[var(--accent)]">.</span>
            </Link>

            <ul className="flex gap-9 list-none">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="text-xs font-medium uppercase tracking-widest text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
}
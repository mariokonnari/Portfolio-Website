"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-end px-16 pb-20 pt-32 overflow-hidden"
        >
            {/* Background large letters */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[30vw] font-black text-black/[0.04] leading-none select-none pointer-events-none"
            >
                MK
            </motion.span>

            {/* Label */}
            <motion.p
                custom={0.2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--ink-muted] mb-6"
            >
                Frontend Software Engineer
            </motion.p>

            {/* Name */}
            <motion.h1
                custom={0.65}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-black leading-[0.92] tracking-[0.04em] text-[clamp(3.5rem,9vw,9rem)]"
            >
                Marios
                <br />
                <span className="text-[var(--accent)]">Konnaris</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
                custom={0.65}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-9 max-w-xl text-lg font-light text-[var(--ink-muted)] leading-relaxed"
            >
                I craft fast, accessible, and visually compelling web experiences —
                from pixel-perfect interfaces to performant SPAs. Based anywhere,
                building everywhere.
            </motion.p>

            {/* CTAs */}
            <motion.div
                custom={0.9}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-12 flex gap-4 flex-wrap"
            >
                <Link
                    href="#projects"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--ink)] text-white text-sm font-medium hover:bg-[var(--accent)] transition-colors duration-250"
                >
                    View my work
                    <ArrowRight size={15} />
                </Link>
                <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--border)] text-sm font-medium hover:border-[var(--ink)] transition-colors duration-250"
                >
                    Get in touch
                </Link>
            </motion.div>
        </section>
    );
}
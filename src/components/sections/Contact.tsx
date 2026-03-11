"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, FileText } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

const details = [
    { label: "Location", value: "Remote / Athens" },
    { label: "Role", value: "Frontend Software Engineer" },
    { label: "Availability", value: "Immediately" },
    { label: "Work Type", value: "Full-time" },
];

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="contact"
            ref={ref}
            className="bg-[var(--ink)] px-16 py-32 text-white"
        >
            {/* Section header */}
            <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex items-baseline gap-5 mb-20 border-b border-white/10 pb-16"
            >
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                    04
                </span>
                <h2 className="font-black text-5xl tracking-tight leading-none text-white">
                    Contact
                </h2>
                <div className="flex-1 h-px bg-white/10 ml-5"/>
            </motion.div>

            {/* Headline */}
            <motion.h3
                custom={0.15}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="font-black leading-[1.05] tracking-tight text-center mb-14"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
                Let's build something
                <br />
                <span className="text-[var(--accent)]">great together.</span>
            </motion.h3>

            {/* CTA buttons */}
            <motion.div
                custom={0.3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex justify-center gap-4 flex-wrap mb-24"
            >
                <a
                    href="mailto:mariokonnari@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:bg-[#ff6a50] hover:-translate-y-1 transition-all duration-250"
                >
                    <Mail size={15} />
                    mariokonnari@gmail.com
                </a>
                <a
                    href="https://www.linkedin.com/in/marios-konnaris-1b3726286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-sm font-medium hover:border-white hover:-translate-y-1 transition-all duration-250"
                >
                    <Linkedin size={15} />
                    Linkedin
                    <ArrowUpRight size={13} />
                </a>
                <a
                    href="https://www.github.com/mariokonnari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-sm font-medium hover:border-white hover:-translate-y-1 transition-all duration-250"
                >
                    <Github size={15} />
                    Github
                    <ArrowUpRight size={13} />
                </a>
                <a
                    href="/cv/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-sm font-medium hover:border-white hover:-translate-y-1 transition-all duration-250"
                >
                    <FileText size={15} />
                    Resume
                    <ArrowUpRight size={13} />
                </a>
            </motion.div>

            {/* Details strip */}
            <motion.div
                custom={0.45}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex justify-center gap-16 flex-wrap pt-16 border-t border-white/10"
            >
                {details.map((detail) => (
                    <div key={detail.label}>
                        <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1.5">
                            {detail.label}
                        </div>
                        <div className="text-sm text-white/80">{detail.value}</div>
                    </div>
                ))}
            </motion.div>

            {/* Footer */}
            <motion.p
                custom={0.6}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-center text-xs text-white/25 tracking-wide mt-24 pt-8 border-t border-white/10"
            >
                © 2026 Marios Konnaris — Built with Next.js, Tailwind & Framer Motion
            </motion.p>
        </section>
    );
}
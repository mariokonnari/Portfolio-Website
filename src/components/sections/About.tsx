"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    { num: "1", label: "Year of hands-on coding experience" },
    { num: "3", label: "Complete projects built end-to-end" },
    { num: "10+", label: "Technologies learned & applied" },
    { num: "∞", label: "Drive to keep learning & improving" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" ref={ref} className="bg-[var(--surface)] px-6 md:px-16 py-20 md:py-32">
            {/* Section header */}
            <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex items-baseline gap-5 mb-20"
            >
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                    01
                </span>
                <h2 className="font-black text-5xl tracking-light leading-none">
                    About
                </h2>
                <div className="flex-1 h-px bg-[var(--border)] ml-5" />
            </motion.div>
            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                {/* Left - bio */}
                <motion.div
                    custom={0.15}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex flex-col gap-5"
                >
                    <p className="text-lg font-light text-[var(--ink-muted)] leading-relaxed">
                        I'm{" "}
                        <strong className="text-[var(--ink)] font-medium">
                            Marios Konnaris
                        </strong>
                        , a frontend software engineer with a passion for building
                        interfaces that are both technically sound and genuinely delightful
                        to use.
                    </p>
                    <p className="text-lg font-light text-[var(--ink-muted)] leading-relaxed">
                        I believe great frontend work lives at the intersection of{" "}
                        <strong className="text-[var(--ink)] font-medium">
                            engineering rigour and design sensibility
                        </strong>{" "}
                        — writing clean, maintainable code while obsessing over the details
                        that make a product feel exceptional.
                    </p>
                    <p className="text-lg font-light text-[var(--ink-muted)] leading-relaxed">
                        Whether I'm architecting a complex React application, fine-tuning
                        CSS animations, or optimising for Core Web Vitals, I bring the same
                        care and attention to every layer of the stack.
                    </p>

                    {/* Availability badge */}
                    <div className="mt-4 inline-flex items-center gap-2.5 self-start px-5 py-2.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </span>
                        Open to new opportunities
                    </div>
                </motion.div>

                {/* Right - stats */}
                <div className="grid grid-cols-2 gap-4 md:gap-5">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            custom={0.2 + i * 0.1}
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="bg-[var(--bg)] rounded-xl p-5 md:p-7 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="font-black text-4xl md:text-5xl leading-none tracking-tight mb-2">
                                {stat.num.endsWith("+") ? (
                                    <>
                                        {stat.num.slice(0, -1)}
                                        <span className="text-[var(--accent)]">+</span>
                                    </>
                                ) : (
                                    stat.num
                                )}
                            </div>
                            <div className="text-sm text-[var(--ink-muted)]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
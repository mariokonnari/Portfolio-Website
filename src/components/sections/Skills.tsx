"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

const skillGroups = [
    {
        title: "Core Frontend",
        skills: [
            { name: "React / Next.js", pct: 85 },
            { name: "TypeScript", pct: 80 },
            { name: "HTML & CSS", pct: 90 },
            { name: "JavaScript (ES2024+)", pct: 82 },
            { name: "CSS Animations & Motion", pct: 78 },
        ],
    },
    {
        title: "Ecosystem & Backend",
        skills: [
            { name: "Node.js / Express", pct: 65 },
            { name: "REST APIs", pct: 75 },
            { name: "Git & GitHub", pct: 80 },
            { name: "Testing (Jest, RTL)", pct: 60 },
            { name: "Web Performance", pct: 70 },
        ],
    },
];

const tools = [
    "Vite", "Tailwind CSS", "Framer Motion", "Figma", "Vercel", "Supabase", "React", "Lucide", "ESLint",
];

function SkillBar({ name, pct, delay }: { name: string, pct: number, delay: number}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-[var(--ink)]">{name}</span>
                <span className="text-xs font-bold font-mono text-[var(--ink-muted)]">{pct}%</span>
            </div>
            <div className="h-[3px] bg-[var(--border)] rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                    }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${pct}%` } : { width: 0 }}
                    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" ref={ref} className="bg-[var(--surface)] px-6 md:px-16 py-20 md:py-32">
            {/* Section header */}
            <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex items-baseline gap-5 mb-20"
            >
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                    03
                </span>
                <h2 className="font-black text-3xl md:text-5xl tracking-tight leading-none">
                    Skills
                </h2>
                <div className="flex-1 h-px bg-[var(--border)] ml-5" />
            </motion.div>

            {/* Skill bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-20">
                {skillGroups.map((group, gi) => (
                    <motion.div
                        key={group.title}
                        custom={gi * 0.15}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <div className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-7">
                            {group.title}
                        </div>
                        <div className="flex flex-col gap-5">
                            {group.skills.map((skill, si) => (
                                <SkillBar 
                                    key={skill.name}
                                    name={skill.name}
                                    pct={skill.pct}
                                    delay={gi * 0.1 + si * 0.08}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Tools cloud */}
            <motion.div
                custom={0.3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-6">
                    Tools & Platforms
                </div>
                <div className="flex flex-wrap gap-3">
                    {tools.map((tool) => (
                        <span
                            key={tool}
                            className="px-4 py-2 rounded-full bg-[var(--bg)] border border-[var(--border)] text-sm font-medium text-[var(--ink-muted)] hover:bg-[var(--ink)] hover:text-white hover:border-[var(--ink)] transition-all duration-200 cursor-default"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
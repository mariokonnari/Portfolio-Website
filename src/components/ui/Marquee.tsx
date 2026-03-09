"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const items = [
    "React", "TypeScript", "Next.js", "CSS Animations",
    "Web Performance", "Accessible UI", "Node.js", "REST & GraphQL",
    "Framer Motion", "Tailwind CSS",
];

export default function Marquee() {
    return (
        <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--accent)] py-4">
            <motion.div
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            >
                {/* Render items twice so it loops seamlessly */}
                {[...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-7 px-7 text-xs font-bold uppercase tracking-widest text-white whitespace-nowrap"
                    >
                        {item}
                        <span className="opacity-40 text-base">✦</span>
                    </span>
                ))}
            </motion.div>
        </div>
    )
}
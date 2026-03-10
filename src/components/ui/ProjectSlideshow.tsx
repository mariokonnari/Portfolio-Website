"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectSlideshow({ images, title }: { images: string[]; title: string }) {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % images.length);
    }, [images.length]);

    const prev = () => {
        setCurrent((c) => (c - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (paused || images.length <= 1) return;
        const timer = setInterval(next, 3000);
        return () => clearInterval(timer);
    }, [paused, next, images.length]);

    return (
        <div
            className="relative w-full h-full min-h-[260px] rounded-xl overflow-hidden bg-[var(--bg)] group"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit= {{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                >
                    <Image 
                        src={images[current]}
                        alt={`${title} screenshot ${current + 1}`}
                        fill
                        className="object-contain object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Arrows - visible on hover */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-[var(--ink)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-[var(--ink)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                    >
                        <ChevronRight size={16} />
                    </button>
                </>
            )}

            {/* Dot indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-1.5 rounded-full transition-all duration ${
                                i === current
                                    ? "w-4 bg-white"
                                    : "w-1.5 bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
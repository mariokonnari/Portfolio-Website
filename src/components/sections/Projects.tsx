"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={cn(
        "group relative bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-10",
        "hover:-translate-y-2 hover:shadow-2xl transition-all duration-300",
        project.featured && "col-span-2"
      )}
    >
      {project.featured && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-widest mb-5">
          ✦ Featured
        </div>
      )}

      <div className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-4">
        Project {project.num}
      </div>

      <h3 className="font-black text-2xl tracking-tight leading-tight mb-3">
        {project.title}
      </h3>

      <p className="text-sm font-light text-[var(--ink-muted)] leading-relaxed mb-7 max-w-lg">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-[var(--bg)] border border-[var(--border)] text-xs font-medium text-[var(--ink-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-[var(--accent)] transition-colors duration-200"
          >
            GitHub
            <ArrowUpRight size={14} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-[var(--accent)] transition-colors duration-200"
          >
            Live demo
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="bg-[var(--bg)] px-16 py-32">
      {/* Section header */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex items-baseline gap-5 mb-20"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
          02
        </span>
        <h2 className="font-black text-5xl tracking-tight leading-none">
          Projects
        </h2>
        <div className="flex-1 h-px bg-[var(--border)] ml-5" />
      </motion.div>

      <div className="grid grid-cols-2 gap-7">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
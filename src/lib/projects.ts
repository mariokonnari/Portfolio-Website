export type Project = {
    num: string;
    title: string;
    description: string;
    tags: string[];
    github?: string;
    live?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
    num: "01",
        title: "Project one",
        description:
            "A short description of what this project does, what problem it solves, and what you learned building it. Keep it to 2-3 sentences.",
        tags: ["React", "TypeScript", "Tailwind"],
        github: "https://github.com/marioskonnaris/project-one",
        live: "https://project-one.vercel.app",
        featured: true,
    },
    {
    num: "02",
    title: "Project Two",
    description:
      "A short description of what this project does, what problem it solves, and what you learned building it. Keep it to 2-3 sentences.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/marioskonnaris/project-two",
    },
    {
    num: "03",
    title: "Project Three",
    description:
      "A short description of what this project does, what problem it solves, and what you learned building it. Keep it to 2-3 sentences.",
    tags: ["React", "Firebase", "CSS Modules"],
    github: "https://github.com/marioskonnaris/project-three",
    live: "https://project-three.vercel.app",
    },
];
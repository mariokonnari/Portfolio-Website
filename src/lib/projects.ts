export type Project = {
    num: string;
    title: string;
    description: string;
    tags: string[];
    github?: string;
    live?: string;
    featured?: boolean;
    images: string[];
};

export const projects: Project[] = [
    {
    num: "01",
        title: "SaaS Dashboard with Auth + CRUD",
        description:
            "A full-stack SaaS dashboard that allows users to sign up, log in, and manage data in a PostgreSQL database hosted on Supabase. Includes role-based access (Admin/User), JWT authentication, and a modern frontend built with Vite.",
        tags: ["Vite","React", "TypeScript", "TailwindCSS", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Bcrypt"],
        github: "https://github.com/mariokonnari/SaaS-Dashboard-Auth-CRUD",
        live: "https://saasdashboarddemo.netlify.app/",
        featured: true,
        images: [
            "/projects/saas-dashboard/1.png",
            "/projects/saas-dashboard/2.png",
            "/projects/saas-dashboard/3.png",
            "/projects/saas-dashboard/4.png",
            "/projects/saas-dashboard/5.png",
            "/projects/saas-dashboard/6.png",
        ],
    },
    {
    num: "02",
    title: "AI Code Reviewer",
    description:
      "A powerful web application that provides instant, AI-powered code reviews using Google's Gemini API. Get expert-level feedback on security, performance, readability, testing, and general best practices.",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "AI Integration", "jsPDF"],
    github: "https://github.com/mariokonnari/AI-code-reviewer",
    live: "https://aicodereviewerdemo.vercel.app/",
    images: [
        "/projects/ai-code-reviewer/1.png",
        "/projects/ai-code-reviewer/2.png",
        "/projects/ai-code-reviewer/3.png",
        ],
    },
    {
    num: "03",
    title: "Amazon Clone",
    description:
      "A full-featured e-commerce web application inspired by Amazon, using React, TypeScript, Tailwind CSS and Redux Toolkit. Includes a fully functional Cart and the items are from the Fake Store REST API. ",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Vite", "REST API"],
    github: "https://github.com/mariokonnari/Amazon-Clone",
    live: "https://mariozon.vercel.app/",
    images: [
        "/projects/amazon-clone/1.png",
        "/projects/amazon-clone/2.png",
        "/projects/amazon-clone/3.png",
        "/projects/amazon-clone/4.png",
        ],
    },
];
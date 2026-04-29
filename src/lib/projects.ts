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
        title: "Frontend Interview Preparation App",
        description:
            "A collaborative interview preparation platform powered by AI. Built with a modern full-stack architecture featuring real-time collaboration, AI-generated questions, and comprehensive study materials for frontend engineering interviews.",
        tags: ["Vite", "React", "TypeScript", "Node.js", "Express", "Prisma", "Supabase", "PostgreSQL", "Gemini AI"],
        github: "https://github.com/mariokonnari/Interview-Prep",
        live: "https://intpreparation.netlify.app/",
        featured: true,
        images: [
            "/projects/interview-prep/Desktop.png",
            "/projects/interview-prep/AnswerQuestionDesktop.png",
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
        title: "E-Commerce SPA",
        description:
            "Single-page e-commerce application tackling shared cart and filter state across deeply nested components. Implements real-time product search via state lifting, dynamic routing, and a fully functional cart with per-item quantity controls backed by Redux Toolkit for predictable,centralised state management.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Vite", "REST API"],
        github: "https://github.com/mariokonnari/E-Commerce-SPA",
        live: "https://mariozon.vercel.app/",
        images: [
            "/projects/amazon-clone/1.png",
            "/projects/amazon-clone/2.png",
            "/projects/amazon-clone/3.png",
            "/projects/amazon-clone/4.png",
        ],
    },
    {
        num: "04",
        title: "SaaS Dashboard with Auth + CRUD",
        description:
            "A full-stack SaaS dashboard that allows users to sign up, log in, and manage data in a PostgreSQL database hosted on Supabase. Includes role-based access (Admin/User), JWT authentication, and a modern frontend built with Vite.",
        tags: ["Vite", "React", "TypeScript", "TailwindCSS", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Bcrypt"],
        github: "https://github.com/mariokonnari/SaaS-Dashboard-Auth-CRUD",
        live: "https://saasdashboarddemo.netlify.app/",
        images: [
            "/projects/saas-dashboard/1.png",
            "/projects/saas-dashboard/2.png",
            "/projects/saas-dashboard/3.png",
            "/projects/saas-dashboard/4.png",
            "/projects/saas-dashboard/5.png",
            "/projects/saas-dashboard/6.png",
            "/projects/saas-dashboard/7.png",
            "/projects/saas-dashboard/8.png",
            "/projects/saas-dashboard/9.png",
            "/projects/saas-dashboard/10.png",
            "/projects/saas-dashboard/11.png",
        ],
    },
];
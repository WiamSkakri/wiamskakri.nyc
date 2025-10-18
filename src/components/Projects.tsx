import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "Modern shopping experience with real-time inventory and seamless checkout.",
        tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
        link: "#",
        github: "#",
    },
    {
        title: "Task Management App",
        description: "Collaborative workspace with real-time updates and team analytics.",
        tech: ["TypeScript", "Next.js", "Prisma", "TailwindCSS"],
        link: "#",
        github: "#",
    },
    {
        title: "Portfolio Builder",
        description: "No-code solution for creatives to build stunning portfolio websites.",
        tech: ["React", "Firebase", "Framer Motion"],
        link: "#",
        github: "#",
    },
    {
        title: "Analytics Dashboard",
        description: "Real-time data visualization for business metrics and KPIs.",
        tech: ["Vue.js", "D3.js", "Express", "MongoDB"],
        link: "#",
        github: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center px-6 py-20">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-4xl md:text-6xl font-bold mb-16">
                    <span className="gradient-text">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group border border-border p-6 hover:gradient-border transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-0 h-1 gradient-bg group-hover:w-full transition-all duration-300" />

                            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-secondary text-sm font-medium rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.link}
                                    className="flex items-center gap-2 gradient-text hover:underline"
                                >
                                    <ExternalLink size={18} />
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 gradient-text hover:underline"
                                >
                                    <Github size={18} />
                                    <span>Code</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

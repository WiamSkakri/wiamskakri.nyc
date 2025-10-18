import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "XR-Potato - Divhacks (Win) 2025",
        description: "XRPotato is a decentralized platform for publishing research papers, enabling users to directly pay authors per paper using the XRP Ledger for transparent, low-fee transactions.",
        tech: ["React", "Node.js", "Blockchain", "PostgreSQL"],
        link: "https://xrpotato.nyc/",
        github: "https://github.com/WiamSkakri/XRPotato",
    },
    {
        title: "WoundWatch",
        description: "An AI-powered web application that helps assess wound images for infection.",
        tech: ["Python", "ML", "Prediction Models", "Grad-CAM"],
        github: "https://github.com/WiamSkakri/WoundWatch",
    },
    {
        title: "Sustainify - HackPrinceton Spring 2025",
        description: "Sustainify is a platform that helps individuals and organizations track, reduce, and offset their environmental impact through data-driven insights and actionable sustainability goals.",
        tech: ["HTML", "CSS", "JavaScript", "Python"],

        github: "https://github.com/WiamSkakri/Sustainify",
    },
    {
        title: "Mutual Fund Calculator - Goldman Sachs ELS",
        description: "",
        tech: ["Vue.js", "D3.js", "Express", "MongoDB"],

        github: "https://github.com/WiamSkakri/Mutual-Fund-Calculator",
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

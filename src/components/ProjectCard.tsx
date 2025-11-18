import { ExternalLink, Github } from "lucide-react";
import { Project } from "../types/project";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="group border border-border p-6 hover:gradient-border transition-all duration-300 relative overflow-hidden">
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
                {project.link && (
                    <a
                        href={project.link}
                        className="flex items-center gap-2 gradient-text hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                    </a>
                )}
                <a
                    href={project.github}
                    className="flex items-center gap-2 gradient-text hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github size={18} />
                    <span>Code</span>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;

import { Briefcase } from "lucide-react";
import type { Experience } from "@/types";

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <div className="group relative border border-border p-6 hover:gradient-border transition-all duration-300">
            <div className="absolute -left-3 top-6 w-6 h-6 gradient-bg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                    <Briefcase className="gradient-text" size={24} />
                </div>

                <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                        <p className="gradient-text font-medium">{experience.company}</p>
                        <span className="hidden md:inline text-muted-foreground">•</span>
                        <p className="text-muted-foreground">{experience.period}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;

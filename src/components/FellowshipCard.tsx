import { Award, ExternalLink } from "lucide-react";
import type { Fellowship } from "@/types";

interface FellowshipCardProps {
    fellowship: Fellowship;
}

const FellowshipCard = ({ fellowship }: FellowshipCardProps) => {
    return (
        <div className="group border border-border p-6 hover:gradient-border transition-all duration-300">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg flex-shrink-0">
                    <Award className="gradient-text" size={24} />
                </div>

                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        {fellowship.link ? (
                            <a
                                href={fellowship.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl font-semibold hover:gradient-text transition-colors inline-flex items-center gap-2"
                            >
                                {fellowship.title}
                                <ExternalLink className="gradient-text" size={20} />
                            </a>
                        ) : (
                            <h3 className="text-2xl font-semibold">{fellowship.title}</h3>
                        )}
                        <span className="gradient-text font-medium">{fellowship.year}</span>
                    </div>
                    <p className="text-lg mb-3 text-muted-foreground">{fellowship.organization}</p>
                    <p className="text-muted-foreground leading-relaxed">{fellowship.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FellowshipCard;

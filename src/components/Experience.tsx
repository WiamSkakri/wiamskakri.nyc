import { Briefcase } from "lucide-react";

const experiences = [
    {
        title: "Technical Product Manager",
        company: "Progressive Insurance Digital Twin",
        period: "Jan 2025 - May 2025",
        description: "Led cross-functional team as Technical PM to build Digital Home Twin product enabling homeowners to reduce insurance premiums through smart device monitoring and proactive home maintenance."
    },
    {
        title: "Machine Learning Product Intern",
        company: "Auxilium Health",
        period: "2025 Summer",
        description: "Conducted cross-functional stakeholder interviews (C-suite to researchers) and competitive analysis to define ML product strategy for biomaterials startup with no existing AI capabilities.",
    },
    {
        title: "Software Engineer Intern - ELS",
        company: "Goldman Sachs",
        period: "2024 - 2025",
        description: "Developed a mutual fund calculator to help clients understand the performance of their investments.",
    },

    {
        title: "Program Manager",
        company: "ThinkImpact Fellowship, Case Western Reserve University",
        period: "2025 - 2026",
        description: "Manage 12+ venture teams through product development lifecycle, coordinating mentors, resources, and weekly milestone tracking via centralized project management system.",

    },

    {
        title: "Machine Learning Researcher",
        company: "Professor Sanmukh Kuppannagari Lab, CWRU",
        period: "Jan 2024 - Present",
        description: "Secured $4,000 SOURCE grant to build optimization tooling for medical imaging ML pipelines, addressing energy waste in compute-intensive healthcare AI applications.",

    },
];

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen flex items-center px-6 py-20">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-4xl md:text-6xl font-bold mb-16">
                    <span className="gradient-text">Experience</span>
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative border border-border p-6 hover:gradient-border transition-all duration-300"
                        >
                            <div className="absolute -left-3 top-6 w-6 h-6 gradient-bg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary rounded-lg">
                                    <Briefcase className="gradient-text" size={24} />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                                        <p className="gradient-text font-medium">{exp.company}</p>
                                        <span className="hidden md:inline text-muted-foreground">•</span>
                                        <p className="text-muted-foreground">{exp.period}</p>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

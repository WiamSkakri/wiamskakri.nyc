import { Award, ExternalLink } from "lucide-react";

const fellowships = [
    {
        title: "Veale Snyder Fellowship",
        organization: "Veale Institute for Entrepreneurship, Case Western Reserve University",
        year: "2025-2026",
        description: "Global entrepreneurship program, Silicon Valley Track and Finland/Estonia Track.",
        link: "https://case.edu/entrepreneurship/fellowships/veale-snyder-fellowship-program ", // Add if available
    },
    {
        title: "ThinkImpact Fellowship",
        organization: "Weatherhead School of Management, Case Western Reserve University",
        year: "2024-2025",
        description: "A 10-week program focused on social entrepreneurship and impact investing. Iceland Track.",
        link: "https://case.edu/weatherhead/fowler/programs/thinkimpact", // Add if available
    },
    {
        title: "PRISE Fellowship",
        organization: "Flora Mather Center for Entrepreneurship, Case Western Reserve University",
        year: "2025",
        description: "A 10-week program focused on supporting women entrepreneurs.",
        link: "https://case.edu/entrepreneurship/fellowships/campus-fellowships", // Add if available
    },
];

const Fellowships = () => {
    return (
        <section id="fellowships" className="min-h-screen flex items-center px-6 py-20">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-4xl md:text-6xl font-bold mb-16">
                    <span className="gradient-text">Fellowships</span>
                </h2>

                <div className="space-y-8">
                    {fellowships.map((fellowship, index) => (
                        <div
                            key={index}
                            className="group border border-border p-6 hover:gradient-border transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary rounded-lg flex-shrink-0">
                                    <Award className="gradient-text" size={24} />
                                </div>

                                <div className="flex-1">
                                    <div className=" flex flex-col md:flex-row md:items-center md:justify-between mb-3">
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fellowships;

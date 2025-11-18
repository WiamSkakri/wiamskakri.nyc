import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/experiences";

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen flex items-center px-6 py-20">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-4xl md:text-6xl font-bold mb-16">
                    <span className="gradient-text">Experience</span>
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

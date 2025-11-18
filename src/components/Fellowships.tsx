import FellowshipCard from "./FellowshipCard";
import { fellowships } from "../data/fellowships";

const Fellowships = () => {
    return (
        <section id="fellowships" className="min-h-screen flex items-center px-6 py-20">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-4xl md:text-6xl font-bold mb-16">
                    <span className="gradient-text">Fellowships</span>
                </h2>

                <div className="space-y-8">
                    {fellowships.map((fellowship, index) => (
                        <FellowshipCard key={index} fellowship={fellowship} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fellowships;

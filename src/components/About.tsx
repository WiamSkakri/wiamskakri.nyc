import profileImage from "@/assets/profile.svg";

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center px-6 py-20">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            About <span className="gradient-text line-through decoration-white decoration-4">Me</span>
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                            <p>Who am I?</p>
                            <p>Great question I would love to tell you ...</p>
                            <p>But .</p>

                            <p>I don't quite really know.</p>

                            <p>Who am I?</p>

                            <p>
                                It's a question that grew louder when I left home—when people asked: Are you Black? African? Arab?
                                Middle Eastern? The labels never quite fit.
                            </p>

                            <p>
                                So I stopped trying to define myself by where I'm from, and started defining myself by what I push
                                myself to do.
                            </p>

                            <p>
                                I'm a BS/MS CS student at CWRU. A machine learning researcher under Professor Kuppannagari. A serial
                                hackathon winner. A runner aiming to complete all 7 World Marathon Majors.
                            </p>

                            <p>
                                My love for hackathons and marathons—and why I rally people to join me—is secretly related to this
                                question of identity. Maybe we discover who we really are at the edge of what we can push ourselves to
                                do.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={profileImage} alt="Profile illustration" className="w-full rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

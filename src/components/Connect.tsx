import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
    { icon: Mail, label: "Email", href: "mailto:wxs428@case,edu" },
    { icon: Github, label: "GitHub", href: "https://github.com/WiamSkakri" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/wiam-skakri/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/Skakri_Wiam" },
];

const Connect = () => {
    return (
        <section id="connect" className="min-h-screen flex items-center px-6 py-20">
            <div className="max-w-4xl mx-auto w-full text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                    Let's <span className="gradient-text">Connect</span>
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Have a project in mind or just want to chat?
                    I'm always open to discussing new opportunities and ideas.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {socials.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.href}
                                className="group flex flex-col items-center gap-3 p-6 border border-border hover:gradient-border transition-all duration-300"
                                aria-label={social.label}
                            >
                                <div className="p-4 bg-secondary rounded-full transition-colors">
                                    <Icon size={32} className="group-hover:gradient-text" />
                                </div>
                                <span className="text-sm font-medium">{social.label}</span>
                            </a>
                        );
                    })}
                </div>

                <div className="h-px w-32 mx-auto gradient-bg animate-glow-pulse" />

                <p className="mt-12 text-muted-foreground">
                    © 2025 Portfolio. Wiam Skakri. Living Legacy. Testing Limits.
                </p>
            </div>
        </section>
    );
};

export default Connect;

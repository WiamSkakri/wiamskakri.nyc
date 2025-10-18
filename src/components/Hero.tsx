import { ArrowDown } from "lucide-react";

const navigationLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Fellowships", href: "#fellowships" },
    { label: "Connect", href: "#connect" },
];

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
            {/* Central Content */}
            <div className="text-center space-y-6 animate-fade-in relative">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight">Wiam Skakri</h1>
                <p className="text-xl md:text-2xl text-muted-foreground">AI/ML Researcher | Entrepreneur | 'Product Manager'</p>
                <div className="h-1 w-24 mx-auto gradient-bg animate-glow-pulse" />

                {/* Floating Navigation Circles in Horizontal Line */}
                <div className="flex flex-wrap gap-4 justify-center pt-8">
                    {navigationLinks.map((link, index) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="w-24 h-24 rounded-full border border-border/50 backdrop-blur-sm
                         bg-transparent hover:gradient-bg
                         text-foreground hover:text-white transition-all duration-300 hover:scale-110
                         animate-float-subtle flex items-center justify-center text-sm font-medium"
                            style={{
                                animationDelay: `${index * 0.4}s`,
                                animationDuration: '10s',
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#about"
                className="absolute bottom-12 animate-bounce cursor-pointer hover:gradient-text transition-colors"
            >
                <ArrowDown size={32} />
            </a>
        </section>
    );
};

export default Hero;

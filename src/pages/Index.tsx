import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Fellowships from "@/components/Fellowships";
import Connect from "@/components/Connect";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
    return (
        <div className="bg-background text-foreground scroll-smooth">
            <ThemeToggle />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Fellowships />
            <Connect />
        </div>
    );
};

export default Index;

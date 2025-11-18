import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Fellowships from "@/components/Fellowships";
import Connect from "@/components/Connect";
import ThemeToggle from "@/components/ThemeToggle";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
    return (
        <div className="bg-background text-foreground scroll-smooth">
            <ThemeToggle />
            <ScrollToTop />
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

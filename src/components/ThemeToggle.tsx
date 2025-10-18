import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-6 right-6 z-50 p-3 transition-all duration-300 group"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="text-foreground group-hover:gradient-text transition-colors" size={24} />
            ) : (
                <Moon className="text-foreground group-hover:gradient-text transition-colors" size={24} />
            )}
        </button>
    );
};

export default ThemeToggle;

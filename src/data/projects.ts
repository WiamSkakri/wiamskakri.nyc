import { Project } from "../types/project";

export const projects: Project[] = [
    {
        title: "XR-Potato - Divhacks (Win) 2025",
        description: "XRPotato is a decentralized platform for publishing research papers, enabling users to directly pay authors per paper using the XRP Ledger for transparent, low-fee transactions.",
        tech: ["React", "Node.js", "Blockchain", "PostgreSQL"],
        link: "https://xrpotato.nyc/",
        github: "https://github.com/WiamSkakri/XRPotato",
        // Add your video file here
    },
    {
        title: "WoundWatch",
        description: "An AI-powered web application that helps assess wound images for infection.",
        tech: ["Python", "ML", "Prediction Models", "Grad-CAM"],
        github: "https://github.com/WiamSkakri/WoundWatch",
    },
    {
        title: "EcoTrace - HackPrinceton Spring 2025",
        description: "This is for HackPrinceton hackathonTrack your environmental impact, compete on global leaderboards, and get AI-powered sustainability advice. Features real-time carbon footprint monitoring, transaction-based eco-scoring via Knot API, interactive maps of sustainable places, and personalized recommendations from Google Gemini AI.",
        tech: ["Next.js", "React", "TypeScript", "OpenAI API", "SQLite"],
        link: "https://eco-trace-hack-princeton-hzh8.vercel.app/chat",
        github: "https://github.com/WiamSkakri/Sustainify",
        videoUrl: "/videos/Ecotrace-demo.mp4", // Add your video file here
    },
    {
        title: "Mutual Fund Calculator - Goldman Sachs ELS",
        description: "The Mutual Fund Calculator enables investors to model potential returns by simulating contribution schedules, compounding, and market performance over time.",
        tech: ["Spring Boot", "Angular", "PostgreSQL", "REST API", "TypeScript"],
        link: "https://invigorating-enthusiasm-production.up.railway.app/home",
        github: "https://github.com/WiamSkakri/Mutual-Fund-Calculator",
        videoUrl: "/videos/GS-ELS-MFC.mp4",
    },
];

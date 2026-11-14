import { EXPERIENCE } from "@/constant";
import { Code, Palette, Zap, Users, Calendar, Tag } from "lucide-react";
import { SiReact, SiSpringboot, SiTailwindcss, SiBootstrap, SiDocker, SiGit, SiMongodb, SiJavascript } from "react-icons/si";

export default function About() {
    const HIGHLIGHTS = [{
        icon: Code,
        title: "Clean Code",
        description: "Writing maintainable, scalable, and well-documented code",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Creating beautiful and intuitive user interfaces",
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Building fast, optimized applications for all devices",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working effectively with cross-functional teams",
    },
    ];

    const SKILLS = [
        { icon: SiReact, name: "React JS" },
        { icon: SiSpringboot, name: "Spring Boot" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiGit, name: "Version Control" },
        { icon: SiReact, name: "React Native" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: SiBootstrap, name: "Bootstrap" },
        { icon: SiDocker, name: "Docker" },
        { icon: SiMongodb, name: "MongoDB" },
    ];

    return (
        <section id="about" className="section-padding">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-slide-up">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        About{" "}
                        <span className="bg-clip-text text-gradient">
                            Me
                        </span>
                    </h2>
                    <p className="text-xl text-white max-w-3xl mx-auto">
                        Full-stack developer experienced in building modern web applications, passionate about creating impactful and efficient solutions.
                    </p>
                </div>

                { /* Experience and Highlights Sections side by side on large screens, stacked on smaller screens. */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                    { /* Experience Timeline Section */}
                    <div className="animate-slide-up">
                        <h2 className="text-3xl font-semibold mb-6 text-center">
                            Professional{" "}
                            <span className="bg-clip-text text-gradient">
                                Experience
                            </span>
                        </h2>
                        <div className="timeline">
                            {EXPERIENCE.map((exp, index) => (
                                <div key={index} className="timeline-item mb-6">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content bg-card">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                                            <h5 className="text-lg font-semibold mb-1">{exp.role}</h5>
                                            <span className="text-sm badge-custom-small px-3 py-1 rounded-full max-w-[120px] sm:max-w-full truncate">{exp.jobType}</span>
                                            <span className="text-sm badge-custom-small px-3 py-1 rounded-full w-fit whitespace-nowrap">{exp.timeline}</span>
                                        </div>
                                        <h6 className="text-gradient text-lg font-semibold mb-1">{exp.company}</h6>
                                        <p className="text-white/90 text-sm mb-3 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.techStack.map((tech, index) => (
                                                <span key={index} className="badge-custom-small">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    { /* Highlights Section */}
                    <div className="animate-scale-in">
                        <h2 className="text-3xl font-semibold mb-6 text-center">
                            Key{" "}
                            <span className="bg-clip-text text-gradient">
                                Highlights
                            </span>
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {HIGHLIGHTS.map((item, index) => (
                                <div key={index} className="custom-card h-50 w-full">
                                    <div className="p-6 text-center">
                                        <item.icon className="text-red-700 mx-auto mb-4" size={32} />
                                        <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                                        <p className="text-white/90 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                { /* Skills Section */}
                <div className="animate-slide-up text-center">
                    <h3 className="text-3xl font-semibold mb-6">Technologies I Work With</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {SKILLS.map((skill, index) => (
                            <span key={index} className="badge-custom" >
                                <skill.icon className="text-white" size={16} />
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
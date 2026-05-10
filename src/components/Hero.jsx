import { ArrowRight } from "lucide-react";
import { GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK } from "../constant";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import heroImage from "../assets/hero-image.jpg";

export default function Hero() {
    return (
        <section id="home" className="custom-hero relative flex items-center justify-center h-screen">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            ></div>

            {/* Hero Content */}
            <div className="hero-content relative text-center px-4 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    <span className="text-gradient">Karthick</span>
                    <br />
                    Nathan
                </h1>

                <p className="text-lg text-white mb-5 max-w-2xl mx-auto">
                    Crafting exceptional digital experiences with modern technologies.
                    <br />
                    Specializing in React, Spring Boot, and cloud architecture.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
                    <a className="btn-custom text-white px-6 py-3 rounded-lg text-lg flex items-center hover:bg-red-700 transition"
                        href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                    >
                        Check out Resume
                        <ArrowRight className="ml-2" size={16} />
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
                    {/* Social Buttons */}
                    <div className="flex gap-4">
                        <a className="btn-custom-outline" href={GITHUB_LINK}>
                            <SiGithub size={20} />
                        </a>
                        <a className="btn-custom-outline" href={INSTAGRAM_LINK}>
                            <SiInstagram size={20} />
                        </a>
                        <a className="btn-custom-outline" href={LINKEDIN_LINK}>
                            <SiLinkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
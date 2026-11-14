import { memo } from "react";
import { ExternalLink, ArrowUpRight, CheckCircle2, Clock3, Terminal } from "lucide-react";
import {
  SiReact, SiSpringboot, SiTailwindcss, SiBootstrap,
  SiDocker, SiGit, SiJavascript, SiGithub,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Badge } from "./ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  BOOTSTRAP_ICON_COLOR,
  DOCKER_ICON_COLOR,
  GITHUB_LINK,
  JAVASCRIPT_ICON_COLOR,
  JAVA_ICON_COLOR,
  LINUX_ICON_COLOR,
  MOVIES_APP_LIVE_URL,
  MOVIES_APP_REPO_URL,
  REACT_ICON_COLOR,
  SERVER_PILOT_REPO_URL,
  SPRING_BOOT_ICON_COLOR,
  SSH_ICON_COLOR,
  TAILWIND_ICON_COLOR,
  VERSION_CONTROL_ICON_COLOR,
} from "@/constant";
import movies_app from "../assets/movies_app_1.png";
import server_pilot_1 from "../assets/server_pilot_1.png";

// Shared technology stack defined once outside the component to avoid re-creation on every render.
const TECH_STACK = [
  { icon: SiReact, name: "React JS", color: REACT_ICON_COLOR },
  { icon: SiSpringboot, name: "Spring Boot", color: SPRING_BOOT_ICON_COLOR },
  { icon: SiJavascript, name: "JavaScript", color: JAVASCRIPT_ICON_COLOR },
  { icon: SiGit, name: "Version Control", color: VERSION_CONTROL_ICON_COLOR },
  { icon: SiReact, name: "React Native", color: REACT_ICON_COLOR },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: TAILWIND_ICON_COLOR },
  { icon: SiBootstrap, name: "Bootstrap", color: BOOTSTRAP_ICON_COLOR },
  { icon: SiDocker, name: "Docker", color: DOCKER_ICON_COLOR },
];

// Projects data defined outside the component to prevent re-creation on every render.
const PROJECTS = [
  {
    id: 1,
    title: "CineVault - Movies App",
    description:
      "Full-stack movie discovery app with user authentication, personalized watchlists, and real-time reviews. Users can browse trending movies, search by genre, and receive tailored recommendations based on their viewing history. It Uses TMDB API for movie data and integrations.",
    image: movies_app,
    technologies: [{
      icon: SiReact, name: "React JS", color: REACT_ICON_COLOR,
    }, {
      icon: SiSpringboot, name: "Spring Boot", color: SPRING_BOOT_ICON_COLOR,
    }, {
      icon: SiJavascript, name: "JavaScript", color: JAVASCRIPT_ICON_COLOR
    }, {
      icon: SiGit, name: "Version Control", color: VERSION_CONTROL_ICON_COLOR
    }, {
      icon: SiTailwindcss, name: "Tailwind CSS", color: TAILWIND_ICON_COLOR
    },],
    liveUrl: MOVIES_APP_LIVE_URL,
    githubUrl: MOVIES_APP_REPO_URL,
    isCompleted: true,
  },
    {
    id: 2,
    title: "ServerPilot - Linux Server Management",
    description:
      "ServerPilot is a web-based tool for managing Linux servers over SSH. Connect to your servers using a password or private key, monitor live system metrics like CPU, RAM, and disk usage, and manage running processes and service, all from a clean browser interface. Built with React on the frontend and Spring Boot on the backend.",
    image: server_pilot_1,
    technologies: [
      { icon: SiReact, name: "React JS", color: REACT_ICON_COLOR },
      { icon: SiSpringboot, name: "Spring Boot", color: SPRING_BOOT_ICON_COLOR },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: TAILWIND_ICON_COLOR },
      { icon: SiJavascript, name: "JavaScript", color: JAVASCRIPT_ICON_COLOR },
      { icon: FaJava, name: "Java", color: JAVA_ICON_COLOR },
      { icon: SiLinux, name: "Linux", color: LINUX_ICON_COLOR },
      { icon: Terminal, name: "SSH", color: SSH_ICON_COLOR },
      { icon: SiGit, name: "Version Control", color: VERSION_CONTROL_ICON_COLOR },
    ],
    liveUrl: "#",
    githubUrl: SERVER_PILOT_REPO_URL,
    isCompleted: false,
  },
];

// Isolated tech badge using shadcn Badge + shadcn Tooltip for accessible hover labels.
const TechBadge = memo(({ icon: Icon, name, color }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      {/* shadcn Badge with secondary variant for a subtle, consistent pill style. */}
      <Badge
        variant="secondary"
        className="flex items-center gap-1.5 px-2 py-1 cursor-default bg-white/5 hover:bg-[var(--custom-red)]/20 text-gray-300 border border-white/10 hover:border-[var(--custom-red)]/50 transition-colors duration-200"
      >
        <Icon className="h-3.5 w-3.5" style={{ color }} aria-hidden="true" />
        <span className="text-xs">{name}</span>
      </Badge>
    </TooltipTrigger>
  </Tooltip>
));

// Isolated project card using shadcn Card as the base structure.
const ProjectCard = memo(({ project, index }) => (
  <Card
    className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_20px_45px_rgba(0,0,0,0.45),0_0_20px_rgba(229,9,20,0.28)] hover:border-[var(--custom-red)] transition-all duration-500 hover:-translate-y-1 flex flex-col"
    // Stagger entrance animation delay for a cascade reveal effect.
    style={{ animationDelay: `${index * 0.15}s` }}
  >
    {/* Status badge pinned to the top-right corner of the card image. */}
    <div className="absolute top-3 right-3 z-10">
      <Badge className={"flex items-center gap-1 px-2 py-0.5 border bg-[var(--custom-red)] text-white"}>
        {project.isCompleted ? (
          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        {project.isCompleted ? "Completed" : "In Progress"}
      </Badge>
    </div>

    {/* Image section with overlay action buttons revealed on group hover. */}
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
        // Defer off-screen image loading to improve initial page performance.
        loading="lazy"
        decoding="async"
      />

      {/* Dark gradient overlay that intensifies on hover to make buttons readable. */}
      <div className="absolute inset-0 bg-black/45 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap items-center justify-center gap-2 px-3">
        {/* shadcn Button variants used for consistent, accessible CTAs. */}
        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-[var(--custom-red)]/15 border-[var(--custom-red)]/50 text-white hover:bg-[var(--custom-red)] hover:text-white backdrop-blur-sm transition-all duration-200"
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink className="h-4 w-4 mr-1.5" aria-hidden="true" />
            Live Demo
          </a>
        </Button>

        <Button
          asChild
          size="lg"
          className="bg-[var(--custom-red)] text-white hover:bg-[var(--custom-red-hover)] transition-all duration-200"
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title} on GitHub`}
          >
            <SiGithub className="h-4 w-4 mr-1.5" aria-hidden="true" />
            Code
          </a>
        </Button>
      </div>
    </div>

    {/* Card header with title and description using shadcn CardHeader. */}
    <CardHeader className="pb-2 pt-4 px-5">
      <CardTitle className="text-lg font-semibold text-white tracking-tight">
        {project.title}
      </CardTitle>
      <CardDescription className="text-gray-400 text-sm leading-relaxed break-words">
        {project.description}
      </CardDescription>
    </CardHeader>

    {/* Thin separator between description and tech badges for visual breathing room. */}
    <Separator className="bg-white/5 mx-5" />

    {/* Card footer holds tech stack badges and fills remaining height. */}
    <CardFooter className="px-5 py-4 mt-auto">
      <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          // Use tech name as key instead of index to avoid keying issues on reorder.
          <TechBadge key={tech.name} icon={tech.icon} name={tech.name} color={tech.color} />
        ))}
      </div>
    </CardFooter>
  </Card>
));

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with animated entrance and gradient keyword. */}
        <div className="text-center mb-14 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Featured{" "}
            <span className="bg-clip-text text-transparent text-gradient">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work and creative solutions to complex problems.
          </p>
        </div>

        {/* Responsive 3-column project grid. */}
        <TooltipProvider delayDuration={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </TooltipProvider>

        {/* CTA section to view all work on GitHub. */}
        <div className="text-center mt-14 animate-slide-up">
          <Button
            asChild
            size="lg"
            className="bg-[var(--custom-red)] text-white hover:bg-[var(--custom-red-hover)] transition-all duration-200 gap-2"
          >
            <a href={GITHUB_LINK} aria-label="View all projects on GitHub">
              <SiGithub className="h-4 w-4" aria-hidden="true" />
              View All Projects on GitHub
              {/* Arrow icon subtly indicates outbound navigation. */}
              <ArrowUpRight className="h-4 w-4 opacity-80" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
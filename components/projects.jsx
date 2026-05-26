"use client";

import { ExternalLink, Github, Server, ArrowRight, Layers } from "lucide-react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import Reveal from "../components/ui/reveal"; // ⭐ ADD REVEAL

// Tech Icons
const techIcons = {
  React: "/React-icon.png",
  "Next.js": "/next.png",
  "Tailwind CSS": "/tailwind.png",
  "Node.js": "/node.png",
  MongoDB: "/mongodb.png",
  JavaScript: "/javascript.png",
  CSS: "/CSS3_logo.png",
  Express: "/expressjs.svg",
};

const projects = [
  {
    title: "Portfolio Website",
    image: "/portfolio.png",
    category: "Web Apps",
    liveUrl: "https://sneha-wani.netlify.app/",
    githubUrl: "https://github.com/sneha9504/Portfolio",

    metric: "Responsive UI",

    stack: ["Next.js", "Tailwind CSS"],

    bullets: [
      "Designed reusable UI components with Tailwind + custom theme.",
      "Implemented smooth animations using Framer Motion & CSS.",
      "Optimized layout for mobile-first performance.",
      "Structured pages using a scalable folder architecture.",
    ],

    impact: "Fully responsive, high-performance personal branding platform.",
  },

  {
    title: "Jira Dashboard Clone",
    image: "/jira-dashboard.png",
    category: "Web Apps",
    liveUrl: "https://jira-mock-demo.netlify.app/",
    githubUrl: "https://github.com/sneha9504/Jira-mock-demo",

    metric: "Drag & Drop",

    stack: ["React", "Node.js", "MongoDB", "Express"],

    bullets: [
      "Implemented drag-and-drop Kanban board using react-beautiful-dnd.",
      "Developed REST APIs for tasks, boards & authentication.",
      "Integrated filters, labels, sorting & priority-based UI.",
      "Used Redux Toolkit for scalable global state management.",
    ],

    impact: "Improved workflow productivity with fluid task interactions.",
  },

  {
    title: "Quiz App",
    image: "/quiz-app.png",
    category: "Web Apps",
    liveUrl: "https://quiz-app-sw.netlify.app/",
    githubUrl: "https://github.com/sneha9504/Quiz-App",

    metric: "Instant Score",

    stack: ["React", "JavaScript", "CSS"],

    bullets: [
      "Developed category-based quiz engine with dynamic questions.",
      "Built animated transitions for a smooth quiz experience.",
      "Implemented score calculator with instant evaluation.",
      "Optimized UI responsiveness for all screen sizes.",
    ],

    impact: "Interactive learning experience with real-time scoring.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <Reveal effect="fade-up">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Layers size={18} />
              <span className="text-sm font-medium">Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
              Selected Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A curated collection of my best web applications, showcasing problem-solving,
              UI engineering, and full-stack development.
            </p>
          </div>
        </Reveal>

        {/* PROJECTS LIST */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <Reveal key={project.title} effect="fade-up">
              <div
                className="group grid md:grid-cols-2 rounded-3xl bg-card border border-border 
                overflow-hidden hover:shadow-2xl hover:border-primary/40 transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Metric */}
                  <div
                    className="
                      absolute top-4 left-4 px-3 py-1.5 text-xs font-medium rounded-full
                      bg-background/80 backdrop-blur-md border border-border flex items-center gap-1.5
                    "
                  >
                    <Server size={12} className="text-primary" />
                    {project.metric}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 flex flex-col justify-between space-y-6">

                  {/* TITLE + BULLETS */}
                  <div className="space-y-4">
                    <p className="text-xs tracking-wide uppercase text-primary font-medium">
                      {project.category}
                    </p>

                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* TECH ICONS */}
                    <div className="flex gap-3 flex-wrap pt-1">
                      {project.stack.map((tech) => (
                        <div key={tech} className="w-8 h-8 rounded-md border p-1 bg-card flex items-center justify-center">
                          <Image
                            src={techIcons[tech]}
                            alt={tech}
                            width={28}
                            height={28}
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    {/* BULLETS */}
                    <ul className="list-disc ml-6 text-muted-foreground space-y-2 text-[15px] leading-relaxed pt-3">
                      {project.bullets.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    {/* IMPACT */}
                    <p className="text-sm font-medium text-primary pt-4">
                      Impact: <span className="text-muted-foreground">{project.impact}</span>
                    </p>
                  </div>

                  {/* LINKS */}
                  <div className="flex gap-6 pt-4 border-t border-border">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-all"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* FOOTER BUTTON */}
        <Reveal effect="fade-up">
          <div className="text-center mt-16">
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full px-8 text-muted-foreground hover:text-primary hover:bg-primary/5 group"
              onClick={() =>
                window.open("https://github.com/sneha9504", "_blank")
              }
            >
              View All on GitHub
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

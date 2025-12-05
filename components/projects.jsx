"use client";

import { ExternalLink, Github, Server, ArrowRight, Layers } from "lucide-react";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio showcasing projects, skills, and certifications — designed with elegant UI components and smooth animations.",
    image: "/portfolio.png",
    category: "Web Apps",
    tags: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://sneha-wani.netlify.app/",
    githubUrl: "https://github.com/sneha9504/Portfolio",
    metrics: "Responsive UI",
  },
  {
    title: "Jira Dashboard Clone",
    description:
      "A complete task management dashboard inspired by Jira — featuring Kanban boards, drag-and-drop tasks, labels, filters, and role-based workflows.",
    image: "/jira-dashboard.png",
    category: "Web Apps",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    liveUrl: "https://jira-mock-demo.netlify.app/",
    githubUrl: "https://github.com/sneha9504/Jira-mock-demo",
    metrics: "Drag & Drop",
  },
  {
    title: "Quiz App",
    description:
      "A clean and interactive quiz web app offering category-based quizzes, instant scoring, transitions, and smooth animations.",
    image: "/quiz-app.png",
    category: "Web Apps",
    tags: ["React", "JavaScript", "CSS"],
    liveUrl: "https://quiz-app-sw.netlify.app/",
    githubUrl: "https://github.com/sneha9504/Quiz-App",
    metrics: "Instant Score",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Layers size={18} />
            <span className="text-sm font-medium">Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of web applications that highlight my skills in UI,
            responsive design, frontend engineering, and clean development practices.
          </p>
        </div>

        {/* GRID — ONE CARD PER ROW */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group grid md:grid-cols-2 rounded-3xl bg-card border border-border overflow-hidden hover:shadow-2xl hover:border-primary/40 transition-all duration-500"
            >
              {/* IMAGE SECTION */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Metric Badge */}
                <div
                  className="
                  absolute top-4 left-4 px-3 py-1.5 text-xs font-medium rounded-full
                  bg-background/80 backdrop-blur-md border border-border flex items-center gap-1.5
                "
                >
                  <Server size={12} className="text-primary" />
                  {project.metrics}
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <p className="text-xs tracking-wide uppercase text-primary font-medium">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex gap-6 pt-4 border-t border-border">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="
                    inline-flex items-center gap-2 text-sm font-medium text-foreground
                    hover:text-primary transition-all
                  "
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="
                    inline-flex items-center gap-2 text-sm font-medium text-muted-foreground
                    hover:text-primary transition-all
                  "
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
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
      </div>
    </section>
  );
}

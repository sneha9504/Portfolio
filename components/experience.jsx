"use client";

import { Briefcase, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "../components/ui/reveal"; // Reveal component

const experiences = [
  {
    role: "Software Development Intern — MERN Stack",
    company: "TechnoHacks Solutions Pvt. Ltd.",
    location: "Remote",
    period: "Jan 2025 — Feb 2025",
    logo: "/technohacks.png",
    certification:
      "https://drive.google.com/file/d/1edSivFrHyrErv5EyP_3NIqZq1m18j842/view?usp=drive_link",
    description: [
      "Developed full-stack features using React, Node.js, Express & MongoDB.",
      "Built and tested REST APIs improving backend reliability.",
      "Optimized UI performance & reusable component structure.",
      "Participated in debugging, code reviews & sprint meetings.",
      "Followed Git-based workflows for collaborative development.",
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Git"],
  },

  {
    role: "Web Development Intern",
    company: "Web Planet",
    location: "Jalgaon",
    period: "Jul 2022 — Aug 2022",
    logo: "/webplanet.png",
    certification:
      "https://drive.google.com/file/d/1ecwyanFl9XeM8B77Bl4zw7lhRYNvG4f8/view?usp=drive_link",
    description: [
      "Created responsive and mobile-friendly UIs.",
      "Improved layout consistency and site performance.",
      "Ensured cross-browser compatibility.",
      "Collaborated with designers on UI improvements.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-secondary/10 py-20 md:py-32 backdrop-blur-sm">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <Reveal effect="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                bg-primary/10 text-primary font-semibold tracking-wide border border-primary/20 shadow-sm">
                <Briefcase size={18} />
                <span className="text-base">Experience</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl">
                My Professional Journey
              </h2>
            </div>

            <p className="text-muted-foreground max-w-md leading-relaxed text-lg">
              Hands-on experience building scalable, high-quality digital experiences.
            </p>
          </div>
        </Reveal>

        {/* EXPERIENCE TIMELINE */}
        <div className="relative">

          {/* MOVING VERTICAL LINE */}
          <div className="absolute left-0 md:left-1/3 top-0 bottom-0 w-[2px]
            bg-gradient-to-b from-transparent via-primary/40 to-transparent
            md:-translate-x-1/2 overflow-hidden">
            <div className="animate-scroll-glow absolute inset-x-0 h-32 bg-primary/70 blur-xl"></div>
          </div>

          {/* Glow animation */}
          <style>
            {`
              @keyframes scrollGlow {
                0% { transform: translateY(-120%); }
                100% { transform: translateY(220%); }
              }
              .animate-scroll-glow {
                animation: scrollGlow 5s linear infinite;
              }
            `}
          </style>

          {/* CARDS */}
          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <Reveal key={i} effect="fade-up">
                <div className="relative grid md:grid-cols-2 gap-1">
                  
                  {/* LEFT → PERIOD ALWAYS */}
                  <div className="hidden md:flex pl-50  items-start justify-start ">
                    <span className="inline-block px-4 py-2  rounded-full text-sm font-medium 
                      bg-primary/10 text-primary border border-primary/20">
                      {exp.period}
                    </span>
                  </div>

                  {/* GLOW DOT */}
                  <div
                    className="absolute left-0 md:left-1/3 top-2 w-5 h-5 
                      -translate-x-1/2 rounded-full bg-primary border-4 border-background 
                      shadow-primary/50 shadow-[0_0_18px] animate-pulse"
                  />



                  {/* RIGHT → CARD ALWAYS */}
                  <div className="ml-8 md:ml-0 md:pl-10 ">
                    <div className="group p-8 rounded-3xl bg-card border border-border
                      hover:border-primary/40 hover:shadow-xl  hover:shadow-primary/10 
                      transition-all duration-500">

                      {/* LOGO */}
                      <Reveal effect="scale-up">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-14 h-14 object-contain mb-4 opacity-90 group-hover:opacity-100 transition"
                        />
                      </Reveal>

                      {/* Mobile Date */}
                      <span className="md:hidden inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 
                        bg-primary/10 text-primary border border-primary/20">
                        {exp.period}
                      </span>

                      {/* ROLE */}
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>

                      {/* Company + Location */}
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-primary">•</span>
                        <span className="flex items-center gap-1 text-sm">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>

                      {/* BULLETS */}
                      <ul className="list-disc ml-5 mt-4 text-muted-foreground space-y-2 text-[15px] leading-relaxed">
                        {exp.description.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>

                      {/* SKILLS */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium rounded-full
                              bg-primary/10 text-primary border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* CERTIFICATION */}
                      {exp.certification && (
                        <a
                          href={exp.certification}
                          target="_blank"
                          className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                          View Certification
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RESUME CTA */}
        <Reveal effect="fade-up">
          <div className="text-center mt-20">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 
                transition-all duration-300 font-medium text-lg"
            >
              View Full Resume
              <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

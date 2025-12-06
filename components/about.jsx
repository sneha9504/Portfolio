"use client"

import { Server, Code2, Zap, Layers, Cpu, Sparkles, Rocket, Award, GitBranch } from "lucide-react"
import Reveal from "../components/ui/reveal"   // 👈 added

const stats = [
  { icon: Code2, value: "10+", label: "Projects", sub: "End-to-end builds" },
  { icon: Zap, value: "3x", label: "Performance Boost", sub: "UI/UX optimization" },
  { icon: Rocket, value: "40+", label: "Commits/Month", sub: "Consistency & growth" },
  { icon: Sparkles, value: "100%", label: "Passion", sub: "Quality-focused coding" },
]

export default function About() {
  return (
    <Reveal>   {/* 👈 REVEAL EFFECT WRAPPER */}

      <section id="about" className="relative py-18 md:py-20">

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Section Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2  mb-5 rounded-full 
              bg-primary/10 text-primary shadow-sm backdrop-blur-sm
              border border-primary/20 w-fit">
            <Sparkles size={16} />
            <span className="text-base font-semibold tracking-wide">
              About Me
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-4xl">
            I build clean, fast & user-first digital products with engineering discipline.
          </h2>

          {/* -------- DESCRIPTION + HIGHLIGHTS -------- */}
          <div className="mt-12 grid lg:grid-cols-2 gap-12">

            {/* LEFT */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl text-justify">

              <p>
                I’m <span className="text-foreground font-semibold">Sneha Wani</span>, a Frontend and MERN Stack Developer focused on crafting
                fast, accessible, and visually polished web experiences. I combine thoughtful UI engineering with
                practical full-stack development to deliver interfaces that feel effortless and reliable.
              </p>

              <p>
                I prioritize maintainable code, scalable architecture, and clear product thinking. My core stack—
                React, Next.js, Node.js, and MongoDB—helps me build modern applications that are structured,
                efficient, and easy to evolve.
              </p>

              <p>
                With a strong interest in UI/UX foundations, performance tuning, and AI-assisted workflows,
                I aim to create digital experiences that look refined, respond instantly, and genuinely solve problems.
              </p>

            </div>

            {/* RIGHT */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 shadow-sm backdrop-blur-sm max-w-md lg:ml-auto">
              <h3 className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
                <Award size={16} className="text-primary" />
                Highlights
              </h3>

              <ul className="space-y-3 text-sm text-muted-foreground">

                <li className="flex gap-2 items-start">
                  <GitBranch size={14} className="text-primary mt-1" />
                  Solid understanding of modern frontend architecture & reusable component systems.
                </li>

                <li className="flex gap-2 items-start">
                  <GitBranch size={14} className="text-primary mt-1" />
                  Experience building full-stack apps with clean UI, structured APIs & stable deployments.
                </li>

                <li className="flex gap-2 items-start">
                  <GitBranch size={14} className="text-primary mt-1" />
                  Strong focus on performance, accessibility & user-centric development.
                </li>

                <li className="flex gap-2 items-start">
                  <GitBranch size={14} className="text-primary mt-1" />
                  Continuous learner—improving through real projects & AI-powered workflows.
                </li>

              </ul>
            </div>
          </div>

          {/* -------- STATS -------- */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  p-5 rounded-xl bg-card border border-border
                  hover:border-primary/50 transition-all duration-300
                  hover:shadow-md hover:shadow-primary/10
                  flex flex-col gap-1
                "
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={18} />
                  </div>

                  <p className="text-2xl font-bold text-foreground leading-none">
                    {item.value}
                  </p>
                </div>

                <p className="text-sm font-medium text-primary mt-1 leading-none">
                  {item.label}
                </p>

                <p className="text-xs text-muted-foreground mt-1 leading-snug">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </Reveal>
  )
}

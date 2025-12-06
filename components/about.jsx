"use client"

import { Server, Code2, Zap, Layers, Cpu, Sparkles, GitBranch, Rocket } from "lucide-react"

const stats = [
  { icon: Code2, value: "10+", label: "Projects", sub: "End-to-end builds" },
  { icon: Zap, value: "3x", label: "Performance Boost", sub: "UI/UX optimizations" },
  { icon: Server, value: "40+", label: "Commits / Month", sub: "Consistent learning" },
  { icon: Rocket, value: "100%", label: "Passion", sub: "Quality-driven" },
]

const skillGroups = [
  {
    title: "Frontend",
    icon: Sparkles,
    skills: "React, Next.js, Tailwind CSS, UI Architecture",
  },
  {
    title: "Backend",
    icon: Server,
    skills: "Node.js, Express.js, REST APIs",
  },
  {
    title: "Databases",
    icon: Layers,
    skills: "MongoDB, Firebase, SQL Basics",
  },
  {
    title: "Tools & Workflow",
    icon: Cpu,
    skills: "Git, GitHub, VSCode, AI-assisted dev",
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Label */}
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
          ABOUT ME
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl">
          Crafting clean, fast & user-first digital experiences.
        </h2>

        {/* Intro */}
        <div className="mt-8 space-y-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          <p>
            I’m <span className="text-foreground font-semibold">Sneha Wani</span>, a Frontend & MERN Stack Developer who enjoys creating 
            modern, accessible, and intuitive web experiences. I specialize in building 
            clean UI, seamless interactions, and efficient full-stack functionalities.
          </p>

          <p>
            As a fresher, I focus on writing maintainable code, learning industry best 
            practices, and building scalable interfaces with React, Next.js, Node.js, 
            and MongoDB. My goal is to blend great engineering with meaningful user experience.
          </p>

          <p>
            I love exploring design systems, animations, tech workflows, and performance-oriented development 
            to build software that feels polished, delightful, and professional.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all shadow-sm"
            >
              <div className="p-2 w-fit rounded-xl bg-primary/10 text-primary mb-3">
                <item.icon size={20} />
              </div>
              <p className="text-3xl font-bold text-foreground">{item.value}</p>
              <p className="text-sm font-medium text-primary">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-16 p-8 rounded-3xl bg-foreground/[0.02] border border-border backdrop-blur">
          <h3 className="text-lg font-semibold text-foreground mb-6">Skills & Specialities</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <group.icon size={18} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{group.title}</p>
                  <p className="text-sm text-muted-foreground">{group.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

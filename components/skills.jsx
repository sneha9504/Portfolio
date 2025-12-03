"use client"

import { useState } from "react"
import { Code2, Palette, Database, Layers, Sparkles } from "lucide-react"

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: Code2,
    color: "from-primary to-accent",
    skills: [
      { name: "React", logo: "/public/skills/React-icon.png" },
      { name: "Next.js", logo: "/skills/nextjs.svg" },
      { name: "JavaScript", logo: "/skills/js.svg" },
      { name: "TypeScript", logo: "/skills/ts.svg" },
      { name: "Tailwind CSS", logo: "/skills/tailwind.svg" },
      { name: "HTML5", logo: "/skills/html.svg" },
      { name: "CSS3", logo: "/skills/css.svg" },
    ],
  },

  {
    id: "design",
    name: "Design & UI/UX",
    icon: Palette,
    color: "from-accent to-chart-3",
    skills: [
      { name: "Figma", logo: "/skills/figma.svg" },
      { name: "Adobe XD", logo: "/skills/xd.svg" },
      { name: "UI Design", logo: "/skills/ui.svg" },
      { name: "Wireframing", logo: "/skills/wireframe.svg" },
    ],
  },

  {
    id: "backend",
    name: "Backend & Database",
    icon: Database,
    color: "from-chart-3 to-chart-5",
    skills: [
      { name: "Node.js", logo: "/skills/node.svg" },
      { name: "Express", logo: "/skills/express.svg" },
      { name: "MongoDB", logo: "/skills/mongo.svg" },
      { name: "PostgreSQL", logo: "/skills/postgres.svg" },
      { name: "REST APIs", logo: "/skills/api.svg" },
    ],
  },

  {
    id: "tools",
    name: "Tools & Workflow",
    icon: Layers,
    color: "from-chart-5 to-primary",
    skills: [
      { name: "Git", logo: "/skills/git.svg" },
      { name: "GitHub", logo: "/skills/github.svg" },
      { name: "VS Code", logo: "/skills/vscode.svg" },
      { name: "Docker", logo: "/skills/docker.svg" },
      { name: "Postman", logo: "/skills/postman.svg" },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles size={16} />
            <span>My Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tools & technologies I work with every day.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all
                ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border"
                }`}
            >
              <category.icon size={18} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activeSkills?.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg font-medium text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

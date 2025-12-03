"use client";

import { useState } from "react";
import {
  Code2,
  Database,
  Layers,
  Sparkles,
} from "lucide-react";

const aiTools = [
  { name: "ChatGPT", logo: "/chatgpt.png" },
  { name: "Gemini", logo: "/gemini.jpg" },
  { name: "Claude", logo: "/claude.png" },
  { name: "Grok", logo: "/grok.png" },
  { name: "Perplexity", logo: "/perplexity.png" },
];

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React", logo: "/React-icon.png" },
      { name: "Next.js", logo: "/next.png" },
      { name: "JavaScript", logo: "/javascript.png" },
      { name: "Tailwind CSS", logo: "/tailwind.png" },
      { name: "HTML5", logo: "/html5.png" },
      { name: "CSS3", logo: "/CSS3_logo.png" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js", logo: "/node.png" },
      { name: "Express", logo: "/expressjs.svg" },
      { name: "MongoDB", logo: "/mongodb.png" },
      { name: "REST APIs", logo: "/rest-api.png" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Workflow",
    icon: Layers,
    skills: [
      { name: "Git", logo: "/git.png" },
      { name: "GitHub", logo: "/github.png" },
      { name: "VS Code", logo: "/vscode.png" },
      { name: "Postman", logo: "/postman.png" },
      { name: "Figma", logo: "/figma.jpg" },
      {name: "Netlify", logo: "/netlify.png" },
      {name: "Vercel", logo: "/vercel.png" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <div>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 bg-secondary/60">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles size={16} />
              <span className="text-xl">My Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
              Skills & Technologies
            </h2>
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
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border"
                  }`}
              >
                <category.icon size={18} />
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {activeSkills?.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 p-4 bg-card rounded-2xl border shadow"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AI TOOLS SECTION */}
      <section id="ai-tools" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-semibold text-foreground">
              AI Tools I Use
            </h2>
          </div>

          {/* AI Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {aiTools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border shadow-sm hover:shadow-lg"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-12 h-12 object-contain"
                />
                <p className="font-medium">{tool.name}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

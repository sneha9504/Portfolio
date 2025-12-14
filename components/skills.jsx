"use client";

import { useState } from "react";
import {
  Code2,
  Database,
  Layers,
  Sparkles,
  Bot,
} from "lucide-react";
import Reveal from "../components/ui/reveal";
/* -------------------------------
   DATA: AI Tools + Skill Groups
-------------------------------- */

const aiTools = [
  {
    name: "ChatGPT",
    logo: "/chatgpt.png",
    use: "Accelerates debugging, solution ideation, and rapid problem analysis"
  },
  {
    name: "Gemini",
    logo: "/gemini.jpg",
    use: "Supports system architecture planning, technical research, and design validation"
  },
  {
    name: "Claude",
    logo: "/claude.png",
    use: "Enhances documentation quality, code readability, and technical communication"
  },
  {
    name: "Grok",
    logo: "/grok.png",
    use: "Assists with complex problem-solving and deeper logical reasoning"
  },
  {
    name: "Perplexity",
    logo: "/perplexity.png",
    use: "Provides quick, reliable technical insights and up-to-date references"
  }
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
    name: "Backend & Databases",
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
      { name: "Netlify", logo: "/netlify.png" },
      { name: "Vercel", logo: "/vercel.png" },
    ],
  },
];

/* -----------------------------------
   MAIN COMBINED SECTION COMPONENT
------------------------------------ */

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <Reveal>
    <section
      id="skills"
      className="py-20 bg-secondary/10 relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-primary/10 text-primary border border-primary/20"
          >
            <Sparkles size={18} />
            <span className="text-xl font-semibold">My Expertise</span>
          </div>

          <h2 className="text-4xl md:text-4xl font-semibold text-foreground leading-tight">
            Skills, Tools & AI That Shape My Development Workflow
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A blend of strong engineering fundamentals, modern UI craft,  
            and AI-powered creativity that helps me build better, faster, and smarter.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 font-medium
                ${
                  activeCategory === category.id
                    ? "bg-secondary text-primary shadow-lg shadow-primary/30"
                    : "bg-card text-muted-foreground border border-border hover:bg-primary/10 hover:text-primary"
                }`}
            >
              <category.icon size={18} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          {activeSkills?.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-4 p-4 bg-card rounded-2xl border
              hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* AI Tools + How You Use Them */}
        <div className="max-w-5xl mx-auto text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-primary/10 text-primary border border-primary/20"
          >
            <Bot size={18} />
            <span className="text-xl font-semibold">AI in My Development Workflow</span>
          </div>

          
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {aiTools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border 
                shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center 
                group-hover:bg-primary/20 transition-all">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <p className="font-semibold group-hover:text-primary transition-colors">
                {tool.name}
              </p>

              <p className="text-xs text-muted-foreground text-center max-w-[160px]">
                {tool.use}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}

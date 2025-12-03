"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"

const categories = ["All", "Web Apps", "E-Commerce", "Design"]

const projects = [
  {
    title: "Bloom E-Commerce",
    description:
      "A luxury skincare brand e-commerce platform with personalized product recommendations and AR try-on features.",
    image: "/elegant-skincare-ecommerce-website-pink-aesthetic.jpg",
    category: "E-Commerce",
    tags: ["Next.js", "Shopify", "Three.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Mindful Journal",
    description:
      "A wellness app for daily journaling, mood tracking, and mindfulness exercises with beautiful data visualizations.",
    image: "/wellness-journaling-app-soft-pastel-colors.jpg",
    category: "Web Apps",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Artisan Portfolio",
    description:
      "A stunning portfolio template for creative professionals featuring smooth animations and immersive galleries.",
    image: "/creative-portfolio-website-elegant-typography.jpg",
    category: "Design",
    tags: ["Figma", "Framer", "GSAP"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Recipe Collective",
    description:
      "A social recipe sharing platform where food lovers can discover, save, and share their favorite recipes.",
    image: "/recipe-food-app-warm-colors-appetizing.jpg",
    category: "Web Apps",
    tags: ["Vue.js", "Firebase", "Algolia"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-secondary/30">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Sparkles size={18} />
            <span className="text-sm font-medium tracking-wide">Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">Selected Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated collection of projects that showcase my skills in design, development, and creative
            problem-solving.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-background text-muted-foreground hover:text-foreground hover:bg-secondary border border-border",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10",
                project.featured && "md:col-span-2",
              )}
            >
              {/* Project Image */}
              <div className={cn("relative overflow-hidden", project.featured ? "aspect-[21/9]" : "aspect-[4/3]")}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Site
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/20 text-primary-foreground text-sm font-medium hover:bg-foreground/30 transition-colors backdrop-blur-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-primary tracking-wide uppercase">{project.category}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary group bg-transparent"
          >
            View All Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}

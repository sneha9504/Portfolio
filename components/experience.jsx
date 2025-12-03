import { Briefcase, MapPin, ArrowRight } from "lucide-react"

const experiences = [
 {
  role: "Software Development Intern – MERN Stack",
  company: "TechnoHacks Solutions Pvt. Ltd.",
  location: "Remote",
  period: "Jan 2025 — Feb 2025",
  description:
    "Worked on full-stack features using React, Node.js, Express, and MongoDB under senior developer guidance. Designed and tested RESTful APIs to improve backend reliability and performance. Participated in code reviews, debugging, and feature planning. Used Git workflows for version control and collaborative development.",
  skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Git"],
  current: false,
},

 {
  role: "Web Development Intern",
  company: "Web Planet",
  location: "Jalgaon",
  period: "Jul 2022 — Aug 2022",
  description:
    "Developed responsive and optimized front-end pages using HTML, CSS, and JavaScript. Improved site performance, UI consistency, and cross-browser compatibility while collaborating with the development team.",
  skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  current: false,
}
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-secondary/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Briefcase size={20} className="shrink-0" />
              <span className="text-lg text-center md:text-base font-semibold tracking-wide">
                Experience
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">My Professional Journey</h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Building beautiful digital products across various industries, from startups to established brands.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:direction-rtl"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/30 z-10" />

                {/* Date - Desktop */}
                <div
                  className={`hidden md:flex items-start ${index % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12 md:order-2"}`}
                >
                  <div className="text-right">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${exp.current ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:order-1 md:text-right"}`}>
                  <div className="group p-6 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                    {/* Mobile Date */}
                    <span
                      className={`md:hidden inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${exp.current ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
                    >
                      {exp.period}
                    </span>

                    <div className={`space-y-4 ${index % 2 !== 0 ? "md:text-right" : ""}`}>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-primary">•</span>
                          <span className="flex items-center gap-1 text-sm">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Resume CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 font-medium"
          >
            View Full Resume
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

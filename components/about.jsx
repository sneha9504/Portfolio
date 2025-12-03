import { Heart, Sparkles, Coffee, Palette, User } from "lucide-react"

const highlights = [
  { icon: Palette, label: "Design", description: "UI/UX & Visual Design" },
  { icon: Sparkles, label: "Frontend", description: "React, Next.js" },
  { icon: Coffee, label: "Backend", description: "Node.js, Express.js" },
  { icon: Heart, label: "Passion", description: "Accessible Web" },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Collage */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="/young-woman-working-laptop-creative-workspace-cozy.jpg" alt="Olivia working" className="w-full h-[500px] object-cover" />
              </div>

              {/* Floating accent images */}
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl transform -rotate-6 z-20 border-4 border-background">
                <img src="/coffee-cup-aesthetic-minimalist.jpg" alt="Coffee aesthetic" className="w-full h-full object-cover" />
              </div>

              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-2xl overflow-hidden shadow-xl transform rotate-6 z-20 border-4 border-background">
                <img src="/design-tools-notebook-creative-flat-lay.jpg" alt="Design tools" className="w-full h-full object-cover" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Right - Content */}
       <div className="order-1 lg:order-3 space-y-8 max-w-4xl mx-auto">
  <div className="space-y-4">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary w-fit">
      <User size={18} className="shrink-0" />
      <span className="text-lg font-semibold tracking-wide">
        About Me
      </span>
    </div>

    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
      Creating thoughtful, delightful digital experiences with a touch of elegance.
    </h2>
  </div>

  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
    <p>
      I’m Sneha Wani, a Frontend and MERN Stack Developer passionate about creating clean, modern, and user-focused web experiences. I specialize in building responsive interfaces and beginner-friendly full-stack applications using React, Next.js, Node.js, Express, and MongoDB.
    </p>

    <p>
      As a fresher, I focus on writing clear, maintainable code and learning industry-standard development practices. I enjoy turning ideas into working prototypes and continuously improving my skills in frontend design, UI/UX principles, and full-stack development.
    </p>

    <p>
      I love exploring new tools, studying modern design trends, and working on projects that help me grow both technically and creatively. With every project, I aim to build better, faster, and more meaningful digital experiences.
    </p>
  </div>


         


          {/* Skill Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group p-4 rounded-2xl bg-secondary/50 hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section >
  )
}

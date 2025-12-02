import { Heart, Sparkles, Coffee, Palette } from "lucide-react"

const highlights = [
  { icon: Palette, label: "Design", description: "UI/UX & Visual Design" },
  { icon: Sparkles, label: "Frontend", description: "React, Next.js, Vue" },
  { icon: Coffee, label: "Backend", description: "Node.js, Python" },
  { icon: Heart, label: "Passion", description: "Accessible Web" },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
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
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-widest uppercase text-sm">About Me</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight text-balance">
                Passionate about creating meaningful digital experiences
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {
                  "Hello! I'm Olivia, a creative developer based in San Francisco with a deep love for blending aesthetics with functionality. My journey in tech started when I customized my first Tumblr theme at 14—and I've been hooked ever since."
                }
              </p>
              <p>
                {
                  "With over 5 years of experience, I specialize in building accessible, performant web applications that don't compromise on beauty. I believe that great design should be inclusive, and every pixel should serve a purpose."
                }
              </p>
              <p>
                {
                  "When I'm not coding, you'll find me exploring local coffee shops, practicing calligraphy, or tending to my growing collection of houseplants. I'm also an advocate for women in tech and regularly mentor aspiring developers."
                }
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
                      <h3 className="font-semibold text-foreground">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

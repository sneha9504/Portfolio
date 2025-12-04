import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/sneha9504", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/snehawani/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:snehawani4321@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left space-y-8">
            {/* Headings */}
            <div className="space-y-4">
              <p className="text-primary font-bold tracking-widest uppercase text-sm animate-fade-in-up">
                MERN Stack & Frontend Developer
              </p>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                {"Hi, I'm "}
                <span className="text-primary relative inline-block">
                  Sneha Wani
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/40 rounded-full" />
                </span>
              </h1>

              <p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Passionate about crafting elegant, user-friendly interfaces backed by solid full-stack engineering.
Specializing in modern UI design, React-based development, and building performant web applications end-to-end.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <a href="#projects">View My Work</a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full text-lg px-8 border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary transition-all duration-300 bg-transparent"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* RESUME + SOCIALS */}
            <div
              className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Resume Button */}
              <a
                href="/sneha wani resume.pdf"
                download="Sneha_Wani_Resume.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                    bg-gradient-to-r from-primary to-primary/80
                    text-primary-foreground font-medium shadow-lg shadow-primary/30
                    hover:shadow-xl hover:shadow-primary/40 hover:scale-105 
                    transition-all duration-300 text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v12m0 0l4-4m-4 4l-4-4m12 4v2H6v-2"
                  />
                </svg>
                Download Resume
              </a>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary text-muted-foreground 
                        hover:bg-primary hover:text-primary-foreground 
                        transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — PROFILE IMAGE */}
          <div
            className="relative flex justify-center lg:justify-end animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Decorative Rings */}
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute inset-0 -m-8 rounded-full border border-primary/10" />

              {/* Image */}
              <div className="relative w-72 h-72 md:w-70 md:h-70 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/20">
                <img
                  src="/hero-section.jpg"
                  alt="Sneha Wani - Creative Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Availability Badge */}
              <div className="absolute -bottom-4 -right-4 bg-background rounded-2xl shadow-xl p-4 border border-border animate-float">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

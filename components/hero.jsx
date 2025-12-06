"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Reveal from "../components/ui/reveal";

/* Rotating Typed Roles */
const roles = [
  "Frontend Developer",
  "MERN Stack Developer",
  "UI/UX Focused Engineer",
  "Creative Web Developer",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-blob" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 blur-3xl rounded-full animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 blur-3xl rounded-full" />
      </div>

      {/* MAIN WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE CONTENT */}
          <Reveal>
            <LeftSide />
          </Reveal>

          {/* RIGHT SIDE CONTENT */}
          <Reveal className="delay-200">
            <RightSide />
          </Reveal>
        </div>

        {/* SCROLL DOWN INDICATOR */}
        <Reveal className="delay-300">
          <div className="absolute -bottom-20  left-1/2 -translate-x-1/2 animate-bounce">
            <a
              href="#about"
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ArrowDown size={20} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* FLOATING RESUME BUTTON — MOBILE ONLY */}
      <ResumeFloatingButtonMobile />
    </section>
  );
}

/* -------------------------------- LEFT SIDE -------------------------------- */

function LeftSide() {
  return (
    <div className="text-center lg:text-left space-y-8">
      <p className="text-primary font-bold tracking-widest uppercase text-sm">
        Turning Ideas Into Scalable Digital Systems
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
        Hi, I'm <span className="text-primary">Sneha Wani</span>
      </h1>

      <TypingRoles />

      <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
        Passionate about crafting elegant, user-friendly interfaces backed by strong engineering. 
        I specialize in React, Next.js and modern frontend development workflows.
      </p>

      <CTAButtons />
      <SocialLinks />
    </div>
  );
}

/* ----------------------------- Typing Effect ----------------------------- */

function TypingRoles() {
  const [displayText, setDisplayText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <motion.div
      className="text-primary font-bold text-2xl md:text-3xl lg:text-4xl h-10"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {displayText}
      <span className="blinking-cursor">|</span>
    </motion.div>
  );
}

/* ----------------------------- Buttons + Socials ---------------------------- */

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Button
        asChild
        size="lg"
        className="rounded-full px-6 py-2 text-sm 
        bg-primary text-primary-foreground 
        hover:bg-primary/90 shadow-md"
      >
        <a href="#projects">View My Work</a>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-full px-6 py-2 text-sm 
        border-primary hover:bg-primary/10"
      >
        <a href="#contact">Get in Touch</a>
      </Button>
    </div>
  );
}



function SocialLinks() {
  const socials = [
    { icon: Github, href: "https://github.com/sneha9504" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/snehawani/" },
    { icon: Mail, href: "mailto:snehawani4321@gmail.com" },
  ];

  return (
    <div className="flex gap-4 justify-center lg:justify-start">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.href}
          target="_blank"
          className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
        >
          <s.icon size={20} />
        </a>
      ))}
    </div>
  );
}

/* -------------------------------- RIGHT SIDE -------------------------------- */

function RightSide() {
  return (
    <div className="relative flex flex-col items-center lg:items-end gap-10">
      <RightImage />
      <CodeWindow />
    </div>
  );
}

/* ----------------------------- 3D Parallax Image ---------------------------- */

function RightImage() {
  return (
    <motion.div
      className="relative"
      initial={{ rotateY: 0 }}
      whileHover={{ rotateY: 10, rotateX: 4 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <div className="absolute inset-0 -m-6 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute inset-0 -m-4 rounded-full border-2 border-primary/20 animate-pulse" />
      <div className="absolute inset-0 -m-8 rounded-full border border-primary/10" />

      <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/20">
        <img
          src="/hero-section.jpg"
          alt="Sneha Wani"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}

/* --------------------------- Code Window + Badges --------------------------- */

function CodeWindow() {
  return (
    <div className="relative w-full max-w-md">

      <div className="bg-foreground/[0.03] rounded-2xl border border-border overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-foreground/[0.02] border-b border-border">
          <div className="w-3 h-3 rounded-full bg-red-400/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div className="w-3 h-3 rounded-full bg-green-400/60" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">developer.js</span>
        </div>

        <pre className="p-6 text-sm font-mono overflow-x-auto">
          <code className="text-muted-foreground">
            <span className="text-primary/70">const</span> Sneha = {"{"}
            {"\n"}
            {"  "}role: <span className="text-accent">'Full Stack Developer'</span>,{"\n"}
            {"  "}stack: ['React', 'Next.js', 'MongoDB'],{"\n"}
            {"  "}passion: <span className="text-accent">'Building beautiful systems'</span>
            {"\n"}
            {"}"};
          </code>
        </pre>
      </div>

      {/* Floating Badge */}
      <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-4 border border-border animate-float">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">10+</span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Projects Shipped</p>
            <p className="text-sm font-medium text-foreground">Production Ready</p>
          </div>
        </div>
      </div>

      {/* Open to Work */}
      <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-xl px-4 py-2 border border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-foreground">Open to work</span>
        </div>
      </div>

    </div>
  );
}

/* --------------------------- Floating Resume Mobile -------------------------- */

function ResumeFloatingButtonMobile() {
  return (
    <a
      href="/sneha wani resume.pdf"
      download="Sneha_Wani_Resume.pdf"
      className="md:hidden fixed bottom-8 right-8 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all"
    >
      <Download size={24} />
    </a>
  );
}

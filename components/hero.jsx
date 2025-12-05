"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const roles = [
  "Frontend Developer",
  "MERN Stack Developer",
  "UI/UX Focused Engineer",
  "Creative Web Developer",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <LeftContent />

          {/* RIGHT SIDE — PROFILE PHOTO WITH PARALLAX */}
          <RightImage />
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

      {/* Floating Resume Button */}
      <ResumeFloatingButton />
    </section>
  );
}

/* ------------------------------- LEFT CONTENT ------------------------------- */

function LeftContent() {
  return (
    <div className="text-center lg:text-left space-y-8">
      {/* Subheading */}
      <p className="text-primary font-bold tracking-widest uppercase text-sm animate-fade-in-up">
        Turning Ideas Into Scalable Digital Systems
      </p>

      {/* Main Heading + Typing Animation */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight animate-fade-in-up">
        Hi, I'm{" "}
        <span className="relative inline-block text-primary animated-underline">
          Sneha Wani
        </span>
        <br />
        <TypingRoles />
      </h1>

      {/* Description */}
      <p
        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        Passionate about crafting elegant, user-friendly interfaces backed by
        strong engineering. I specialize in React, Next.js, modern UI design,
        and frontend development.
      </p>

      {/* CTA Buttons */}
      <CTAButtons />

      {/* Social Icons */}
      <SocialLinks />
    </div>
  );
}

/* ----------------------------- TYPING ANIMATION ----------------------------- */

function TypingRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 65);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <motion.span
      className="text-primary font-bold text-3xl md:text-4xl mt-2 inline-block"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {text}
      <span className="blinking-cursor">|</span>
    </motion.span>
  );
}

/* ------------------------------- CTA BUTTONS ------------------------------- */

function CTAButtons() {
  return (
    <div
      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
      style={{ animationDelay: "0.3s" }}
    >
      <Button
        asChild
        size="lg"
        className="rounded-full text-sm px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md"
      >
        <a href="#projects">View My Work</a>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-full text-sm px-8 border-primary text-foreground hover:bg-primary/10 transition-all"
      >
        <a href="#contact">Get in Touch</a>
      </Button>
    </div>
  );
}

/* --------------------------------- SOCIALS -------------------------------- */

function SocialLinks() {
  const links = [
    { icon: Github, href: "https://github.com/sneha9504", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/snehawani/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:snehawani4321@gmail.com", label: "Email" },
  ];

  return (
    <div
      className="flex gap-4 lg:justify-start justify-center animate-fade-in-up"
      style={{ animationDelay: "0.4s" }}
    >
      {links.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          className="p-3 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
        >
          <s.icon size={20} />
        </a>
      ))}
    </div>
  );
}

/* ------------------------------- RIGHT IMAGE ------------------------------- */

function RightImage() {
  return (
    <motion.div
      className="relative flex justify-center lg:justify-end animate-fade-in-up"
      initial={{ rotateY: 0 }}
      whileHover={{ rotateY: 8, rotateX: 3 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <div className="relative">
        {/* Glow Behind Image */}
        <div className="absolute inset-0 -m-6 rounded-full bg-primary/20 blur-3xl" />

        {/* Decorative Rings */}
        <div className="absolute inset-0 -m-4 rounded-full border-2 border-primary/20 animate-pulse" />
        <div className="absolute inset-0 -m-8 rounded-full border border-primary/10" />

        {/* Main Profile Photo */}
        <div className="relative w-62 h-62 md:w-70 md:h-70 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/20">
          <img
            src="/hero-section.jpg"
            alt="Sneha Wani"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* --------------------------- FLOATING RESUME BTN --------------------------- */

function ResumeFloatingButton() {
  return (
    <a
      href="/sneha wani resume.pdf"
      download="Sneha_Wani_Resume.pdf"
      className="fixed bottom-8 right-8 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all group"
    >
      <Download size={24} />

      {/* Tooltip */}
      <span
        className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-foreground text-background text-sm px-3 py-1 rounded-lg shadow transition-all"
      >
        Download Resume
      </span>
    </a>
  );
}

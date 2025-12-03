import { Heart, Github, Linkedin, Twitter, Instagram } from "lucide-react"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/sneha9504", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/snehawani", label: "LinkedIn" },

]

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
              Sneha
            </a>
            <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1 justify-center md:justify-start">
              Crafted with <Heart size={14} className="text-primary fill-primary" /> in India
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sneha Wani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

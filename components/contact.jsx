"use client"

import { useState } from "react"
import { Mail, MapPin, Send, Heart, MessageCircle } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <MessageCircle size={18} />
            <span className="text-sm font-medium tracking-wide">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">
            {"Let's Create Something Beautiful"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {
              "Have a project in mind or just want to say hello? I'd love to hear from you. Let's start a conversation about bringing your vision to life."
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:hello@oliviachen.dev"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@oliviachen.dev
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">San Francisco, California</p>
                </div>
              </div>
            </div>

            {/* Personal Note */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/10">
              <div className="flex items-center gap-2 mb-3">
                <Heart size={18} className="text-primary" />
                <span className="text-sm font-medium text-primary">A little note</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {
                  "I'm always excited to connect with fellow creatives, entrepreneurs, and anyone passionate about building beautiful things for the web. Whether it's a collaboration, a quick question, or just a friendly chat—my inbox is open!"
                }
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-card border border-border shadow-xl shadow-primary/5"
            >
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-xl border-border bg-background focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-xl border-border bg-background focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Collaboration / Just Saying Hi"
                    value={formData.subject}
                    onChange={handleChange}
                    className="rounded-xl border-border bg-background focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, idea, or just share what's on your mind..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="rounded-xl border-border bg-background focus:border-primary focus:ring-primary resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Heart, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";   // <-- IMPORTANT

export default function Contact() {
  const { toast } = useToast();  // <-- initialize toast hook

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://formsubmit.co/ajax/snehawani4321@gmail.com",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      toast({
        title: "Message Sent 🎉",
        description: "Thank you! I'll get back to you shortly.",
        duration: 3000,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast({
        title: "Oops! Something went wrong ❌",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <MessageCircle size={18} />
            <span className="text-lg font-medium">Contact</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            {"Let's Create Something Beautiful"}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
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
                    href="mailto:snehawani4321@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    snehawani4321@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Pune, India</p>
                </div>
              </div>
            </div>

            {/* Personal Note */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/10">
              <div className="flex items-center gap-2 mb-3">
                <Heart size={18} className="text-primary" />
                <span className="text-sm font-medium text-primary">A little note</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm always excited to connect with fellow creatives & passionate builders.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-card border shadow-xl"
            >
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Collaboration"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me more..."
                    required
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
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
  );
}

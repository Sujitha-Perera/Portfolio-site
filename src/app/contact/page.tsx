"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/ui/magic-ui/fade-in";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Fallback: Mailto link generation since no real backend mailer is hardcoded
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact",
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    window.location.href = mailtoUrl;
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"
        style={{ backgroundSize: "50px 50px" }}
      />
      <div
        className="absolute top-1/4 -right-1/4 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
        style={{ width: "800px", height: "800px" }}
      />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-glow">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Whether you have a question, a project opportunity, or just want to
            connect, my inbox is open.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <FadeIn direction="right" className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/50 flex flex-col gap-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-muted-foreground hover:text-cyan-400 transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="text-muted-foreground hover:text-cyan-400 transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    {portfolioData.personal.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Connect Socially</h3>
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass rounded-full hover:bg-white/10 flex-1"
                >
                  <Link
                    href={portfolioData.personal.links.github}
                    target="_blank"
                  >
                    <Github className="w-5 h-5 mr-2 text-cyan-500" /> GitHub
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass rounded-full hover:bg-white/10 flex-1"
                >
                  <Link
                    href={portfolioData.personal.links.linkedin}
                    target="_blank"
                  >
                    <Linkedin className="w-5 h-5 mr-2 text-cyan-500" /> LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-8 rounded-3xl border border-border/50 flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-background/50 border-border/50 focus-visible:ring-cyan-500"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="bg-background/50 border-border/50 focus-visible:ring-cyan-500"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Internship Opportunity"
                  className="bg-background/50 border-border/50 focus-visible:ring-cyan-500"
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="min-h-[150px] bg-background/50 border-border/50 focus-visible:ring-cyan-500 resize-none"
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-full mt-2 group transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Preparing Message..."
                ) : (
                  <>
                    Send Message{" "}
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

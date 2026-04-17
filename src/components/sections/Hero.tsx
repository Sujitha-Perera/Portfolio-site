"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { FadeIn } from "@/components/ui/magic-ui/fade-in";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-12 pb-24 overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-grid-white/[0.02]"
        style={{ backgroundSize: "50px 50px" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-blob" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <FadeIn>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
                <span className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 drop-shadow-md">
                  SUJITHA PERERA
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-glow leading-tight">
                {portfolioData.personal.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                {portfolioData.personal.about}
              </p>
            </FadeIn>

            <FadeIn
              delay={0.3}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8"
              >
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 glass hover:bg-white/10"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>

              <div className="flex items-center gap-2 ml-2">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10 hover:text-cyan-400"
                >
                  <Link
                    href={portfolioData.personal.links.github}
                    target="_blank"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10 hover:text-cyan-400"
                >
                  <Link
                    href={portfolioData.personal.links.linkedin}
                    target="_blank"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Profile Photo */}
          <FadeIn
            delay={0.2}
            direction="left"
            className="w-full max-w-sm lg:max-w-md"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-border/50 glass bg-card">
                <Image
                  src={portfolioData.personal.profilePhoto}
                  alt={portfolioData.personal.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

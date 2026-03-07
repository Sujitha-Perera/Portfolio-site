"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { FadeIn } from "@/components/ui/magic-ui/fade-in";

export function EducationTimeline() {
  return (
    <section className="py-24 bg-card/10">
      <div className="container px-4 mx-auto max-w-4xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Education</h2>
            <p className="text-muted-foreground">My academic foundation.</p>
          </div>
        </FadeIn>

        <div className="relative border-l border-border/50 pl-8 ml-4 md:ml-0">
          {portfolioData.education.map((item, index) => (
            <FadeIn key={item.degree} delay={0.1 * index} className="mb-12 relative">
              <span className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-500 ring-4 ring-background">
                <GraduationCap className="h-4 w-4" />
              </span>
              
              <div className="glass-card rounded-2xl p-6 border border-border/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 group-hover:from-cyan-500/10 group-hover:to-emerald-500/10 transition-colors" />
                
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2">
                  {item.degree}
                </h3>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm text-cyan-400 mb-4 font-medium">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.duration}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {item.details}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

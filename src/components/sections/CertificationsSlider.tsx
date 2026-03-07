"use client";

import { Award } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { FadeIn } from "@/components/ui/magic-ui/fade-in";

export function CertificationsSlider() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" />
      
      <div className="container px-4 mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Certifications</h2>
            <p className="text-muted-foreground">Continuous learning and skill validation.</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {portfolioData.certifications.map((cert, index) => (
            <FadeIn key={cert.title} delay={0.1 * index}>
              <div className="glass-card h-full p-6 rounded-2xl flex items-start gap-4 hover:shadow-cyan-500/10 group transition-all duration-300">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight mb-1 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

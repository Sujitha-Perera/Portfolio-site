"use client";

import { Award, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { FadeIn } from "@/components/ui/magic-ui/fade-in";
import { Button } from "@/components/ui/button";

export default function CertificationsPage() {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-glow">Certifications</h1>
          <p className="text-lg text-muted-foreground">
            Continuous learning is part of my journey. Here are some of the professional certifications I have earned.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.certifications.map((cert, index) => (
            <FadeIn key={cert.title} delay={0.1 * index}>
              <div className="glass-card flex flex-col sm:flex-row items-center sm:items-start gap-6 h-full p-8 rounded-3xl border border-border/50 group/card relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-bl-full -z-10 group-hover/card:scale-125 transition-transform duration-700" />
                
                <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover/card:bg-cyan-500 group-hover/card:text-white transition-colors duration-300 shadow-inner">
                  <Award className="w-8 h-8" />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-xl font-bold mb-2 group-hover/card:text-cyan-400 transition-colors">
                    {cert.title}
                  </h2>
                  <p className="text-emerald-400 font-medium mb-4">
                    {cert.issuer}
                  </p>
                  
                  <Button variant="outline" size="sm" className="glass rounded-full text-xs hover:bg-white/10" disabled>
                     Verify Credential <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

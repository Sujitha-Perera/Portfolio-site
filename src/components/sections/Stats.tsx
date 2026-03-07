"use client";

import { FadeIn } from "@/components/ui/magic-ui/fade-in";
import { portfolioData } from "@/lib/portfolio-data";

export function Stats() {
  return (
    <section className="py-12 border-y border-border/30 bg-card/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border/50">
          {portfolioData.stats.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={0.1 * index}
              className="flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/magic-ui/fade-in";

const ALL_FILTER = "All Categories";

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState(ALL_FILTER);
  const categories = [
    ALL_FILTER,
    ...portfolioData.skills.map((s) => s.category),
  ];

  const displaySkills =
    activeCategory === ALL_FILTER
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"
        style={{ width: "600px", height: "600px" }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-glow">
            Technical Skills
          </h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of my technical expertise, frameworks, and
            tools.
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn
          delay={0.1}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "glass hover:bg-white/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </FadeIn>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displaySkills.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.category} delay={0.1 * groupIndex}>
                <div className="glass-card h-full p-8 rounded-3xl border border-border/50 group/card relative overflow-hidden">
                  <div
                    className="absolute right-0 top-0 w-32 h-32 rounded-bl-full -z-10 group-hover/card:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(16, 185, 129, 0.1))",
                    }}
                  />

                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">{group.category}</h2>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant={skill === "" ? "default" : "secondary"}
                        className={`text-sm px-4 py-2 ${
                          skill === ""
                            ? "text-white shadow-lg shadow-red-500/20 animate-pulse border-0"
                            : "bg-secondary/50 hover:bg-secondary border border-border/50"
                        }`}
                        style={
                          skill === ""
                            ? {
                                backgroundImage:
                                  "linear-gradient(to right, #ef4444, #e11d48)",
                              }
                            : undefined
                        }
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Backend stack callout */}
        {displaySkills.some(
          (g) =>
            g.category === "Backend" &&
            g.items.some((item) => ["Go", "Spring Boot", "Gin"].includes(item)),
        ) && (
          <FadeIn delay={0.4} className="max-w-4xl mx-auto mt-16">
            <div
              className="glass-card rounded-3xl border border-border/50 p-6 md:p-8 text-center"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(10, 10, 10, 0.3), rgba(16, 185, 129, 0.1))",
              }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">
                Backend Focus
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Go, Spring Boot, and Gin sit alongside my Node.js backend stack.
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I use this mix of ecosystems to build APIs, authentication
                flows, and production-ready backend services with the right tool
                for each project.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

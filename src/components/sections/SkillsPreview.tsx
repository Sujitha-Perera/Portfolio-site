"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { FadeIn } from "@/components/ui/magic-ui/fade-in";

export function SkillsPreview() {
  // Flatten top skills to show a preview
  const topSkills = [
    "NestJS",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Spring Boot",
    "Gin",
    "Go",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Tailwind CSS",
    "Docker",
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      <div
        className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"
        style={{ backgroundSize: "50px 50px" }}
      />
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-glow">
              <span className="text-4xl md:text-5xl font-extrabold text-white">
                Sujitha Perera
              </span>
              <br />
              Technical Arsenal
            </h2>
            <p className="text-muted-foreground mb-8 text-lg mt-2">
              I specialize in building robust full-stack architectures. From
              responsive frontends to scalable backend microservices, I leverage
              modern tools to deliver premium solutions.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {topSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm rounded-full glass hover:bg-white/10"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <Button
              asChild
              className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full"
            >
              <Link href="/skills">
                Explore All Skills <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="relative">
            <div
              className="absolute inset-0 rounded-3xl blur-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(to top right, rgba(6, 182, 212, 0.2), rgba(16, 185, 129, 0.2))",
              }}
            />
            <div className="glass-card rounded-3xl p-8 border border-border/50 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.skills.slice(0, 4).map((group) => {
                  const Icon = group.icon;
                  return (
                    <div key={group.category} className="space-y-3">
                      <div className="flex items-center gap-2 text-cyan-400 font-medium">
                        <Icon className="w-5 h-5" />
                        <h3>{group.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded border border-border/50"
                          >
                            {item}
                          </span>
                        ))}
                        {group.items.length > 3 && (
                          <span className="text-xs text-muted-foreground px-1">
                            ...
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

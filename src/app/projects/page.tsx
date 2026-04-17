"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "@/components/ui/magic-ui/fade-in";

// Extract unique technologies for standard filters
const ALL_FILTER = "All";
const getFilters = () => {
  const allTechs = portfolioData.projects.flatMap((p) => p.techStack);
  const counts = allTechs.reduce(
    (acc, tech) => {
      acc[tech] = (acc[tech] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Get top 6 most used technologies as filters
  const topTechs = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map((entry) => entry[0]);

  return [ALL_FILTER, ...topTechs];
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const filters = getFilters();

  const filteredProjects =
    activeFilter === ALL_FILTER
      ? portfolioData.projects
      : portfolioData.projects.filter((p) =>
          p.techStack.includes(activeFilter),
        );

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-grid-white/[0.02]"
        style={{ backgroundSize: "50px 50px" }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-glow">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            A showcase of my technical work, from full-stack applications to AI
            models and responsive UIs.
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn
          delay={0.1}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "glass hover:bg-white/10"
              }`}
            >
              {filter}
            </Button>
          ))}
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={0.1 * index}>
              <Card className="glass-card h-full flex flex-col group overflow-hidden border-border/50 bg-card/40">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, rgba(3, 7, 18, 0.8), rgba(3, 7, 18, 0))",
                    }}
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-cyan-400 transition-colors">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="before:absolute before:inset-0"
                    >
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    {project.overview}
                  </CardDescription>
                </CardHeader>

                <CardContent className="grow">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.techStack.length - 5}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 border-t border-border/50 gap-4 relative z-20">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <Link href={project.links.github} target="_blank">
                      <Github className="w-4 h-4 mr-2" /> Source
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <FadeIn className="text-center py-24">
            <p className="text-muted-foreground text-lg">
              No projects found with this technology.
            </p>
            <Button
              variant="outline"
              className="mt-4 glass"
              onClick={() => setActiveFilter(ALL_FILTER)}
            >
              Clear Filters
            </Button>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

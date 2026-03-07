"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { FadeIn } from "@/components/ui/magic-ui/fade-in";

export function FeaturedProjects() {
  const featured = portfolioData.projects.slice(0, 3);

  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                A selection of my recent full-stack applications and AI-driven solutions.
              </p>
            </div>
            <Button asChild variant="ghost" className="text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10">
              <Link href="/projects">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <FadeIn key={project.slug} delay={0.1 * index}>
              <Card className="glass-card h-full flex flex-col group overflow-hidden border-border/50 bg-card/40">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-cyan-400 transition-colors">
                    <Link href={`/projects/${project.slug}`} className="before:absolute before:inset-0">
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.overview}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.techStack.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4 border-t border-border/50 gap-4 relative z-20">
                  <Button asChild variant="ghost" size="sm" className="hover:bg-cyan-500/10 hover:text-cyan-400">
                    <Link href={project.links.github} target="_blank">
                      <Github className="w-4 h-4 mr-2" /> Source
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="hover:bg-cyan-500/10 hover:text-cyan-400">
                    <Link href={project.links.demo} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

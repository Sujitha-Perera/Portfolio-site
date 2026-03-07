import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Layers, Zap, PenTool, Lightbulb, Box } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = portfolioData.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-4xl">
        {/* Back Link */}
        <Button asChild variant="ghost" className="mb-8 hover:bg-white/5 -ml-4 text-muted-foreground hover:text-cyan-400">
          <Link href="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>
        </Button>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-glow">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full">
              <Link href={project.links.demo} target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </Link>
            </Button>
            <Button asChild variant="outline" className="glass rounded-full hover:bg-white/10">
              <Link href={project.links.github} target="_blank">
                <Github className="w-4 h-4 mr-2" /> View Source
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-secondary/50">
                {tech}
              </Badge>
            ))}
          </div>
        </header>

        {/* Visual / Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-border/50 mb-16 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 to-emerald-900/60 mix-blend-overlay" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
             <span className="text-3xl md:text-5xl font-bold text-white/50 drop-shadow-lg">
                {project.title} Screenshot
             </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Box className="w-6 h-6 text-cyan-500" />
              Overview
            </h2>
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/50">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-cyan-500" />
              Key Features
            </h2>
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/50">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-cyan-500" />
              Architecture
            </h2>
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/50 bg-gradient-to-tr from-card/40 to-cyan-900/10">
              <p className="text-muted-foreground leading-relaxed">
                {project.architecture}
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <PenTool className="w-6 h-6 text-cyan-500" />
                Challenges
              </h2>
              <div className="glass-card h-full p-6 rounded-3xl border border-border/50 border-l-2 border-l-red-500/50">
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-emerald-500" />
                What I Learned
              </h2>
              <div className="glass-card h-full p-6 rounded-3xl border border-border/50 border-l-2 border-l-emerald-500/50">
                <p className="text-muted-foreground leading-relaxed">
                  {project.learnings}
                </p>
              </div>
            </section>
          </div>

        </div>
        
        <Separator className="my-16 opacity-50" />
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Interested in discussing this project?</h3>
          <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-full">
             <Link href="/contact">Let&apos;s talk</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

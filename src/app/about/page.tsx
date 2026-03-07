import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, FileText, Download } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/magic-ui/fade-in";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Me</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a software engineer driven by curiosity and a passion for building scalable, intelligent systems.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Profile Photo */}
          <FadeIn direction="right" className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 glass bg-card">
                <Image
                  src={portfolioData.personal.profilePhoto}
                  alt={portfolioData.personal.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Change Photo (Placeholder)</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col gap-3">
              <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-full">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" className="w-full glass rounded-full hover:bg-white/5">
                <Link href={portfolioData.personal.links.resume} target="_blank">
                  <Download className="w-4 h-4 mr-2" /> Download Resume
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Text Content */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            <FadeIn delay={0.1}>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-cyan-500" />
                My Story
              </h2>
              <div className="glass-card p-8 rounded-3xl border border-border/50">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am a motivated and dedicated fourth-year Computer Science undergraduate at the Sabaragamuwa University of Sri Lanka. My journey began with a deep curiosity about how software shapes our world, leading me to build strong fundamentals in software engineering and full-stack development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am highly passionate about applying AI/ML concepts to create real-world solutions that matter. Being a quick learner and adaptable team player, I thrive in environments that challenge me. I am currently seeking internship or entry-level opportunities where I can contribute my skills while learning from industry veterans.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-cyan-500" />
                Education
              </h2>
              <div className="glass-card p-8 rounded-3xl border border-border/50">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-glow mb-2">{edu.degree}</h3>
                      <p className="text-cyan-400 font-medium mb-1">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.details}</p>
                    </div>
                    <div className="shrink-0 pt-1">
                      <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-gradient-to-r from-cyan-900/20 to-emerald-900/20 border border-cyan-500/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Want to see what I&apos;ve built?</h3>
                <p className="text-muted-foreground">Check out my portfolio of selected works.</p>
              </div>
              <Button asChild size="lg" className="shrink-0 rounded-full bg-white text-black hover:bg-neutral-200">
                <Link href="/projects">
                  Explore Projects <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </FadeIn>

          </div>
        </div>
      </div>
    </div>
  );
}

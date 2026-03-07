import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsPreview } from "@/components/sections/SkillsPreview";
import { EducationTimeline } from "@/components/sections/EducationTimeline";
import { CertificationsSlider } from "@/components/sections/CertificationsSlider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <FeaturedProjects />
      <SkillsPreview />
      <EducationTimeline />
      <CertificationsSlider />
      
      {/* Contact CTA Strip */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900/10" />
        <div className="container px-4 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-glow">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to say hi, my inbox is always open. Let&apos;s build something amazing together.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 h-14 text-lg font-medium shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all hover:scale-105">
            <Link href="/contact">
              Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-bold text-xl tracking-tight text-glow">
              {portfolioData.personal.name}
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
              Building premium digital experiences and intelligent solutions.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={portfolioData.personal.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-cyan-500/10 hover:text-cyan-500 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={portfolioData.personal.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-cyan-500/10 hover:text-cyan-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center gap-2 group text-sm font-medium transition-colors hover:text-cyan-500"
            >
              <Mail className="w-4 h-4" />
              Let&apos;s talk
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <p>
            Designed & Built with Next.js, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}

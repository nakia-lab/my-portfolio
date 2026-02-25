import { GraduationCap, Award, Calendar, BookCheck, Shield, ArrowLeft } from 'lucide-react';
import { portfolioData } from '@/app/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      <ScrollToTop />
      <section className="space-y-12">
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Academic Foundation</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              My formal education focuses on the intersection of cybersecurity, networking, and IT infrastructure management at DeVry University.
            </p>
          </div>
        </div>

        <div className="grid gap-8 max-w-5xl">
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-8 flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-headline font-bold">{edu.institution}</h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground font-medium mt-1">
                      {edu.programs.map((p, pIdx) => (
                        <span key={pIdx} className="flex items-center gap-1.5">
                          {pIdx > 0 && <span className="hidden md:inline">•</span>}
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" className="border-accent text-accent w-fit flex gap-2 py-1 px-4 text-sm font-bold">
                    <Calendar className="w-4 h-4" />
                    Expected {edu.completion}
                  </Badge>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Academic Honors & Involvement
                    </h3>
                    <ul className="space-y-2">
                      {edu.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="text-muted-foreground flex gap-2 items-start">
                          <BookCheck className="w-4 h-4 text-accent shrink-0 mt-1" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-bold">Professional Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Continuous learning is the backbone of my professional growth. I actively participate in simulations and specialized training to stay current with industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, cIdx) => (
            <div key={cIdx} className="p-6 rounded-xl bg-card border border-border space-y-4 transition-colors hover:border-primary/50">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-muted-foreground px-2 py-1 rounded bg-background">{cert.year}</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline font-bold text-lg leading-snug">{cert.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground opacity-60">
                <span className="uppercase tracking-widest font-bold">Credibility Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

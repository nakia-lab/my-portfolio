import { Briefcase, Calendar, CheckCircle2, ExternalLink, Box, ArrowLeft } from 'lucide-react';
import { portfolioData } from '@/app/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

export default function CareerPage() {
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
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Professional Experience</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              My career path has built a strong foundation in high-accuracy operations, sensitive equipment handling, and digital record maintenance within complex environments.
            </p>
          </div>
        </div>

        <div className="space-y-8 max-w-4xl">
          {portfolioData.workHistory.map((job, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors pb-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(111,34,191,0.5)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h3 className="text-2xl font-headline font-bold text-accent">{job.role}</h3>
                <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Box className="w-4 h-4" /> {job.company}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {job.dates}</span>
                </div>
              </div>

              <div className="space-y-6">
                <ul className="grid gap-3">
                  {job.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {resp}
                    </li>
                  ))}
                </ul>
                
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Key Achievement</h4>
                  <p className="text-foreground italic">"{job.achievement}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Technical applications and capstone work demonstrating end-to-end development, secure deployment, and integration of AI into IT workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, pIdx) => (
            <div key={pIdx} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-headline font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                <a 
                  href={`https://${project.link}`} 
                  target="_blank" 
                  className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.purpose}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <Badge key={tool} variant="secondary" className="bg-primary/10 text-primary border-none">{tool}</Badge>
                  ))}
                </div>
                <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {project.skills.map(skill => (
                    <span key={skill} className="flex items-center gap-1.5 text-accent font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
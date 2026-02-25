import { Cpu, Lock, Terminal, Wrench, Sparkles, ArrowLeft } from 'lucide-react';
import { portfolioData } from '@/app/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

export default function SkillsPage() {
  const { technical, tools, professional, aiSystems } = portfolioData.skills;

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      <ScrollToTop />
      <section className="space-y-12">
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold">Skills <span className="text-primary">& Matrix</span></h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise, tools, and professional soft skills, emphasizing my capabilities in modern AI integration and cybersecurity.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-card border border-border space-y-6">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-headline font-bold">Technical Core</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {technical.map(skill => (
                <Badge key={skill} className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white transition-all py-1.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border space-y-6">
            <div className="flex items-center gap-3">
              <Wrench className="w-6 h-6 text-accent" />
              <h2 className="text-xl font-headline font-bold">Tools & Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map(tool => (
                <Badge key={tool} variant="secondary" className="bg-muted text-muted-foreground py-1.5">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border space-y-6">
            <div className="flex items-center gap-3">
              <Terminal className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-headline font-bold">Professional Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {professional.map(skill => (
                <Badge key={skill} variant="outline" className="border-border text-foreground py-1.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Systems Focus */}
      <section className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/20 via-background to-accent/10 border border-primary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-20 -mt-20"></div>
        
        <div className="relative z-10 space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Advanced Capability</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">AI & Intelligent Systems</h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              {aiSystems.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiSystems.categories.map((cat, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-headline font-bold text-accent">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-sm text-muted-foreground flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-white/5 flex flex-col justify-center gap-3">
              <h3 className="font-headline font-bold">Capstone Achievement</h3>
              <p className="text-xs text-muted-foreground">Demonstrated end-to-end AI project development from concept to secure cloud-hosted deployment.</p>
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

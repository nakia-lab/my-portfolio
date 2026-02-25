import Link from 'next/link';
import { Mail, Linkedin, Github, ArrowRight, ShieldCheck, Database, Target } from 'lucide-react';
import ProfileUploader from '@/components/ProfileUploader';
import { portfolioData } from '@/app/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import ScrollToTop from '@/components/ScrollToTop';
import DiscordButton from '@/components/DiscordButton';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-24 px-4 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-accent text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Available for Cybersecurity Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
              Safeguarding the <br />
              <span className="text-primary italic">Digital Frontier</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              I'm <span className="text-foreground font-bold">{portfolioData.name}</span>, a {portfolioData.role} specializing in Data Protection and secure system operations.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link 
                href="/career" 
                className="group px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:translate-y-[-2px] transition-all"
              >
                View Experience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground font-medium hover:bg-white/10 transition-colors"
              >
                Let's Connect
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50"></div>
            <ProfileUploader />
          </div>
        </div>
      </section>

      {/* About Me & Goals */}
      <section className="px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              About Me
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>{portfolioData.aboutMe}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {portfolioData.skills.technical.slice(0, 5).map(skill => (
                <Badge key={skill} variant="outline" className="border-primary/30 text-accent font-medium">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <Target className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-headline font-bold mb-2">Short-term Goal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Secure a remote, entry-level Cybersecurity role where I can apply my data protection skills and grow in a technical environment.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <Database className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-headline font-bold mb-2">Long-term Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Become a proficient Ethical Hacker, contributing to global security by identifying vulnerabilities and strengthening defense systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 bg-card/30 border-y border-border/40">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-headline font-bold">Secure a Connection</h2>
            <p className="text-muted-foreground text-lg">Interested in collaborating or have a role that matches my profile? Reach out via any channel below.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <a 
              href={`mailto:${portfolioData.contact.email}`}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary transition-all group flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <span className="font-medium">Email</span>
            </a>
            <a 
              href={`https://${portfolioData.contact.linkedin}`}
              target="_blank"
              className="p-6 rounded-xl bg-background border border-border hover:border-primary transition-all group flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Linkedin className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
            <a 
              href={`https://${portfolioData.contact.github}`}
              target="_blank"
              className="p-6 rounded-xl bg-background border border-border hover:border-primary transition-all group flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Github className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <span className="font-medium">GitHub</span>
            </a>
            <DiscordButton discordId={portfolioData.contact.discordId} />
          </div>
        </div>
      </section>
    </div>
  );
}

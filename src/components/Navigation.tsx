"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, BookOpen, Briefcase, Cpu, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '/', icon: Shield },
  { label: 'Career', href: '/career', icon: Briefcase },
  { label: 'Skills', href: '/skills', icon: Cpu },
  { label: 'Education', href: '/education', icon: BookOpen },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-headline font-bold text-xl group-hover:scale-110 transition-transform">
            S
          </div>
          <span className="font-headline font-bold text-lg hidden sm:inline-block tracking-tight">
            SENTINEL<span className="text-primary">STREAM</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden md:inline-block">{item.label}</span>
              </Link>
            );
          })}
          <Link 
            href="/#contact" 
            className="ml-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
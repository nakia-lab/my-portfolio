import type {Metadata} from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import AiAssistant from '@/components/AiAssistant';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Nakia Russell | Professional Portfolio',
  description: 'Cybersecurity Analyst and IT Operations professional focusing on Data Protection and Ethical Hacking.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&family=Source+Code+Pro&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <AiAssistant />
        <Toaster />
        <footer className="py-8 border-t border-border/40 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Nakia Russell. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
"use client";

import { Gamepad2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DiscordButtonProps {
  discordId: string;
}

export default function DiscordButton({ discordId }: DiscordButtonProps) {
  const { toast } = useToast();

  const handleCopy = () => {
    // Copy the numeric ID or handle
    navigator.clipboard.writeText(discordId);
    toast({
      title: "Discord ID Copied",
      description: `User ID ${discordId} has been copied to your clipboard.`,
    });
    
    // Attempt to open a deep link if on mobile or app
    window.location.href = `discord://discordapp.com/users/${discordId}`;
    
    // Fallback to web profile link after a short delay if app doesn't open
    setTimeout(() => {
      window.open(`https://discord.com/users/${discordId}`, '_blank');
    }, 500);
  };

  return (
    <button 
      className="p-6 w-full rounded-xl bg-background border border-border hover:border-primary transition-all group flex flex-col items-center gap-3 cursor-pointer outline-none focus:ring-2 focus:ring-primary"
      title={`Discord ID: ${discordId}`}
      onClick={handleCopy}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
        <Gamepad2 className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
      </div>
      <span className="font-medium">Discord</span>
    </button>
  );
}

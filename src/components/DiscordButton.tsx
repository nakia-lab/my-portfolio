"use client";

import { Gamepad2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DiscordButtonProps {
  discordId: string;
}

export default function DiscordButton({ discordId }: DiscordButtonProps) {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(discordId);
    toast({
      title: "Discord ID Copied",
      description: `User ID ${discordId} has been copied to your clipboard.`,
    });
  };

  return (
    <div 
      className="p-6 rounded-xl bg-background border border-border hover:border-primary transition-all group flex flex-col items-center gap-3 cursor-pointer"
      title={`Discord ID: ${discordId}`}
      onClick={handleCopy}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
        <Gamepad2 className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
      </div>
      <span className="font-medium">Discord</span>
    </div>
  );
}

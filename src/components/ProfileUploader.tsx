"use client";

import { useState, useEffect, useRef } from 'react';
import { Camera, Upload, User } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export default function ProfileUploader() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('profile-image');
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image smaller than 2MB.",
          variant: "destructive"
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        localStorage.setItem('profile-image', base64String);
        toast({
          title: "Profile Updated",
          description: "Your profile picture has been saved successfully."
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative group w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-4 border-primary/20 bg-muted flex items-center justify-center">
      {image ? (
        <Image
          src={image}
          alt="Profile"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 192px, 256px"
        />
      ) : (
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <User className="w-16 h-16" />
          <span className="text-xs uppercase tracking-widest font-bold">Professional ID</span>
        </div>
      )}

      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
           onClick={() => fileInputRef.current?.click()}>
        <Upload className="w-8 h-8 text-accent" />
        <span className="text-sm font-medium text-white">Upload Profile Image</span>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
}
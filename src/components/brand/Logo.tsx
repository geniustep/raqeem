import Image from "next/image";
import { BRAND } from "@/lib/constants";

interface LogoProps {
  variant?: "full" | "small";
  priority?: boolean;
  className?: string;
  alt: string;
}

export function Logo({ variant = "full", priority = false, className = "", alt }: LogoProps) {
  const isFull = variant === "full";
  return (
    <Image
      src={isFull ? BRAND.logo : BRAND.logoSmall}
      alt={alt}
      width={isFull ? BRAND.logoWidth : BRAND.logoSmallWidth}
      height={isFull ? BRAND.logoHeight : BRAND.logoSmallHeight}
      priority={priority}
      sizes={isFull ? "(max-width: 768px) 140px, 180px" : "48px"}
      className={`object-contain ${className}`}
    />
  );
}

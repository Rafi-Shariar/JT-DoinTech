"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Creators", href: "/creators" },
] as const;

interface NavLinksProps {
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
}

export function NavLinks({ className, itemClassName, onItemClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-8", className)}>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onItemClick}
            className={cn(
              "text-base font-medium transition-colors hover:text-white",
              isActive ? "text-white" : "text-white/80",
              itemClassName
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
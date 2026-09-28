"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "./navbar-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white focus-visible:ring-0 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex flex-col justify-between border-white/10 bg-primary text-white"
      >
        <div className="flex flex-col gap-6">
          <SheetHeader className="text-left">
            <SheetTitle>
              <Image
                src="/assets/logo.svg"
                alt="ByteSpace"
                width={120}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
            </SheetTitle>
          </SheetHeader>

          <NavLinks
            className="flex-col items-start gap-4"
            itemClassName="text-base"
            onItemClick={() => setOpen(false)}
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
          <Button
            variant="ghost"
            asChild
            className="w-full text-white hover:bg-white/10 hover:text-white"
            onClick={() => setOpen(false)}
          >
            <Link href="/signin">Sign In</Link>
          </Button>

          <Button
            variant="secondary"
            className="w-full rounded-full font-semibold"
            asChild
            onClick={() => setOpen(false)}
          >
            <Link href="/join">Join Us</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

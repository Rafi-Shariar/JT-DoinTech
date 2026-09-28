import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./navbar-links";
import logoImg from '../../../assets/shared/logo.png'

export default function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between bg-transparent max-w-7xl mx-auto px-2">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex gap-2 items-end">
            <Image
          src={logoImg}
          alt="ByteSpace"
          width={130}
          height={34}
          priority
          className="h-8 w-auto object-contain"
        />

        <h1 className="text-xl text-white font-bold">ByteSpace</h1>
        </div>
      </Link>

      <NavLinks className="hidden md:flex" />

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden items-center gap-2 md:flex">
          <Button
            
            className="rounded-full font-light"
            asChild
          >
            <Link href="/signin">Sign in</Link>
          </Button>

          <Button
            
            className="rounded-full font-light"
            asChild
          >
            <Link href="/join">Join Us</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white"
          aria-label="Shopping bag"
        >
          <ShoppingBag className="size-5" />
        </Button>

        <MobileNav />
      </div>
    </header>
  );
}
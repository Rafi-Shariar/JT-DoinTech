import { HeroSearch } from "./hero-search";
import { HeroShapes } from "./hero-shapes";
import { HeroVisual } from "./hero-visuals";

export default function HeroBanner() {
  return (
    <section className="relative w-full pt-10 sm:pt-16">
      <HeroShapes />
      <div className="relative z-10">
        <HeroSearch />
        <HeroVisual />
      </div>
    </section>
  );
}

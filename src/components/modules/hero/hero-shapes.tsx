import Image from "next/image";
import yellowCoil from "@/assets/hero/yellowCoil.png";
import whiteSpringLeft from "@/assets/hero/white-coil-right.png";
import whiteRing from "@/assets/hero/circle.png";
import greenCone from "@/assets/hero/yellow-box.png";
import whitePyramid from "@/assets/hero/cone.png";
import whiteSpringRight from "@/assets/hero/white-coil.png";

export function HeroShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Left Top - Yellow Coil */}
      <div className="absolute -left-10 lg:-left-0 top-20 w-36 sm:left-4 sm:top-24 sm:w-52 lg:w-64">
        <Image
          src={yellowCoil}
          alt="Abstract shape"
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Left Middle - White Spring */}
      <div className="hidden sm:block absolute left-28 top-[40%] w-16 lg:left-64 lg:w-42">
        <Image
          src={whiteSpringLeft}
          alt="Abstract shape"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Left Bottom - White Torus Ring */}
      <div className="absolute -left-12 bottom-12 w-44 sm:left-8 sm:bottom-16 sm:w-64 lg:left-24 lg:w-72">
        <Image
          src={whiteRing}
          alt="Abstract shape"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Right Top - Lime Cone */}
      <div className="absolute -right-8 top-16 w-36 sm:right-4 sm:top-20 sm:w-52 lg:right-0 lg:w-54">
        <Image
          src={greenCone}
          alt="Abstract shape"
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Right Middle - White Pyramid */}
      <div className="hidden sm:block absolute right-32 top-[44%] w-20 lg:right-64 lg:w-36">
        <Image
          src={whitePyramid}
          alt="Abstract shape"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Right Bottom - White Spring */}
      <div className="hidden md:block absolute right-16 bottom-20 w-24 lg:right-36 lg:w-64">
        <Image
          src={whiteSpringRight}
          alt="Abstract shape"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
import Image from "next/image";
import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import modelImg from "@/assets/hero/model.png";
import ellipseImg from "@/assets/hero/Ellipse.png";

const STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces",
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-5xl items-end justify-center">
      {/* 1. Lime Arch using the actual Figma asset (Pinned behind model) */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-[680px] sm:w-[860px] lg:w-[1040px] flex justify-center">
        <Image
          src={ellipseImg}
          alt="Lime Arch Base"
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* 2. Central Model Wrapper */}
      <div className="relative z-10 -mb-1 flex w-[300px] justify-center sm:w-[380px] md:w-[420px] lg:w-[660px]">
        <Image
          src={modelImg}
          alt="Student learning"
          priority
          className="h-auto w-full object-contain"
        />

        {/* 3. Floating Card 1: UI/UX Design (Left Shoulder) */}
        <div className="absolute -left-10 top-20 z-20 rounded-2xl bg-white px-4 py-3 text-left sm:-left-16 sm:top-24 sm:px-5 sm:py-3.5 lg:-left-2 lg:top-26">
          <p className="text-base font-medium leading-none text-neutral-900 sm:text-sm">
            UI/UX Design
          </p>
          <p className="mt-1.5 whitespace-nowrap text-xs text-neutral-500 sm:text-[11px]">
            200 Courses &bull; 1000+ Students
          </p>
        </div>

        {/* 4. Floating Card 2: Learning Progress (Right of head/shoulder) */}
        {/* <div className="absolute -right-8 top-24 z-20 w-40 rounded-2xl border border-black/5 bg-white p-3.5 text-left shadow-xl sm:-right-16 sm:top-28 sm:w-48 sm:p-4">
          <p className="text-[11px] font-medium text-neutral-500">
            Learning Progress
          </p>
          <p className="mt-1 text-2xl font-extrabold leading-tight text-neutral-900 sm:text-3xl">
            55%
          </p>
          <Progress value={55} className="mt-2.5 h-1.5 bg-neutral-100 [&>div]:bg-secondary" />
        </div> */}

        {/* 5. Floating Card 3: Happy Students (Bottom Left beside laptop) */}
        {/* <div className="absolute -left-12 bottom-6 z-20 rounded-2xl border border-black/5 bg-white px-4 py-3 text-left shadow-xl sm:-left-20">
          <p className="text-xs font-bold text-neutral-900 sm:text-sm">
            Happy Students
          </p>
          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-neutral-500">
            <span className="font-bold text-neutral-900">4.5</span>
            <span>(240)</span>
            <Star className="size-3 fill-amber-400 text-amber-400" />
          </div>

          <div className="mt-2 flex items-center -space-x-1.5">
            {STUDENT_AVATARS.map((url, i) => (
              <div
                key={i}
                className="relative size-6 overflow-hidden rounded-full border-2 border-white shadow-sm"
              >
                <Image
                  src={url}
                  alt={`Student ${i + 1}`}
                  fill
                  sizes="24px"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="flex size-6 items-center justify-center rounded-full border-2 border-white bg-secondary text-[9px] font-bold text-neutral-900 shadow-sm">
              2K+
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

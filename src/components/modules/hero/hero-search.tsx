"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSearch() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
        Get Access to Hundreds <br className="hidden sm:inline" />
        Courses Available
      </h1>

      <p className="mt-6 max-w-4xl text-lg font-normal text-gray-100 sm:text-base">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>

      <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-16 flex w-full max-w-xl items-center justify-center gap-3 px-4 sm:px-0"
    >
      {/* 1. Independent Capsule Input Field */}
      <div className="flex h-12 flex-1 items-center gap-2.5 rounded-full bg-white px-5 shadow-lg transition-all focus-within:ring-2 focus-within:ring-secondary/50">
        <Search className="size-4 shrink-0 text-neutral-400" />
        <input
          type="text"
          placeholder="Course, topic, creator"
          className="w-[461px] bg-transparent text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
        />
      </div>

      {/* 2. Standalone Search Button */}
      <Button
        type="submit"
        variant="secondary"
        className="h-12 rounded-full px-7 text-sm font-normal shadow-lg transition-transform active:scale-95"
      >
        Search
      </Button>
    </form>
    </div>
  );
}
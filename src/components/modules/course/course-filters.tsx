"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FILTER_ROWS = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],

  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],

  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ],
] as const;



export default function CourseFilters() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const handleSelect = (category: string) => {
    setActiveCategory(category);
  
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3.5 px-4 mt-8">
      
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {FILTER_ROWS[0].map((category) => {
          const isActive = activeCategory === category;
          return (
            <Button
              key={category}
              type="button"
              onClick={() => handleSelect(category)}
              className={cn(
                "h-10 rounded-full px-5 text-xs sm:text-sm font-normal transition-all shadow-none border-0",
                isActive
                  ? "bg-secondary text-foreground hover:bg-secondary/90 font-medium"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80 hover:text-neutral-900"
              )}
            >
              {category}
            </Button>
          );
        })}
      </div>

   
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {FILTER_ROWS[1].map((category) => {
          const isActive = activeCategory === category;
          return (
            <Button
              key={category}
              type="button"
              onClick={() => handleSelect(category)}
              className={cn(
                "h-10 rounded-full px-5 text-xs sm:text-sm font-normal transition-all shadow-none border-0",
                isActive
                  ? "bg-secondary text-foreground hover:bg-secondary/90 font-medium"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80 hover:text-neutral-900"
              )}
            >
              {category}
            </Button>
          );
        })}
      </div>

     
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {FILTER_ROWS[2].map((category) => {
          const isActive = activeCategory === category;
          return (
            <Button
              key={category}
              type="button"
              onClick={() => handleSelect(category)}
              className={cn(
                "h-10 rounded-full px-5 text-xs sm:text-sm font-normal transition-all shadow-none border-0",
                isActive
                  ? "bg-secondary text-foreground hover:bg-secondary/90 font-medium"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80 hover:text-neutral-900"
              )}
            >
              {category}
            </Button>
          );
        })}

        <button
          type="button"
          className="ml-2 text-xs sm:text-sm font-semibold text-primary transition-opacity hover:opacity-80 focus:outline-none"
        >
          + More
        </button>
      </div>
    </div>
  );
}
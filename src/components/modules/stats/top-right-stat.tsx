import React from "react";
import CourseCard from "../course/course-card";
import Image from "next/image";
import model1 from "@/assets/stats/model1.png";
import coil1 from "@/assets/stats/coil1.png";
import { Progress } from "@/components/ui/progress";

const data = {
  lessions: 17,
  duration: 136,
  comments: 23,
  title: "Learn Figma from Basic",
  organization: "purepearl studio",
  rattings: 4.5,
  level: "Biginner",
  charge: 25,
};
const TopRightStats = () => {
  return (
    <div className="relative">
      <CourseCard course={data} />

      <div className="absolute top-0">
        <Image alt="model 1" src={model1} />
      </div>

      
        <div className="absolute top-44 right-18 rounded-2xl border border-black/5 bg-white p-3.5 text-left min-w-[232px] min-h-[138px] flex flex-col justify-between">
          <p className="text-[14px] font-medium text-neutral-500">
            Learning Progress
          </p>
          <p className="mt-1 font-extrabold leading-tight text-neutral-900 text-5xl">
            55%
          </p>
          <Progress
            value={55}
            className="mt-2.5 h-1.5 bg-neutral-100 [&>div]:bg-secondary"
          />
        </div>

        <div className="absolute top-6 right-4">
             <Image alt="coil 1" src={coil1} />
        </div>
      
    </div>
  );
};

export default TopRightStats;

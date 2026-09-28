import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import { ICourse } from "@/types/course.type";
import bannerImg from "@/assets/shared/course.jpg";
import { AvatarGroupCountExample } from "@/components/shared/avatar-group/avatar-group";

interface Props {
  course: ICourse;
}

const CourseCard = ({ course }: Props) => {
  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-white p-4 max-w-[373px]">
      {/* 1. Thumbnail Image with Overlay Badges */}
      <div className="relative h-[195px] w-full overflow-hidden rounded-2xl">
        <Image
          src={bannerImg}
          alt={course.title}
          priority
          fill
          className="object-cover"
        />

        {/* Floating Badges */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        {/* Floating Pill Badges */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-1.5 text-[10px] font-medium text-gray-600">
          <span className="rounded-full  bg-white/30 px-3 p-1 backdrop-blur-md">
            17 Lessons
          </span>
          <span className="rounded-full  bg-white/30 px-3 p-1 backdrop-blur-md">
            2 hours 16 mins
          </span>
          <span className="rounded-full  bg-white/30 px-3 p-1 backdrop-blur-md">
            59 Comments
          </span>
        </div>
      </div>

      {/* 2. Title & Ratings */}
      <div className="mt-4 flex items-start justify-between gap-2">
        <h3 className="text-xl font-semibold leading-tight text-neutral-900 line-clamp-1">
          {course.title}
        </h3>
        <div className="flex shrink-0 items-center gap-1 text-base font-light text-neutral-700">
          <span>{course.rattings}</span>
          <Star className="size-4 fill-neutral-400 text-slate-300 border-0" />
        </div>
      </div>

      {/* 3. Author / Organization */}
      <p className="mt-1 text-xs text-neutral-500">
        by{" "}
        <span className="font-light text-primary">{course.organization}</span>
      </p>

      {/* 4. Level Badge & Avatar Group */}
      <div className="mt-4 flex items-center gap-3">
        <div className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-normal text-neutral-700">
          <BarChart2 className="size-3.5 text-neutral-600" />
          <span>{course.level}</span>
        </div>

        <AvatarGroupCountExample />
      </div>

      {/* 5. Pricing */}
      <div className="mt-4">
        <span className="text-2xl font-semibold text-primary">
          ${course.charge}
        </span>
        <span className="text-xs text-neutral-400 font-medium">/lifetime</span>
      </div>
    </div>
  );
};

export default CourseCard;

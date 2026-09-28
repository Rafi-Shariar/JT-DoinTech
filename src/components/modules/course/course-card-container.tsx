import { courses } from "@/data/course.data";
import React from "react";
import CourseCard from "./course-card";

const CourseCardContainer = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-9">
      {courses.map((course) => (
        <CourseCard key={course.title} course={course} />
      ))}
    </div>
  );
};

export default CourseCardContainer;

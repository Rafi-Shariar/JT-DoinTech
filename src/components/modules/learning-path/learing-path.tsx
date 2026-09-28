import React from "react";
import LearningCards from "./learing-cards";

const LearingPaths = () => {
  return (
    <div className="my-16 max-w-7xl mx-auto">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold">
          Explore Diverse Learning Paths at Bytespace
        </h1>
        <p className="text-lg mt-6 text-gray-400">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>

      <LearningCards />
    </div>
  );
};

export default LearingPaths;

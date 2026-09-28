import React from "react";
import TopRightStats from "./top-right-stat";

const StatsUpperSection = () => {
  return (
    <div className="px-2 lg:px-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {/* content */}
      <div>
        <h1 className="text-[44px] font-semibold">
          Your Path to Professional Growth Starts Here!
        </h1>
        <p className="text-lg text-gray-700 max-w-[550px] mt-9">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>

        <div className="grid grid-cols-3 mt-9 max-w-lg">
          <div>
            <h2 className="font-medium text-[44px] text-primary">12K</h2>
            <p className="text-lg">Students</p>
          </div>

          <div>
            <h2 className="font-medium text-[44px] text-primary">70+</h2>
            <p className="text-lg">Courses</p>
          </div>

          <div>
            <h2 className="font-medium text-[44px] text-primary">16</h2>
            <p className="text-lg">Creators</p>
          </div>
        </div>
      </div>

      <div>
        <TopRightStats />
      </div>
    </div>
  );
};

export default StatsUpperSection;

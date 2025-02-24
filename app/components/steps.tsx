import { div } from "framer-motion/client";
import React from "react";

const Steps = () => {
  return (
    <div>
        <div className="flex justify-center items-center text-center px-4 mt-30">
        <div>
            <p className="text-3xl md:text-5xl font-bold text-gray-900">
            Shaping and Empowering Future IT Talent
            </p>
            <p className="text-3xl md:text-5xl font-bold text-gray-900">
            Through a Seamless Process
            </p>
        </div>
        </div>
    <div className="flex justify-evenly mt-20">
    <div className="w-80 p-6 bg-white rounded-lg relative">
      {/* Step Number */}
      <span className="text-gray-300 text-9xl font-bold absolute top-2 right-4">
        1
      </span>

      {/* Step Title */}
      <p className="text-gray-400 text-sm font-semibold tracking-wide">
        STEP 1
      </p>

      {/* Main Heading */}
      <h2 className="text-5xl font-bold text-gray-900 leading-tight">
        Discover <br /> Tech
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">
            Explore internships across various
        technologies that align with your career
        goals. Start your journey by selecting a
        field that excites you.
      </p>
    </div>
    <div className="w-80 p-6 bg-white  rounded-lg relative">
      {/* Step Number */}
      <span className="text-gray-300 text-9xl font-bold absolute top-2 right-4">
        2
      </span>

      {/* Step Title */}
      <p className="text-gray-400 text-sm font-semibold tracking-wide">
        STEP 2
      </p>

      {/* Main Heading */}
      <h2 className="text-5xl font-bold text-gray-900 leading-tight">
        Evaluate <br /> Skill
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">
        Our process includes an interview and a
        short evaluation task to assess your
        skills and readiness, helping us match
        you with the right opportunity.
      </p>
    </div>
    <div className="w-80 p-6 bg-white  rounded-lg relative">
      {/* Step Number */}
      <span className="text-gray-300 text-9xl font-bold absolute top-2 right-4">
        3
      </span>

      {/* Step Title */}
      <p className="text-gray-400 text-sm font-semibold tracking-wide">
        STEP 3
      </p>

      {/* Main Heading */}
      <h2 className="text-5xl font-bold text-gray-900 leading-tight">
        Track <br /> Record
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">
        Once selected, gain access to our iPortal to monitor your internship
        progress, track your achievements, and stay on top of your goals.
      </p>
    </div>
    </div>
    <div className="flex justify-center items-center mt-10">
        <p className="text-sm">Still have a question? Browse <a href="" className="text-blue-400 underline">documentation</a> or <a href=""  className="text-blue-400 underline">submit a ticket.</a></p>
    </div>
    </div>
  );
};

export default Steps;

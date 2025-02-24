import React from "react";
import app from "../assets/app-development.png";
import ai from "../assets/thinking.png";
import contents from "../assets/content-1.png";
import archi from "../assets/architecture.png";
import pen from "../assets/pen-tool.png";
import program from "../assets/programming.png";

const CardsGrid = () => {
  return (
    <div className="flex justify-center p-4 mt-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {/* Card 1: App Development */}
        <div className="relative bg-pink-100/50 p-6 rounded-2xl shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg group cursor-pointer max-w-xs transform hover:translate-y-[-10px]">
          <div className="flex items-center gap-4">
            <img src={app} alt="App Development" className="w-12 h-12" />
          </div>
          <h3 className="mt-6 font-semibold text-lg transition-all duration-300 group-hover:translate-y-[-10px]">
            App Development
          </h3>
          <p className="text-gray-600 text-base mt-4 transition-all duration-300 group-hover:translate-y-[-10px]">
            We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic.
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-black-600 font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-10px]"
          >
            Explore More →
          </a>
        </div>

        {/* Card 2: Artificial Intelligence */}
        <div className="relative bg-purple-100/50 p-6 rounded-2xl shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg group cursor-pointer max-w-xs transform translate-y-[-100px] hover:translate-y-[-30px]">
          <div className="flex items-center gap-4">
            <img src={ai} alt="Artificial Intelligence" className="w-12 h-12" />
            <span className="bg-gray-200 text-xs px-3 py-1 rounded-lg ml-20">EXCLUSIVE</span>
          </div>
          <h3 className="mt-6 font-semibold text-lg transition-all duration-300 group-hover:translate-y-[-10px]">
            Artificial Intelligence
          </h3>
          <p className="text-gray-600 text-base mt-4 transition-all duration-300 group-hover:translate-y-[-10px]">
            Gain practical experience in Artificial Intelligence by building and deploying machine learning models. Learn key concepts, data processing, and model training to prepare for real-world AI challenges.
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-black-600 font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-10px]"
          >
            Explore More →
          </a>
        </div>

        {/* Card 3: Web Development */}
        <div className="relative bg-rose-100 p-6 rounded-2xl shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg group cursor-pointer max-w-xs transform hover:translate-y-[-10px]">
          <div className="flex items-center gap-4">
            <img src={program} alt="Web Development" className="w-12 h-12" />
          </div>
          <h3 className="mt-6 font-semibold text-lg transition-all duration-300 group-hover:translate-y-[-10px]">
            Web Development
          </h3>
          <p className="text-gray-600 text-base mt-4 transition-all duration-300 group-hover:translate-y-[-10px]">
            Exceptional web experiences engage, inspire, and drive results – all built on a foundation of strategic, innovative design.
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-black-600 font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-10px]"
          >
            Explore More →
          </a>
        </div>

        {/* Card 4: Graphics Design */}
        <div className="relative bg-blue-50 p-6 rounded-2xl shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg group cursor-pointer max-w-xs transform hover:translate-y-[-10px]">
          <div className="flex items-center gap-4">
            <img src={pen} alt="Graphics Design" className="w-12 h-12" />
          </div>
          <h3 className="mt-6 font-semibold text-lg transition-all duration-300 group-hover:translate-y-[-10px]">
            Graphics Design
          </h3>
          <p className="text-gray-600 text-base mt-4 transition-all duration-300 group-hover:translate-y-[-10px]">
            Your journey to becoming a skilled graphic designer. Wherever your creativity is headed, we provide the inspiration, tools, and support to help you bring your vision to life.
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-black-600 font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-10px]"
          >
            Explore More →
          </a>
        </div>

        {/* Card 5: 2d/3d Architecture */}
        <div className="relative bg-orange-50 p-6 rounded-2xl shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg group cursor-pointer max-w-xs transform translate-y-[-100px] hover:translate-y-[-30px]">
          <div className="flex items-center gap-4">
            <img src={archi} alt="2d/3d Architecture" className="w-12 h-12" />
          </div>
          <h3 className="mt-6 font-semibold text-lg transition-all duration-300 group-hover:translate-y-[-10px]">
            2d/3d Architecture
          </h3>
          <p className="text-gray-600 text-base mt-4 transition-all duration-300 group-hover:translate-y-[-10px]">
            We’re mentors, guides, and partners in your journey to becoming a game developer. Wherever your passion leads, we provide the skills, tools, and support to help you bring your game ideas to life.
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-black-600 font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-10px]"
          >
            Explore More →
          </a>
        </div>

        {/* Card 6: Digital Marketing */}
        <div className="relative bg-sky-50 p-6 rounded-2xl shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg group cursor-pointer max-w-xs transform hover:translate-y-[-10px]">
          <div className="flex items-center gap-4">
            <img src={contents} alt="Digital Marketing" className="w-12 h-12" />
            <span className="bg-gray-200 text-xs px-3 py-1 rounded-lg ml-30">NEW</span>
          </div>
          <h3 className="mt-6 font-semibold text-lg transition-all duration-300 group-hover:translate-y-[-10px]">
            Digital Marketing
          </h3>
          <p className="text-gray-600 text-base mt-4 transition-all duration-300 group-hover:translate-y-[-10px]">
            We’re mentors, guides, and partners in your journey to mastering digital marketing. Wherever your career goals lead, we provide the knowledge, tools, and support to help you drive impactful marketing strategies.
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-black-600 font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-10px]"
          >
            Explore More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
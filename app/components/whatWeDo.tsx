import React from "react";
import Sem1 from "../assets/sem1.webp";
import Sem2 from "../assets/sem2.webp";
import Sem3 from "../assets/sem3.webp";

const WeDo = () => {
  return (
    <div className="flex flex-wrap justify-between items-center mt-40 px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-[50%]">
        <div className="rounded-2xl col-span-2 row-span-2">
          <img
            src={Sem1}
            alt="Audience"
            className="mx-5 w-[90%] h-[95%] object-cover rounded-2xl"
          />
        </div>

        <div className="overflow-hidden rounded-2xl col-span-1 row-span-1">
          <img
            src={Sem3}
            alt="Seminar Hall"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="absolute overflow-hidden rounded-2xl col-span-1 row-span-2 mt-60 ml-70">
          <img
            src={Sem2}
            alt="Speaker"
            className="w-100 h-[200%] object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="w-[45%] p-8">

        <div className="inline-block px-5 py-2 bg-blue-300/30 rounded-full">
          <p className="text-blue-800 text-sm font-medium">what we do...?</p>
        </div>

        <div className="mt-3">
          <p className="text-4xl font-bold text-gray-900">Empowering Connections</p>
          <p className="text-4xl font-bold text-gray-900">
            In the{" "}
            <span className="relative text-black-700 underline decoration-blue-300 
    before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:bg-blue-300 
    before:transition-all before:duration-300 before:ease-in-out before:z-0
    hover:before:h-full hover:text-black px-2 overflow-hidden">
    <span className="relative z-10">Digital World</span>
</span>


          </p>
        </div>

        <div className="mt-4">
          <p className="text-base text-gray-500 font-semibold">
            We equip future professionals with the essential tools to thrive in both traditional and digital IT landscapes.
          </p>
        </div>

        <div className="mt-6 text-gray-500 text-lg leading-relaxed">
          <p>
            With years of experience and countless successful placements, Ezitech Institute has perfected a unique learning process that goes beyond theory. We delve deep into practical skills and real-world applications, helping students understand, connect, and excel in the ever-evolving tech market.
          </p>
        </div>
        <button className="absolute bg-blue-600 text-white px-10 py-6 rounded-full shadow-md hover:bg-blue-900 mt-10">
              MORE ABOUT US
        </button>
      </div>
    </div>
  );
};

export default WeDo;

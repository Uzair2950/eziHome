import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Sem1 from "../assets/sem1.webp";
import Sem2 from "../assets/sem2.webp";
import Sem3 from "../assets/sem3.webp";


const Counter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const increment = end / (duration * 60); // FPS-based increment
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 1000 / 60);
      return () => clearInterval(interval);
    }, [end, duration]);
  
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-blue-900"
      >
        {count.toLocaleString()}
      </motion.span>
    );
  };
  
  

const WeDo = () => {
  return (
    <div className="flex flex-wrap justify-between items-center mt-70 px-8 ">


      <div className="w-[45%] p-16 ml-auto">


        <div className="mt-3">
          <p className="text-5xl font-semibold text-gray-900 leading-tight">Hundreds of</p>
          <p className="text-5xl font-semibold text-gray-900 leading-tight">Successful</p>
          <p className="text-5xl font-semibold text-gray-900 leading-tight">Internships &</p>
          <p className="text-5xl font-semibold text-gray-900 leading-tight">
            {" "}
                <span className="relative text-black-700 underline decoration-blue-300 
                    before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:bg-blue-300 
                    before:transition-all before:duration-300 before:ease-in-out before:z-0
                    hover:before:h-full hover:text-black px-2 overflow-hidden">
                <span className="relative z-10">Countings</span>
         </span>


          </p>
        </div>

        <div className="mt-6 text-gray-500 text-lg leading-relaxed pr-15">
          <p>
          With a commitment to quality training and career advancement, we've empowered students from diverse backgrounds. Through structured Internship, hands-on projects, and expert mentorship, Ezitech Institute ensures that every student builds a solid foundation in IT.
          </p>
        </div>
      </div>
      <div className="max-w-lg mx-auto p-4">
      <div className="grid grid-cols-2 gap-0 bg-white rounded-xl shadow-lg overflow-hidden ">
  <div className="p-10 text-center border-r border-gray-200">
    <p className="text-5xl font-bold text-blue-900"><Counter end={37} />+</p>
    <p className="text-gray-500">Industry MoUs</p>
  </div>
  <div className="p-10 text-center border-b border-gray-200">
    <Counter end={327} />
    <p className="text-gray-500">Active Students</p>
  </div>
  <div className="p-10 text-center border-r border-t border-gray-200">
  <p className="text-5xl font-bold text-blue-900"><Counter end={98} />%</p>
    <p className="text-gray-500">Positive Feedback</p>
  </div>
  <div className="p-10 text-center">
    <Counter end={6663} />
    <p className="text-gray-500">Successful Graduates</p>
  </div>
</div>
    </div>
    </div>
  );
};

export default WeDo;

import React from "react";
import blue from "../assets/blueCircle.webp"
const CTASection = () => {
  return (
    <div className="w-full h-80 bg-white shadow-xl border border-gray-100 rounded-xl p-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-20">
      <div className="text-center md:text-left pr-80">
        <h2 className="text-6xl font-bold text-gray-900">Ready to get started?</h2>
        <p className="text-gray-600 text-xl mt-8">
          At Ezitech, we constantly push boundaries to deliver excellence.
          Our commitment to quality and innovation makes us your trusted 
          partner for growth and success.
        </p>
      </div>
      <div className="relative mt-6 md:mt-0">
        <img src={blue} alt="" className="absolute ml-18 mt-[-20px]" />
      <button className="w-60 h-20 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
          GET STARTED NOW
        </button>
      </div>
    </div>
  );
};

export default CTASection;
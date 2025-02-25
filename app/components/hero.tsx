import React, { useRef } from 'react';
import HeroImg from '../assets/Hero.png';
import TypingAnimation from './typingAnimation'
import { FaSearch,FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaBehance, FaLinkedinIn, FaYoutube, FaHeart } from 'react-icons/fa';
import Ezi1 from '../assets/ezi1.png'
import Ezi2 from '../assets/ezi2.png'
import Ezi3 from '../assets/ezi3.png'
const HeroSection = () => {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute inset-0 bg-blue-500 opacity-40"></div>

      <div className="absolute top-0 left-0 right-0 p-4 bg-transparent bg-opacity-50 flex justify-between items-center">
        <div className="relative left-38 flex space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="w-3 h-3 text-white" />
            <p className="text-white text-sm">+923455555396</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="w-3 h-3 text-white" />
            <p className="text-white text-sm">INFO@EZITECH.ORG</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="w-3 h-3 text-white" />
            <p className="text-white text-sm">WESTRIDGE 1, OFFICE #304-G PESHAWAR ROAD, RAWALPINDI, PAKISTAN</p>
          </div>
        </div>

        <div className="relative right-43 flex space-x-2">
          <FaFacebookF className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer" />
          <FaInstagram className="w-5 h-5 text-white hover:text-pink-500 cursor-pointer" />
          <FaBehance className="w-5 h-5 text-white hover:text-blue-600 cursor-pointer" />
          <FaLinkedinIn className="w-5 h-5 text-white hover:text-blue-700 cursor-pointer" />
          <FaYoutube className="w-5 h-5 text-white hover:text-red-600 cursor-pointer" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white mt-70">
        <h1 className="text-5xl font-bold mb-4">Learn the fundamentals with our</h1>
        <p className="text-5xl font-bold mb-4">
          Experts in <TypingAnimation/>
         
        </p>
        <div className="flex flex-col items-center space-y-4 mt-6">
  {/* Search Input */}
  <div className="flex items-center bg-white rounded-full shadow-md px-4 py-3.5 w-full max-w-md mt-20">
    <input
      type="text"
      placeholder="Search Internships..."
      className="w-full px-2 py-1 text-gray-900 bg-transparent focus:outline-none"
    />
    <FaSearch className="text-gray-400" />
  </div>


  <div className="flex items-center space-x-2 text-white mt-5">
    <p className="text-lg">Explore our more useful products</p>
    <FaHeart />
  </div>


  <div className="flex items-center justify-between space-x-4">
    <img src={Ezi3}  className="h-14 w-55 mr-10" />
    <img src={Ezi1}  className="h-10 w-45 " />
    <img src={Ezi2}  className="h-40 w-80 mb-6" />
  </div>
</div>
</div>
    </div>
  );
};

export default HeroSection;

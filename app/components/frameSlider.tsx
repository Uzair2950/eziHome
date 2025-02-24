import React,{useRef} from "react";
import { motion } from "framer-motion";
import adobe from "../assets/adobe-animate.png"
import adobex from "../assets/adobe-xd.png"
import blender from "../assets/blender.png"
import express from "../assets/express-js.png";
import flutter from "../assets/flutter-1.png";
import yoast from "../assets/yoast.png";
import laravel from "../assets/laravel.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import wordpress from "../assets/wordpress-1.png"
import gamemaker from "../assets/game-maker-2.png";
import unreal from "../assets/unreal-engine-1.png"

const logos = [
  adobe, adobex, blender, flutter, yoast, laravel, react, node, express, gamemaker , wordpress,unreal
];

const LogoSlider = () => {
  return (
    <div className="overflow-hidden bg-white py-10">
     <motion.div
        className="flex space-x-10 w-[200%]"
        animate={{ x: ["0vw", "-10vw"] }}  // Use viewport width for smoother motion
        transition={{
            repeat: Infinity,
            duration: 10,  // Increase duration to slow it down
            ease: "linear",
        }}
        >

        {[...logos, ...logos].map((logo, index) => (
          <img key={index} src={logo} alt="Tech Logo" className="h-7 mx-10" />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;

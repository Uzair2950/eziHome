import React,{useEffect,useState} from "react";
import logo from "../assets/blue-official.png"
const Navbar = () => {
  const [bgOpacity, setBgOpacity] = useState("bg-white/70"); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgOpacity("bg-white/50");
      } else {
        setBgOpacity("bg-white/70"); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`mx-40 my-15 fixed top-0 left-0 w-300 ${bgOpacity} backdrop-blur-sm shadow-lg border border-white/20 rounded-lg px-6 py-2 flex justify-between items-center z-50`}>
      <div className="text-white font-bold text-xl">
        <img src={logo} alt="eziline logo" className="w-40"/>
      </div>
      <ul className="flex space-x-10 text-white">
        <li className="text-black hover:text-blue-500 cursor-pointer ">HOME</li>
        <li className="text-black hover:text-blue-500 cursor-pointer">ABOUT</li>
        <li className="text-black hover:text-blue-500 cursor-pointer">INTERNSHIPS</li>
        <li className="text-black hover:text-blue-500 cursor-pointer">CAREERS</li>
        <li className="text-black hover:text-blue-500 cursor-pointer">COURSES</li>
        <li className="text-black hover:text-blue-500 cursor-pointer">TECH BLOGS</li>
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600">
        Portal Login
      </button>
    </nav>
  );
};

export default Navbar;

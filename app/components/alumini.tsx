import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import fatima from "../assets/fatima.png";
import amir from "../assets/amir.png";
import raheel from "../assets/raheel.png";
import muzamil from "../assets/muzammil.png";
import rafia from "../assets/rafia.png";
import qammer from "../assets/Screenshot-2024-11-02-013820.png";
import { FaLinkedinIn, FaGithubAlt, FaInstagram, FaStackOverflow, FaTwitter, FaAmazon } from 'react-icons/fa';

const testimonials = [
  {
    name: "Raheel A.",
    role: "Game Dev.",
    img: raheel,
    text: "Early in my Game Development internship, and I’m already impressed by the mentorship and resources. Ezitech provides a fantastic environment to build real-world game development skills. Thank you.",
    icon: FaLinkedinIn,
  },
  {
    name: "Amir S.",
    role: "Digital Marketing",
    img: amir,
    text: "I've just started my Digital Marketing internship, and I’m already impressed by the in-depth mentorship and support from the team. Ezitech truly creates an ideal environment for growth in digital marketing.",
    icon: FaGithubAlt,
  },
  {
    name: "Qamar N.",
    role: "MERN Developer",
    img: qammer,
    text: "I'm still in the early stages of my MERN Stack internship, but I’m already impressed by the guidance and support from the mentors. Ezitech has exceeded my expectations.",
    icon: FaInstagram,
  },
  {
    name: "Fatima S.",
    role: "Graphics Designer",
    img: fatima,
    text: "Early in my Graphic Design internship, and I’m already impressed by the mentorship and support. Ezitech provides the perfect environment to learn and grow as a designer. Thank you, Ezitech!",
    icon: FaStackOverflow,
  },
  {
    name: "Muzammil J.",
    role: "WordPress Dev.",
    img: muzamil,
    text: "Just started my WordPress internship, and I’m already impressed by the mentorship and support. Ezitech offers a great environment to learn and build real skills. Thank you, Ezitech.",
    icon: FaTwitter,
  },
  {
    name: "Rafia K..",
    role: "Machine Learning",
    img: rafia,
    text: "I'm in the early stages of my Machine Learning internship, and I'm already amazed by the level of expertise and support from the mentors. The hands-on projects and in-depth guidance make complex topics easier to understand. Ezitech is truly an ideal place to build strong foundations in Machine Learning.",
    icon: FaAmazon,
  },
];

const Alumni = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center mt-20 px-4">
      <p className="text-5xl font-bold text-gray-900">Alumni 😍</p>
      <p className="text-lg text-gray-700 max-w-2xl mt-2">
        Our interns consistently share positive experiences, highlighting the practical skills and professional growth they achieve with us.
      </p>

      {/* Full-width Swiper container */}
      <div className="w-full mt-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4} // Default number of slides
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={8000}
          freeMode={true}
          freeModeMomentum={false}
          allowTouchMove={false}
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide on mobile
            1024: { slidesPerView: 2 }, // 2 slides on tablets
            1280: { slidesPerView: 3 }, // 3 slides on laptops/desktops
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 mx-2"> {/* Added mx-2 for spacing */}
                <div className="flex items-center gap-3">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div className="text-left">
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto">
                    {React.createElement(testimonial.icon, { className: "w-6 h-6 text-gray-700" })}
                  </div>
                </div>
                <p className="text-gray-800 mt-4 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Alumni;
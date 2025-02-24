import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white-900 py-10 text-gray-900 mt-30">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 px-6">
        <div className='flex flex-col items-center justify-center'>
          <p className="text-base leading-6">Office #304-B, Amna Plaza, Main Peshawar Rd, Rawalpindi, Punjab</p>
          <p className="text-base leading-6 mt-2">(92) 337-7777860</p>
          <p className="text-base leading-6 mt-2 font-semibold">info@ezitech.org</p>
        </div>
        <div>
          <h3 className="text-xl text-left font-semibold mb-4">Explore More</h3>
          <ul className="space-y-2 text-base leading-6 text-left">
            <li><a href="#"><p className='text-gray-400 hover:text-gray-900'>About Us</p></a></li>
            <li><a href="#"><p className='text-gray-400 hover:text-gray-900'>Partners</p></a></li>
            <li><a href="#"><p className='text-gray-400 hover:text-gray-900'>Portfolio</p></a></li>
            <li><a href="#"><p className='text-gray-400 hover:text-gray-900'>Careers</p></a></li>
            <li><a href="#"><p className='text-gray-400 hover:text-gray-900'>Blog</p></a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl text-left font-semibold mb-4">Internships</h3>
          <ul className="space-y-2 text-base leading-6 text-left">
            <li><a href="#"><p className='text-gray-400 hover:text-gray-900'>Strategy</p></a></li>
            <li><a href="#"><p className='text-gray-400 hover:text-gray-900'>eCommerce</p></a></li>
            <li><a href="#"><p className='text-gray-400 hover:text-gray-900'>Digital Marketing</p></a></li>
            <li><a href="#"><p className='text-gray-400 hover:text-gray-900'>Branding</p></a></li>
            <li><a href="#"><p className='text-gray-400 hover:text-gray-900'>Design</p></a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl text-left font-semibold mb-4">Updates</h3>
          <p className="text-base text-left leading-6 mb-4">Subscribe to our newsletter to get the latest news & updates.</p>
          <div className="flex">
            <input type="email" placeholder="Enter email address" className="w-full p-3 border border-gray-300 rounded-l-md text-base" />
            <div className="text-black-100 px-5 py-3 rounded-md font-semibold hover:bg-blue-500 hover:text-white-100 hover:rounded-md">
                <span>GO</span>
            </div>
        </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 border-t pt-6 text-center text-base text-gray-700 flex justify-around">
        <p>© 2024 Ezitech Institute. All rights reserved | Design & Develop by Ezitech Solutions</p>
        <div className="flex justify-center space-x-6">
          <a href="#"><p className='text-gray-400 hover:text-gray-900'>Terms & Conditions</p></a>
          <a href="#"><p className='text-gray-400 hover:text-gray-900'>Privacy Policy</p></a>
        </div>
      </div>
    </footer>
  );
}
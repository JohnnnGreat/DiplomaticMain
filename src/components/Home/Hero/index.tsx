import React from "react";
import Svg from "../../../../public/blueelip.svg";
import Link from "next/link";

const Hero = () => {
   return (
      <section className="relative bg-white overflow-hidden min-h-screen p-3 flex justify-center items-center text-center">
         {/* Decorative shapes */}

         <div className="hidden md:block absolute top-10 left-10 w-16 h-16 border-8 border-brandColor rounded-full animate-slow-spin"></div>
         <div className="hidden md:block absolute top-20 right-20 w-16 h-16 border-8 border-gray-300 transform rotate-45 animate-slow-spin-reverse"></div>
         <div className="hidden md:block absolute bottom-10 right-10 w-16 h-16 border-8 border-brandColor rounded-full animate-slow-spin"></div>

         {/* Blur Elipsis */}

         <svg
            width="1280"
            height="620"
            viewBox="0 0 1280 620"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0"
         >
            <g
               opacity="0.61"
               filter="url(#filter0_f_1_27)"
            >
               <ellipse
                  cx="649"
                  cy="631"
                  rx="395"
                  ry="404"
                  fill="url(#paint0_linear_1_27)"
               />
            </g>
            <defs>
               <filter
                  id="filter0_f_1_27"
                  x="-146"
                  y="-173"
                  width="1590"
                  height="1608"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
               >
                  <feFlood
                     flood-opacity="0"
                     result="BackgroundImageFix"
                  />
                  <feBlend
                     mode="normal"
                     in="SourceGraphic"
                     in2="BackgroundImageFix"
                     result="shape"
                  />
                  <feGaussianBlur
                     stdDeviation="200"
                     result="effect1_foregroundBlur_1_27"
                  />
               </filter>
               <linearGradient
                  id="paint0_linear_1_27"
                  x1="212"
                  y1="260"
                  x2="649"
                  y2="1035"
                  gradientUnits="userSpaceOnUse"
               >
                  <stop
                     stop-color="#FF8800"
                     stop-opacity="0"
                  />
                  <stop
                     offset="1"
                     stop-color="#FFDCB5"
                     stop-opacity="0.29"
                  />
               </linearGradient>
            </defs>
         </svg>

         {/* Hero Content */}
         <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
               Welcome to The Diplomats <br />
               <span className="text-brandColor">Digital</span> World
            </h1>
            <p className="text-gray-500 text-lg mt-4">...leading the digital revolution!</p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center space-x-4">
               {/* Button 1: Explore Courses */}
               <Link
                  href="/courses"
                  className="bg-black text-white py-2 px-4 md:py-3 md:px-6 rounded-md text-[16px] transition-all duration-300 hover:scale-105 hover:bg-gray-800"
               >
                  Explore Courses
               </Link>

               {/* Button 2: Contact Us */}
               <Link
                  href="/contact"
                  className="border-2 border-brandColor text-black py-2 px-4 md:py-3 md:px-6 rounded-md text-[16px] transition-all duration-300 hover:bg-brandColor hover:text-white hover:scale-105"
               >
                  Contact Us
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Hero;

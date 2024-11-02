import React from "react";
import { aboutConstants } from "./contants";
import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";

const AboutPage = () => {
   const icons = [FaBullseye, FaEye, FaHandsHelping];

   return (
      <React.Fragment>
         <div className="max-w-[1000px] px-4 mx-auto mt-8">
            <p className="text-[#7A7A7A] text-justify text-base text-[1rem]">
               The Diplomats Digital World is made up of specialized and seasoned experts. We are one of the best coding
               centers, dedicated to making your digital training and experience practical and memorable. Our classes
               are for both kids, students, and adults.  
            </p>
            <p className="text-[#7A7A7A] mt-4 text-justify text-base text-[1rem]">
               So, if you're looking for a professional, caring, and reliable digital training center that is
               cost-effective and will provide excellent services you can be proud of, then The Diplomats Digital World
               is your answer.
            </p>
         </div>

         {/* About Cards */}
         <div className="max-w-[1000px] px-4 mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aboutConstants.map((aboutItem, idx) => {
               const Icon = icons[idx];
               return (
                  <div
                     key={idx}
                     className="py-6 px-8 bg-[#ffffff] rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 text-center sm:text-left"
                  >
                     <div className="flex justify-center sm:justify-start items-center gap-2">
                        <Icon className="text-brandColor text-2xl" />
                        <h1 className="text-xl sm:text-2xl font-semibold text-[#333333]">{aboutItem.title}</h1>
                     </div>
                     <p className="mt-3 text-sm sm:text-base text-[#444444]">{aboutItem.description}</p>
                  </div>
               );
            })}
         </div>

         {/* Alts */}
         <div className="max-w-[1000px] px-4 mx-auto mt-20 mb-8 text-center sm:text-left">
            <div className="bg-[#cccccc50] h-2 w-3/4 sm:w-[400px] mx-auto sm:mx-0 rounded-xl"></div>
            <h1 className="text-xl sm:text-2xl mt-4 font-bold">Our Philosophy</h1>
            <p className="text-base sm:text-lg">
               We train <span className="text-black font-semibold">YOU</span>, upgrade{" "}
               <span className="text-black font-semibold">YOU</span>, and position{" "}
               <span className="text-black font-semibold">YOU</span> for a global digital revolution.
            </p>
         </div>
      </React.Fragment>
   );
};

export default AboutPage;

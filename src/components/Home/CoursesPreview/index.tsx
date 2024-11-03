import React from "react";
import { coursesPreview } from "./constant";
import Link from "next/link";

const CoursesPreview = () => {
   return (
      <div className="min-h-screen overflow-hidden bg-[#000000da] flex flex-col items-center justify-center p-4 md:p-8">
         <div className="max-w-screen-lg w-full">
            {" "}
            {/* Adjust max-width and width */}
            {/* Heading */}
            <div className="flex gap-x-4 items-center mb-6">
               <div className="w-[15px] bg-brandColor rounded-[10px] h-[70px]"></div>
               {/* Title */}
               <h2 className="text-2xl md:text-3xl font-bold text-white max-w-[200px]">Our Courses Preview</h2>
            </div>
            {/* Courses Grid */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
               {coursesPreview.map((course: string, index: number) => (
                  <div
                     key={index}
                     className="inline-block px-4 py-2 md:px-6 md:py-3 border border-[#ffffff34] text-white text-base md:text-lg rounded-lg hover:bg-[#00000050] transition-transform transform  whitespace-nowrap"
                  >
                     {course}
                  </div>
               ))}
            </div>
            <div className="flex justify-center">
               {/* View All Button */}
               <Link
                  href="/courses"
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient text-white text-base md:text-lg rounded-lg hover:bg-brandColor-dark transition-transform transform hover:scale-105"
               >
                  View all Courses
               </Link>
            </div>
         </div>
      </div>
   );
};

export default CoursesPreview;

import React from "react";
import DisplayImage from "../../../../public/display.jpg";
import Image from "next/image";

const Display = () => {
   return (
      <div className="relative h-[70vh] flex items-center overflow-hidden">
         {/* Overlay */}
         <div className="w-full bg-black opacity-80 h-full absolute top-0 left-0 z-10"></div>

         {/* Background Image with Zoom Animation */}
         <Image
            src={DisplayImage}
            alt="Display Image"
            className="absolute top-0 left-0 h-full w-full object-cover transform scale-100 transition-transform duration-500 ease-in-out hover:scale-105"
         />

         {/* Text Content */}
         <div className="relative z-20 mx-auto max-w-[1000px] px-4 text-center">
            <h1 className="text-white font-bold w-full text-[8vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.5vw]">
               We train YOU, upgrade YOU, and position YOU for a global digital revolution.
            </h1>
         </div>
      </div>
   );
};

export default Display;

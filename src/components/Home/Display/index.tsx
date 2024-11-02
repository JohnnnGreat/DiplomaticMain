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
            className="absolute top-0 left-0 h-full w-full object-cover animate-slow-zoom"
         />

         {/* Text Content */}
         <div className="relative z-20 mx-auto max-w-[1000px] px-4 text-center">
            <h1 className="text-white font-medium w-full text-[8vw] md:text-[4vw] lg:text-[5vw] xl:text-[4vw]">
               We train <span className="font-bold">YOU</span>, upgrade <span className="font-bold">YOU</span>, and
               position <span className="font-bold">YOU</span> for a global digital revolution.
            </h1>
         </div>
      </div>
   );
};

export default Display;

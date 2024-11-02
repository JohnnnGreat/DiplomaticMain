import React from "react";

const PagesHeader = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="w-full py-2 px-2">
         <div className="h-[150px] sm:h-[200px] bg-brandColor rounded-lg shadow-md max-w-[1000px] flex items-center justify-center mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <h1 className="text-white text-[2rem] sm:text-[3rem] line-clamp-1 md:text-[3.5rem] lg:text-[4rem] font-semibold text-center">
               {children}
            </h1>
         </div>
      </div>
   );
};

export default PagesHeader;

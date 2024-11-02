import React from "react";

const ContactUs = () => {
   return (
      <div className="min-h-screen overflow-hidden bg-[#000000c2] flex flex-col items-center justify-center p-8">
         <div className="max-w-[1000px]">
            {" "}
            {/* Heading */}
            <div className="flex gap-x-4 items-center mb-6">
               <div className="w-[15px] bg-brandColor rounded-[10px] h-[70px]"></div>
               {/* Title */}
               <h2 className="text-3xl font-bold text-white max-w-[200px]">Our Courses Preview</h2>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;

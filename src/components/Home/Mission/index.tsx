import React from "react";

const MissionVisionValues = () => {
   return (
      <section className="bg-gray-50 py-24 px-6">
         <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-start md:space-x-10">
            {/* Left Section: Title and Core Values */}
            <div className="md:w-1/2">
               <div className="flex gap-x-4 items-center mb-6">
                  <div className="w-[15px] bg-brandColor rounded-[10px] h-[70px]"></div>
                  {/* Title */}
                  <h2 className="text-3xl font-bold text-gray-800 max-w-[300px]">Our Mission, Our Vision, and Our Core Value</h2>
               </div>

               {/* Core Values */}
               <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Values</h3>
                  <ul className="grid grid-cols-2 space-y-2 text-gray-500">
                     <li className="flex items-center space-x-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-brandColor"></span>
                        <span>Integrity</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-brandColor"></span>
                        <span>Excellence</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-brandColor"></span>
                        <span>Innovation</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-brandColor"></span>
                        <span>Professionalism</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-brandColor"></span>
                        <span>Business Ethics</span>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Right Section: Mission and Vision */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
               {/* Mission */}
               <div className="bg-brandColor text-white p-6 rounded-md mb-4">
                  <h3 className="text-lg font-semibold">Mission</h3>
                  <p className="mt-2">Exceptional Customer Service</p>
               </div>

               {/* Vision */}
               <div className="bg-gray-100 text-gray-500 p-6 rounded-md">
                  <h3 className="text-lg font-semibold text-gray-800">Vision</h3>
                  <p className="mt-2">Exceeding Customers' Expectations</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MissionVisionValues;

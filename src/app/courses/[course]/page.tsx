"use client";
import { Course, courses } from "@/components/shared/constants";
import PagesHeader from "@/components/shared/PageHeader";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CourseInfo = () => {
   const path = useParams();
   const courseName = path?.course;

   const [courseInformation, setCourseInformation] = useState<Course | null>(null);

   useEffect(() => {
      const getCourseInformation = () => {
         const courseDetails = courses.filter((course) => course?.slug === courseName);
         setCourseInformation(courseDetails[0]);
      };
      getCourseInformation();
   }, [courseName]);

   return (
      <div>
         <title>{courseInformation?.title}</title>
         <PagesHeader>{courseInformation?.title}</PagesHeader>
         <div className="max-w-screen-lg mx-auto mt-12 px-4">
            <h1 className="font-bold text-2xl md:text-3xl">{courseInformation?.title}</h1>
            <p className="text-gray-700 font-medium mt-2">{courseInformation?.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
               <div>
                  <h1 className="font-semibold text-gray-600">Duration</h1>
                  <p className="font-semibold">{courseInformation?.classDuration}</p>
               </div>
               <div>
                  <h1 className="font-semibold text-gray-600">Cost</h1>
                  <p className="font-semibold">{courseInformation?.cost}</p>
               </div>
               <div>
                  <h1 className="font-semibold text-gray-600">Contact</h1>
                  <p className="font-semibold">{courseInformation?.contact}</p>
               </div>
               <div>
                  <h1 className="font-semibold text-gray-600">Duration</h1>
                  <p className="font-semibold">{courseInformation?.duration}</p>
               </div>
               <div>
                  <h1 className="font-semibold text-gray-600">Classes</h1>
                  <p className="font-semibold">{courseInformation?.classes}</p>
               </div>
            </div>
         </div>

         <div>
            <div className="bg-red-100 p-8 rounded-lg shadow-lg max-w-screen-lg mt-8 mx-auto text-center">
               <h2 className="text-2xl font-bold text-gray-800 mb-6">Flexible Payment Options!</h2>
               <div className="flex flex-col md:flex-row justify-around gap-4">
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow mb-4 md:mb-0 md:w-1/2">
                     <h3 className="text-xl font-semibold mb-4">💰 Full Payment</h3>
                     <p className="text-gray-600 mb-4">
                        Pay in full and enjoy immediate access to all course materials.
                     </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow md:w-1/2">
                     <h3 className="text-xl font-semibold mb-4">💳 2 Instalments</h3>
                     <p className="text-gray-600 mb-4">
                        Split your payment into two easy instalments:
                        <br />
                        <strong>70%</strong> now, <strong>30%</strong> in three weeks!
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CourseInfo;

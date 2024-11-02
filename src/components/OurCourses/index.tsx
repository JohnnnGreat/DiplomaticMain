import React from "react";
import PagesHeader from "../shared/PageHeader";
import { companyBrandingPackages, courses } from "../shared/constants";
import CoursesCard from "../shared/CousesCard";
import BrandingCard from "../shared/BrandingCard";

const OurCourses = () => {
   return (
      <>
         <PagesHeader>Our Courses</PagesHeader>

         <div className="max-w-[1000px] mx-auto px-4">
            <p className="block bg-[#75757528] my-5 py-5 px-3 rounded-md font-bold">Coding Courses</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
               {courses.map((course, idx) => (
                  <CoursesCard
                     key={idx}
                     course={course}
                  />
               ))}
            </div>
         </div>

         <div className="max-w-[1000px] mx-auto px-4">
            <p className="block bg-[#75757528] my-5 py-5 px-3 rounded-md font-bold">Company Branding Packages</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
               {companyBrandingPackages.map((brandPackage, idx) => (
                  <BrandingCard
                     key={idx}
                     brandingPackage={brandPackage}
                  />
               ))}
            </div>
         </div>
      </>
   );
};

export default OurCourses;

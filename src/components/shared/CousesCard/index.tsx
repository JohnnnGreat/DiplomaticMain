import Link from "next/link";
import React from "react";

// Type
export type Course = {
   title: string;
   duration: string;
   cost: string;
   referralBonus: string;
   contact: string;
   classDuration: string;
   classes: string;
   payment: string;
   description: string;
   image: string | any;
   slug: string;
};
const CoursesCard = ({ course }: { course: Course }) => {
   return (
      <div className="p-3 rounded-xl bg-[#FBFBFB]">
         <img
            src={course?.image}
            alt="Course Image"
            className="w-full h-[200px] object-cover rounded-md"
         />
         <h1 className="font-bold text-lg my-3 line-clamp-1">{course?.title}</h1>
         <p className="overflow-hidden text-ellipsis line-clamp-3">{course?.description}</p>
         <Link
            className="w-full block bg-brandColor text-center mt-3 p-3 rounded-md text-white font-bold"
            href={`/courses/${course?.slug}`}
         >
            View Course Info
         </Link>
      </div>
   );
};

export default CoursesCard;

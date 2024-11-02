import React from "react";
import { FaChalkboardTeacher, FaRegHandshake, FaLaptopCode, FaRegFileAlt, FaRegLightbulb } from "react-icons/fa";

const services = [
   {
      title: "Executive Training",
      description: "One-on-one training sessions tailored to meet your needs.",
      icon: <FaChalkboardTeacher className="text-4xl mb-4 fill-[#0000005b]" />,
   },
   {
      title: "Digital Services",
      description: "Website design and app development for your business.",
      icon: <FaLaptopCode className="text-4xl mb-4 fill-[#0000005b]" />,
   },
   {
      title: "Company Branding",
      description: "Comprehensive branding packages to enhance your business identity.",
      icon: <FaRegHandshake className="text-4xl mb-4 fill-[#0000005b]" />,
   },
   {
      title: "CAC Registration",
      description: "Assistance with company registration at the Corporate Affairs Commission.",
      icon: <FaRegFileAlt className="text-4xl mb-4 fill-[#0000005b]" />,
   },
   {
      title: "Coding Training for Schools",
      description: "Specialized training services for educational institutions.",
      icon: <FaRegLightbulb className="text-4xl mb-4 fill-[#0000005b] font-normal" />,
   },
];

const SpecialServices = () => {
   return (
      <div className="max-w-[1200px] mx-auto py-[3rem] px-4  ">
         <div>
            {" "}
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Special Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {services.map((service, index) => (
                  <div
                     key={index}
                     className="bg-white rounded-lg border  transition-shadow duration-300 p-6 flex flex-col items-center text-center"
                  >
                     {service.icon}
                     <h3 className="text-2xl font-semibold text-black mb-2">{service.title}</h3>
                     <p className="text-[#0000009d]">{service.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default SpecialServices;

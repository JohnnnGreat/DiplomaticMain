import { FC } from "react";
import { Briefcase, Clock, DollarSign } from "lucide-react"; // Importing basic icons

interface BrandingCardProps {
   brandingPackage: {
      name: string;
      services: string[];
      delivery: string;
      cost: string;
      icon: JSX.Element;
   };
}

// BrandingCard component with a clean, simple design
const BrandingCard: FC<BrandingCardProps> = ({ brandingPackage }) => {
   return (
      <div className="p-5 border rounded-lg shadow-sm bg-white flex flex-col items-start space-y-4">
         {/* Package Title with Icon */}
         <h3 className="text-xl font-semibold text-[#333] flex flex-col gap-2">
            {brandingPackage.icon} {/* Displaying the package icon */}
            {brandingPackage.name}
         </h3>

         {/* Service List */}
         <div className=" space-x-2">
            <p className="text-sm text-gray-700 font-medium">Services:</p>
            <ul className="list-disc list-inside space-y-1">
               {brandingPackage.services.map((service, index) => (
                  <li
                     key={index}
                     className="text-gray-600 text-sm"
                  >
                     {service}
                  </li>
               ))}
            </ul>
         </div>

         {/* Delivery */}
         <div className="space-x-2 flex items-center">
            <Clock className="w-4 h-4 text-green-500" />
            <p className="text-gray-700 text-sm">
               <span className="font-medium">Delivery:</span> {brandingPackage.delivery}
            </p>
         </div>

         {/* Cost */}
         <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-yellow-500" />
            <p className="text-gray-700 text-sm">
               <span className="font-medium">Cost:</span> {brandingPackage.cost}
            </p>
         </div>
      </div>
   );
};

export default BrandingCard;

import BrandingCard from "@/components/shared/BrandingCard";
import { companyBrandingPackages } from "@/components/shared/constants";
import PagesHeader from "@/components/shared/PageHeader";
import React from "react";

const CompanyBranding = () => {
   return (
      <>
         <PagesHeader>Company Branding</PagesHeader>
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

export default CompanyBranding;

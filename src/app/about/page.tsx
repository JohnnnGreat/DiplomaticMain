import AboutPage from "@/components/AboutPage";
import PagesHeader from "@/components/shared/PageHeader";
import React from "react";

const About = () => {
   return (
      <React.Fragment>
         <title>About Us Page</title>
         <PagesHeader>About</PagesHeader>
         <AboutPage />
      </React.Fragment>
   );
};

export default About;

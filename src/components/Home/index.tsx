import React from "react";
import Hero from "./Hero";
import MissionVisionValues from "./Mission";
import CoursesPreview from "./CoursesPreview";
import SpecialServices from "./SpecialServices";

const HomePage = () => {
   return (
      <>
         <title>Diplomats</title>
         <Hero />
         <MissionVisionValues />
         <CoursesPreview />
         <SpecialServices />
      </>
   );
};

export default HomePage;

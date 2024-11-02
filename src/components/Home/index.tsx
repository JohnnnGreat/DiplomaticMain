import React from "react";
import Hero from "./Hero";
import MissionVisionValues from "./Mission";
import CoursesPreview from "./CoursesPreview";
import SpecialServices from "./SpecialServices";
import Display from "./Display";

const HomePage = () => {
   return (
      <>
         <title>Diplomats</title>
         <Hero />
         <MissionVisionValues />
         <CoursesPreview />
         <Display />
         <SpecialServices />
      </>
   );
};

export default HomePage;

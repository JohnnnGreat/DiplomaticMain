import React from "react";
import Hero from "./Hero";
import MissionVisionValues from "./Mission";
import CoursesPreview from "./CoursesPreview";

const HomePage = () => {
   return (
      <>
         <title>Diplomats</title>
         <Hero />
         <MissionVisionValues />
         <CoursesPreview />
      </>
   );
};

export default HomePage;

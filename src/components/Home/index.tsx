import React from "react";
import Hero from "./Hero";
import MissionVisionValues from "./Mission";
import CoursesPreview from "./CoursesPreview";
import SpecialServices from "./SpecialServices";
import Display from "./Display";

const HomePage = () => {
   return (
      <>
         <head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <title>Diplomats Digital World</title>
            <meta
               name="description"
               content="Leading the digital revolution! We train, upgrade and position you for a global digital revolution."
            />
            <meta
               name="keywords"
               content="diplomats digital world, digital training, coding courses, web development, app development, cybersecurity, data analysis"
            />
            <meta
               name="author"
               content="Diplomats Digital World"
            />
            <meta
               name="robots"
               content="index, follow"
            />
            <meta
               name="og:title"
               content="Diplomats Digital World"
            />
            <meta
               name="og:description"
               content="Leading the digital revolution! We train, upgrade and position you for a global digital revolution."
            />
            <meta
               name="og:url"
               content="https://www.diplomatsdigitalworld.org"
            />
            <meta
               name="og:image"
               content="https://www.diplomatsdigitalworld.org/logo.png"
            />
            <meta
               name="twitter:card"
               content="summary_large_image"
            />
            <meta
               name="twitter:title"
               content="Diplomats Digital World"
            />
            <meta
               name="twitter:description"
               content="Leading the digital revolution! We train, upgrade and position you for a global digital revolution."
            />
            <meta
               name="twitter:image"
               content="https://www.diplomatsdigitalworld.org/logo.png"
            />
         </head>
         <Hero />
         <MissionVisionValues />
         <CoursesPreview />
         <Display />
         <SpecialServices />
      </>
   );
};

export default HomePage;

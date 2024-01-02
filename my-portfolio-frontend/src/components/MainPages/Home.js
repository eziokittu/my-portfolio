// importing essential libraries
import React from "react";

import { Element } from "react-scroll";

// importing reusable components
import Hero from "../ComponentPages/Hero";
import About from "../ComponentPages/About";
import SkillDisplay from "../ComponentPages/SkillDisplay";
import Projects from "../ComponentPages/Projects";
import Education from "../ComponentPages/Education";

import otherData from "../../data/otherData.json";

const Home = () => {

  return (
    <div className="relative z-0">

      {/* content of page */}
      <div id={otherData.navbarOptionLinks[0]}>

        {/* Hero Section */}
        <Element name={otherData.navbarOptionLinks[1]}>
          <Hero />
          {/* Transperant gradient - change the height and colours acordingly*/}
			    <div className="h-44 w-full bg-gradient-to-b from-transparent to-green-400/20"></div>
        </Element>

        {/* About Section */}
        <Element name={otherData.navbarOptionLinks[2]}>
          <About />
          {/* Transperant gradient - change the height and colours acordingly*/}
			    <div className="h-48 w-full bg-gradient-to-b from-green-400/20 to-pink-300/20"></div>
        </Element>

        {/* Skills Section */}
        <Element name={otherData.navbarOptionLinks[3]}>
          <SkillDisplay />
          {/* Transperant gradient - change the height and colours acordingly*/}
			    <div className="h-44 w-full bg-gradient-to-b from-pink-300/20 to-sky-600/20"></div>
        </Element>

        {/* Projects Section - NEEDS WORK ---- min-h-[700px]*/} 
        <Element name={otherData.navbarOptionLinks[4]}>
          <Projects />
          {/* Transperant gradient - change the height and colours acordingly*/}
			    <div className="h-44 w-full bg-gradient-to-b from-sky-600/20 to-yellow-300/20"></div>
        </Element>

        {/* Education Section */}
        <Element name={otherData.navbarOptionLinks[5]}>
          <Education />
          {/* Transperant gradient - change the height and colours acordingly*/}
			    <div className="h-44 w-full bg-gradient-to-b from-yellow-300/20 to-transparent"></div>
        </Element>

        {/* Transperant gradient - change the height acordingly*/}
			  <div className="h-44 w-full bg-gradient-to-b from-transparent via-black/80 to-black"></div>

        {/* Contact Me Section */}

      </div>

      {/* a gradiant gap - remember to add this in each page */}
      {/* <div className="w-full h-24 bg-gradient-to-b from-slate-200/50 to-transparent"></div> */}

    </div>
  );
};

export default Home;

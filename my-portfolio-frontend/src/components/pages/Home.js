// importing essential libraries
import React from "react";

// importing reusable components
import Hero from "../reusable/Hero";
import About from "../reusable/About";
import SkillDisplay from "../reusable/SkillDisplay";
import Projects from "./Projects";
import Education from "../reusable/Education";

const Home = () => {

  return (
    <div className="relative z-0" id="home">

      {/* content of page */}
      <div className="">

        {/* Hero Section */}
        <section className="min-h-[700px]">
          <Hero />
          {/* Transperant gradient - change the height and colours acordingly*/}
			    <div className="h-40 w-full bg-gradient-to-b from-transparent to-green-400/20"></div>
        </section>

        {/* About Section */}
        <section className="">
          <About />
          {/* Transperant gradient - change the height and colours acordingly*/}
			    <div className="h-40 w-full bg-gradient-to-b from-green-400/20 to-pink-300/20"></div>
        </section>

        {/* Skills Section */}
        <section className="min-h-[700px]">
          <SkillDisplay />
          {/* Transperant gradient - change the height and colours acordingly*/}
			    <div className="h-40 w-full bg-gradient-to-b from-pink-300/20 to-slate-200/20"></div>
        </section>

        {/* Projects Section */}
        <section className="min-h-[700px]">
          <Projects />
          {/* Transperant gradient - change the height and colours acordingly*/}
			    <div className="h-40 w-full bg-gradient-to-b from-slate-200/20 to-yellow-300/20"></div>
        </section>

        {/* Education Section */}
        <section className="min-h-[700px]">
          <Education />
          {/* Transperant gradient - change the height and colours acordingly*/}
			    <div className="h-40 w-full bg-gradient-to-b from-yellow-300/20 to-transparent"></div>
        </section>

        {/* Contact Me Section */}

      </div>

      {/* a gradiant gap - remember to add this in each page */}
      {/* <div className="w-full h-24 bg-gradient-to-b from-slate-200/50 to-transparent"></div> */}

    </div>
  );
};

export default Home;

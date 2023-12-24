// importing essential libraries
import React from "react";

// importing reusable components
import Hero from "../reusable/Hero";
import SkillDisplay from "../reusable/SkillDisplay";
import About from "../reusable/About";
import Education from "../reusable/Education";

const Home = () => {

  return (
    <div className="relative z-0">

      {/* content of page */}
      <div className="">

        {/* Hero Section */}
        <section className="min-h-[700px]">
          <Hero />
        </section>

        {/* About Section */}
        <section className="min-h-[700px]">
          <About />
        </section>

        {/* Skills Section */}
        <section className="min-h-[700px]">
          <SkillDisplay />
        </section>

        {/* Education Section */}
        <section className="min-h-[700px]">
          <Education />
        </section>

        {/* Projects Section */}

        {/* Contact Me Section */}

      </div>

      {/* a gradiant gap - remember to add this in each page */}
      {/* <div className="w-full h-24 bg-gradient-to-b from-slate-200/50 to-transparent"></div> */}

    </div>
  );
};

export default Home;

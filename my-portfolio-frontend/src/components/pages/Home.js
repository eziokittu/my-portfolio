// importing essential libraries
import React from "react";

// importing reusable components
import Hero from "../reusable/Hero";
import SkillDisplay from "../reusable/SkillDisplay";

const Home = () => {

  return (
    <div className="relative z-0">

      {/* content of page */}
      <div className="">

        {/* Hero Section */}
        <section>
          <Hero />
        </section>

        {/* Skills Section */}
        <section>
          <SkillDisplay />
        </section>

      </div>

      {/* a gradiant gap - remember to add this in each page */}
      {/* <div className="w-full h-24 bg-gradient-to-b from-slate-200/50 to-transparent"></div> */}

    </div>
  );
};

export default Home;

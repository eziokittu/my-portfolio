// Home.js
import React from "react";

import TypeAnimation from "../reusable/TypeAnimation";
import profileData from "../../Data/profile/data.json";
import img1 from '../../Data/profile/images/image1.jpg';

const Home = () => {
  const textStatic = "I am into ";
  const textAnimateArray = [
    "Game Development",
    "App Development",
    "Problem Solving",
    "Machine Learning",
    "Full Stack Developer.",
  ]

  return (
    <div className="relative z-0">

      {/* content of page */}
      <div className="p-2 bg-slate-200/50">
        <TypeAnimation text={textStatic} texts={textAnimateArray} speed={200}/>
      </div>

      {/* a gradiant gap - remember to add this in each page */}
      <div className="w-full h-24 bg-gradient-to-b from-slate-200/50 to-transparent"></div>

    </div>
  );
};

export default Home;

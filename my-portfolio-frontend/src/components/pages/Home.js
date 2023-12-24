// importing essential libraries
import React from "react";

// importing reusable components
import TypingComponent from "../reusable/TypingComponent";
import SkillDisplay from "../reusable/SkillDisplay";

// importing local data 
import profileData from "../../Data/profile/profileData.json";
import skillsData from "../../Data/profile/skillsData.json";

const Home = () => {
  const textAnimateArray = [
    "I aspire to be a Gam Debe",
    50,
    "I aspire to be a Game Developar",
    50,
    "I aspire to be a Game Developer",
    200,
    "I aspire to be a Game Developer 🎮",
    1500,
    "I aspire to be",
    100,
    "I am into App Development",
    200,
    "I am into App Development 📱",
    1500,
    "I am into Problem",
    100,
    "I like Problem Solving",
    200,
    "I like Problem Solving 🤔",
    1500,
    "I am learning ML",
    200,
    "I am into Machine Learning",
    200,
    "I am into Machine Learning 🤖",
    1500,
    "I am into Web Dev",
    200,
    "I am learning Backend",
    200,
    "I am learning Backend 🌐",
    200,
    "I am learning Backend to be a Full St",
    50,
    "I am into Full Stack Development!",
    200,
    "I am into Full Stack Development 🧠",
    1500,
  ];

  return (
    <div className="relative z-0">

      
      
      {/* content of page */}
      <div className="">

        {/* Hero Section */}
        <section>
          {/* Typing Text Animation */}
          <div className="bg-blue-400 text-slate-100">
            <TypingComponent texts={textAnimateArray} speedTyping={60} speedDelete={30}/>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <SkillDisplay skills={skillsData.skills}/>
        </section>

      </div>

      {/* a gradiant gap - remember to add this in each page */}
      {/* <div className="w-full h-24 bg-gradient-to-b from-slate-200/50 to-transparent"></div> */}

    </div>
  );
};

export default Home;

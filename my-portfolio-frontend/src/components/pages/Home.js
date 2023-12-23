// importing essential libraries
import React from "react";

// importing reusable components
import TypingComponent from "../reusable/TypingComponent";
import SkillDisplay from "../reusable/SkillDisplay";
import ButtonNeomorphic1 from "../reusable/ButtonNeomorphic1";

// importing local data 
import profileData from "../../Data/profile/profileData.json";
import skillsData from "../../Data/profile/skillsData.json";

// importing all the skill images
// import skillImage_html from '../../Data/profile/skillImages/img_html.png'

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

  // const skills = [
  //   ['HTML5', skillImage_html],
  //   ['CSS3', skillImage_html],
  //   ['Bootstrap', skillImage_html],
  //   ['TailwindCSS', skillImage_html],
  //   ['JavaScript', skillImage_html],
  //   ['Python', skillImage_html],
  // ]

  return (
    <div className="relative z-0">

      <section>
        <SkillDisplay skills={skillsData.skills}/>
      </section>

      {/* <section>
        <ButtonNeomorphic1 />
      </section> */}
      
      {/* content of page */}
      {/* <div className="p-2 bg-slate-200/50"> */}

        {/* Typing Text Animation */}
        {/* <div className="bg-blue-400 text-slate-100">
          <TypingComponent texts={textAnimateArray} speedTyping={60} speedDelete={30}/>
        </div> */}

      {/* </div> */}

      {/* a gradiant gap - remember to add this in each page */}
      {/* <div className="w-full h-24 bg-gradient-to-b from-slate-200/50 to-transparent"></div> */}

    </div>
  );
};

export default Home;

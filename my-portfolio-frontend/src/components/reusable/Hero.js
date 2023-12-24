import React from 'react';

// importing reusable components
import TypingComponent from './TypingComponent';

// importing data from local files
import heroTextAnimateData from "../../Data/profile/heroTextAnimateData.json";
import profileData from "../../Data/profile/profileData.json";

function Hero() {

  return (
    <div>

       {/* Intro Text */}
      <div>
        <p>Hey there</p>
        <p>I am</p>
        <p>{profileData.name.firstName}</p>
        <p>{profileData.name.lastName}</p>
      </div>
      {/* Typing Text Animation */}
      {/* <div className="bg-blue-400 text-slate-100">
        <TypingComponent texts={heroTextAnimateData.data} speedTyping={60} speedDelete={30}/>
      </div> */}
      
    </div>
  )
}

export default Hero
import React from 'react';

// importing reusable components
import TypingComponent from './TypingComponent';
import ShuffleHero from './ShuffleHero';
import BubbleText from "./BubbleText";

// importing data from local files
import heroTextAnimateData from "../../Data/profile/heroTextAnimateData.json";
import profileData from "../../Data/profile/profileData.json";

function Hero() {

  return (
    <div className="w-full pt-12 px-2 xsm:px-12 md:flex items-center justify-around mx-auto">
      
      {/* The welcome text */}
      <div className='pr-4 lg:pr-16 xl:pr-44 2xl:pr-80'>

        <div className="mb-4 text-3xl  text-indigo-500 ">
          Hey There,
        </div>

        <div className="">
          <span className='text-blue-300 text-xl '>I am </span>
          <span 
            className="text-7xl md:text-6xl lg:text-8xl 
            font-semibold text-blue-600"
          ><BubbleText text={profileData.name.firstName}/></span>
        </div>
        
        <h3 className="text-4xl md:text-6xl 
        font-semibold text-blue-500"
        ><BubbleText text={profileData.name.lastName}/></h3>

        {/* Typing Text Animation  */}
        <div className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          <TypingComponent texts={heroTextAnimateData.data} speedTyping={60} speedDelete={30}/>
        </div>

        {/* About Me Button */}
        <button 
          className="w-[160px] flex justify-center
          bg-indigo-500 text-white font-normal hover:font-bold  rounded 
          transition hover:bg-indigo-600 active:scale-95 py-2 px-4
          duration-500 "
        >
          <p>About Me</p>
          <svg className='w-6 h-6 ml-2'
            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"/>
          </svg>
        </button>
      </div>

      {/* The grid for shuffling hero images */}
      <div className='w-full p-2 xsm:p-8 bg-black/20 rounded-lg '>
        <ShuffleHero />
      </div>
      
    </div>
  )
}

export default Hero
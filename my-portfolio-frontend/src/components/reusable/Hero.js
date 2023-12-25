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
    <div className="w-full pt-12 px-2 xsm:px-12 lg:flex items-center justify-around mx-auto mb-8 bg-stone-800/20">
      
      {/* The welcome text */}
      <div className=' pr-4 xl:pr-44 2xl:pr-auto mb-12 lg:mb-0'>

        <div className="font-Merriweather text-4xl text-indigo-500 ">
          Hey There,
        </div>

        <div className='mt-8 font-Merriweather text-blue-300 text-4xl'>I'm </div>

        <div className="text-7xl md:text-6xl lg:text-8xl 
          font-semibold text-blue-600 mt-2">
          <BubbleText text={profileData.name.firstName}/>
        </div>
        
        <h3 className="text-4xl md:text-6xl mt-2 
        font-semibold text-blue-500 font-Merriweather"
        >{profileData.name.lastName}</h3>

        {/* Typing Text Animation  */}
        <div 
          className="font-mono text-base p-4 mt-4 
          md:text-xl text-slate-700 bg-white sm:min-w-[500px]"
        >
          <TypingComponent texts={heroTextAnimateData.data} speedTyping={60} speedDelete={30}/>
        </div>

        {/* About Me Button */}
        <button 
          className="w-[160px] flex justify-center mt-4 group
          bg-indigo-500 text-white font-normal  rounded 
          transition hover:bg-indigo-600 active:scale-95 py-2 px-4
          duration-500 "
        >
          <p
            className='group-hover:font-bold'
          >About Me</p>
          <svg className='w-6 h-6 ml-2 fill-slate-400 group-hover:fill-white group-hover:translate-x-2'
            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"/>
          </svg>
        </button>
      </div>

      {/* The grid for shuffling hero images */}
      <div className='w-full lg:w-[600px] 2xl:w-[600px] p-2 xsm:p-8 bg-black/20 rounded-lg '>
        <ShuffleHero />
      </div>
      
    </div>
  )
}

export default Hero
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Fade, Slide } from "react-awesome-reveal";

// importing reusable components
import TypingComponent from '../ReusablePages/TypingComponent';
// import DelayedComponent from "../ReusablePages/DelayedComponent";
import ShuffleHero from '../ReusablePages/ShuffleHero';
import BubbleText from "../ReusablePages/BubbleText";

// importing data from local files
import heroTextAnimateData from "../../data/heroTextAnimateData.json";
import profileData from "../../data/profileData.json";

function Hero() {
  const [typingComponentInViewPort, setTypingComponentInViewPort] = useState(false) // first time the visibily is false
  const handleComponentInViewPort = () => {
    setTypingComponentInViewPort(!typingComponentInViewPort);
    // console.log(`Component is ${typingComponentInViewPort===true ? 'entering' : 'exiting'} the viewport`);
  }

  return (
    <div 
      className=" w-full md:w-[790px] lg:w-[1004px] pt-12 px-2 xsm:px-8 lg:px-0 lg:flex items-center justify-around mx-auto mb-8"
    >
      
      {/* The welcome text */}
      <div className='mx-auto lg:mx-0 w-full md:w-[790px] lg:w-[1004px] mb-12 lg:mb-0'>

        <Slide direction='down'><Fade>
        <div className="flex font-Merriweather text-2xl sm:text-4xl text-fuchsia-500 ">
          Hey There<span className="text-4xl xsm:text-5xl animate-[wave_1.3s_ease-in-out_infinite]">👋🏻</span>
        </div>
        </Fade></Slide>

        <Slide direction='down'><Fade>
        <h1 className='font-Merriweather text-fuchsia-300 text-2xl sm:text-4xl'>
          <p>I'm </p>
        </h1>
        </Fade></Slide>

        <Slide direction='down'><Fade>
        <div className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl 
          font-semibold text-fuchsia-500 mt-2">
          <BubbleText text={profileData.name.firstName}/>
        </div>
        </Fade></Slide>
        
        <Slide direction='down'><Fade>
        <h3 className="text-4xl sm:text-5xl md:text-6xl mt-2 
        font-semibold text-fuchsia-300 font-Merriweather"
        >{profileData.name.lastName}</h3>
        </Fade></Slide>

        {/* Typing Text Animation  */}
        <Fade 
          onVisibilityChange={handleComponentInViewPort} 
          delay={500} duration={1500} direction='down'
          className="font-mono p-2 sm:p-4 mt-4 rounded-2xl drop-shadow-xl
          text-xs sm:text-xl text-fuchsia-100 bg-fuchsia-950 max-w-[460px] lg:min-w-[500px] xl:min-w-[560px]"
        >
          <TypingComponent texts={heroTextAnimateData.data} speedTyping={60} speedDelete={50}/>
        </Fade>

        {/* About Me Button */}
        <Slide direction='down'><Fade>
        <Link 
          spy={true} offset={-180} duration={1500} smooth={'easeOutBack'}
          className=''
          to='about'
        >
          <button 
            className="w-[160px] flex justify-center mt-4 group rounded-lg
            bg-fuchsia-700 text-fuchsia-100 hover:text-fuchsia-50   
            transition-colors hover:bg-fuchsia-800 active:scale-95 py-2 px-4
            duration-500"
          >
            <p
              className='font-normal group-hover:font-bold transition-all duration-300'
            >About Me</p>
            <svg className='w-6 h-6 ml-2 fill-slate-400 group-hover:fill-white group-hover:translate-x-2 transition-transform duration-300'
              xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"/>
            </svg>
          </button>
        </Link>
        </Fade></Slide>
        
      </div>

      {/* The grid for shuffling hero images */}
      <Fade delay={500} duration={1500}>
        <ShuffleHero />
      </Fade>
      
    </div>
  )
}

export default Hero
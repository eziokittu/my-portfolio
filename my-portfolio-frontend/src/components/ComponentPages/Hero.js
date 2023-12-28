import React from 'react';
import { Link } from 'react-scroll';
import { Fade, Slide } from "react-awesome-reveal";

// importing reusable components
import TypingComponent from '../ReusablePages/TypingComponent';
import ShuffleHero from '../ReusablePages/ShuffleHero';
import BubbleText from "../ReusablePages/BubbleText";

// importing data from local files
import heroTextAnimateData from "../../data/heroTextAnimateData.json";
import profileData from "../../data/profileData.json";

function Hero() {

  return (
    <div 
      className="w-full pt-12 px-2 xsm:px-8 lg:px-0 lg:flex items-center justify-around mx-auto mb-8 bg-stone-800/20"
      id='hero'
    >
      
      {/* The welcome text */}
      <div className='  mb-12 lg:mb-0'>

        <Slide direction='down'><Fade><div className="flex font-Merriweather text-4xl text-indigo-500 ">
          Hey There<span class="text-5xl animate-[wave_1.3s_ease-in-out_infinite]">👋🏻</span>
        </div></Fade></Slide>

        <Slide direction='down'><Fade>
          <h1 className='font-Merriweather text-blue-300 text-4xl'>
            <p>I'm </p>
          </h1>
        </Fade></Slide>

        <Slide direction='down'><Fade>
        <div className="text-7xl md:text-6xl lg:text-8xl 
          font-semibold text-blue-600 mt-2">
          <BubbleText text={profileData.name.firstName}/>
        </div></Fade></Slide>
        
        <Slide direction='down'><Fade>
        <h3 className="text-4xl md:text-6xl mt-2 
        font-semibold text-blue-500 font-Merriweather"
        >{profileData.name.lastName}</h3></Fade></Slide>

        {/* Typing Text Animation  */}
        <Slide direction='down'><Fade><div 
          className="font-mono text-base p-4 mt-4 rounded-2xl drop-shadow-xl
          md:text-xl text-white bg-zinc-700 sm:max-w-[460px] lg:min-w-[460px] xl:min-w-[560px]
          shadow-[0_0_25px_black]"
        >
          <TypingComponent texts={heroTextAnimateData.data} speedTyping={60} speedDelete={30}/>
        </div></Fade></Slide>

        {/* About Me Button */}
        <Slide direction='down'><Fade><Link 
          activeClass="active" spy={true} smooth={true} offset={-70} duration={500}
          className=''
          to='about'
        >
          <button 
            className="w-[160px] flex justify-center mt-4 group
            bg-indigo-500 text-white font-normal  rounded 
            transition hover:bg-indigo-600 active:scale-95 py-2 px-4
            duration-500 drop-shadow-xl"
          >
            <p
              className='group-hover:font-bold'
            >About Me</p>
            <svg className='w-6 h-6 ml-2 fill-slate-400 group-hover:fill-white group-hover:translate-x-2'
              xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"/>
            </svg>
          </button>
        </Link></Fade></Slide>
        
      </div>

      {/* The grid for shuffling hero images */}
      <Fade><div className='w-full lg:w-[500px] xl:w-[600px] 2xl:w-[700px] p-2 xsm:p-8 lg:p-0 bg-black/20 rounded-lg '>
        <ShuffleHero />
      </div></Fade>
      
    </div>
  )
}

export default Hero
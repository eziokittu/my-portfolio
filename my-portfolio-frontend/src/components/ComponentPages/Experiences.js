// importing library files
import React from "react";
import { Fade, Zoom } from 'react-awesome-reveal';

// importing reusable components
// import ExperienceCard from "../ReusablePages/ExperienceCard";

// importing data
// import experienceData from '../../data/experienceData.json';
import otherData from '../../data/otherData.json';

const Experiences = () => {

  return (
    <div className="relative z-0">

      {/* content of projects */}
      <div className='p-2 xsm:p-4 bg-white/30 group/g1'>

        {/* Title of the section */}
        <Zoom><Fade>
        <div 
          className='relative overflow-hidden group/g2
          flex items-center justify-between transition-colors duration-300
          font-bold cursor-default text-center
          bg-gray-400 group-hover/g1:bg-gray-100 w-fit mx-auto rounded-lg p-2 sm:p-4 mb-4'
        >

          {/* The animated underline */}
          <span className="mx-2 absolute inset-x-0 bottom-2 h-[2px] bg-black transform origin-center scale-x-0 group-hover/g1:scale-x-100 transition-transform duration-1000"></span>
          
          
          {/* The title logo */}
					<div
						className="group-hover/g1:animate-[pulse_1s_ease-in-out_infinite]"
					>
						<svg 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 32 32" 
							className='group-hover/g1:animate-[fade_.7s_ease-in-out_infinite] stroke-gray-800 fill-white  w-[40px] xsm:w-[60px] md:w-[100px] mr-4'>
							<path d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"/>
						</svg>
					</div>

          {/* The title */}
          <span className='flex flex-wrap items-center justify-center font-Kolnia text-xl 2xsm:text-2xl xsm:text-3xl sm:text-5xl xl:text-7xl'>
            <p className='text-black pr-1 sm:pr-3'>{`My ${otherData.navbarOptions[4]}s`}</p>
          </span>

        </div>
        </Fade></Zoom>

        {/* Experience Content */}
        <div className="relative flex flex-col bg-gray-500/5 hover:bg-gray-600/20 rounded-2xl
				shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500
        w-full md:w-[790px] lg:w-[1004px] mx-auto min-h-[300px]"
        >

        </div>

        {/* Temporary Text - TO BE REMOVED */}
        <div 
          className="p-2 xsm:p-4 my-2 xsm:mx-auto bg-white/60 text-xl animate-pulse rounded-2xl
          w-full md:w-[790px] lg:w-[1004px] mx-auto text-center">
          This Section is being worked upon (currently doing an internship). Will be updated soon.
        </div>

      </div>
      
    </div>
  );
};

export default Experiences;

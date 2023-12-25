import React from 'react'

import EducationCard from './EducationCard';

const Education = () => {
  return (
    <div className='bg-yellow-300/20 min-h-[700px]'>
{/* drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] */}
      {/* All the contents of section */}
      <div 
        className='mx-2 xsm:mx-12 md:mx-auto md:w-[700px] lg:w-[900px] p-2 xsm:p-4
        bg-amber-500/40 hover:bg-amber-300/70 rounded-lg group
        shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500'
      >

        {/* Section Title */}
        <div className='text-center text-2xl 2xsm:text-3xl sm:text-4xl font-bold border-b-[4px] border-amber-950
          w-fit mx-auto bg-clip-text text-transparent
          bg-gradient-to-r from-orange-400 via-yellow-300 to-amber-500
          group-hover:from-amber-800 group-hover:via-orange-500 group-hover:to-orange-800
          flex gap-2 items-center'
        >

          {/* Education Icon */}
          <div 
            className=' text-black 
            group-hover:animate-[bounce_1s_ease-in-out_infinite_.3s]'
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 16 16" 
              fill="currentColor" 
              className="w-10 h-10 group-hover:animate-pulse">
              <path d="M7.25 3.688a8.035 8.035 0 0 0-4.872-.523A.48.48 0 0 0 2 3.64v7.994c0 .345.342.588.679.512a6.02 6.02 0 0 1 4.571.81V3.688ZM8.75 12.956a6.02 6.02 0 0 1 4.571-.81c.337.075.679-.167.679-.512V3.64a.48.48 0 0 0-.378-.475 8.034 8.034 0 0 0-4.872.523v9.268Z" />
            </svg>
          </div>

          {/* Title */}
          <p>My Education</p>

        </div>

        {/* Section Body */}
        <div>
          <EducationCard />
        </div>
        
      </div>

    </div>
  )
};

export default Education;
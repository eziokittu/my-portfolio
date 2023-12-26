import React from 'react'

// reusable components
import EducationCard from './EducationCard';

// importing data from local storage
import educationData from "../../Data/profile/educationData.json";

const Education = () => {
  return (
    <div className='bg-yellow-300/20 min-h-[700px]'>
{/* drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] */}
      {/* All the contents of section */}
      <div 
        className='mx-2 xsm:mx-auto
        w-fit xsm:w-5/6 sm:w-4/5 lg:w-3/4 xl:w-3/5 2xl:w-1/2
        p-2 xsm:p-4
        bg-yellow-500/10 hover:bg-yellow-500/20 rounded-lg group/edu1
        shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500'
      >

        {/* Section Title */}
        <div className='text-center text-2xl 2xsm:text-3xl sm:text-4xl font-bold border-b-[4px] border-amber-950
          w-fit mx-auto bg-clip-text text-transparent transition duration-300
          bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600
          group-hover/edu1:from-yellow-300 group-hover/edu1:via-amber-400 group-hover/edu1:to-yellow-300
          flex gap-2 items-center'
        >

          {/* Education Icon */}
          <div 
            className=' text-black 
            group-hover/edu1:animate-[bounce_1s_ease-in-out_infinite_.3s]'
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 16 16" 
              fill="currentColor" 
              className="w-10 h-10 group-hover/edu1:animate-pulse">
              <path d="M7.25 3.688a8.035 8.035 0 0 0-4.872-.523A.48.48 0 0 0 2 3.64v7.994c0 .345.342.588.679.512a6.02 6.02 0 0 1 4.571.81V3.688ZM8.75 12.956a6.02 6.02 0 0 1 4.571-.81c.337.075.679-.167.679-.512V3.64a.48.48 0 0 0-.378-.475 8.034 8.034 0 0 0-4.872.523v9.268Z" />
            </svg>
          </div>

          {/* Title */}
          <p>My Education</p>

        </div>

        {/* Section Body */}
        <div className='flex flex-col gap-2 xsm:gap-4'>
          <EducationCard props={educationData.data[0]}/>
          <EducationCard props={educationData.data[1]}/>
          <EducationCard props={educationData.data[2]}/>
          <EducationCard props={educationData.data[3]}/>
        </div>
        
      </div>

    </div>
  )
};

export default Education;
// importing library files
import React from "react";
import { Fade, Slide } from 'react-awesome-reveal';

// importing reusable components
import ProjectCard from "../ReusablePages/ProjectCard";
import ProjectDisplayCard from '../ReusablePages/ProjectDisplayCard';

// importing data
import projectData from '../../data/projectData.json';

const Projects = (props) => {

  const loadedImages = projectData.Projects[0].images.map(imageSrc => ({
    original: imageSrc,
    thumbnail: imageSrc
  }));

  return (
    <div 
      id="projects"
      className="relative z-0">

      {/* content of projects */}
      <div className='p-4 bg-blue-600/20 group/g1'>

        {/* Title of the section */}
        <Slide direction='down'><Fade>
        <div 
          className='relative overflow-hidden group/g2
          flex items-center justify-between
          font-bold cursor-default text-center
          bg-sky-200 w-fit mx-auto rounded-lg p-4 my-2'
        >

          {/* The animated underline */}
          {/* <span className="mx-2 absolute inset-x-0 bottom-2 h-1 bg-fuchsia-800 transform origin-left scale-x-0 group-hover/g2:scale-x-100 transition-transform duration-500"></span>
          <span className="mx-2 absolute inset-x-0 top-2 h-1 bg-fuchsia-800 transform origin-right scale-x-0 group-hover/g2:scale-x-100 transition-transform duration-500"></span>
          <span className="my-2 absolute inset-y-0 left-2 w-1 bg-fuchsia-800 transform origin-bottom scale-y-0 group-hover/g2:scale-y-100 transition-transform duration-500"></span>
          <span className="my-2 absolute inset-y-0 right-2 w-1 bg-fuchsia-800 transform origin-top scale-y-0 group-hover/g2:scale-y-100 transition-transform duration-500"></span> */}
          
          {/* The title logo */}
          {/* <div
            className="group-hover/g1:animate-[bounce_1s_ease-in-out_infinite]"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className='group-hover/g1:animate-[pulse_.7s_ease-in-out_infinite] stroke-violet-950 fill-pink-200  w-[60px] xsm:w-[80px] md:w-[100px] mr-4'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
            </svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className='group-hover/g1:animate-[pulse_.7s_ease-in-out_infinite] stroke-violet-950 fill-pink-200  w-[60px] xsm:w-[80px] md:w-[100px] mr-4'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className='group-hover/g1:animate-[pulse_.7s_ease-in-out_infinite] stroke-violet-950 fill-pink-200  w-[60px] xsm:w-[80px] md:w-[100px] mr-4'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              className='group-hover/g1:animate-[pulse_.7s_ease-in-out_infinite] stroke-violet-950 fill-pink-200  w-[60px] xsm:w-[80px] md:w-[100px] mr-4'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
            </svg>
          </div> */}

          {/* The title */}
          <span className='flex flex-wrap items-center justify-center font-Kolnia text-xl 2xsm:text-2xl xsm:text-3xl sm:text-5xl xl:text-7xl'>
            <p className='text-blue-900 pr-1 sm:pr-3'>My Projects</p>
          </span>
        </div></Fade></Slide>

        {/* Project cards in grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projectData.Projects.map(p => (
            <ProjectCard project={p} />
          ))}
        </div> */}

        {/* Temporary - TO BE REMOVED */}
        <div className="w-fit p-4 m-4 bg-sky-500 text-4xl mx-auto animate-pulse">This Section is being worked upon</div>

      </div>

      {/* a gradiant gap - remember to add this in each page */}
      {/* <div className="w-full h-24 bg-gradient-to-b from-slate-200/50 to-transparent"></div> */}
      
    </div>
  );
};

export default Projects;

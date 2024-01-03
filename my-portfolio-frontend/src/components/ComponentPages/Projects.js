// importing library files
import React, { useState, useEffect } from "react";
import { Fade, Zoom } from 'react-awesome-reveal';

// importing reusable components
import ProjectCard from "../ReusablePages/ProjectCard";

// importing data
import projectData from '../../data/projectData.json';

const Projects = (props) => {

  return (
    <div className="relative z-0">

      {/* content of projects */}
      <div className='p-4 bg-sky-600/20 group/g1'>

        {/* Title of the section */}
        <Zoom><Fade>
        <div 
          className='relative overflow-hidden group/g2
          flex items-center justify-between transition-colors duration-300
          font-bold cursor-default text-center
          bg-sky-200 group-hover/g1:bg-sky-300 w-fit mx-auto rounded-lg p-4 my-2'
        >

          {/* The animated underline */}
          <span className="mx-2 absolute inset-x-0 bottom-2 h-1 bg-blue-900 transform origin-center scale-x-0 group-hover/g1:scale-x-100 transition-transform duration-1000"></span>
          
          {/* The title logo */}
          <div
            className="
            grid grid-cols-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className='group-hover/g1:animate-[pulse_.8s_ease-in-out_infinite] stroke-sky-900 fill-sky-100 group-hover/g1:fill-sky-200 transition-all duration-500 
              w-10 h-10 mr-4'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
            </svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className='group-hover/g1:animate-[pulse_.7s_ease-in-out_infinite] stroke-sky-900 fill-sky-100 group-hover/g1:fill-sky-200 transition-all duration-500 
              w-10 h-10 mr-4'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className='group-hover/g1:animate-[pulse_.6s_ease-in-out_infinite] stroke-sky-900 fill-sky-100 group-hover/g1:fill-sky-200 transition-all duration-500 
              w-10 h-10 mr-4'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              className='group-hover/g1:animate-[pulse_.9s_ease-in-out_infinite] stroke-sky-900 fill-sky-100 group-hover/g1:fill-sky-200 transition-all duration-500 
              w-10 h-10 mr-4'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
            </svg>
          </div>

          {/* The title */}
          <span className='flex flex-wrap items-center justify-center font-Kolnia text-xl 2xsm:text-2xl xsm:text-3xl sm:text-5xl xl:text-7xl'>
            <p className='text-blue-900 pr-1 sm:pr-3'>My Projects</p>
          </span>
        </div>
        </Fade></Zoom>

        {/* Project cards in grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"> */}
        <div className="relative flex flex-col bg-sky-500/5 hover:bg-sky-600/20 rounded-2xl
				shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500
        w-full xsm:w-11/12 lg:w-3/4 xl:w-3/5 2xl:w-1/2 mx-auto">
          <div className="w-full text-lg px-4">
            <ProjectCard projects={projectData.Projects} />
          </div>
        </div>

        {/* Temporary - TO BE REMOVED */}
        {/* <div className="w-fit p-4 m-4 bg-sky-500 text-4xl mx-auto animate-pulse">This Section is being worked upon</div> */}

      </div>

      {/* a gradiant gap - remember to add this in each page */}
      {/* <div className="w-full h-24 bg-gradient-to-b from-slate-200/50 to-transparent"></div> */}
      
    </div>
  );
};

export default Projects;

import React from "react";

// importing reusable components
import ProjectDisplayCardLayout from '../reusable/ProjectDisplayCardLayout';

// importing data
import projectData from '../../Data/projects/projectData.json';

const Projects = (props) => {

  return (
    <div 
      id="projects"
      className="relative z-0">

      {/* content of projects */}
      <div className='p-4 bg-slate-200/20 '>

        {/* Heading */}
        <h1 className='mb-2 text-center text-4xl bg-slate-200 rounded-lg text-stone-800 pb-2'>All my projects below!</h1>

        {/* Project cards in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projectData.Projects.map(p => (
            <ProjectDisplayCardLayout project={p} contactMeOverlayOn={props.contactMeOverlayOn} />
          ))}

        </div>

      </div>

      {/* a gradiant gap - remember to add this in each page */}
      {/* <div className="w-full h-24 bg-gradient-to-b from-slate-200/50 to-transparent"></div> */}

    </div>
  );
};

export default Projects;

import React, { useEffect, useState } from "react";

import { useHttpClient } from '../reusable/hooks/http-hook';
import ProjectDisplayCardLayout from '../reusable/ProjectDisplayCardLayout';
import img1 from "../images/img1.jpg";

const Projects = () => {
  const [loadedProjects, setLoadedProjects] = useState();
  const { sendRequest} = useHttpClient();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/projects/`
        );
        setLoadedProjects(responseData.Projects);
      } catch (err) {
        console.log("Error in fetching Projects: "+err);
      }
    };
    fetchProjects();
  }, [sendRequest]);

  return (
    <div className="relative z-10">
      <div className='p-4 bg-slate-200/50 '>
        <h1 className='mb-2 text-center text-4xl bg-stone-200 rounded-lg text-stone-800 pb-2'>All my projects below!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {loadedProjects && loadedProjects.map(project => (
            <ProjectDisplayCardLayout id={project.id} cardTitle={project.title} cardDescription={project.description_short} cardImage={img1} />
          ))}
          {!loadedProjects && (
          <div className="text-center">
            <p className="text-2xl animate-pulse bg-stone-200 rounded-lg text-stone-800 pb-2">... Loading Projects please wait ...</p>
          </div>)}
        </div>
      </div>
      <div className="w-full h-40 bg-gradient-to-b from-slate-200/50 to-transparent"></div>
    </div>
  );
};

export default Projects;

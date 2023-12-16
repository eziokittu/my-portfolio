import {Link} from 'react-router-dom'
import React, { useEffect, useState } from "react";

import { useHttpClient } from '../reusable/hooks/http-hook';
import ProjectDisplayCardLayout from '../reusable/ProjectDisplayCardLayout';
import img1 from "../images/img1.jpg";

const Projects = () => {
  const [loadedProjects, setLoadedProjects] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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

  // temporary project items
  // const items = [
  //   ['id1', 'project1', 'project 1 description'], 
  //   ['id2', 'project2', 'project 2 description'],
  //   ['id3', 'project3', 'project 3 description'], 
  //   ['id4', 'project4', 'project 4 description'],
  //   ['id5', 'project5', 'project 5 description'], 
  //   ['id6', 'project6', 'project 6 description'],
  //   ['id7', 'project7', 'project 7 description'], 
  //   ['id8', 'project8', 'project 8 description'],
  //   ['id9', 'project9', 'project 9 description'], 
  //   ['id10', 'project10', 'project 10 description'],
  // ];

  return (
    <div className='m-4'>
      <h1 className='mb-2 text-center text-4xl text-stone-700'>All my projects below!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {loadedProjects.map(project => (
          <ProjectDisplayCardLayout id={project._id} cardTitle={project.title} cardDescription={project.description_short} cardImage={img1} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

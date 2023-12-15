import {Link} from 'react-router-dom'
import React from "react";

import ProjectDisplayCardLayout from '../reusable/ProjectDisplayCardLayout';
import img1 from "../images/img1.jpg";

const Projects = () => {

  // temporary project items
  const items = [
    ['id1', 'project1', 'project 1 description'], 
    ['id2', 'project2', 'project 2 description'],
    ['id3', 'project3', 'project 3 description'], 
    ['id4', 'project4', 'project 4 description'],
    ['id5', 'project5', 'project 5 description'], 
    ['id6', 'project6', 'project 6 description'],
    ['id7', 'project7', 'project 7 description'], 
    ['id8', 'project8', 'project 8 description'],
    ['id9', 'project9', 'project 9 description'], 
    ['id10', 'project10', 'project 10 description'],
  ];

  return (
    <div className="m-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map(projectItem => (
        <ProjectDisplayCardLayout id={projectItem[0]} cardTitle={projectItem[1]} cardDescription={projectItem[2]} cardImage={img1} />
      ))}
    </div>
  );
};

export default Projects;

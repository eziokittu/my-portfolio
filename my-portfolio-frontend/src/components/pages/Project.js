import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";

import { useHttpClient } from '../reusable/hooks/http-hook';
// import img1 from '../images/img1.jpg';
// import img2 from '../images/img2.jpg';
// import img3 from '../images/img3.jpg';
// import img4 from '../images/img4.png';
// import img5 from '../images/img5.png';
// import img6 from '../images/img6.png';

const Project = (props) => {
	const projectId = useParams().pid;
  const [loadedProject, setLoadedProject] = useState();
  const [loadedImages, setLoadedImages] = useState([]);
  const { sendRequest } = useHttpClient();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/projects/${projectId}`
        );
        setLoadedProject(responseData.Project);
        setLoadedImages([loadedProject.image]);
        // if (loadedProject.tags.length() === 0){
        //   loadedProject.tags = ['No', 'tags', 'associated'];
        // }
      } catch (err) {
        console.log("Error in fetching Projects: "+err);
      }
    };
    fetchProjects();
  }, [sendRequest]);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % loadedImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + loadedImages.length) % loadedImages.length);
  };

  if (loadedProject)
  return (
    <div className="mx-4 sm:container sm:mx-auto mt-4 mb-12">

      {/* Project Title */}
      <h1 className="text-stone-700 text-center text-md md:text-2xl mb-1 border w-fit mx-auto p-1 rounded-lg border-stone-200 border-b-[2px] border-b-stone-300">ID: {loadedProject.project_type}</h1>
      <h1 className="text-stone-700 text-center text-2xl md:text-4xl font-bold mb-4 border-b-2 w-fit mx-auto border-b-stone-300">{loadedProject.title}</h1>

      {/* project tags */}
      <p className="text-xl text-stone-700 text-center">Tags</p>
      <div className='flex flex-wrap justify-center border border-stone-400 bg-stone-200 rounded-lg mx-1 mb-4 p-2  gap-2'>
        {loadedProject.tags.map(tag => (
          <p className='text-center text-white border rounded-full bg-stone-700 px-4 py-1'>
            {tag}
          </p>
        ))}
      </div>

      {/* Project Description */}
      <p className='text-xl text-stone-700 text-center'>Description</p>
      <p className="max-h-[500px] text-gray-700 mb-4 p-2 border text-justify border-stone-400 rounded-lg mx-1">
      {loadedProject.description_long}
      </p>

      {/* Image Viewer */}
      <p className='text-xl text-stone-700 text-center'>Project Images</p>
      {loadedImages && (props.contactMeOverlayOn===true) && <div className="relative overflow-hidden mb-4 h-[300px] sm:h-[400px] md:h-[700px] bg-zinc-700 border rounded-lg flex items-center justify-center">
        <img
          src={loadedImages[currentImage]}
          alt={`${loadedImages[currentImage]}`}
          className=" max-h-[300px] sm:max-h-[400px] md:max-h-[700px] transition-transform duration-300 transform border-4 border-black rounded-lg"
        />
        <button
          className="text-5xl sm:text-7xl absolute h-full w-1/6 left-0 top-1/2 transform -translate-y-1/2 bg-zinc-600 text-white p-2 rounded-lg opacity-5 hover:opacity-70 active:opacity-90"
          onClick={prevImage}
        >
          &lt;
        </button>
        <button
          className="text-5xl sm:text-7xl absolute h-full w-1/6 right-0 top-1/2 transform -translate-y-1/2 bg-zinc-600 text-white p-2 rounded-lg opacity-5 hover:opacity-70 active:opacity-90"
          onClick={nextImage}
        >
          &gt;
        </button>

        {/* Navigation Bubbles */}
        <div className="flex items-center overflow-hidden justify-center absolute bottom-1 w-full opacity-60">
          {loadedImages.map((_, index) => (
            <div
              key={index}
              className={`w-[6px] sm:w-[10px] md:w-4 h-[6px] sm:h-[10px] md:h-4 mx-1 rounded-full md:border-[3px] border-black ${
                index === currentImage ? 'bg-blue-800' : 'bg-blue-100'
              }`}
            />
          ))}
        </div>
      </div>}

      {/* Resource Links */}
      <div className="">
        <h2 className="text-xl font-semibold mb-2">Resource Links</h2>
        <ul className="list-disc pl-4">
          <li>
            <a href="https://example.com/resource1" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              Resource 1
            </a>
          </li>
          <li>
            <a href="https://example.com/resource2" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              Resource 2
            </a>
          </li>
          {/* Add more resource links as needed */}
        </ul>
      </div>

      {/* Code Section */}
      {/* <div>
        <h2 className="text-xl font-semibold mb-2">Code Section</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
        </pre>
      </div> */}
    </div>
  );

  return (
    <div>loading projects...</div>
  )
}

export default Project;
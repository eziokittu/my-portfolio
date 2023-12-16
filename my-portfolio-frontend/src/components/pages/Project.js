import {Link, useParams} from 'react-router-dom'
import React, {useState, useEffect} from "react";

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';

const Project = () => {
	const projectId = useParams().projectId;
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ];
  const tags = [
    'MERN',
    'ReactJS',
    'HTML',
    'CSS',
    'NodeJS',
    'ExpressJS',
    'MongoDB',
    'React-Router-DOM',
    'Tailwind CSS',
    'Full Stack',
    'Website',
  ]

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="mx-4 sm:container sm:mx-auto mt-8">
      <h1 className="text-center text-2xl sm:text-3xl md:text-6xl font-bold mb-4">Project Title [{projectId}]</h1>
      {/* project tags */}
      <p className="text-xl text-gray-700 text-center">Project Tags</p>
      <div className='flex flex-wrap items-center border border-stone-400 bg-stone-200 rounded-lg mx-1 p-2  gap-2'>
        {tags.map(tag => (
          <p className='text-center text-white border rounded-full bg-stone-700 px-4 py-1'>
            {tag}
          </p>
        ))}
      </div>
      <p className="text-gray-700 mb-4">Short Description of the project goes here.</p>

      {/* Image Viewer */}
      <div className="relative overflow-hidden mb-4 h-[300px] sm:h-[400px] md:h-[700px] bg-zinc-700 border rounded-lg flex items-center justify-center">
        <img
          src={images[currentImage]}
          alt={`Project Image ${currentImage + 1}`}
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
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-[6px] sm:w-[10px] md:w-4 h-[6px] sm:h-[10px] md:h-4 mx-1 rounded-full md:border-[3px] border-black ${
                index === currentImage ? 'bg-blue-800' : 'bg-blue-100'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Resource Links */}
      <div className="mb-4">
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
      <div>
        <h2 className="text-xl font-semibold mb-2">Code Section</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
          {/* Your code goes here */}
        </pre>
      </div>
    </div>
  );
}

export default Project;
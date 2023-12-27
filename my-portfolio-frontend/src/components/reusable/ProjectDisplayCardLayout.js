// import {Link} from 'react-router-dom';
import React, {useState} from "react";

const ProjectDisplayCardLayout = ({project, contactMeOverlayOn}) => {
	const loadedImages = project.images;
  const [currentImage, setCurrentImage] = useState(0);
	const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % loadedImages.length);
  };
  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + loadedImages.length) % loadedImages.length);
  };

	return (
		<div className="relative z-10 flex flex-col justify-between max-w-full min-h-[400px] max-h-[620px]  border-4 rounded-lg shadow bg-gray-800 hover:bg-gray-700 boerder-white hover:border-yellow-400 shadow-slate-800-200 hover:shadow-slate-200-800">
			<div className="p-5 flex flex-col justify-between">

				{/* Project Card Image */}
				<div class="max-h-[400px] overflow-hidden">
					<img className="rounded-lg w-auto" src={project.images[0]} alt="" />
				</div>

				{/* Project Card Title and Description */}
				<div className="pt-5">
					<h5 className="max-h-8 overflow-hidden mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{project.title}
					</h5>
					<p className="max-h-16 overflow-hidden font-normal text-gray-700 dark:text-gray-400">
						{project.description_short}
					</p>
				</div>

				{/* project tags */}
        {/* <p className="text-xl text-stone-700 text-center">Tags</p>
        <div className='flex flex-wrap justify-center border border-stone-400 bg-stone-200 rounded-lg mx-1 mb-4 p-2  gap-2'>
          {project.tags.map(tag => (
            <p className='text-center text-white border rounded-full bg-stone-700 px-4 py-1'>
              {tag}
            </p>
          ))}
        </div> */}

				{/* Image Viewer */}
        <p className='text-xl text-stone-700 text-center'>Project Images</p>
        {(contactMeOverlayOn===true) && <div className="relative overflow-hidden mb-4 h-[300px] sm:h-[400px] md:h-[700px] bg-zinc-700 border rounded-lg flex items-center justify-center">
          <img
            src={project.images[currentImage]}
            alt={`${project.images[currentImage]}`}
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
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`w-[6px] sm:w-[10px] md:w-4 h-[6px] sm:h-[10px] md:h-4 mx-1 rounded-full md:border-[3px] border-black ${
                  index === currentImage ? 'bg-blue-800' : 'bg-blue-100'
                }`}
              />
            ))}
          </div>
        </div>}

			</div>
			
		</div>
	);
}

export default ProjectDisplayCardLayout;
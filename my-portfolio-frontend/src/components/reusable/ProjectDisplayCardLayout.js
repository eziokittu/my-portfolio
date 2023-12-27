import React, {useState} from "react";

import SwipeCarousel from "./SwipeCarousel";

const ProjectDisplayCardLayout = ({project, contactMeOverlayOn}) => {
	// const loadedImages = project.images;
  // const [currentImage, setCurrentImage] = useState(0);
	// const nextImage = () => {
  //   setCurrentImage((prevImage) => (prevImage + 1) % loadedImages.length);
  // };
  // const prevImage = () => {
  //   setCurrentImage((prevImage) => (prevImage - 1 + loadedImages.length) % loadedImages.length);
  // };

	return (
		<div className="relative z-10 flex flex-col justify-between max-w-full min-h-[400px] max-h-[620px]  border-4 rounded-lg shadow bg-gray-800 hover:bg-gray-700 boerder-white hover:border-yellow-400 shadow-slate-800-200 hover:shadow-slate-200-800">
			<div className="p-5 flex flex-col justify-between">

				{/* Project Card Image */}
				{/* <div class="max-h-[400px] overflow-hidden">
					<img className="rounded-lg w-auto" src={project.images[0]} alt="" />
				</div> */}

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
        {(contactMeOverlayOn===true) && <SwipeCarousel images={project.images}/>}
        <div className="w-full h-96"></div>

			</div>
			
		</div>
	);
}

export default ProjectDisplayCardLayout;
import React, { useState } from 'react';

const ProjectCard = ({projects}) => {
  const defaultProjectPanelIndex = -1;
  const [projectPanelOpen, setProjectPanelOpen] = useState(defaultProjectPanelIndex);

  const [projectImages, setProjectImages] = useState(['']);

  const LoadImages = (currentProject) => {
    setProjectImages(currentProject.images);
  };
  // GetImages(project)

  // clicking button opens the project panel and loads all images 
  const OpenProjectPanel = async (currentProject) => {
    await LoadImages(currentProject); // Sets the loadeded images
    await setImageIndex(0); // Resets the index
    await setProjectPanelOpen(currentProject.id);
  }

  // clicking button sets the project panel to default
  const SetDefaultProjectPanel = () => {
    LoadImages([]);
    setProjectPanelOpen(defaultProjectPanelIndex);
  }

  // changing the index of the loaded images to get all the different project images
  const [imageIndex, setImageIndex] = useState(0);
  const handleChangeImage = (direction) => {
    if (direction==='left') {
      if (imageIndex===0){
        setImageIndex(projectImages.length-1);
      }
      else{
        setImageIndex(imageIndex-1);
      }
    }
    else if (direction==="right") {
      if (imageIndex===projectImages.length-1){
        setImageIndex(0);
      }
      else{
        setImageIndex(imageIndex+1);
      }
    }
    console.log(`Change image button clicked: ${direction}`);
  }; 

  return (
    <div className=' '>

      {projects.map((project) => (
      <div className="relative my-4 rounded-2xl bg-slate-200 border-black border-2 group/g2">

        {/* Project Details */}
        <div className='flex flex-col min-h-[80px] text-center'>

          {/* Project Title and Description */}
          {projectPanelOpen===project.id ? (
          <button 
            onClick={()=> (SetDefaultProjectPanel())}
            className='p-2'
          >
            <div>{project.title}</div>
            <div>{project.description_long}</div>
            <div className='absolute top-0 right-0'>
              {project.domain}
            </div>
          </button>
          ) : (
          <button 
            onClick={()=> (OpenProjectPanel(project))}
            className='ml-auto w-2/3 h-[120px] p-2'
          >
            <div>{project.title}</div>
            <div>{project.description_short}</div>
            <div className=''>
              {project.domain}
            </div>
          </button>
          )}

          {/* Project Image Viewer*/}
          {projectPanelOpen === project.id ? (
            <div className='relative overflow-hidden w-full h-[300px]'>
              {/* Image container */}
              <div className="relative flex items-center justify-center border-2 border-blue-500 bg-blue-200 h-full">
                {/* Image */}
                <img
                  src={projectImages[imageIndex]}
                  alt={project.title}
                  className='object-cover h-full max-w-full rounded-lg'
                />
        
                {/* Left button with SVG icon */}
                <button
                  onClick={() => handleChangeImage('left')}
                  className="absolute left-0 top-0 bottom-0 w-1/6 min-w-12 bg-white bg-opacity-40 hover:bg-opacity-70 transition duration-300 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 animate-left-to-right"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                  </svg>
                </button>

                {/* Right button with SVG icon */}
                <button
                  onClick={() => handleChangeImage('right')}
                  className="absolute right-0 top-0 bottom-0 w-1/6 min-w-12 bg-white bg-opacity-40 hover:bg-opacity-70 transition duration-300 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 animate-right-to-left"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div 
              className='absolute left-0 top-0 bottom-0 overflow-hidden
              m-2 w-1/3 border-2 border-blue-500 bg-blue-200'>
              <img 
                src={project.thumbnail}
                alt={project.title}
                className='mx-auto h-full rounded-lg'
              />
            </div>
          )}

          {/* Project Tags */}
          {projectPanelOpen===project.id && (
            <div className='p-2 border-2 border-red-500'>
              <div>Tags</div>
              <div className='flex flex-row flex-wrap'>
                {project.tags.map((tag) => (
                  <div>{tag}</div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Project click Button */}
        <button 
          onClick={() => {
            projectPanelOpen===project.id ? SetDefaultProjectPanel() : OpenProjectPanel(project)
          }}
          className=' animate-pulse'
        >
          {projectPanelOpen!==project.id ? (
          <div className='bg-yellow-400 rounded-full absolute bottom-0 right-0 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              className="w-10 h-10 group-hover/g2:animate-bounce">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          </div>
          ) : (
          <div className='bg-pink-400 rounded-full absolute top-0 right-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              className="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
            </svg>
          </div>
          )}
        </button>
        
      </div>
      ))}

    </div>
  )
}

export default ProjectCard
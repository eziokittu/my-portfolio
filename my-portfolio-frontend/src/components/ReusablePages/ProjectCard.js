import React, { useState } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

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

  const getLeftIndex = () => (imageIndex - 1 + projectImages.length) % projectImages.length;
  const getRightIndex = () => (imageIndex + 1) % projectImages.length;

  return (
    <div className='group/g2'>
      
      {projects.map((project) => (
      <Zoom delay={200} duration={800}><Fade duration={1000}>
      <div className="relative my-4 rounded-2xl bg-sky-400/50  group/g3
      group-hover/g2:bg-sky-400/70 transition-all duration-300">

        {/* Project Details */}
        <div 
          className='flex flex-col min-h-[120px] rounded-2xl transition-all duration-300
          group-hover/g3:bg-gradient-to-t from-sky-400 via-sky-300 to-sky-200 '>

          {/* Project Title and Description and Link Button*/}
          {projectPanelOpen===project.id ? (
            <div className='flex flex-row m-4'>
              <button 
                onClick={()=>{window.open(`${project.link}`, '_blank')}}
                className='flex gap-2 items-center bg-sky-900 group-hover/g3:bg-sky-700 group-hover/g3:border-sky-900
                rounded-2xl border-4 border-sky-200 text-sky-100 group-hover/g3:text-white
                transition-colors duration-300'
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                  className="w-10 h-10 animate-pulse">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
                <p className='text-2xl animate-wiggle'>CODE</p>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    className="w-10 h-10 animate-pulse">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
              </button>
              <button 
                onClick={()=> (SetDefaultProjectPanel())}
                className='p-2 h-full mx-auto'
              >
                <div>{project.title}</div>
                <div>{project.description_short}</div>
              </button>
            </div>
          ) : (
            <button 
              onClick={()=> (OpenProjectPanel(project))}
              className='ml-auto w-2/3 h-[120px] p-2 '
            >
              <div>{project.title}</div>
              <div>{project.description_short}</div>
            </button>
          )}

          {/* image*/}
          {projectPanelOpen === project.id ? (
            <div className='relative overflow-hidden w-full h-[300px] rounded-xl'>
              {/* Project Image Viewer */}
              <div 
                className="mx-4 relative flex items-center justify-center border-4 transition-colors duration-300
              border-sky-200 group-hover/g3:border-sky-900 bg-sky-200 h-full rounded-xl">
                {/* Left Image */}
                <div className=" rounded-xl absolute left-0 top-0 bottom-0 w-[15%] max-w-[65px] overflow-hidden">
                  <div className="bg-white h-full transform">
                    <img
                      src={projectImages[getLeftIndex()]}
                      alt={`Left`}
                      className="object-cover h-full w-full transform"
                    />
                  </div>
                </div>
                {/* Center Image */}
                <img src={projectImages[imageIndex]}
                  alt={`Center`}
                  className=" h-full max-w-full"
                />
                {/* Right Image */}
                <div className="rounded-xl absolute right-0 top-0 bottom-0 w-[15%] max-w-[65px] overflow-hidden">
                  <div className="bg-white h-full transform">
                    <img
                      src={projectImages[getRightIndex()]}
                      alt={`Right`}
                      className="object-cover h-full w-full transform"
                    />
                  </div>
                </div>
        
                {/* Left button with SVG icon */}
                <button
                  onClick={() => handleChangeImage('left')}
                  className="absolute left-0 top-0 bottom-0 w-[15%] max-w-[65px] min-w-12 bg-white bg-opacity-40 hover:bg-opacity-70 transition duration-300 flex items-center justify-center rounded-xl"
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
                  className="absolute right-0 top-0 bottom-0 w-[15%] max-w-[65px] bg-white bg-opacity-40 hover:bg-opacity-70 transition duration-300 flex items-center justify-center rounded-xl"
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
              m-2 w-1/3 border-4 rounded-2xl border-sky-400 group-hover/g3:border-sky-800 bg-sky-200'>
              <img 
                src={project.thumbnail}
                alt={project.title}
                className='mx-auto h-full rounded-lg'
              />
            </div>
          )}

          {/* Project Tags */}
          {projectPanelOpen===project.id && (
            <div className='m-4'>
              <p className="text-2xl font-bold text-sky-200 group-hover/g3:text-sky-900 text-center transition-all duration-300"># TAGS</p>
              <div className='flex flex-wrap justify-center border border-stone-400 bg-sky-200 rounded-2xl  p-2  gap-2'>
                {project.tags.map(tag => (
                  <p className='text-center rounded-full px-4 py-1
                  text-sky-100 group-hover/g3:text-white border bg-sky-800 group-hover/g3:bg-sky-900'>
                    {tag}
                  </p>
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
          className='absolute top-4 right-0 animate-pulse group-hover/g3:animate-none'
        >
          {projectPanelOpen!==project.id ? (
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.4" stroke="currentColor"
              className="w-10 h-10 group-hover/g3:animate-bounce-down-to-up
              group-hover/g3:stroke-emerald-700 transition-colors duration-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          </div>
          ) : (
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.4" stroke="currentColor"
              className="w-10 h-10 group-hover/g3:animate-bounce-up-to-down
              group-hover/g3:stroke-red-500 transition-colors duration-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
            </svg>
          </div>
          )}
        </button>
        
      </div>
      </Fade></Zoom>
      ))}
    </div>
  )
}

export default ProjectCard;


// Project Data format
// remember to change the id for each project
// NOTE: ID must be unique
// NOTE: path for images is --> images/projectImages/

// {
// 	"id": 9,
// 	"title": "",
//  "description_short": "",
// 	"domain":"",
// 	"link":"",
// 	"tags": [
// 		""
// 	],
// 	"images": [
// 		"images/projectImages/"
// 	],
// 	"thumbnail": "images/projectImages/"
// },
import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div 
      className="relative z-10 flex flex-col justify-between 
      max-w-full min-h-[400px] max-h-[620px] rounded-lg
      border-4 shadow bg-gray-800 hover:bg-gray-700 boerder-white 
      hover:border-yellow-400 shadow-slate-800-200 hover:shadow-slate-200-800"
    >
			<div className="p-5 flex flex-col justify-between">

				<div className=''>
          Image
        </div>
				<div></div>
				<div></div>
				<div></div>

			</div>
			
		</div>
  )
}

export default ProjectCard
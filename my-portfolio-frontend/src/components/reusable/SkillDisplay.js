import SkillCard from './SkillCard';
import React from "react";

const SkillDisplay = ({skills}) => {

	return (
		<div className="">

			{/* Content of skill */}
			<div className='bg-slate-200/50 p-2'>

				{/* Title of the section */}
				<div className='text-4xl font-bold w-full text-center'>
					All my skills
				</div>

				{/* the grid consisting of all the skills */}
				<div className='w-4/5 mx-auto rounded-lg	bg-black/10 hover:bg-black/30 transition duration-500'>
					<div 
						className='
						grid grid-cols-1 2xsm:grid-cols-2 xsm:grid-cols-3
						sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8
						gap-5 p-5'>
						{skills.map((skill) => (
							<SkillCard skillImageSrc={skill[1]} skillName={skill[0]}/>
						))}
					</div>
				</div>

			</div>

		</div>
	);
}

export default SkillDisplay;
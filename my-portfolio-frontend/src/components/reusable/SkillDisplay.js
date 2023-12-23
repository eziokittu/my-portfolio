import SkillCard from './SkillCard';
import React from "react";

const SkillDisplay = ({skills}) => {

	return (
		<div className="">

			{/* Content of skill */}
			<div className='bg-pink-300/20 p-2'>


				{/* Title of the section */}
				<button 
					className='relative overflow-hidden group
					flex items-center justify-between
					font-bold cursor-default text-center
					bg-pink-300/100 w-fit mx-auto rounded-lg p-4 my-2'
				>
					<span className="mx-3 absolute inset-x-0 bottom-4 h-1 bg-fuchsia-800 transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='stroke-violet-950 fill-pink-200  w-[60px] xsm:w-[80px] md:w-[100px] mr-4'>
						<path d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"/>
					</svg>
					<p 
						className='
							font-RubikDoodleShadow text-violet-950 font-extrabold
							text-xl 2xsm:text-2xl xsm:text-3xl sm:text-5xl xl:text-7xl'
					>My Skills & Abilities</p>
				</button>

				{/* the grid consisting of all the skills */}
				<div className='w-4/5 mx-auto rounded-3xl bg-black/10 hover:bg-pink-300/20 shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500'>
					<div 
						className='
						grid grid-cols-1 2xsm:grid-cols-2 xsm:grid-cols-2
						sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8
						gap-5 p-5 pr-6'>
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
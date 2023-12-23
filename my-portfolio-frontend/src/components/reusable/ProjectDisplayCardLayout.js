import {Link} from 'react-router-dom';
import React from "react";

const ProjectDisplayCardLayout = (props) => {
	return (
		<div className="relative z-10 flex flex-col justify-between max-w-full min-h-[400px] max-h-[620px]  border-4 rounded-lg shadow bg-gray-800 hover:bg-gray-700 boerder-white hover:border-yellow-400 shadow-slate-800-200 hover:shadow-slate-200-800">
			<div className="p-5 flex flex-col justify-between">
				<p className='text-sm'>ID: {props.id}</p>
				<div class="max-h-[400px] overflow-hidden">
					<img className="rounded-lg w-auto" src={props.cardImage} alt="" />
				</div>
				<div className="pt-5">
					<h5 className="max-h-8 overflow-hidden mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{props.cardTitle}
					</h5>
					<p className="max-h-16 overflow-hidden font-normal text-gray-700 dark:text-gray-400">
						{props.cardDescription}
					</p>
				</div>
			</div>
			<div className="p-5 flex flex-col ">
				<Link to={`/projects/${props.id}`} className="px-1 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					<div className='inline-flex text-center mx-auto items-center' >
						<p className=''>Explore project</p>
						<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
						</svg>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default ProjectDisplayCardLayout;
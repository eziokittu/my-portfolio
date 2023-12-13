import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = ({ options }) => {
  return (
		<nav className='flex justify-between bg-slate-200/60 items-center p-2'>
			{/* Left Side */}
			<div className='flex justify-between items-center '>

				{/* logo */}
				<Link className='flex justify-between px-5 py-3 mr-10 text-white bg-neutral-700 rounded-t-[42px] rounded-b-2xl'>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  				<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
				</Link>

				{/* Primary Navbar */}
				<div className='text-2xl'>
					<Link className='text-stone-600 mx-1 px-2 pb-1 border-2 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-black focus:rounded-xl focus:bg-neutral-700 focus:border-indigo-200 focus:text-white transition duration-900' to={options[0].toLowerCase()}>{options[0]}</Link>
					<Link className='text-stone-600 mx-1 px-2 pb-1 border-2 bg-gray-200 rounded-md hover:bg-gray-300 hover:text-black focus:rounded-xl focus:bg-neutral-700 focus:border-indigo-200 focus:text-white transition duration-900' to={options[1].toLowerCase()}>{options[1]}</Link>
					<Link className='text-stone-600 mx-1 px-2 pb-1 border-2 bg-gray-200 rounded-md hover:bg-gray-300 hover:text-black focus:rounded-xl focus:bg-neutral-700 focus:border-indigo-200 focus:text-white transition duration-900' to={options[2].toLowerCase()}>{options[2]}</Link>
				</div>

			</div>

			{/* Right Side */}
			<div className='flex items-center justify-between space-x-1 text-sm'>
				<Link><div className='mr-2 underline decoration-zinc-300 hover:decoration-black transition duration-900'>Contact Me</div></Link>
				<Link><div className='underline decoration-zinc-300'>More</div></Link>
			</div>
		</nav>
	);
};

export default Navbar2;

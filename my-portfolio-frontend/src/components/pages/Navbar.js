import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ButtonLink1 from '../reusable/ButtonLink1';
import ContactMe from './ContactMe';

const Navbar2 = ({ options, contactMeButtonNotClicked }) => {

	// For Mobile Menu Hamburger
	const [mobileMenuOpen, isMobileMenuClicked] = useState(false);
	const closeMobileMenu = () => {
    isMobileMenuClicked(true);
  };
	const openMobileMenu = () => {
    isMobileMenuClicked(false);
  };

	// For Contact Me Overlay
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const openOverlay = () => {
		contactMeButtonNotClicked(true);
    setIsOverlayOpen(true);
  };
  const closeOverlay = (parameter) => {
		contactMeButtonNotClicked(false);
    setIsOverlayOpen(parameter);
  };

	// const [parameterFromChild, setParameterFromChild] = useState(false);
  // // Callback function to receive the parameter from the child
  // const handleChildParameter = (parameter) => {
  //   setParameterFromChild(parameter);
  // };

  return (
		<nav className=' bg-slate-200/60 p-2'>
			<div className='flex justify-between items-center'>
				{/* Left Side */}
				<div className='flex justify-between items-center '>

					{/* logo */}
					<Link className='flex justify-between px-5 py-3 mr-10 text-white bg-neutral-700 rounded-t-[42px] rounded-b-2xl'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
						<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					</Link>

					{/* Vertical Ruler */}
					<div className="inline-block h-auto w-1 self-stretch bg-gray-200 opacity-100 dark:opacity-50"></div>

					{/* Primary Navbar */}
					<div className='hidden sm:flex text-2xl'>
						<ButtonLink1 linkTo={options[0].toLowerCase()} buttonName={options[0]} isBlock={false}/>
						<ButtonLink1 linkTo={options[1].toLowerCase()} buttonName={options[1]} isBlock={false}/>
						<ButtonLink1 linkTo={options[2].toLowerCase()} buttonName={options[2]} isBlock={false}/>
					</div>

				</div>

				{/* Vertical Ruler */}
				<div className="hidden sm:inline-block h-auto w-1 self-stretch bg-gray-200 opacity-100 dark:opacity-50"></div>

				{/* Right Side */}
				<div className='hidden sm:flex items-center justify-between space-x-1 text-sm'>
					<Link 
						className='
							text-stone-600 hover:text-black focus:text-white 
							mx-1 px-2 pb-1 
							border-2 focus:border-zinc-900 
							bg-gray-200 hover:bg-gray-300 focus:bg-neutral-700 
							rounded-lg focus:rounded-xl 
							transition duration-900' 
						onClick={openOverlay}
					>
						Contact Me
					</Link>
					<ButtonLink1 linkTo='#' buttonName='More' isBlock={false}/>
				</div>

				{/* Mobile button goes here */}
				{mobileMenuOpen===false && <div className='flex sm:hidden items-center opacity-100'>
					<button 
						onClick={closeMobileMenu} 
						className='flex space-x-3 items-center text-stone-600 mx-1 px-2 pb-1 border-2 bg-gray-200 rounded-lg hover:border-green-200 hover:bg-gray-300 hover:text-black focus:rounded-xl focus:bg-lime-100 focus:border-lime-300 focus:text-stone-800 transition duration-900'
					>
					<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
					</svg></div>
					<div className=''>open</div>
					</button>
				</div>}
				{mobileMenuOpen===true && <div className='flex sm:hidden items-center'>
					<button 
						onClick={openMobileMenu} 
						className='flex space-x-3 items-center text-stone-600 mx-1 px-2 pb-1 border-2 bg-gray-200 rounded-lg hover:border-red-200 hover:bg-gray-300 hover:text-black focus:rounded-xl focus:bg-rose-100 focus:border-rose-300 focus:text-stone-800 transition duration-900'
					>
					<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
					</svg></div>
					<div>close</div>
					</button>
				</div>}
			</div>

			{/* Mobile Menu here */}
			{mobileMenuOpen===true && <div className='block sm:hidden text-center mt-1'>
			<hr/><hr/><hr/><hr/><hr/><hr/>
				<div className='w-40 space-y-2 my-4'>
					<ButtonLink1 linkTo={options[0].toLowerCase()} buttonName={options[0]} isBlock={true}/>
					<ButtonLink1 linkTo={options[1].toLowerCase()} buttonName={options[1]} isBlock={true}/>
					<ButtonLink1 linkTo={options[2].toLowerCase()} buttonName={options[2]} isBlock={true}/>
				</div>
				<hr/><hr/><hr/><hr/><hr/><hr/>
				<div className='w-32 space-y-2 mt-4'>
					<Link 
						className='
							text-stone-600 hover:text-black focus:text-white 
							block mx-1 px-2 pb-1 
							border-2 focus:border-zinc-900 
							bg-gray-200 hover:bg-gray-300 focus:bg-neutral-700 
							rounded-lg focus:rounded-xl 
							transition duration-900'
						onClick={openOverlay} 
					>
						Contact Me
					</Link>
					<ButtonLink1 linkTo='#' buttonName='More' isBlock={true}/>
				</div>
			</div>}

			{/* Contact Me Overlay */}
			{isOverlayOpen && 
				<ContactMe onParameterChange={closeOverlay}/>
			}
		</nav>
	);
};

export default Navbar2;

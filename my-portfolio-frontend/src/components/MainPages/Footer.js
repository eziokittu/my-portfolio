import React from "react";
import { Link } from 'react-scroll';

import contactData from '../../data/contactData.json';

const Footer = ({options}) => {
	return (
		<footer className="relative w-full z-0">
			{/* Transperant gradient - change the height acordingly*/}
			<div className="h-44 w-full bg-gradient-to-t from-black via-black to-transparent"></div>

			{/* Divider */}
			<div className="w-full flex items-center bg-black">
				<div className="border-t-4 border-white w-full ml-2 mr-4 h-0"></div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" 
					class="w-24 h-24 animate-[spin_2s_linear_infinite] fill-slate-100 stroke-yellow-400  ">
					<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
				</svg>
				<div className="border-t-4 border-white w-full mr-2 ml-4 h-0"></div>
			</div>

			{/* Footer Area */}
			<div className="
				w-full h-fit overflow-hidden
				bg-gradient-to-b from-black/95 via-black/75 to-black text-slate-100 
				flex flex-col items-center"
			>
				{/* Top Area */}
				<div 
					className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-4 xl:gap-8
					text-slate-200 lg:mx-2"
				>

					{/* Thank You Message */}
					<div className="flex flex-col max-w-[350px]">

						{/* Heading */}
						<h1 
							className="w-fit text-4xl sm:text-3xl lg:text-2xl
							border-b-2 border-slate-500 font-semibold">
							Bodhisatta's Portfolio
						</h1>

						{/* Body */}
						<div className=" mt-2 ml-4 text-lg">
							<p>Thank you for visiting my personal portfolio website</p>
							<p>Connect with me over socials. Keep Rising 🚀. Let's play Counter Strike together sometimes</p>
						</div>

					</div>

					{/* Quick Links */}
					<div className="flex flex-col">

						{/* Heading */}
						<h1 
							className="w-fit text-4xl sm:text-3xl lg:text-2xl
							border-b-2 border-slate-500 font-semibold">
							Quick Links
						</h1>

						{/* Body */}
						<div className="mt-2 ml-4 text-lg ">

							{/* Home Link Button */}
							<Link to={options[0].toLowerCase()}
								activeClass="active" spy={true} offset={-180} 
								duration={1500} smooth={'easeOutElastic'}
							>
								<button className="flex items-center gap-1 group/g1">
									<div className=" transition-all duration-300 group-hover/g1:bg-amber-400 bg-clip-content rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
											class="w-5 h-5 border-2 rounded-full transition-all duration-300 
											group-hover/g1:border-black group-hover/g1:stroke-black ">
											<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
										</svg>
									</div>
									<p 
										className=" transition-all duration-300 
									group-hover/g1:text-amber-400 group-hover/g1:font-bold">
										{options[0]}
									</p>
								</button>
							</Link>

							{/* About Link Button */}
							<Link to={options[1].toLowerCase()}
								activeClass="active" spy={true} offset={-180} 
								duration={1500} smooth={'easeOutElastic'}
							>
								<button className="flex items-center gap-1 group/g1">
									<div className=" transition-all duration-300 group-hover/g1:bg-amber-400 bg-clip-content rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
											class="w-5 h-5 border-2 rounded-full transition-all duration-300 
											group-hover/g1:border-black group-hover/g1:stroke-black ">
											<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
										</svg>
									</div>
									<p 
										className=" transition-all duration-300 
									group-hover/g1:text-amber-400 group-hover/g1:font-bold">
										{options[1]}
									</p>
								</button>
							</Link>

							{/* Skills Link Button */}
							<Link to={options[2].toLowerCase()}
								activeClass="active" spy={true} offset={-180} 
								duration={1500} smooth={'easeOutElastic'}
							>
								<button className="flex items-center gap-1 group/g1">
									<div className=" transition-all duration-300 group-hover/g1:bg-amber-400 bg-clip-content rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
											class="w-5 h-5 border-2 rounded-full transition-all duration-300 
											group-hover/g1:border-black group-hover/g1:stroke-black ">
											<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
										</svg>
									</div>
									<p 
										className=" transition-all duration-300 
									group-hover/g1:text-amber-400 group-hover/g1:font-bold">
										{options[2]}
									</p>
								</button>
							</Link>

							{/* Projects Link Button */}
							<Link to={options[3].toLowerCase()}
								activeClass="active" spy={true} offset={-180} 
								duration={1500} smooth={'easeOutElastic'}
							>
								<button className="flex items-center gap-1 group/g1">
									<div className=" transition-all duration-300 group-hover/g1:bg-amber-400 bg-clip-content rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
											class="w-5 h-5 border-2 rounded-full transition-all duration-300 
											group-hover/g1:border-black group-hover/g1:stroke-black ">
											<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
										</svg>
									</div>
									<p 
										className=" transition-all duration-300 
									group-hover/g1:text-amber-400 group-hover/g1:font-bold">
										{options[3]}
									</p>
								</button>
							</Link>

							{/* Education Link Button */}
							<Link to={options[4].toLowerCase()}
								activeClass="active" spy={true} offset={-180} 
								duration={1500} smooth={'easeOutElastic'}
							>
								<button className="flex items-center gap-1 group/g1">
									<div className=" transition-all duration-300 group-hover/g1:bg-amber-400 bg-clip-content rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
											class="w-5 h-5 border-2 rounded-full transition-all duration-300 
											group-hover/g1:border-black group-hover/g1:stroke-black ">
											<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
										</svg>
									</div>
									<p 
										className=" transition-all duration-300 
									group-hover/g1:text-amber-400 group-hover/g1:font-bold">
										{options[4]}
									</p>
								</button>
							</Link>

						</div>

					</div>

					{/* Contact Info */}
					<div className="flex flex-col">

						{/* Heading */}
						<h1 
							className="w-fit text-4xl sm:text-3xl lg:text-2xl
							border-b-2 border-slate-500 font-semibold">
							Contact Info
						</h1>

						{/* Body */}
						<div className="mt-2 ml-4 text-lg ">

							{/* Essential Info */}
							<div>
								<div>My Phone</div>
								<div>My Email</div>
								<div>My Location</div>
							</div>

							{/* Contact Icons */}
							<div className="flex flex-row flex-wrap gap-2">
								<div>Github</div>
								<div>Linkedin</div>
							</div>

						</div>

					</div>

					{/* Other Information */}
					<div className="flex flex-col max-w-[350px]">

						{/* Heading */}
						<h1 
							className="w-fit text-4xl sm:text-3xl lg:text-2xl
							border-b-2 border-slate-500 font-semibold"
						>
							Other Information
						</h1>

						{/* Body */}
						<div className="mt-2 ml-4 text-lg ">

							{/* More */}
							<div>
								<div>More</div>
							</div>

							{/* Secret Messages */}
							<div>
								<div>Secret Messages</div>
							</div>

						</div>

					</div>

				</div>

				{/* Divider */}
				<div className="w-full flex items-center bg-black">
					<div className="border-t-4 border-white w-full ml-2 mr-4 h-0"></div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" 
						class="w-24 h-24 animate-[spin_2s_linear_infinite] fill-slate-100 stroke-yellow-400  ">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
					</svg>
					<div className="border-t-4 border-white w-full mr-2 ml-4 h-0"></div>
				</div>

				{/* Bottom Area */}
				<div className="mb-8 xsm:flex text-center items-center text-xs xsm:text-lg sm:text-xl">
				<p>Designed With</p>
				<p className="mx-[4px] xsm:mx-2 xsm:animate-heartbeat">❤️</p> 
				<p className="mr-[4px] xsm:mr-2">By</p>
				<button
					onClick={()=>{window.open(`${contactData.links.link_linkedin}`, '_blank')}}
					className=' text-sky-600 hover:text-sky-500 transition duration-300'>
					<p className='text-xl sm:text-3xl'>Bodhisatta Bhattacharjee</p>
					{/* <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin"><g fill="none" fill-rule="evenodd"><g><rect width="72" height="72" fill="#117EB8" rx="4"></rect><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path></g></g></svg> */}
				</button>
				</div>
			</div>

		</footer>
	);
}

export default Footer;
import React from "react";

import contactData from '../../data/contactData.json';

const Footer = () => {
	return (
		<footer className="relative w-full z-0">
			{/* Transperant gradient - change the height acordingly*/}
			<div className="h-44 w-full bg-gradient-to-t from-slate-800 to-transparent"></div>

			{/* Footer Area */}
			<div className="
				w-full h-fit overflow-hidden
				bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-slate-100 
				flex flex-col items-center"
			>
				{/* Top Area */}
				<div className="grid xsm:grid-cols-2 lg:grid-cols-4 gap-4">

					{/* Thank You Message */}
					<div className="flex flex-col border border-white">

						{/* Heading */}
						<h1>Bodhisatta's Portfolio</h1>

						{/* Body */}
						<div>Thank You for visiting my portfolio</div>

					</div>

					{/* Quick Links */}
					<div className="flex flex-col border border-white">

						{/* Heading */}
						<h1>Quick Links</h1>

						{/* Body */}
						<div>
							<div>Home</div>
							<div>About</div>
							<div>Skills</div>
							<div>Project</div>
							<div>Education</div>
						</div>

					</div>

					{/* Contact Info */}
					<div className="flex flex-col border border-white">

						{/* Heading */}
						<h1>Contact Info</h1>

						{/* Body */}
						<div>
							<div>Github</div>
							<div>Linkedin</div>
							<div>leetcode</div>
							<div>HackerRank</div>
							<div>Github</div>
							<div>Linkedin</div>
							<div>leetcode</div>
							<div>HackerRank</div>
						</div>

					</div>

					{/* Other Information */}
					<div className="flex flex-col border border-white">

						{/* Heading */}
						<h1>Other Information</h1>

						{/* Body */}
						<div>

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
				<div className="w-11/12 flex items-center">
					<div className="border-t-4 border-white w-full mx-4 h-0"></div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" 
						class="w-24 h-24 animate-[spin_2s_linear_infinite] fill-slate-100 stroke-yellow-400  ">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
					</svg>
					<div className="border-t-4 border-white w-full mx-4 h-0"></div>
				</div>

				{/* Bottom Area */}
				<div className="mb-8 flex justify-center items-center">
				<p>Designed With</p>
				<p className="mx-2 animate-heartbeat">❤️</p> 
				<p className="mr-2">By</p>
				<button
					onClick={()=>{window.open(`${contactData.links.link_linkedin}`, '_blank')}}
					className='flex text-sky-600 hover:text-sky-500 transition duration-300
					border-b-2 border-transparent hover:border-slate-400'>
					<p className='text-xl md:text-2xl'>Bodhisatta Bhattacharjee</p>
					{/* <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin"><g fill="none" fill-rule="evenodd"><g><rect width="72" height="72" fill="#117EB8" rx="4"></rect><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path></g></g></svg> */}
				</button>
				</div>
			</div>

		</footer>
	);
}

export default Footer;
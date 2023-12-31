import React from 'react';

import contactData from '../../data/contactData.json';

const ContactMe = ({ onParameterChange }) => {
  const handleButtonClick = () => {
    onParameterChange(false);
  };

	const redirectToGmail = () => {
    const email = contactData.links.link_email_primary;
    const subject = '[Redirected from Bodhisatta-portfolio]';
    const body = 'Hi Bodhisatta,\n';
		const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <div className='z-20'>
			<div 
				className="
					fixed inset-0
				bg-black bg-opacity-85
					flex items-center justify-center text-center">
				<div className="
						bg-white p-3 
						border-t-2 border-x-4 border-b-8
						border-opacity-70
						border-t-stone-700 border-x-stone-700 border-b-stone-700
						rounded-2xl 
						w-full xsm:w-5/6 sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/3
						h-full xsm:h-5/6
						text-zinc-800">
					{/* Content for social media links, email contact, etc. */}

					{/* Close button */}
					<div className='relative float-right text-center'>
						<button 
							onClick={handleButtonClick} 
							onHove
							className="
								group transition-all duration-150
								bg-slate-100 hover:bg-red-500 active:bg-red-700
								border-4 hover:border-4
								border-red-800 hover:border-black
								text-red-800 hover:text-white
								rounded-2xl p-1"
						>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" 
								className="animate-pulse w-8 h-8">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>

							{/* Showed when hovering over the close button */}
							<span 
								className="
									hidden group-hover:inline-block absolute 
									left-1/2 px-4 py-2
								  transform -translate-x-1/2 
									text-red-700 
									rounded-md opacity-100 
									transition-opacity duration-700">
								Close
							</span>

						</button>
					</div>

					{/* Heading */}
					<h2 
						className="
							text-2xl sm:text-3xl lg:text-4xl
							font-bold 
							mb-12"
					>
						Contact Information
					</h2>
					
					{/* horizontal line */}
					<hr className='border-stone-800 border-2'/>

					{/* Emails */}
					<div className='my-2 items-center justify-center'>
						<div className='flex text-red-700 font-bold text-xl items-center justify-center w-fit mx-auto border-b-[2px]'>
							<h2 className='mr-2'>Email</h2>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
								className="stroke-red-700 w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
							</svg>
						</div>
						
						<button 
							onClick={redirectToGmail}
							className='flex items-center w-fit mx-auto'>
							<p className='text-xl md:text-2xl mr-2'>
								{contactData.links.link_email_primary}
							</p>
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" data-name="Layer 1" viewBox="0 0 32 32" id="gmail">
								<path fill="#ea4435" d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"></path><path fill="#00ac47" d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" transform="rotate(180 26.5 16)"></path><path fill="#ffba00" d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"></path><path fill="#4285f4" d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"></path><path fill="#c52528" d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"></path>
							</svg>
						</button>
					</div>

					{/* horizontal line */}
					<hr className='border-stone-800 border-2'/>

					{/* Useful Links */}
					<div className='my-2'>
						<div className='flex text-red-700 font-bold text-xl items-center justify-center w-fit mx-auto border-b-[2px]'>
							<h2 className='mr-2'>Useful Links</h2>
							<svg className='w-6 h-6 fill-red-700' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30">
								<path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
							</svg>
						</div>
						<div className='my-4 gap-2 grid grid-cols-1 xsm:grid-cols-2'>
							{/* Github */}
							<button 
								onClick={()=>{window.open(`${contactData.links.link_github}`, '_blank')}} 
								className='flex justify-center items-center text-stone-600
								w-fit mx-auto border-b-2 border-slate-50 hover:border-b-2 hover:border-slate-400'>
								<p className='text-xl md:text-2xl mr-2'>GitHub</p>
								<svg className='fill-stone-600 w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github">
									<path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
								</svg>
							</button>

							{/* Leetcode */}
							<button 
								onClick={()=>{window.open(`${contactData.links.link_leetcode}`, '_blank')}}
								className='flex justify-center items-center text-yellow-600
								w-fit mx-auto border-b-2 border-slate-50 hover:border-b-2 hover:border-slate-400'>
								<p className='text-xl md:text-2xl mr-2'>Leetcode</p>
								<svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode"><path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path><path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path><path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z">
									</path>
								</svg>
							</button>

							{/* CodeForces */}
							<button 
								onClick={()=>{window.open(`${contactData.links.link_codeforces}`, '_blank')}}
								className='flex justify-center items-center text-orange-600
								w-fit mx-auto border-b-2 border-slate-50 hover:border-b-2 hover:border-slate-400'>
								<p className='text-xl md:text-2xl mr-2'>CodeForces</p>
								<svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="code-forces">
									<path fill="#F44336" d="M24 19.5V12a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 18 12v7.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z"></path><path fill="#2196F3" d="M13.5 21a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 13.5 3h-3C9.673 3 9 3.672 9 4.5v15c0 .828.673 1.5 1.5 1.5h3z"></path><path fill="#FFC107" d="M0 19.5c0 .828.673 1.5 1.5 1.5h3A1.5 1.5 0 0 0 6 19.5V9a1.5 1.5 0 0 0-1.5-1.5h-3C.673 7.5 0 8.172 0 9v10.5z"></path>
								</svg>
							</button>
							
							{/* HackerRank */}
							<button 
								onClick={()=>{window.open(`${contactData.links.link_hackerrank}`, '_blank')}}
								className='flex justify-center items-center text-indigo-950
								w-fit mx-auto border-b-2 border-slate-50 hover:border-b-2 hover:border-slate-400'>
								<p className='text-xl md:text-2xl mr-2'>HackerRank</p>
								<svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="hackerrank">
									<path fill="#2FC363" d="M11.999,0C10.626,0,2.195,4.818,1.514,6c-0.683,1.182-0.687,10.819,0,12c0.685,1.181,9.114,6,10.485,6c1.37,0,9.8-4.823,10.487-6c0.687-1.176,0.687-10.83,0-12C21.799,4.83,13.371,0,11.999,0L11.999,0z M14.84,19.415v0.002c-0.188,0-1.938-1.677-1.8-1.814c0.041-0.041,0.296-0.069,0.832-0.086c0-1.23,0.027-3.215,0.044-4.046c0.002-0.095-0.021-0.161-0.021-0.273h-3.787c0,0.333-0.022,1.697,0.064,3.416c0.012,0.213-0.074,0.279-0.271,0.278c-0.48-0.001-0.96-0.005-1.441-0.004c-0.194,0-0.278-0.073-0.271-0.286c0.043-1.567,0.141-3.938-0.008-9.969V6.483C7.724,6.468,7.404,6.438,7.364,6.397C7.225,6.26,9,4.583,9.187,4.583c0.188,0,1.951,1.677,1.813,1.814c-0.041,0.041-0.374,0.07-0.795,0.086v0.148c-0.113,1.207-0.096,3.731-0.124,4.941h3.803c0-0.214,0.019-1.629-0.057-3.922c-0.005-0.159,0.046-0.242,0.199-0.244c0.524-0.004,1.049-0.006,1.574-0.003c0.164,0.001,0.217,0.08,0.214,0.252c-0.173,8.967-0.032,8.341-0.032,9.86c0.42,0.016,0.796,0.045,0.838,0.086C16.757,17.737,15.027,19.415,14.84,19.415L14.84,19.415z"></path><path fill="#DEDEDE" d="M9.187,4.583C9,4.583,7.225,6.26,7.364,6.397c0.041,0.041,0.36,0.07,0.817,0.086v0.149c0.149,6.031,0.051,8.402,0.008,9.969c-0.007,0.214,0.077,0.286,0.271,0.286c0.067,0,0.134,0,0.201,0c0.413,0,0.826,0.003,1.24,0.004c0.001,0,0.003,0,0.004,0c0.194,0,0.279-0.067,0.268-0.278c-0.087-1.719-0.064-3.083-0.064-3.416H12v-1.626h-1.919c0.028-1.209,0.011-3.734,0.124-4.941V6.483C10.626,6.468,10.959,6.438,11,6.397C11.138,6.26,9.374,4.583,9.187,4.583L9.187,4.583z"></path><path fill="#29AA56" d="M11.999,0C10.626,0,2.195,4.818,1.514,6c-0.683,1.182-0.687,10.819,0,12c0.685,1.181,9.114,6,10.485,6l0,0H12V13.198h-1.892c0,0.333-0.022,1.697,0.064,3.416c0.012,0.211-0.073,0.278-0.268,0.278c-0.001,0-0.002,0-0.004,0c-0.413-0.001-0.826-0.004-1.24-0.004c-0.067,0-0.134,0-0.201,0c-0.194,0-0.278-0.073-0.271-0.286c0.043-1.567,0.141-3.938-0.008-9.969V6.483C7.724,6.468,7.404,6.438,7.364,6.397C7.225,6.26,9,4.583,9.187,4.583c0.188,0,1.951,1.677,1.813,1.814c-0.041,0.041-0.374,0.07-0.795,0.086v0.148c-0.113,1.207-0.096,3.731-0.124,4.941H12L11.999,0L11.999,0L11.999,0z"></path>
								</svg>
							</button>
						</div>
					</div>

					{/* horizontal line */}
					<hr className='border-stone-800 border-2'/>

					{/* Social Media Links */}
					<div className='my-2'>
						<div className='flex text-red-700 font-bold text-xl items-center justify-center w-fit mx-auto border-b-[2px]'>
							<h2 className='mr-2'>Social Media / Others</h2>
							<svg className='stroke-red-700 w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
							</svg>

						</div>
						<div className='my-4 gap-2 grid grid-cols-1 xsm:grid-cols-2'>

							{/* LinkedIn */}
							<button
								onClick={()=>{window.open(`${contactData.links.link_linkedin}`, '_blank')}}
								className='flex justify-center items-center text-sky-600
								w-fit mx-auto border-b-2 border-slate-50 hover:border-b-2 hover:border-slate-400'>
								<p className='text-xl md:text-2xl mr-2'>LinkedIn</p>
								<svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin"><g fill="none" fill-rule="evenodd"><g><rect width="72" height="72" fill="#117EB8" rx="4"></rect><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path></g></g></svg>
							</button>

							{/* Facebook */}
							<button 
								onClick={()=>{window.open(`${contactData.links.link_facebook}`, '_blank')}}
								className='flex justify-center items-center text-blue-600
								w-fit mx-auto border-b-2 border-slate-50 hover:border-b-2 hover:border-slate-400'>
								<p className='text-xl md:text-2xl mr-2'>Facebook</p>
								<svg  className='w-6 h-6' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48">
									<linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
								</svg>
							</button>

							{/* Instagram */}
							<button 
								onClick={()=>{window.open(`${contactData.links.link_instagram}`, '_blank')}}
								className='flex justify-center items-center text-pink-700
								w-fit mx-auto border-b-2 border-slate-50 hover:border-b-2 hover:border-slate-400'>
								<p className='text-xl md:text-2xl mr-2'>Instagram</p>
								<svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48">
									<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
								</svg>
							</button>

							{/* Twitter */}
							<button 
								onClick={()=>{window.open(`${contactData.links.link_twitter}`, '_blank')}}
								className='flex justify-center items-center text-gray-900
								w-fit mx-auto border-b-2 border-slate-50 hover:border-b-2 hover:border-slate-400'>
								<p className='text-xl md:text-2xl mr-2'>Twitter/X</p>
								<svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 50 50">
									<path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
								</svg>
							</button>

							{/* Spotify */}
							<button 
								onClick={()=>{window.open(`${contactData.links.link_spotify}`, '_blank')}}
								className='flex justify-center items-center text-green-500
								w-fit mx-auto border-b-2 border-slate-50 hover:border-b-2 hover:border-slate-400'>
								<p className='text-xl md:text-2xl mr-2'>Spotify</p>
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className='bi bi-spotify w-6 h-6'> 
									<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
								</svg>
							</button>
							
							{/* Steam */}
							<button 
								onClick={()=>{window.open(`${contactData.links.link_steam}`, '_blank')}}
								className='flex justify-center items-center text-blue-950
								w-fit mx-auto border-b-2 border-slate-50 hover:border-b-2 hover:border-slate-400'>
								<p className='text-xl md:text-2xl mr-2'>Steam</p>
								<svg className='w-6 h-6 color1a1918 svgShape' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 259" id="Steam"><path fill="#122172" d="M127.779 0C60.42 0 5.24 52.412 0 119.014l68.724 28.674a35.812 35.812 0 0 1 20.426-6.366c.682 0 1.356.019 2.02.056l30.566-44.71v-.626c0-26.903 21.69-48.796 48.353-48.796 26.662 0 48.352 21.893 48.352 48.796 0 26.902-21.69 48.804-48.352 48.804-.37 0-.73-.009-1.098-.018l-43.593 31.377c.028.582.046 1.163.046 1.735 0 20.204-16.283 36.636-36.294 36.636-17.566 0-32.263-12.658-35.584-29.412L4.41 164.654c15.223 54.313 64.673 94.132 123.369 94.132 70.818 0 128.221-57.938 128.221-129.393C256 57.93 198.597 0 127.779 0zM80.352 196.332l-15.749-6.568c2.787 5.867 7.621 10.775 14.033 13.47 13.857 5.83 29.836-.803 35.612-14.799a27.555 27.555 0 0 0 .046-21.035c-2.768-6.79-7.999-12.086-14.706-14.909-6.67-2.795-13.811-2.694-20.085-.304l16.275 6.79c10.222 4.3 15.056 16.145 10.794 26.46-4.253 10.314-15.998 15.195-26.22 10.895zm121.957-100.29c0-17.925-14.457-32.52-32.217-32.52-17.769 0-32.226 14.595-32.226 32.52 0 17.926 14.457 32.512 32.226 32.512 17.76 0 32.217-14.586 32.217-32.512zm-56.37-.055c0-13.488 10.84-24.42 24.2-24.42 13.368 0 24.208 10.932 24.208 24.42 0 13.488-10.84 24.421-24.209 24.421-13.359 0-24.2-10.933-24.2-24.42z"></path></svg>
							</button>
						</div>
					</div>

				</div>
			</div>
    </div>
  );
};

export default ContactMe;

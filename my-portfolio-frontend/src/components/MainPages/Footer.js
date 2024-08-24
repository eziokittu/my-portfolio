import React, { useState } from "react";
import { scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

import Divider from "../ReusablePages/Divider";
import FooterLinkButton from "../ReusablePages/FooterLinkButton";

import contactData from '../../data/contactData.json';
import resourceData from '../../data/resourcesData.json';
import otherData from '../../data/otherData.json';

const Footer = () => {

	const [hiddenText, setHiddenText] = useState(true);

	// for using react-scroll and react-router at the same time
	const path = useLocation().pathname;
	const location = path.split('/')[1];
	const navigate = useNavigate();
	const scrollToSection = (section) => {
		// console.log(section);
		scroller.scrollTo(section, {
			duration: 1500,
			delay: 100,
			smooth: 'easeOutBack',
			offset: -180
		});
	};
	// method applied to the navbar buttons when not in the default page
	const goToHomeAndScroll = async (section) => {
		await navigate('/');
		await scroller.scrollTo(section, {
			duration: 1500,
			delay: 100,
			smooth: 'easeOutBack',
			offset: -180
		});
	};

	return (
		<footer className="relative w-full z-0">

			{/* Divider */}
			<Divider isBgTransparent={false} isNavbarAbove={false} hasCentreGap={true} />

			{/* Footer Area */}
			<div className=" w-full md:w-[790px] lg:w-[1004px]
				h-fit overflow-hidden mx-auto
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
							className="w-fit text-2xl sm:text-3xl lg:text-2xl
							border-b-2 border-slate-500 font-semibold">
							Bodhisatta's Portfolio
						</h1>

						{/* Body */}
						<div className=" mt-2 ml-4 sm:text-lg text-justify">
							<p>Thank you 🙌 for visiting my personal portfolio website 😽</p>
							<p>Connect with me over socials.📱</p>
							<p>Keep Rising 🚀.</p>
							<p>Let's play Counter Strike 🔥 together sometimes </p>
							<p>😸🌎😇</p>
						</div>

					</div>

					{/* Quick Links */}
					<div className="flex flex-col max-w-[350px]">

						{/* Heading */}
						<h1
							className="w-fit text-2xl sm:text-3xl lg:text-2xl
							border-b-2 border-slate-500 font-semibold">
							Quick Links
						</h1>

						{/* Body - All the Buttons */}
						<div className="mt-2 ml-4 text-lg flex flex-col">
						{otherData.navbarOptions.map((link, num) => (
							<FooterLinkButton
								key={num}
								myOnClick={() => {
									location === '' ? scrollToSection(otherData.navbarOptionLinks[num + 1]) : goToHomeAndScroll(otherData.navbarOptionLinks[num + 1])
								}}
								buttonName={otherData.navbarOptions[num]}
							/>
						))}
						</div>

					</div>

					{/* Contact Info */}
					<div className="flex flex-col max-w-[350px] flex-wrap">

						{/* Heading */}
						<h1
							className="w-fit text-2xl sm:text-3xl lg:text-2xl
							border-b-2 border-slate-500 font-semibold">
							Contact Info
						</h1>

						{/* Body */}
						<div className="mt-2 ml-4 ">

							{/* Essential Info */}
							<div>

								{/* Phone */}
								<div className="flex gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
										className="w-8 h-8 fill-amber-500 stroke-amber-500">
										<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
									</svg>
									<div>
										+91 XXXXX-XXXXX
									</div>
								</div>

								{/* Mail */}
								<div className="flex gap-2  ">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
										className="w-8 h-8 fill-amber-500 stroke-black">
										<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
									</svg>
									<div>
										{contactData.links.link_email_primary}
									</div>
								</div>

								{/* Location */}
								<div className="flex gap-2">
									<div className="">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
											className="w-8 h-8 stroke-amber-500">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
											<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
										</svg>
									</div>
									<div>Kolkata, PIN-700040</div>
								</div>

							</div>

							{/* Contact Icons */}
							<div className="mt-2 flex flex-row flex-wrap gap-2">

								{/* Linkedin button */}
								<button
									onClick={() => { window.open(`${contactData.links.link_linkedin}`, '_blank') }}
									className=''
								>
									<div className="bg-slate-100 hover:bg-amber-500 
										w-12 h-12 rounded-full p-3 hover:p-2 transition-all duration-300">
										<svg
											className=' rounded-full'
											xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin"><g fill="none" fillRule="evenodd"><g><rect width="72" height="72" fill="#117EB8" rx="4"></rect>
												<path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
												></path></g></g></svg>
									</div>
								</button>

								{/* Github button */}
								<button
									onClick={() => { window.open(`${contactData.links.link_github}`, '_blank') }}
									className=''
								>
									<div className="bg-slate-100 hover:bg-amber-500 
										w-12 h-12 rounded-full p-3 hover:p-2 transition-all duration-300">
										<svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github">
											<path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
										</svg>
									</div>
								</button>

								{/* Instagram Button */}
								<button
									onClick={() => { window.open(`${contactData.links.link_instagram}`, '_blank') }}
									className=''
								>
									<div className="bg-slate-100 hover:bg-amber-500 
										w-12 h-12 rounded-full p-3 hover:p-2 transition-all duration-300">
										<svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
											<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
										</svg>
									</div>
								</button>

								{/* Twitter Button */}
								<button
									onClick={() => { window.open(`${contactData.links.link_twitter}`, '_blank') }}
									className=''
								>
									<div className="bg-slate-100 hover:bg-amber-500 
										w-12 h-12 rounded-full p-3 hover:p-2 transition-all duration-300">
										<svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
											<path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
										</svg>
									</div>
								</button>


							</div>

						</div>

					</div>

					{/* Other Information */}
					<div className="flex flex-col max-w-[350px]">

						{/* Heading */}
						<h1
							className="w-fit text-2xl sm:text-3xl lg:text-2xl
							border-b-2 border-slate-500 font-semibold"
						>
							Other Information
						</h1>

						{/* Body */}
						<div className="mt-2 ml-4  ">

							{/* Auro's Portfolio */}
							<div>
								<div className="">
									<p>Website design is heavily inspired from</p>
									<button
										className="animate-pulse mr-2 hover:animate-none"
										onClick={() => { window.open(`${contactData.links.link_auro}`, '_blank') }}
									>
										<p
											className="text-xl sm:text-2xl
											text-amber-50 hover:text-amber-500">
											Auro Saswat Raj's
										</p>
									</button>
									<span>portfolio</span>
								</div>
							</div>

							{/* Other Messages */}
							<div>
								<div>Some Resource Links - </div>
								<div className="flex flex-wrap text-sm gap-x-2">

									<button
										className=""
										onClick={() => { window.open(`${resourceData.links["link_tailwind-documentation"]}`, '_blank') }}
									>
										<p
											className="
											text-slate-300 hover:text-amber-500">
											Tailwind-Docs
										</p>
									</button>

									<button
										className=""
										onClick={() => { window.open(`${resourceData.links["link_css-particlejs"]}`, '_blank') }}
									>
										<p
											className="
											text-slate-300 hover:text-amber-500">
											CSS-ParticleJS
										</p>
									</button>

									<button
										className=""
										onClick={() => { window.open(`${resourceData.links["link_react-documentation"]}`, '_blank') }}
									>
										<p
											className="
											text-slate-300 hover:text-amber-500">
											React-docs
										</p>
									</button>

									<button
										className=""
										onClick={() => { window.open(`${resourceData.links["link_react-scroll"]}`, '_blank') }}
									>
										<p
											className="
											text-slate-300 hover:text-amber-500">
											React-Scroll
										</p>
									</button>

									<button
										className=""
										onClick={() => { window.open(`${resourceData.links["link_react-awesome-reveal"]}`, '_blank') }}
									>
										<p
											className="
											text-slate-300 hover:text-amber-500">
											React-Awesome-Reveal
										</p>
									</button>

									<button
										className=""
										onClick={() => { window.open(`${resourceData.links["link_tailwind-animated-components"]}`, '_blank') }}
									>
										<p
											className="
											text-slate-300 hover:text-amber-500">
											Tailwind-Hover.dev
										</p>
									</button>

									<button
										className=""
										onClick={() => { window.open(`${resourceData.links["link_youtube-tailwind-tricks"]}`, '_blank') }}
									>
										<p
											className="
											text-slate-300 hover:text-amber-500">
											many-YT-videos
										</p>
									</button>

									<p>ChatGPT and many more...</p>

								</div>
							</div>

						</div>

					</div>

				</div>

				{/* Divider */}
				<Divider isBgTransparent={false} isNavbarAbove={false} hasCentreGap={true} />


				{/* Bottom Area */}
				<div className="mb-4 xsm:flex text-center items-center text-sm xsm:text-lg sm:text-xl">
					<p>Designed With</p>
					<p className="mx-[4px] xsm:mx-2 xsm:animate-heartbeat">❤️</p>
					<p className="mr-[4px] xsm:mr-2">By</p>
					<button
						onClick={() => { window.open(`${contactData.links.link_linkedin}`, '_blank') }}
						className=' text-sky-600 hover:text-sky-500 transition duration-300'>
						<p className='text-xl sm:text-3xl'>Bodhisatta Bhattacharjee</p>
						{/* <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin"><g fill="none" fillRule="evenodd"><g><rect width="72" height="72" fill="#117EB8" rx="4"></rect><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path></g></g></svg> */}
					</button>
				</div>

				{hiddenText && (
					<button 
						className="text-[8px] text-black" 
						onClick={() => {
							setHiddenText(false);
							alert("You have unlocked my hidden confession!. Scroll down to read!")
						}}
					>My confession</button>
				)}

				{!hiddenText && (
					<div className="text-white cursor-default text-[13px] text-justify mb-6 px-2">
						I think I love Avani Singh or atleast I have convinced my mind to the feeling of loving her. She is decent looking and quite cute and sweet. She has great amount of determination and ambition and has a solid goal in life unlike most other girls. Whenever I am around her, I feel at peace. Even if i dont talk to her and she is around, i feel at ease and happy. I feel like i can change myself to get her. But only problem is that she has convinced herself that I have some flaws which will always be there and so she will never want me. I had made a terrible mistake earlier, not only with her but with most other girls I had been attracted to. The mistake is that I get obsessed with talking to that person and over time I get so obsessed, that if the girl does not respond or sort of ignors, I feel deeply hurt and emotional. I know i have to control this and have been trying. But this mostly happens in chats (like Whatsapp/ Instagram...) where I sometimes tell mean things when I have feeling too low and emotional. I am not thinking properly and tell her whatever nonsense comes to my mind. I know I am wrong. So this I did with Avani and she felt really bad (I am extremely sorry if u r reading this Avani). But whatever, the pretty girl gave me another change sort of... but stupid me again got emotional one day and ruined the friendship with her. I felt miserable after that day. I was on full control after this for a long time like 3 months. But I had been friends with another girl "Anshika Jaiswal" where I repeated the same mistake. I would blame her too, cuz she never really understood my value, she didnt appreciate me as much of the hard work I did thinking she will feel good. But whatever, I don't get to insult someone just because I am emotionally feeling low. I need to improve. Thanks for reading this much. I have got my lesson and I promise that I will never have long chats with another girl. If I have to express something, I will call her or tell in-person.
						<br></br>I want to list all the girls I have done this with (mostly in order by time). Ananya Rout, Aparajita Dash, Adwaita Basu Bal, Archisha Verma, Bhumika Mukherjee (not from KIIT), Avani Singh, Anshika Jaiswal. I am again VERY VERY SORRY to whomever is reading this. It will never happen again. I promise. I will never hurt any other girl just becasue I am upset / feeling low.
						<br></br>Thanks to Anuroop Roy, Auro Saswat Raj, and recently Anuj Pradhan for tolerating me for so long and considering me as a friend. I am grateful to them for helping me in their ways so I can share my feelings and overcome this depression. Also thanks to Avani Singh for still talking to me (work related only) even though I am such miserable and full of nonsense.
					</div>
				)}
			</div>

		</footer>
	);
}

export default Footer;
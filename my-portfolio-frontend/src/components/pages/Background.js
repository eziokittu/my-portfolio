import React from "react";
import backgroundImage1 from "../../Data/other/backgroundImage1.jpg";
import backgroundImage2 from "../../Data/other/backgroundImage2.jpg";

const Background = () => {
	return (
		<div className='fixed w-full h-[400px] top-0 bg-slate-200 z-0'>
			<img 
				className=""
				src={backgroundImage1}
				alt="gg"
			/>
			<img 
				className=""
				src={backgroundImage2}
				alt="gg"
			/>
			<img 
				className=""
				src={backgroundImage1}
				alt="gg"
			/>
			<img 
				className=""
				src={backgroundImage2}
				alt="gg"
			/>
			<img 
				className=""
				src={backgroundImage1}
				alt="gg"
			/>
			<img 
				className=""
				src={backgroundImage2}
				alt="gg"
			/>
		</div>
	);
}

export default Background;
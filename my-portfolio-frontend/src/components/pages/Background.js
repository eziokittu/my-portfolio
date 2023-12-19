import React from "react";
import backgroundImage1 from "../../Data/other/backgroundImage1.jpg";
// import backgroundImage2 from "../../Data/other/backgroundImage2.png";

// const Bg1 = () => {
//   return (
// 		<img 
// 			className="w-[100px] h-[100px]"
// 			src={backgroundImage2}
// 			alt="gg"
// 		/>
// 	)
// };

const Background = () => {
	const backgroundsArray = Array.from({ length: 20 }, (v, index) => index);

	return (
		<div className="fixed w-full h-full top-0 bg-slate-200 z-0">
			{/* <div className='flex '>
				{backgroundsArray.map((index) => (
					<Bg1/>
				))}
			</div> */}
			<img 
				className="w-full h-full"
				src={backgroundImage1}
				alt="gg"
			/>
		</div>
	);
}

export default Background;
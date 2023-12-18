import React from "react";

const Footer = () => {
	return (
		<footer className="relative bottom-0">
			{/* Transperant gradient */}
			<div className="h-40 w-full bg-gradient-to-t from-slate-800 to-transparent"></div>

			{/* Footer Area */}
			<div className="
				w-full h-[100px]
				bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-slate-100 
				flex flex-col items-center">
			</div>
		</footer>
	);
}

export default Footer;
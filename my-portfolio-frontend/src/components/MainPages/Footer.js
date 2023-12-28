import React from "react";

const Footer = () => {
	return (
		<footer className="absolute bottom-0 w-full z-0">
			{/* Transperant gradient - change the height acordingly*/}
			<div className="h-44 w-full bg-gradient-to-t from-slate-800 to-transparent"></div>

			{/* Footer Area */}
			<div className="
				w-full h-44 overflow-hidden
				bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-slate-100 
				flex flex-col items-center"
			>
				{/* Footer Content */}
				<p>Useless footer Area XD</p>
				<p>utha le re bawa utha le</p>
				<p>cat likes Earth goddess</p>
				<p>cat likes Earth goddess</p>
				<p>cat likes Earth goddess</p>
				<p>cat likes Earth goddess</p>
				<p>cat likes Earth goddess</p>

			</div>
		</footer>
	);
}

export default Footer;
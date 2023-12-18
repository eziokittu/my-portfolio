import { Link } from "react-router-dom";
import React from "react";

const ButtonLink1 = (props) => {
	if (props.isBlock === false) {
		return (
			<Link 
				className='
					transition-all duration-300
					text-stone-600 hover:text-black focus:text-white 
					mx-1 px-2 pb-1 
					border-2 border-stone-500 focus:border-zinc-900 
					focus:bg-gradient-to-b focus:from-stone-500 focus:to-stone-800
					bg-gray-200 hover:bg-gray-300
					rounded-lg focus:rounded-xl 
					' 
				to={props.linkTo}
			>
				{props.buttonName}
			</Link>
		);
	}
	else {
		return (
			<Link 
				className='
					transition-all duration-300
					text-stone-600 hover:text-black focus:text-white 
					block mx-1 px-2 pb-1 
					border-2 border-stone-500 focus:border-zinc-900 
					focus:bg-gradient-to-b focus:from-stone-500 focus:to-stone-800
					bg-gray-200 hover:bg-gray-300
					rounded-lg focus:rounded-xl ' 
				to={props.linkTo}
			>
				{props.buttonName}
			</Link>
		);
	}
}

export default ButtonLink1;
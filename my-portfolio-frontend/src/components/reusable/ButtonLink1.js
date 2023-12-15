import { Link } from "react-router-dom";
import React from "react";

const ButtonLink1 = (props) => {
	if (props.isBlock === false) {
		return (
			<Link 
				className='
					text-stone-600 hover:text-black focus:text-white 
					mx-1 px-2 pb-1 
					border-2 focus:border-zinc-900 
					bg-gray-200 hover:bg-gray-300 focus:bg-neutral-700 
					rounded-lg focus:rounded-xl 
					transition duration-900' 
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
					text-stone-600 hover:text-black focus:text-white 
					block mx-1 px-2 pb-1 
					border-2 focus:border-zinc-900 
					bg-gray-200 hover:bg-gray-300 focus:bg-neutral-700 
					rounded-lg focus:rounded-xl 
					transition duration-900' 
				to={props.linkTo}
			>
				{props.buttonName}
			</Link>
		);
	}
}

export default ButtonLink1;
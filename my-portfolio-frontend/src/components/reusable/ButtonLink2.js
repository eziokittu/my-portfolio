import { Link } from "react-scroll";
import React from "react";
<Link to="hero"
  activeClass="active" spy={true} smooth={true} offset={-70} duration={500}
><p>Home</p>
</Link> 
const ButtonLink2 = (props) => {
  return (
    <Link 
      activeClass="active" spy={true} smooth={true} offset={-70} duration={500}
      className='
        transition-all duration-300
        hover:text-stone-600 text-black focus:text-white 
        mx-1 px-2 pb-1 
        border-2 border-stone-500 focus:border-zinc-900 
        focus:bg-gradient-to-b focus:from-stone-500 focus:to-stone-800
        bg-gray-200 hover:bg-gray-300
        rounded-lg focus:rounded-xl 
        shadow-slate-800-200
        ' 
      to={props.linkTo}
    >
      {props.buttonName}
    </Link>
  );
}

export default ButtonLink2;
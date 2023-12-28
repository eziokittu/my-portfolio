import { Link } from "react-scroll";
import React from "react";

const ButtonLink1 = (props) => {
  return (
    <Link 
      activeClass="active" spy={true} smooth={true} offset={-180} duration={500}
      className='
        p-[2px] 2xsm:p-1 xsm:p-2
        transition-all duration-500
        text-slate-50 hover:text-stone-900
        border-2 border-slate-50 hover:border-slate-800
        bg-gradient-to-r from-gray-600/70 to-gray-950/70
        hover:bg-gradient-to-l hover:from-slate-300 hover:to-white
        rounded-lg focus:rounded-xl 
        shadow-slate-800-200
        ' 
      to={props.linkTo}
    >
      {props.buttonName}
    </Link>
  );
}

export default ButtonLink1;
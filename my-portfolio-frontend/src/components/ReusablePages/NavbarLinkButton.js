import React from "react";

const NavbarLinkButton = ({ buttonName, myOnClick }) => {
  return (
    <button
      onClick={myOnClick}
      className='
      p-[2px] 2xsm:p-1 sm:p-2
      transition-all duration-500
      text-slate-50 hover:text-stone-900
      border-2 border-slate-50 hover:border-slate-800
      bg-gradient-to-r from-gray-600/70 to-gray-950/70
      hover:bg-gradient-to-l hover:from-slate-300 hover:to-white
      rounded-lg focus:rounded-xl shadow-slate-800-200'
    >{buttonName}</button>
  );
}

export default NavbarLinkButton;
import React from "react";

const NavbarLinkButton = ({ buttonName, myOnClick, extraClasses }) => {
  return (
    <button
      onClick={myOnClick}
      className={` ${extraClasses}
      px-2 py-1
      transition-all duration-500 hover:font-bold
      text-yellow-200 hover:text-stone-900
      border-2 border-yellow-500 hover:border-yellow-900
      hover:bg-yellow-500 bg-yellow-900
      shadow-[0_0_30px_purple] shadow-yellow-950 hover:shadow-yellow-300
      rounded-lg focus:rounded-xl`}
    >{buttonName}</button>
  );
}

export default NavbarLinkButton;
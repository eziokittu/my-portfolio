import React from 'react'

const FooterLinkButton = ({ buttonName, myOnClick }) => {
  return (
    <button onClick={myOnClick}>
      <div className="flex items-center gap-1 group/g1">
        <div className=" transition-all duration-300 group-hover/g1:bg-amber-400 bg-clip-content rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
            className="w-5 h-5 border-2 rounded-full transition-all duration-300 
            group-hover/g1:border-black group-hover/g1:stroke-black ">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <p 
          className=" transition-all duration-300 
        group-hover/g1:text-amber-400 group-hover/g1:font-bold">
          {buttonName}
        </p>
      </div>
    </button>
  );
}

export default FooterLinkButton;
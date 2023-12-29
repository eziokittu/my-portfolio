import React from 'react'

const Divider = ({isBgTransparent, isNavbarAbove, hasCentreGap}) => {
  if (hasCentreGap===false) {
    return (
      <div 
      className={`${isNavbarAbove===true ? 'relative bottom-0' : ''} w-full 
      flex items-center ${isBgTransparent===true ? 'bg-transparent' : 'bg-black'} `}
    >
      <div className="border-t-4 border-white w-full h-0"></div>
    </div>
    )
  }
  else return (
    <div 
      className={`${isNavbarAbove===true ? 'relative bottom-12' : ''} w-full 
      flex items-center ${isBgTransparent===true ? 'bg-transparent' : 'bg-black'} `}
    >
      <div className="border-t-4 border-white w-full ml-2 mr-4 h-0"></div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" 
        class="w-24 h-24 animate-[spin_2s_linear_infinite] fill-slate-100 stroke-yellow-400  ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
      <div className="border-t-4 border-white w-full mr-2 ml-4 h-0"></div>
    </div>
  )
}

export default Divider
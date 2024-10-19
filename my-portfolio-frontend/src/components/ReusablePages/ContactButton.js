import React, { useState } from 'react';

const ContactButton = ({ link, svgIcon, label }) => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(true); // Show the text when clicked
    window.open(link, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
      className='bg-amber-300/10 hover:bg-amber-300/25 text-yellow-600 group relative rounded-full transition-all duration-300
      p-4 hover:p-3 w-fit mx-auto flex flex-col justify-center items-center
      border-2 border-amber-200/10 hover:border-amber-500'
    >
      {/* SVG Icon */}
      <div className=' w-6 group-hover:w-8 h-6 group-hover:h-8 transition-all duration-300'>
        {svgIcon}
      </div>

      {/* Text that appears below the icon when hovered*/}
      <p
        className={`fixed text-lg md:text-xl mt-20
          transition-opacity duration-300 ${showText ? '' : 'hidden'
          }`}
      >
        {label}
      </p>
    </button>
  );
};

export default ContactButton;

import React, { useState } from 'react';
import { Link } from 'react-scroll';

import ContactMe from '../pages/ContactMe';

const StickyContactMeButton = ({contactMeOverlayOn, contactMeButtonNotClicked}) => {

  // For Contact Me Overlay
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const openOverlay = () => {
		contactMeButtonNotClicked(true);
    setIsOverlayOpen(true);
  };
  const closeOverlay = (parameter) => {
		contactMeButtonNotClicked(false);
    setIsOverlayOpen(parameter);
  };

  return (
    <div className="sticky top-10 right-5 z-10">
      {(contactMeOverlayOn===true) && 
        <div className='sticky top-0'>
          <Link 
            className='
              text-stone-600 hover:text-black focus:text-white 
              mx-1 px-2 pb-1 
              border-2 border-stone-500 focus:border-zinc-900 
              bg-gray-200 hover:bg-gray-300 focus:bg-neutral-700 
              rounded-lg focus:rounded-xl 
              transition duration-900 shadow-slate-200-800' 
            onClick={openOverlay}
          >
            Contact Me
          </Link>
        </div>
      }
      {/* Contact Me Overlay */}
      {isOverlayOpen && 
        <ContactMe onParameterChange={closeOverlay}/>
      }
    </div>
  );
};

export default StickyContactMeButton
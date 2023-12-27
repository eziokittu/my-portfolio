import React, { useState } from 'react';
import {Link} from 'react-scroll';

import ButtonLink2 from '../reusable/ButtonLink2';
import ContactMe from '../pages/ContactMe';

import profileData from '../../Data/profile/profileData.json';

const Navbar2 = ({ options, contactMeOverlayOn, contactMeButtonNotClicked }) => {

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
    <div 
      className='sticky top-0 z-10'
    >
      <div className={`${isOverlayOpen ? '' : 'backdrop-filter backdrop-blur-[8px]'}
      flex items-center justify-around bg-slate-300/20 `}>

        {/* logo */}
        <div className='mr-auto m-2'>
          <Link to="home"
            activeClass="active" spy={true} smooth={true} offset={-150} duration={500}
            className=" w-fit p-2 rounded-full group/nav-logo
              bg-gradient-to-b from-amber-400 to-fuchsia-600 
              flex justify-between 
              shadow-[0_0_35px_black]
              hover:shadow-[0_0_35px_gray]
            "
          >
            <img 
              className='h-24 min-w-24 max-w-24 rounded-full
              animate-[pulse_1s_ease-in-out_infinite_0.2s]
              group-hover/nav-logo:animate-[spin_1s_ease-in-out_1_0.2s]'
              src={profileData.display_image}
            />
          </Link>
        </div>

        {/* Primary Navbar options */}
        <div className='flex flex-wrap'>
          <ButtonLink2 linkTo={options[0].toLowerCase()} buttonName={options[0]} />
          <ButtonLink2 linkTo={options[1].toLowerCase()} buttonName={options[1]} />
          <ButtonLink2 linkTo={options[2].toLowerCase()} buttonName={options[2]} />
          <ButtonLink2 linkTo={options[3].toLowerCase()} buttonName={options[3]} />
        </div>  

        {/* Contact Me */}
        <div className="ml-auto">
          {(contactMeOverlayOn===true) && 
            <div className=' group/contact'>
              <Link 
                className='' 
                onClick={openOverlay}
              >
                <div className='w-24 
                  cursor-default
                  text-stone-600 group-hover/contact:text-black
                  border-2 border-stone-500 
                  rounded-lg transition duration-900
                  shadow-[0_0_35px_black]
                  group-hover/contact:shadow-[0_0_35px_gray] flex flex-col
                  bg-pink-300 group-hover/contact:bg-yellow-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <p>Contact</p>
                  <p>Me</p>
                </div>
              </Link>
            </div>
          }
          {/* Contact Me Overlay */}
          {isOverlayOpen && 
            <ContactMe onParameterChange={closeOverlay}/>
          }
        </div>

      </div>
 
      
    </div>
  )
};

export default Navbar2;
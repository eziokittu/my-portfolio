import React, { useState } from 'react';
import {Link} from 'react-scroll';

import ButtonLink1 from '../ReusablePages/ButtonLink1';
import ContactMe from '../ComponentPages/ContactMe';
import Divider from '../ReusablePages/Divider';

import profileData from '../../data/profileData.json';

const Navbar = ({ options, contactMeOverlayOn, contactMeButtonNotClicked }) => {

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
      className='sticky top-0 z-20'
    >
      <div className={`${isOverlayOpen ? '' : 'backdrop-filter backdrop-blur-[6px]'}
      flex items-center justify-around bg-slate-500/20 cursor-default`}>

        {/* logo */}
        <div className='mr-auto xsm:ml-2 my-8 md:my-2'>
          <Link to="home"
            activeClass="active" spy={true} offset={-200} duration={1500} smooth={'easeOutBack'}
            className=" w-fit p-2 rounded-full group/nav-logo
              bg-gradient-to-b from-amber-400/60 to-fuchsia-600/60 
              hover:bg-gradient-to-b hover:from-amber-400 hover:to-fuchsia-600 
              flex justify-between 
              shadow-[0_0_15px_black]
              hover:shadow-[0_0_35px_white]
            "
          >
            <img 
              className='h-16 min-w-16 max-w-16 rounded-full
              animate-[pulse_1s_ease-in-out_infinite_0.2s]
              group-hover/nav-logo:animate-[spin_1s_ease-in-out_1_0.2s]'
              src={profileData.display_image}
              alt='Bodhisatta'
            />
          </Link>
        </div>

        {/* Primary Navbar options */}
        <div 
          className='flex 2xsm:flex-wrap flex-col 2xsm:flex-row
          2xsm:gap-2 sm:gap-4 items-center justify-center my-4 md:my-2 xsm:my-0
          md:text-2xl lg:text-3xl'
        >
          <ButtonLink1 linkTo={options[0].toLowerCase()} buttonName={options[0]} />
          <ButtonLink1 linkTo={options[1].toLowerCase()} buttonName={options[1]} />
          <ButtonLink1 linkTo={options[2].toLowerCase()} buttonName={options[2]} />
          <ButtonLink1 linkTo={options[3].toLowerCase()} buttonName={options[3]} />
          <ButtonLink1 linkTo={options[4].toLowerCase()} buttonName={options[4]} />
        </div>  

        {/* Contact Me */}
        <div className="ml-auto xsm:mr-2 my-8 md:my-2">
          {(contactMeOverlayOn===true) && 
            <div className=' group/contact'>
              <Link 
                className='' 
                onClick={openOverlay}
              >
                <div className='w-16 text-lg py-1 px-2
                  text-amber-400 group-hover/contact:text-black
                  border-2 border-stone-500 items-center
                  transition-all duration-500 rounded-lg
                  shadow-[0_0_35px_black] flex flex-col
                  group-hover/contact:shadow-[0_0_35px_gray]
                  bg-purple-900 group-hover/contact:bg-gradient-to-b
                  group-hover/contact:from-amber-500 group-hover/contact:to-pink-500'
                >
                  <div className='flex items-center '>
                    
                    <svg 
                      className="w-8 h-8 animate-pulse
                      group-hover/contact:animate-[wave_.3s_ease-in-out_2]
                      group-hover/contact:text-green-500" 
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>               
                  <p>Contact</p>
                  
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

      {isOverlayOpen===false && (
        <Divider isBgTransparent={true} isNavbarAbove={true} hasCentreGap={false} />
      )}
      
    </div>
  )
};

export default Navbar;
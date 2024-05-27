import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

import NavbarLinkButton from '../ReusablePages/NavbarLinkButton';
import ContactMe from '../ComponentPages/ContactMe';
import Sidebar from './Sidebar';

import profileData from '../../data/profileData.json';
import otherData from '../../data/otherData.json';

const Navbar = ({ contactMeOverlayOn, contactMeButtonNotClicked }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Callback function to receive the parameter from the child
  const onSidebarButtonClick = () => {
    setIsOpen(false);
  };

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

  // for using react-scroll and react-router at the same time
  const path = useLocation().pathname;
  const location = path.split('/')[1];
  const navigate = useNavigate();
  const scrollToSection = (section) => {
    // console.log(section);
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: 'easeOutBack',
      offset: -180
    });
  };
  // method applied to the navbar buttons when not in the default page
  const goToHomeAndScroll = async (section) => {
    await navigate('/');
    await scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: 'easeOutBack',
      offset: -180
    });
  };

  return (
    <div
      className='fixed w-full top-0 z-20'
    >
      <div className='w-full z-50 bg-gradient-to-r from-yellow-600 via-yellow-900 to-yellow-600 h-20 border-b-2 border-yellow-300 flex justify-between'>
        <div className='  w-full md:w-[790px] lg:w-[1004px] cursor-default grid grid-cols-4 xsm:grid-cols-3 md:flex items-center justify-between mx-auto'>

          {/* logo */}
          <div className='mr-auto my-2 grid-cols-1'>
            <button 
              onClick={() => { location === '' ? scrollToSection('home') : goToHomeAndScroll('home') }}
              className=" w-fit p-2 rounded-full group/nav-logo
                bg-gradient-to-b from-amber-400/60 to-fuchsia-600/60 
                hover:bg-gradient-to-b hover:from-amber-400 hover:to-fuchsia-600 
                flex justify-between 
                shadow-[0_0_30px_purple] shadow-yellow-950 hover:shadow-yellow-300"
            >
              <img
                className='h-12 min-w-12 max-w-12 rounded-full
                animate-[pulse_1s_ease-in-out_infinite_0.2s]
                group-hover/nav-logo:animate-[spin_1s_ease-in-out_1_0.2s]'
                src={profileData.display_image}
                alt='Bodhisatta'
              />
            </button>
          </div>

          {/* Hamburger sign */}
          <div className="md:hidden mx-auto grid-cols-1">
            <button
              onClick={toggleMenu}
              className="text-yellow-200 focus:outline-none relative"
            >
              <svg
                className={`w-16 h-16 transform transition-transform duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <svg
                className={`w-16 h-16 absolute top-0 left-0 transform transition-transform duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {/* Primary Navbar options */}
          <div
            className='hidden md:flex 2xsm:flex-wrap flex-col 2xsm:flex-row
          2xsm:gap-[2px] xsm:gap-1 sm:gap-4 items-center justify-center 
          tracking-tighter text-[16px]'
          >
            {otherData.navbarOptions.map((link, num) => (
							<NavbarLinkButton
								key={num}
								myOnClick={() => {
									location === '' ? scrollToSection(otherData.navbarOptionLinks[num + 1]) : goToHomeAndScroll(otherData.navbarOptionLinks[num + 1])
								}}
								buttonName={otherData.navbarOptions[num]}
							/>
						))}
          </div>

          {/* Contact Me */}
          <div className="ml-auto xsm:mr-2 col-span-2 xsm:col-span-1">
            {(contactMeOverlayOn === true) &&
              <div className=' group/contact'>
                <NavbarLinkButton myOnClick={() => { openOverlay() }} buttonName={'Contact Me'} extraClasses={'text-xl sm:text-2xl'} />
              </div>
            }
            {/* Contact Me Overlay */}
            {isOverlayOpen &&
              <ContactMe onParameterChange={closeOverlay} />
            }
          </div>

        </div>
      </div>

      {/* Transperant gradient - change the height acordingly*/}
      {!isOverlayOpen && (
        <div className="fixed top-20 z-20 h-32 w-full bg-gradient-to-b from-yellow-950 to-transparent pointer-events-none"></div>
      )}
      {isOpen && (<Sidebar onParameterChange={onSidebarButtonClick} isContactMeOpen={isOverlayOpen} />)}

    </div>
  )
};

export default Navbar;
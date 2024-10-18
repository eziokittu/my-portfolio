import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

import NavbarLinkButton from '../ReusablePages/NavbarLinkButton';
// import ContactMe from '../ComponentPages/ContactMe';
import Sidebar from './Sidebar';

import profileData from '../../data/profileData.json';
import otherData from '../../data/otherData.json';

// const Navbar = ({ contactMeOverlayOn, contactMeButtonNotClicked }) => {
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Callback function to receive the parameter from the child
  const onSidebarButtonClick = () => {
    setIsOpen(false);
  };

  // For Contact Me Overlay
  // const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  // const openOverlay = () => {
  //   contactMeButtonNotClicked(true);
  //   setIsOverlayOpen(true);
  // };
  // const closeOverlay = (parameter) => {
  //   contactMeButtonNotClicked(false);
  //   setIsOverlayOpen(parameter);
  // };

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
        <div className='px-2  w-full md:w-[790px] lg:w-[1004px] cursor-default flex items-center justify-evenly mx-auto'>

          {/* logo */}
          <div className='mr-auto my-2 grid-cols-1'>
            <button 
              onClick={() => { location === '' ? scrollToSection('home') : goToHomeAndScroll('home') }}
              className=" w-fit p-2 rounded-2xl group/nav-logo
                transition-all duration-500 hover:font-bold
                text-yellow-200 hover:text-stone-900
                border-2 border-yellow-500 hover:border-yellow-900
                hover:bg-yellow-500 bg-yellow-900
                shadow-[0_0_30px_purple] shadow-yellow-950 hover:shadow-yellow-300
                flex justify-between items-center space-x-2"
            >
              <img
                className='h-12 min-w-12 max-w-12 rounded-full
                group-hover/nav-logo:animate-[spin_1s_ease-in-out_1_0.2s]
                border-2 border-yellow-300 '
                src={profileData.display_image}
                alt='Bodhisatta'
              />
              <div className='font-bold font-Merriweather pr-2 flex flex-col '>
                <p className='text-2xl xsm:text-3xl -translate-y-2'>Bodhisatta</p>
                <p className='fixed  xsm:text-lg translate-y-5 translate-x-2 xsm:translate-x-4'>Bhattacharjee</p>
              </div>
            </button>
          </div>

          {/* Hamburger sign */}
          <div className="md:hidden ml-auto grid-cols-1">
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
          {/* <div className="ml-auto xsm:mr-2 col-span-2 xsm:col-span-1">
            {(contactMeOverlayOn === true) &&
              <div className=' group/contact'>
                <NavbarLinkButton myOnClick={() => { openOverlay() }} buttonName={'Contact Me'} extraClasses={'text-xl sm:text-2xl'} />
              </div>
            } */}
            {/* Contact Me Overlay */}
            {/* {isOverlayOpen &&
              <ContactMe onParameterChange={closeOverlay} />
            }
          </div> */}

        </div>
      </div>

      {/* Transperant gradient - change the height acordingly*/}
      {/* {!isOverlayOpen && (
        <div className="fixed top-20 z-20 h-32 w-full bg-gradient-to-b from-yellow-950 to-transparent pointer-events-none"></div>
      )} */}
      {/* {isOpen && (<Sidebar onParameterChange={onSidebarButtonClick} isContactMeOpen={isOverlayOpen} />)} */}
      {isOpen && (<Sidebar onParameterChange={onSidebarButtonClick} />)}

    </div>
  )
};

export default Navbar;
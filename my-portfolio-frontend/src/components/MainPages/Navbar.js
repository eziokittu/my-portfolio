import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

import NavbarLinkButton from '../ReusablePages/NavbarLinkButton';
import ContactMe from '../ComponentPages/ContactMe';
import Divider from '../ReusablePages/Divider';

import profileData from '../../data/profileData.json';
import otherData from '../../data/otherData.json';

const Navbar = ({ contactMeOverlayOn, contactMeButtonNotClicked }) => {

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
      className='sticky top-0 z-20'
    >
      {/* Blur background for the navbar */}
      <div className='absolute top-0 h-14 xsm:h-12 w-full bg-white blur-2xl -z-10'></div>

      <div className='w-full z-50 p-0
      flex items-center justify-around bg-slate-500/20 cursor-default'>

        {/* logo */}
        <div className='mr-auto xsm:ml-2 my-2 '>
          {location === '' ? (
            <button onClick={()=>{scrollToSection('home')}}
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
                src={process.env.PUBLIC_URL + '/' + profileData.display_image}
                alt='Bodhisatta'
              />
            </button>
          ) : (
            <button onClick={()=>{goToHomeAndScroll('home')}}
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
                src={process.env.PUBLIC_URL + '/' + profileData.display_image}
                alt='Bodhisatta'
              />
            </button>
          )}
        </div>

        {/* Primary Navbar options */}
        <div 
          className='flex 2xsm:flex-wrap flex-col 2xsm:flex-row
          2xsm:gap-[2px] xsm:gap-1 sm:gap-4 items-center justify-center 
          text-sm md:text-2xl lg:text-3xl'
        >
          {location === '' ? (
            <>
              <NavbarLinkButton myOnClick={()=>{scrollToSection(otherData.navbarOptionLinks[1])}} buttonName={otherData.navbarOptions[0]} />
              <NavbarLinkButton myOnClick={()=>{scrollToSection(otherData.navbarOptionLinks[2])}} buttonName={otherData.navbarOptions[1]} />
              <NavbarLinkButton myOnClick={()=>{scrollToSection(otherData.navbarOptionLinks[3])}} buttonName={otherData.navbarOptions[2]} />
              <NavbarLinkButton myOnClick={()=>{scrollToSection(otherData.navbarOptionLinks[4])}} buttonName={otherData.navbarOptions[3]} />
              <NavbarLinkButton myOnClick={()=>{scrollToSection(otherData.navbarOptionLinks[5])}} buttonName={otherData.navbarOptions[4]} />
              <NavbarLinkButton myOnClick={()=>{scrollToSection(otherData.navbarOptionLinks[6])}} buttonName={otherData.navbarOptions[5]} />
            </>
          ) : (
            <>
              <NavbarLinkButton myOnClick={()=>{goToHomeAndScroll(otherData.navbarOptionLinks[1])}} buttonName={otherData.navbarOptions[0]} />
              <NavbarLinkButton myOnClick={()=>{goToHomeAndScroll(otherData.navbarOptionLinks[2])}} buttonName={otherData.navbarOptions[1]} />
              <NavbarLinkButton myOnClick={()=>{goToHomeAndScroll(otherData.navbarOptionLinks[3])}} buttonName={otherData.navbarOptions[2]} />
              <NavbarLinkButton myOnClick={()=>{goToHomeAndScroll(otherData.navbarOptionLinks[4])}} buttonName={otherData.navbarOptions[3]} />
              <NavbarLinkButton myOnClick={()=>{goToHomeAndScroll(otherData.navbarOptionLinks[5])}} buttonName={otherData.navbarOptions[4]} />
              <NavbarLinkButton myOnClick={()=>{goToHomeAndScroll(otherData.navbarOptionLinks[6])}} buttonName={otherData.navbarOptions[5]} />
            </>
          )}
          
        </div>  

        {/* Contact Me */}
        <div className="ml-auto xsm:mr-2">
          {(contactMeOverlayOn===true) && 
            <div className=' group/contact'>
              <div 
                className='' 
                onClick={openOverlay}
              >
                <div className='max-w-22 text-lg py-1 
                  text-amber-400 group-hover/contact:text-amber-500
                  border-2 border-slate-400 group-hover/contact:border-black items-center
                  transition-all duration-300 rounded-lg
                  flex flex-col bg-gray-700 group-hover/contact:bg-gray-800
                  shadow-[0_0_15px_black] group-hover/contact:shadow-[0_0_35px_white]
                  '
                >            
                  <p className='px-2'>Contact</p>
                </div>
              </div>
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
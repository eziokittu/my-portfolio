import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { Fade } from "react-awesome-reveal";
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarButton from '../ReusablePages/NavbarLinkButton';
import otherData from '../../data/otherData.json';

const Sidebar = ({ onParameterChange, isContactMeOpen }) => {
  const [sidebarButtonClicked, setSidebarbuttonClicked] = useState(false);
  // const handleButtonClick = () => {
  //   onParameterChange();
  // };
  const handleButtonClick = () => {
    setSidebarbuttonClicked(true);
    setTimeout(() => {
      onParameterChange();
    }, 700);
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
    <div className={`${isContactMeOpen ? 'hidden' : ''} md:hidden fixed w-full top-20 z-50  transition-all duration-700 ease-in-out opacity-100 bg-yellow-900/50  border-b-2 border-yellow-600 flex justify-around p-4 ${sidebarButtonClicked ? 'opacity-0' : 'opacity-100'}`}>
      <Fade duration={700} className=''>
        <div className='grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-6 gap-x-4 gap-y-4 font-AveriaLibre tracking-tighter text-[16px]'>
          {otherData.navbarOptions.map((link, num) => (
            <NavbarButton
              key={num}
              myOnClick={() => {
                if (location === '') {
                  scrollToSection(otherData.navbarOptionLinks[num + 1]);
                  handleButtonClick();
                } else {
                  goToHomeAndScroll(otherData.navbarOptionLinks[num + 1]);
                }
              }}
              buttonName={otherData.navbarOptions[num]}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Sidebar;
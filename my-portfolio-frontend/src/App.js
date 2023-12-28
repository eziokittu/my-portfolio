import React, { useState, useEffect } from 'react';

// importing reusable components
import DisableRightClick from './components/ReusablePages/DisableRightClick';
import DisableInspectMenu from './components/ReusablePages/DisableInspectMenu';
import Home from './components/MainPages/Home';
import Navbar from './components/MainPages/Navbar';
import Footer from './components/MainPages/Footer';
import Background from './components/MainPages/Background';

function App() {
  const navbarOptions = ['Home', 'About', 'Skills', 'Projects', 'Education'];

  // For Contact Me Overlay
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const closeOverlay = (parameter) => {
    setIsOverlayOpen(parameter);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicon = document.getElementById('favicon');

      if (document.hidden) {
        // The page is not visible (user switched tabs)
        document.title = 'Thanks for Visiting | Bodhisatta';
        favicon.href = '/favicon2.ico';
      } else {
        // The page is visible again
        document.title = 'Portfolio | Bodhisatta';
        favicon.href = '/favicon1.ico';
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className='flex flex-col min-h-screen relative'>
      <Background/>
      <Navbar 
        options={navbarOptions} 
        contactMeOverlayOn={!isOverlayOpen}
        contactMeButtonNotClicked={closeOverlay}
      />
      <Home />
      {/* a gap for the footer - adjust the height  */}
      <div className="w-full mt-auto h-96"></div>
      <Footer/>

      
    </div> 
  );
}

export default DisableInspectMenu( DisableRightClick(App) );

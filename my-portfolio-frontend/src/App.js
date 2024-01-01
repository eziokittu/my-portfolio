import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
// importing reusable components
// import DisableRightClick from './components/ReusablePages/DisableRightClick';
// import DisableInspectMenu from './components/ReusablePages/DisableInspectMenu';
import NotFound from './components/MainPages/NotFound';
import Home from './components/MainPages/Home';
import Navbar from './components/MainPages/Navbar';
import Footer from './components/MainPages/Footer';
import Background from './components/MainPages/Background';

function App() {
  // For Contact Me Overlay
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const closeOverlay = (parameter) => {
    setIsOverlayOpen(parameter);
  };

  // for changing title and logo of website dynamically
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
    <div>
      <Background/>
      <BrowserRouter>
        <Navbar contactMeOverlayOn={!isOverlayOpen} contactMeButtonNotClicked={closeOverlay} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div> 
  );
}

// comment this line when testing the webpage
// export default DisableInspectMenu( DisableRightClick(App) );

// comment this line before commiting changes
export default App;

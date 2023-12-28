import React, { useState } from 'react';

// importing reusable components
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

export default App;

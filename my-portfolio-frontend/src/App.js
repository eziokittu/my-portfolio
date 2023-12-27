import Home from './components/pages/Home';
import Navbar2 from './components/pages/Navbar2';
import Footer from './components/pages/Footer';
import Background from './components/pages/Background';

import React, { useState } from 'react';

function App() {
  const navbarOptions2 = ['Home', 'About', 'Skills', 'Projects', 'Education'];

  // For Contact Me Overlay
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const closeOverlay = (parameter) => {
    setIsOverlayOpen(parameter);
  };

  return (
    <div className='flex flex-col min-h-screen relative'>

      <Background/>
      <Navbar2 
        options={navbarOptions2} 
        contactMeOverlayOn={!isOverlayOpen}
        contactMeButtonNotClicked={closeOverlay}
      />
      <Home/>

      {/* a gap for the footer - adjust the height  */}
      <div className="w-full mt-auto h-96"></div>

      <Footer/>

    </div>
  );
}

export default App;

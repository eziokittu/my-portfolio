import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Navbar from './components/pages/Navbar';
import Navbar2 from './components/pages/Navbar2';
import StickyContactMeButton from './components/reusable/StickyContactMeButton';
import Footer from './components/pages/Footer';
import ContactMe from './components/pages/ContactMe';
import Background from './components/pages/Background';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const navbarOptions1 = ['Home', 'Projects', 'Blogs'];
  const navbarOptions2 = ['Home', 'About', 'Skills', 'Education'];

  // For Contact Me Overlay
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const closeOverlay = (parameter) => {
    setIsOverlayOpen(parameter);
  };

  return (
    <div className='flex flex-col min-h-screen relative'>
      <Background/>
      
      <BrowserRouter>
        {/* <Navbar options={navbarOptions1} contactMeButtonNotClicked={closeOverlay}/> */}
        <Navbar2 
          options={navbarOptions2} 
          contactMeButtonNotClicked={closeOverlay}
        />
        <StickyContactMeButton 
          contactMeButtonNotClicked={closeOverlay} 
          contactMeOverlayOn={!isOverlayOpen}
        />

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/contact" element={<ContactMe/>} />
          <Route exact path="/projects/:pid" element={<Project contactMeOverlayOn={!isOverlayOpen}/>} />
        </Routes>

        {/* a gap for the footer - adjust the height  */}
        <div className="w-full mt-auto h-64"></div>

      </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;

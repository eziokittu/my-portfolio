import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Blogs from './components/pages/Blogs';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer';
import ContactMe from './components/pages/ContactMe';
import Background from './components/pages/Background';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const navbarOptions = ['Home', 'Projects', 'Blogs']

  // For Contact Me Overlay
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const closeOverlay = (parameter) => {
    setIsOverlayOpen(parameter);
  };

  return (
    <>
      {/* <div className='fixed w-full h-[400px] top-0 bg-slate-200 z-0'>
        <Background />
      </div> */}
      <BrowserRouter >
        <Navbar options={navbarOptions} contactMeButtonNotClicked={closeOverlay}/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/blogs" element={<Blogs/>} />
          <Route exact path="/contact" element={<ContactMe/>} />
          <Route exact path="/projects/:pid" element={<Project contactMeOverlayOn={!isOverlayOpen}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

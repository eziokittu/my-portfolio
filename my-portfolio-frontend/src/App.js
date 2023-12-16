import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Blogs from './components/pages/Blogs';
import Navbar from './components/pages/Navbar';
import ProjectDisplayCardLayout from './components/reusable/ProjectDisplayCardLayout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const navbarOptions = ['Home', 'Projects', 'Blogs']

  return (
    <>
      <BrowserRouter>
        <Navbar options={navbarOptions}/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/blogs" element={<Blogs/>} />
          <Route exact path="/projects/:pid" element={<Project/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Blogs from './components/pages/Blogs';
import Navbar from './components/pages/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const navbarOptions = ['Home', 'Projects', 'Blogs']

  return (
    <>
      <BrowserRouter>
        <Navbar options={navbarOptions}/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path={'/'+navbarOptions[0].toLowerCase()} element={<Home/>} />
          <Route exact path={'/'+navbarOptions[1].toLowerCase()} element={<Projects/>} />
          <Route exact path={'/'+navbarOptions[2].toLowerCase()} element={<Blogs/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

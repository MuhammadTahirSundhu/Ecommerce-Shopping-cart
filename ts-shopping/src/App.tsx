import React, { useEffect } from 'react';
import Home from './pages/Home.tsx';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer.tsx';
import About from './pages/About.tsx';
import Shopping from './pages/Shopping.tsx';
import Contact from './pages/Contact.tsx';


const App: React.FC = () => {

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);


  return (

    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shopping' element={<Shopping/>}/>
    </Routes>
      {<Footer />}
    </BrowserRouter>
    </>
  );
}

export default App;

import React, { useEffect } from 'react';
import Home from './pages/Home.tsx';
import Navbar from './components/Navbar';

import './App.css';
import Footer from './components/Footer.tsx';


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
      <Navbar />
      {<Home/>}
      {<Footer />}
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AllItems from './components/AllItems';
import Navbar from './components/Navbar';
import AdminDashBoard from './pages/AdminDashBoard';
import { RootState } from './store/store';
import AddItemToCollection from './components/AdminDashboardComponents/AddItemToCollection';
import AdSlide from './components/AdSlide';
import AdCube from './components/AdCube';
import 'bootstrap/dist/css/bootstrap.min.css';
import SwipeSlideImg from './components/SwipeSlideImg';
import img1 from './assets/brandsIcons/1.webp';
import img2 from './assets/brandsIcons/2.webp';
import img3 from './assets/brandsIcons/3.webp';
import img4 from './assets/brandsIcons/4.webp';
import img5 from './assets/brandsIcons/5.webp';
import img6 from './assets/brandsIcons/6.webp';
import img7 from './assets/brandsIcons/7.webp';
import img8 from './assets/brandsIcons/8.webp';


interface AdSlideProps {
  speed: number;
  delay: number;
  spaceBetween: number;
  pagination: boolean;
  navigation: boolean;
  clickable: boolean;
  imgArr: string[];
}

interface SwipeSlideProps {
  speed: number;
  delay: number;
  spaceBetween: number;
  pagination: boolean;
  pageperview:number
  navigation: boolean;
  clickable: boolean;
  imgArr: string[];
}
const App: React.FC = () => {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight / 2;

    setScrolled(scrollPosition > threshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  // Set styles directly on the document body if needed
  React.useEffect(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    // Clean up styles when component unmounts
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  const items = useSelector((state: RootState) => state.items.items);
  const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8];

  const brandsSlide: SwipeSlideProps = {
    speed: 9000,
    delay: 0,
    spaceBetween: 10,
    pagination: false,
    pageperview:4,
    navigation: false,
    clickable: true,
    imgArr:imgArr
  };

  return (

    <>
        <div className={`scroll-container ${scrolled ? 'scrolled' : ''}`}>

      {/* <AdminDashBoard /> */}
      {/* <AllItems items={items}/> */}
      {/* <AddItemToCollection open={true} /> */}
      {/* {<SwipeSlide items={items} />} */}
      <Navbar />
      <header className="header d-flex align-items-center justify-content-center">
        <div className="outerLeftdiv">
          <div className="overlay">
            <div className="text-center text-white border-container">
              <div>
                <h1 className="display-8">Add to Cart, Add to Joy!</h1>
                <p className="lead description">Welcome to TS Collections! Your one-stop destination for the best deals and a seamless shopping experience. Explore our wide range of products, from the latest fashion trends to cutting-edge gadgets and home essentials. Enjoy fast shipping, secure checkout, and exceptional customer service. Happy shopping!</p>
              </div>
              <div className="mt-4">
                <button className="btn btn-primary me-2 border-container">Get Started</button>
                <button className="btn btn-outline-light border-container">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="headerRight">
          <AdCube />
        </div>
      </header>
      <div className="brands">
       <SwipeSlideImg attributes={brandsSlide}/>
      </div>

      {/* Uncomment and use these components as needed */}
      {/* <AdSlide /> */}
      {/* <AdCube /> */}
      </div>
    </>
  );
}

export default App;

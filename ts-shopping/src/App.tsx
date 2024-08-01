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
import img9 from './assets/brandsIcons/9.webp';
import img10 from './assets/brandsIcons/10.webp';
import img11 from './assets/brandsIcons/11.webp';
import img12 from './assets/brandsIcons/12.webp';
import img14 from './assets/brandsIcons/14.webp';
import img15 from './assets/brandsIcons/15.webp';
import img16 from './assets/brandsIcons/16.webp';
import img17 from './assets/brandsIcons/17.webp';
import img18 from './assets/brandsIcons/18.webp';
import img19 from './assets/brandsIcons/19.webp';
import img20 from './assets/brandsIcons/20.webp';
import img21 from './assets/brandsIcons/21.webp';
import img22 from './assets/brandsIcons/22.webp';
import img23 from './assets/brandsIcons/23.webp';
import img24 from './assets/brandsIcons/24.webp';
import img26 from './assets/brandsIcons/27.webp';
import img27 from './assets/brandsIcons/28.webp';
import img28 from './assets/brandsIcons/29.webp';
import img29 from './assets/brandsIcons/30.webp';
import img30 from './assets/brandsIcons/31.webp';
import img31 from './assets/brandsIcons/32.webp';
import headimg1 from './assets/cubeImgs/1.jpg';
import headimg2 from './assets/cubeImgs/2.jpg';
import headimg3 from './assets/cubeImgs/3.jpg';
import headimg4 from './assets/cubeImgs/4.jpg';
import advedio from './assets/cubeImgs/ved.mp4';
import SwipeSlide from './components/SwipeSlideItems';
import ItemCatagories from './components/AdminDashboardComponents/ItemCatagories';
import adimg1 from './assets/1.png'
import adimg2 from './assets/2.png'
import adimg3 from './assets/3.png'
import adimg4 from './assets/4.png'
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
  pageperview: number
  navigation: boolean;
  clickable: boolean;
  direction: string;
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
  const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img26, img27, img28, img29, img30, img31];
  const headImgarr = [headimg1, headimg2, headimg3, headimg4]
  const adImgs = [adimg1,adimg2,adimg3,adimg4];
  const brandsSlide1: SwipeSlideProps = {
    speed: 5000,
    delay: 0,
    spaceBetween: 10,
    pagination: false,
    pageperview: 13,
    navigation: false,
    clickable: true,
    direction: 'ltr',
    imgArr: imgArr
  };

  const brandsSlide2: SwipeSlideProps = {
    speed: 5000,
    delay: 0,
    spaceBetween: 10,
    pagination: false,
    pageperview: 13,
    navigation: false,
    clickable: true,
    direction: 'rtl',
    imgArr: imgArr
  };

  const adSlide1:AdSlideProps ={
  speed: 13000,
  delay: 3000,
  spaceBetween: 0,
  pagination: false,
  navigation: false,
  clickable: false,
  imgArr: adImgs
  }

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
                  <button className="btn btn-primary me-2 border-container">Shop Now</button>
                  <button className="btn btn-outline-light border-container">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="headerRight">
            <AdCube imgArr={headImgarr} />
          </div>
        </header>
      <div className="brandsContainer">
        <h1 className='display-8'>Brands That Trust Us</h1>
        <div className="brands">
          <SwipeSlideImg attributes={brandsSlide1} />
        </div>
        <div className="brands">
          <SwipeSlideImg attributes={brandsSlide2} />
        </div>
      </div>
      <div className="ItemsContainer">
        <h1 className='display-8'>Our Products</h1>
        <div style={{width:"100%"}}>
          <ItemCatagories/>
        </div>       
      </div>
        {/* Uncomment and use these components as needed */}
        {/* <AdSlide /> */}
        {/* <AdCube /> */}
      </div>
    </>
  );
}

export default App;

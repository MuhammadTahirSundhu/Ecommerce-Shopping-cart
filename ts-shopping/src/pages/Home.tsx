import React, { useEffect, useState } from 'react';
import './Home.css';
import {useSelector } from 'react-redux';
import { RootState } from '../store/store';
import AdSlide from '../components/AdSlide';
import AdCube from '../components/AdCube';
import 'bootstrap/dist/css/bootstrap.min.css';
import SwipeSlideImg from '../components/SwipeSlideImg';
import img1 from '../assets/brandsIcons/1.webp';
import img2 from '../assets/brandsIcons/2.webp';
import img3 from '../assets/brandsIcons/3.webp';
import img4 from '../assets/brandsIcons/4.webp';
import img5 from '../assets/brandsIcons/5.webp';
import img6 from '../assets/brandsIcons/6.webp';
import img7 from '../assets/brandsIcons/7.webp';
import img8 from '../assets/brandsIcons/8.webp';
import img9 from '../assets/brandsIcons/9.webp';
import img10 from '../assets/brandsIcons/10.webp';
import img11 from '../assets/brandsIcons/11.webp';
import img12 from '../assets/brandsIcons/12.webp';
import img14 from '../assets/brandsIcons/14.webp';
import img15 from '../assets/brandsIcons/15.webp';
import img16 from '../assets/brandsIcons/16.webp';
import img17 from '../assets/brandsIcons/17.webp';
import img18 from '../assets/brandsIcons/18.webp';
import img19 from '../assets/brandsIcons/19.webp';
import img20 from '../assets/brandsIcons/20.webp';
import img21 from '../assets/brandsIcons/21.webp';
import img22 from '../assets/brandsIcons/22.webp';
import img23 from '../assets/brandsIcons/23.webp';
import img24 from '../assets/brandsIcons/24.webp';
import img26 from '../assets/brandsIcons/27.webp';
import img27 from '../assets/brandsIcons/28.webp';
import img28 from '../assets/brandsIcons/29.webp';
import img29 from '../assets/brandsIcons/30.webp';
import img30 from '../assets/brandsIcons/31.webp';
import img31 from '../assets/brandsIcons/32.webp';
import headimg1 from '../assets/cubeImgs/1.webp';
import headimg2 from '../assets/cubeImgs/2.webp';
import headimg3 from '../assets/cubeImgs/3.webp';
import headimg4 from '../assets/cubeImgs/4.webp';
import adimg1 from '../assets/pros/1.webp'
import adimg2 from '../assets/pros/2.webp'
import adimg3 from '../assets/pros/3.webp'
import adimg4 from '../assets/pros/4.webp'
import CatagoriesSwiper from '../components/CatagoriesSwiper.tsx';
import SwipeSlideItems from '../components/SwipeSlideItems.tsx'
import { useAllCatagoriesOnly } from '../components/customHooks.ts';

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

interface CataSwiperProps {
  sliderperview: number;
  imgArr: any[];
  catArr: string[];
}

interface Item {
  id: string;
  name: string;
  description: string;
  catagory: string;
  price: string;
  quantity: string;
  isAvailable: boolean;
  discount: string;
  company: string;
  reviews?: string;
  img: string;
}

function filterItemsByDiscount(items: Item[], discount: number): Item[] {
  return items.filter(item => Number(item.discount) >= discount);
}

const Home: React.FC = () => {


  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight / 2;

    setScrolled(scrollPosition > threshold);
  };



  useEffect(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  // Set styles directly on the document body if needed


  const items = useSelector((state: RootState) => state.items.items);
  const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img26, img27, img28, img29, img30, img31];
  const headImgarr = [headimg1, headimg2, headimg3, headimg4]
  const adImgs = [adimg1, adimg2, adimg3, adimg4];
  const FlashDealItems: Item[] = filterItemsByDiscount(items,50);
  
  const [diffCatagories, setDiffCatagories] = useState<string[]>([]);
  const diffcat = useAllCatagoriesOnly();
  useEffect(() => {
    setDiffCatagories(diffcat);
  }, [items])

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

  const adSlide1: AdSlideProps = {
    speed: 13000,
    delay: 3000,
    spaceBetween: 0,
    pagination: false,
    navigation: false,
    clickable: false,
    imgArr: adImgs
  }

  const catSwiper1: CataSwiperProps = {
    sliderperview: 5,
    imgArr: adImgs,
    catArr: diffCatagories
  }


  
  


  return (

    <>
      <div className={`scroll-container ${scrolled ? 'scrolled' : ''}`}>

        {/* <AdminDashBoard /> */}
        {/* <AllItems items={items}/> */}
        {/* <AddItemToCollection open={true} /> */}
        {/* {<SwipeSlide items={items} />} */}
        {/* <LoadingSkelton/> */}
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
          <h1 className='display-8'>Feature Brands</h1>
          <div className="brands">
            <SwipeSlideImg attributes={brandsSlide1} />
          </div>
          <div className="brands">
            <SwipeSlideImg attributes={brandsSlide2} />
          </div>
        </div>
        <div className="ItemsContainer">
          <h1 className="display-8">Top Catagories</h1>
          <div className="cataSwiper">
            {<CatagoriesSwiper attributes={catSwiper1} />}
          </div>
        </div>
        <div className="ItemsContainer">
          <h1 className="display-8">Flash Deals</h1>
          {<SwipeSlideItems items={FlashDealItems}/>}
        </div>
        <div className="AdSliderWholeContainer">
          <div className="adSlider">
          <AdSlide attributes={adSlide1}/>
          </div>
          <div className="adSliderinfo">
              <h1 className='display-4'>The Largest Store for Online Shopping in Pakistan</h1>
              <p>TS Collection: Pioneer in e-commerce industry, we stand exceptional in offering electronic products under one roof with best prices and availability. The primary objective is to provide the best online shopping experience and the best customer service possible to the customers. There are countless products listed on the website, under different categories, from some of the best and reliable brands. So, if you are tired from work or don't want to drive in the hot weather, homeshopping.pk is a perfect place for you to shop all kinds of products from electronic gadgets to your favorite apparel while relaxing on your couch.</p>
              <button className="btn btn-outline-light border-container">Learn More</button>
          </div>
          {/* <AddItemToCollection open={true} /> */}
          {/* <AllItems items={items}/> */}
        </div>
        {/* Uncomment and use these components as needed */}
        {/* <AdCube /> */}
      </div>
    </>
  );
}

export default Home;

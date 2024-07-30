import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import './AdSlide.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='adslide'><img className='adslide' src={img1}/></SwiperSlide>
        <SwiperSlide className='adslide'><img className='adslide' src={img2}/></SwiperSlide>
        <SwiperSlide className='adslide'><img className='adslide' src={img3}/></SwiperSlide>
        <SwiperSlide className='adslide'><img className='adslide' src={img4}/></SwiperSlide>
                     
      </Swiper>
    </>
  );
}

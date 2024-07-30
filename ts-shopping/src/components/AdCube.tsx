import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './AdCube.css';

// Import required modules
import { Autoplay,EffectCube, Pagination } from 'swiper/modules';

function AdCube() {
  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      className="adcube"
      pagination={true}
      modules={[EffectCube, Pagination , Autoplay]}
    >
      <SwiperSlide className='adcubeslide'>

        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" className='adcubeslideimg' />
      </SwiperSlide>
      <SwiperSlide className='adcubeslide'>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" className='adcubeslideimg'/>
      </SwiperSlide>
      <SwiperSlide className='adcubeslide'>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" className='adcubeslideimg'/>
      </SwiperSlide>
      <SwiperSlide className='adcubeslide'>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" className='adcubeslideimg'/>
      </SwiperSlide>
    </Swiper>
  );
}

export default AdCube;

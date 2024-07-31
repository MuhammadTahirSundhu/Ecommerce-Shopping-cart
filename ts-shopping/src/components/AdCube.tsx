import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './AdCube.css';

// Import required modules
import { Autoplay,EffectCube } from 'swiper/modules';

function AdCube() {
  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
      }}
      speed={9000} // Slow down the transition speed (2 seconds for transition)

      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      className="adcube"
      modules={[EffectCube , Autoplay]}
    >
      <SwiperSlide className='adcubeslide'>

        <img src="https://img.freepik.com/free-photo/adult-women-happy-shopping-together_23-2148385722.jpg?t=st=1722416357~exp=1722419957~hmac=bf94b58f2c447e6f4afae07316a47df655f7827ada331eefbebc6b056c4d2d13&w=826" alt="Nature 1" className='adcubeslideimg' />
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

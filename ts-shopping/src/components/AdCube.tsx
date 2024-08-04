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

interface AdCubeProps {
  imgArr: any[]; // Adjust the type as per your actual data structure
}

const AdCube: React.FC<AdCubeProps> = ({ imgArr }) => {
  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
      }}
      loop={true}
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

        <img src={imgArr[0]} alt="Nature 1" className='adcubeslideimg' loading='lazy' />
      </SwiperSlide>
      <SwiperSlide className='adcubeslide'>
        <img src={imgArr[1]} alt="Nature 2" className='adcubeslideimg' loading='lazy'/>
      </SwiperSlide>
      <SwiperSlide className='adcubeslide'>
        <img src={imgArr[2]} alt="Nature 3" className='adcubeslideimg' loading='lazy'/>
      </SwiperSlide>
      <SwiperSlide className='adcubeslide'>
        <img src={imgArr[3]} alt="Nature 4" className='adcubeslideimg' loading='lazy'/>
      </SwiperSlide>
    </Swiper>
  );
}

export default AdCube;

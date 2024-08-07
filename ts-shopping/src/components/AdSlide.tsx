import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './AdSlide.css'
// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Define the interface for the props
interface AdSlideProps {
  speed: number;
  delay: number;
  spaceBetween: number;
  pagination: boolean;
  navigation: boolean;
  clickable: boolean;
  imgArr: string[];
}

// Define default props
const defaultProps: AdSlideProps = {
  speed: 300,
  delay: 3000,
  spaceBetween: 0,
  pagination: true,
  navigation: true,
  clickable: true,
  imgArr: [],
};

// Functional component using the props interface
const AdSlide: React.FC<{ attributes: AdSlideProps }> = ({ attributes = defaultProps }) => {
  const { speed, delay, spaceBetween, pagination, navigation, clickable, imgArr } = attributes;
  console.log(pagination);

  return (
    <Swiper
      spaceBetween={spaceBetween}
      centeredSlides={true}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      speed={speed}
      pagination={{
        clickable: clickable,
      }}
      navigation={navigation}
      modules={[Autoplay, Pagination, Navigation]}
      className="adswiper"
    >
      {imgArr.map((imgSrc, index) => (
        <SwiperSlide key={index} className='adslide'>
          <img className='adslide' src={imgSrc} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AdSlide;

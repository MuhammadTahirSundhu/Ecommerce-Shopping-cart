import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './SwipeSlideImg.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

interface SwipeSlideProps {
  speed: number;
  delay: number;
  spaceBetween: number;
  pagination: boolean;
  pageperview: number;
  navigation: boolean;
  clickable: boolean;
  direction:string;
  imgArr: string[];
}

const defaultProps: SwipeSlideProps = {
  speed: 500, // Adjust speed for smooth transition
  delay: 3000, // Time between slides
  spaceBetween: 30,
  pagination: true,
  pageperview: 7,
  navigation: true,
  clickable: true,
  direction:"ltr",
  imgArr: [],
};

const SwipeSlideImg: React.FC<{ attributes?: SwipeSlideProps }> = ({ attributes = defaultProps }) => {
  const { speed, delay, spaceBetween, pagination, pageperview, navigation, clickable, direction, imgArr } = attributes;
console.log(pagination,navigation,clickable,direction);

  return (
    <Swiper
      slidesPerView={pageperview}
      spaceBetween={spaceBetween}
      freeMode={true}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      speed={speed} // Transition speed
      loop={true}
      modules={[Autoplay, FreeMode, Pagination]}
      className="mySwiper swiperOut"
      //style={{direction:`${direction}`}}
      breakpoints={{
        320: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 10,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: pageperview-2,
          spaceBetween: 40,
        },
      }}
    >
      {imgArr.map((img, index) => (
        <SwiperSlide key={index} className='swiper-slideIn'>
          <img src={img} alt={`Slide ${index + 1}`} loading='lazy' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeSlideImg;

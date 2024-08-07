import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './catagoriesSwiper.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import shoes from '../assets/catagories/shoes.jpg'
import glasses from '../assets/catagories/glasses.jpg'
import hat from '../assets/catagories/hat.jpg'
import jewelry from '../assets/catagories/jewelry.jpeg'
import headphones from '../assets/catagories/headphone.jpeg'
import makeup from '../assets/catagories/makeup.jpeg'
import watch from '../assets/catagories/watch.jpg'
import mobile from '../assets/catagories/mobiles.webp'
import background from '../assets/catagories/background.jpg'


interface CataSwiperProps {
  sliderperview: number;
  imgArr: any[];
  catArr: string[];
}

interface CataSwiperProps {
  sliderperview: number;
  imgArr: any[];
  catArr: string[];
}

function selectImages(catArr: string[]): string[] {
  const imgArr: string[] = [];
  catArr.forEach((cat) => {
    switch (cat) {
      case 'shoes':
        imgArr.push(shoes);
        break;
      case 'glasses':
        imgArr.push(glasses);
        break;
      case 'hat':
        imgArr.push(hat);
        break;
      case 'jewelry':
        imgArr.push(jewelry);
        break;
      case 'headphone':
        imgArr.push(headphones);
        break;
      case 'makeup':
        imgArr.push(makeup);
        break;
      case 'watch':
        imgArr.push(watch);
        break;
      case 'mobile':
        imgArr.push(mobile);
        break;
      default:
        imgArr.push(background);
    }
  });
  return imgArr;
}
// Functional component
const CatagoriesSwiper: React.FC<{ attributes?: CataSwiperProps }> = ({ attributes }) => {
  const catArr = attributes?.catArr || [];
  const imgArr = selectImages(catArr);
  
  return (
    
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiperCat"
      >
        {imgArr.map((item, index) => (
          <SwiperSlide className='swiper-slideCat' key={index}>
            <div className="title" data-swiper-parallax="-300">
              {catArr[index].toUpperCase()}
            </div>
            <img src={item} alt={`nature-${index}`} loading='lazy' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CatagoriesSwiper;

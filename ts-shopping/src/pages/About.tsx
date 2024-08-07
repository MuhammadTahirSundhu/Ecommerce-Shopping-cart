import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'
import adimg1 from '../assets/about/1.webp'
import adimg2 from '../assets/about/2.webp'
import adimg3 from '../assets/about/1.webp'
import adimg4 from '../assets/about/2.webp'
import AdSlide from '../components/AdSlide';

import teamMember1 from '../assets/ourTeamMembers/1.webp';
import teamMember2 from '../assets/ourTeamMembers/2.webp';
import teamMember3 from '../assets/ourTeamMembers/3.webp';
import teamMember4 from '../assets/ourTeamMembers/4.webp';
import teamMember5 from '../assets/ourTeamMembers/5.webp';
import teamMember6 from '../assets/ourTeamMembers/6.webp';


interface AdSlideProps {
  speed: number;
  delay: number;
  spaceBetween: number;
  pagination: boolean;
  navigation: boolean;
  clickable: boolean;
  imgArr: string[];
}




function About() {

  const adImgs = [adimg1, adimg2, adimg3, adimg4];

  const adSlide1: AdSlideProps = {
    speed: 10000,
    delay: 8000,
    spaceBetween: 0,
    pagination: false,
    navigation: false,
    clickable: false,
    imgArr: adImgs
  }


  return (
    <>
        <header className="AboutHeader d-flex align-items-center justify-content-center">
            <div className="AboutOverlay">
              <div className="text-center text-white border-container">
                <div>
                  <h1 className="display-8">About Us</h1>
                  <p className="lead AboutDescription">Welcome to TS Collections! Your one-stop destination for the best deals and a seamless shopping experience. Explore our wide range of products, from the latest fashion trends to cutting-edge gadgets and home essentials. Enjoy fast shipping, secure checkout, and exceptional customer service. Happy shopping!</p>
                </div>
              </div>
          </div>
        </header>
        <div className="GeneralContainer">
          <div className="AboutAdSlider">
          <AdSlide attributes={adSlide1}/>
          </div>
          <div className="AboutAdSliderinfo">
            <h1 className='display-8'>Who we are?</h1>
              <h1 className='display-6'>The Largest Store for Online Shopping in Pakistan</h1>
              <p>TS Collection: Pioneer in e-commerce industry, we stand exceptional in offering electronic products under one roof with best prices and availability. The primary objective is to provide the best online shopping experience and the best customer service possible to the customers. There are countless products listed on the website, under different categories, from some of the best and reliable brands. So, if you are tired from work or don't want to drive in the hot weather, homeshopping.pk is a perfect place for you to shop all kinds of products from electronic gadgets to your favorite apparel while relaxing on your couch.</p>
              <button className="btn btn-outline-light border-container">Learn More</button>
          </div>
        </div>
         <div className="GeneralContainer">
         <h1 className='display-8'>Our Team</h1>
         </div>
         <div className="GeneralContainer">
            <div className="OurTeamMember">
              <div className="eachMember"><img src={teamMember1} alt='Mr.Tahir' loading='lazy'/><h6>Mr. Tahir</h6></div>
              <div className="eachMember"><img src={teamMember2} alt='Zk. Thomas' loading='lazy'/><h6>Will Jack</h6></div>
              <div className="eachMember"><img src={teamMember3} alt='Zk. Thomas' loading='lazy'/><h6>Hazel</h6></div>
              <div className="eachMember"><img src={teamMember4} alt='Zk. Thomas' loading='lazy'/><h6>Clara</h6></div>
              <div className="eachMember"><img src={teamMember5} alt='Zk. Thomas' loading='lazy'/><h6>Mark Henry</h6></div>
              <div className="eachMember"><img src={teamMember6} alt='Zk. Thomas' loading='lazy'/><h6>Wann George</h6></div>
            </div>
         </div>
    </>
  )
}

export default About
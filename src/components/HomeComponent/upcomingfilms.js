import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import homecss from "../../../styles/Home.module.css";
import Image from "next/image";
import cta from "../../../public/assets/images/cta-mobile.png";
import Link from "next/link";
// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/fontawesome-free-solid";
function Upcomingfilms({data}) {
const [rating, setRating] = useState(0);
const handleRatingChange = (e) => {
    setRating(e.target.value);
};
  return (
    <div className="container px-md-3">
      <div
        className="row">
        <div className="mt-md-4 ps-md-1">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header mb-0">
            <div className="left-inner-colm pb-0">
              <h2 className="d-md-inline mr-md-3 main-heading mb-0">
                <span className="main-headline-sidebar category-side-bar"></span>
                <span className="px-md-3 px-2">Upcoming Films</span>
              </h2>
            </div>
            <div className="">
              <Link href="">
                <Image src={cta} className="cta-position" />
              </Link>
            </div>
          </div>
          {/* Swiper Slider Start */}
          <Swiper
             slidesPerView={5} // Default for larger screens
             spaceBetween={20}
             pagination={{
               dynamicBullets: true,
             }}
             breakpoints={{
               // When the viewport width is <= 768px (mobile devices)
               0: {
                 slidesPerView: 2, // Show 3 slides per view on mobile
                 spaceBetween: 10, // Optional: Adjust space between slides for mobile
               },
               // When the viewport width is > 768px (tablets and desktops)
               769: {
                 slidesPerView: 5, // Show 5 slides per view on desktop
                 spaceBetween: 20, // Adjust space between slides for desktop
               },
             }}
             modules={[Pagination]}
            className="homewebstoriesSwiper pb-4 pb-md-0 ms-md-2 mb-md-0 mb-3 mt-3">
            {data.upcoming_films_data && data.upcoming_films_data.length > 0 && data.upcoming_films_data.map((item, index) => (
                <SwiperSlide className='pb-4'>
                    <div className="poster position-relative">
                        <Link href={item.Url}>
                            <div className="poster-image">
                                <img src={item.Image} alt={item.Homeheadline} title={item.Homeheadline} className='border-radius-img' style={{aspectRatio: '2/3'}}/>
                                <div className="poster-title">
                                    {item.Homeheadline}
                                </div>
                                {/* <div className="rating-container">
                                    <div className="rating">
                                        <input 
                                        type="radio" 
                                        id="star1" 
                                        name="rating" 
                                        value="1" 
                                        checked/>
                                        <label className="star" htmlFor="star5" title="Awesome" aria-hidden="true">
                                        <FontAwesomeIcon icon={faStar} className='checked'/>
                                        </label>
                                        
                                        <input 
                                        type="radio" 
                                        id="star2" 
                                        name="rating" 
                                        value="2" 
                                        checked/>
                                        <label className="star" htmlFor="star4" title="Great" aria-hidden="true">
                                        <FontAwesomeIcon icon={faStar} className='checked'/>
                                        </label>
                                        
                                        <input 
                                        type="radio" 
                                        id="star3" 
                                        name="rating" 
                                        value="3" 
                                        />
                                        <label className="star" htmlFor="star3" title="Very good" aria-hidden="true">
                                        <FontAwesomeIcon icon={faStar} className='checked'/>
                                        </label>
                                        
                                        <input 
                                        type="radio" 
                                        id="star4" 
                                        name="rating" 
                                        value="4" 
                                        />
                                        <label className="star" htmlFor="star2" title="Good" aria-hidden="true">
                                        <FontAwesomeIcon icon={faStar} className='checked'/>
                                        </label>
                                        
                                        <input 
                                        type="radio" 
                                        id="star5" 
                                        name="rating" 
                                        value="5" 
                                        />
                                        <label className="star" htmlFor="star1" title="Bad" aria-hidden="true">
                                        <FontAwesomeIcon icon={faStar} className='checked'/>
                                        </label>
                                    </div>
                                    
                                    <span className='rating-pos'>
                                        <span className='rating-value'>5</span>
                                        <span style={{color: '#AAAAAA'}}><span style={{fontSize:'20px'}}>/</span>5</span>
                                    </span>
                                </div> */}
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
          </Swiper>
          {/* Swiper Slider End */}
        </div>
      </div>
    </div>
  );
}

export default Upcomingfilms;

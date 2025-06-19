import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import cta from '../../../public/assets/images/cta-mobile.png';
import camera from '../../../public/assets/images/camera.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Photos({data}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check screen size on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container mt-4 pb-md-2 tab-header opinions-background-pos py-4" style={{borderRadius: '0px'}}>
      <div className="d-flex justify-content-between align-items-center pt-2">
        <div className="left-inner-colm pb-0 mb-2">
          <h2 className="d-md-inline mr-md-3 main-heading">
            <span className="main-headline-sidebar"></span>
            <span className="px-2">Photo Gallery</span>
          </h2>
        </div>
        <div className="">
          <Link href="/photos-all">
            <Image src={cta} className="cta-position " />
          </Link>
        </div>
      </div>
      <div className="">
        <Swiper
          effect={isMobile ? undefined : 'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMobile ? 1 : 'auto'}
          spaceBetween={isMobile ? 10 : 50}
          initialSlide={3}
          loop={true}
          coverflowEffect={isMobile ? undefined : {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="homephotoSwiper pb-5 mb-3"
        >
          {data.photos_data && data.photos_data.length > 0 && data.photos_data.map((item, index) => (
            <SwiperSlide>
              <Link href={item.URL}>
                <img src={item.Images.Image1} alt={item.image_caption} title={item.Homeheadline} className='photoimg border-radius-img'/>
                <div className="banner-color pos">
                  <div className="photo-text-pos">
                    <p className="photo-date-time mb-1"><span>{item.show_date_format}</span></p>
                    <p className="photo-title mb-1">
                      {item.Homeheadline}
                    </p>
                    <Image src={camera} className="camera-position"/>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

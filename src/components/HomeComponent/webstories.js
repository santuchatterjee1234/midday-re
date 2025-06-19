import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import cta from "../../../public/assets/images/cta-mobile.png";
import Link from "next/link";
// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
function Webstories({data}) {
  return (
    <div className="container mb-3 px-md-0">
      <div
        className="row opinions-background-pos px-md-3" style={{borderRadius: '0px'}}>
        <div className="mt-4 ps-md-1">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header mb-0">
            <div className="left-inner-colm pb-0">
              <h2 className="d-md-inline mr-md-3 main-heading mb-0">
                <span className="main-headline-sidebar category-side-bar"></span>
                <span className="px-md-3 px-2">Web Stories</span>
              </h2>
            </div>
            <div className="">
              <Link href="/web-stories">
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
            className="homewebstoriesSwiper pb-4 ms-md-2 mb-md-0 mb-3">
            {data.web_stories_data && data.web_stories_data.length > 0 && data.web_stories_data.map((item, index) => (
              <SwiperSlide>
                <div className="my-3">
                  <Link href={`web-storis/${item.Url}`}>
                    <div className="bg-white rounded shortbox">
                      <div className="position-relative"> 
                        <img src={item.Image} alt={item.Homeheadline} title={item.Homeheadline} className="shorts-image"/>
                        <i className="imageovericon"></i>
                      </div>
                      
                      <h6 className="m-2 webstories-lineclamp">{item.Homeheadline}</h6>
                      <p className="text px-2 text-secondary mb-2 webstories-month-pos">{item.minutes_ago}</p>
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

export default Webstories;

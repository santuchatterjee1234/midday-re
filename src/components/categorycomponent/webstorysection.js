import React from "react";
import homecss from "../../../styles/category.module.css";
import cta from "../../../public/assets/images/cta.png";
import ctaMobile from "../../../public/assets/images/cta-mobile.png";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import batch from "../../../public/assets/images/batch.png";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import camera from "../../../public/assets/images/camera.png";
import trending from "../../../public/assets/images/trending.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import { useEffect } from "react";
import share from "../../../public/assets/images/share.png";
import axios from 'axios';
import { config } from '../../../next.config.js';
export default function webstorysection({ categoryName }) {
    const [webstoriesData, setWebstoriesData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let formatdata = new FormData();
                formatdata.append('category_name', categoryName);
                formatdata.append('cur', 0);
                formatdata.append('max', 5);
                const response = await axios.post(`${config.API_HOST}getCategorywiseWebStories`, formatdata);
                setWebstoriesData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return ( 
      <>
      {webstoriesData && webstoriesData.web_stories_data && webstoriesData.web_stories_data.length > 0 && (
      <>
        <section className="fouthLayout pt-3">
          <div className="container mb-5 px-md-0">
            <div
              className="row opinions-background-pos ms-md-2"
              style={{ borderRadius: "0px" }}
            >
              <div className="mt-4 ps-md-1">
                <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header mb-0">
                  <div className="left-inner-colm pb-0">
                    <h2 className="d-md-inline mr-md-3 main-heading mb-0">
                      <span className="main-headline-sidebar category-side-bar"></span>
                      <span className="px-md-3 px-2">Web Stories</span>
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
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  breakpoints={{
                    // When the viewport width is <= 768px (mobile devices)
                    0: {
                      slidesPerView: 3, // Show 3 slides per view on mobile
                      spaceBetween: 10, // Optional: Adjust space between slides for mobile
                    },
                    // When the viewport width is > 768px (tablets and desktops)
                    769: {
                      slidesPerView: 5, // Show 5 slides per view on desktop
                      spaceBetween: 20, // Adjust space between slides for desktop
                    },
                  }}
                  modules={[Pagination]}
                  className="homewebstoriesSwiper pb-4 ms-md-2 mb-md-0 mb-3"
                >
                  {webstoriesData.web_stories_data.map((item, index) => (
                  <SwiperSlide>
                    <div className="my-3">
                      <a href={item.Url}>
                        <div className="bg-white rounded shortbox">
                          <div className="position-relative">
                            <img
                              src={item.Image}
                              alt={item.Homeheadline}
                              title={item.Homeheadline}
                              className="shorts-image"
                            />
                            <i className="imageovericon"></i>
                          </div>

                          <h6 className="m-2 webstories-lineclamp">
                            {item.Homeheadline}
                          </h6>
                          <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                            {item.minutes_ago}
                          </p>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                  ))}
                </Swiper>
                {/* Swiper Slider End */}
              </div>
            </div>
          </div>
        </section>
        <div className="adsmain d-none d-md-block">
          <p className={homecss.adspera}>ADVERTISEMENT</p>
          <div className="desktopAds d-flex justify-content-center">
            <div className={homecss.adspart}></div>
          </div>
        </div>
      </>
      )}
    </>
    );
}
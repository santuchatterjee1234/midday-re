import React, { useState, useEffect  } from "react";
import homecss from "../../../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { config } from '../../../next.config.js';
import Image from "next/image";
import batch from "../../../public/assets/images/batch.png";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import camera from "../../../public/assets/images/camera.png";
import cta from "../../../public/assets/images/cta-mobile.png";
import trending from "../../../public/assets/images/trending.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/fontawesome-free-solid";
// import required modules

import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';
import Link from "next/link";
function Celebritylife({data}) {
  const hData = data.rhs_data[0];
  const horoscope = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  const horoscopeArray = horoscope.reduce((acc, sign) => {
    if (hData && hData[sign]) {
      acc.push({ sign, value: hData[sign] });
    }
    return acc;
  }, []);
  const [activeTab, setActiveTab] = useState("All");
  const handleTabClick = (tab) => {
    setActiveTab(tab.subCategoryKey);
  };
  const smallFirstLetter = (string) => {
      return string.charAt(0).toLowerCase() + string.slice(1);
  };
  return (
    <div className="container mb-md-3 mb-4 px-md-3">
      <div className="row">
        <div className="col-md-9 lhselement horoscope-right-border-desktop ps-md-1">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
            <div className="left-inner-colm pb-0 mb-2 px-md-1">
              <h2 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar category-side-bar"></span>
                <span className="px-md-3 px-2">Celebrity Life</span>
              </h2>
            </div>
            <div className="">
              <Link href="/celebrity-life">
                <Image src={cta} className="cta-position" />
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 px-2">
              <ul
                className="nav nav-tabs category-nav-tabs mb-3 pb-1"
                id="style-4"
              >
                <div className="scrollbar"></div>
                {data.subcategory_data &&
                  Object.keys(data.subcategory_data).length > 0 &&
                  Object.keys(data.subcategory_data).map(
                    (subCategoryKey, index, array) => (
                      <li
                        className={
                          index === array.length - 1 ? "" : "nav-tabs-right"
                        }
                        key={subCategoryKey}
                      >
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => handleTabClick({ subCategoryKey })}
                          className={`mx-1 ${
                            activeTab === subCategoryKey
                              ? "category-active active-border-bottom"
                              : ""
                          }`}
                        >
                          {subCategoryKey.replace(/_/g, " ")}
                        </span>
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
          <div className="tab-content">
          {data.subcategory_data &&
              Object.keys(data.subcategory_data).length > 0 &&
              Object.keys(data.subcategory_data).map((subCategoryKey) => (
            <div
              className={`tab-pane fade ${
                activeTab === subCategoryKey ? "show active" : ""
              }`}
            >
              <div className="row px-md-2">
                {data.subcategory_data[subCategoryKey]
                        .map((item, index) => (
                  <div className="col-md-4 col-6 pe-md-0 mb-3">
                    <div>
                      <Link href={item.URL}>
                        <div className="position-relative">
                          <img
                            src= {item.Images.Image2}
                            alt={item.image_caption}
                            title={item.Homeheadline}
                            className="border-radius-img"
                          />
                          {/* <Image src={batch} className="batchimg-big" /> */}
                          {item.username === "Videos" && (
                            <Image src={pauseicon} className="pauseicon-big" />
                          )}
                          {item.username === "Photos" && (
                            <Image src={camera} className="camera-position-small-repeat-category" />
                          )}
                          {item.story_label != "" && (
                            <span className="img-story-label-position-category">
                              {item.story_label}
                            </span>
                          )}
                        </div>
                        <h2 className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}>
                          {item.Homeheadline}
                        </h2>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="col-md-3 rhselement pt-2 pt-md-3 mt-md-2">
          {/* Daily Horoscope Start */}
          <div className="row">
            <div className="d-flex justify-content-between align-items-center pt-2 tab-header">
              <div className="left-inner-colm pb-0 mb-2">
                <h2 className="d-md-inline mr-md-3 main-heading">
                  <span className="main-headline-sidebar"></span>
                  <span className="px-2">Daily Horoscope</span>
                </h2>
              </div>
              <div className="">
                <Link href="/timepass">
                  <Image src={cta} className="cta-position" />
                </Link>
              </div>
            </div>
          </div>
          <div className="horoscope">
            <Swiper
              slidesPerView={1}
              pagination={{
                dynamicBullets: true,
              }}
              // navigation={{
              //   prevEl: '.swiper-button-prev',
              //   nextEl: '.swiper-button-next',
              // }}
              modules={[Pagination]}
              className="horoscopeSwiper"
            >
              {horoscopeArray.map((horoscopeItem, index) => (
                <SwiperSlide>
                  <div className="row">
                    <div className="col-12">
                      <h2 className={`${homecss.horoscopetitle} pt-0 px-0`}>{horoscopeItem.sign}</h2>
                      <div style={{border:'1px solid #DEE2E6'}} className="p-3">
                        <img alt={horoscopeItem.sign} title={horoscopeItem.sign}  src={`${config.ASSETS_HOST}${smallFirstLetter(horoscopeItem.sign)}.jpg`} className="text-center lozad mx-auto d-block pt-2 w-100 fade"/>
                      </div>
                      <p className={`${homecss.horoscopedescription} pt-3 px-2 ${homecss.lineclamp3}`}><span  dangerouslySetInnerHTML={{ __html: horoscopeItem.value }}></span> </p>
                      <Link href=""><p className={homecss.readmore}>Read More <FontAwesomeIcon icon={faArrowRight} style={{fontSize: '12px'}}/></p></Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Prev and Next buttons */}
            {/* <div className="swiper-button-prev" style={{position: 'absolute', top: '10px', left: '10px'}}></div>
            <div className="swiper-button-next" style={{position: 'absolute', top: '10px', right: '10px'}}></div> */}
          </div>
          {/* Daily Horoscope End */}
        </div>
      </div>
    </div>
  );
}

export default Celebritylife;

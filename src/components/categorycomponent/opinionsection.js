import React, { useState, useEffect } from "react";
import homecss from "../../../styles/category.module.css";
import Image from "next/image";
import batch from "../../../public/assets/images/batch.png";
import change from "../../../public/assets/images/change.png";
import Link from "next/link";
import cta from "../../../public/assets/images/cta.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ctaMobile from "../../../public/assets/images/cta-mobile.png";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import trending from "../../../public/assets/images/trending.png";
import share from "../../../public/assets/images/share.png";
import camera from "../../../public/assets/images/camera.png";
import catline from "../../../public/assets/images/catline.png";
import { sanitizedUrl } from "../../../utils/commonFunction";
export default function opinionsection({
  categoryData,
  categoryName,
  isMobile,
}) {
  return (
    <section className="opinions">
      <div className="container">
        <div className={homecss.photosHeade}>
          <h2 className={homecss.photoshead}>Opinions</h2>
        </div>
        <div className="optioncard">
          <div className="row px-2 mb-md-0 mb-3">
            <div className="col-md-12 px-0">
              <div className="row py-2">
                <div>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    navigation={{
                      prevEl: `.custom-swiper-button-prev`,
                      nextEl: `.custom-swiper-button-next`,
                    }}
                    breakpoints={{
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },

                      0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                    }}
                    modules={[Pagination, Navigation]}
                    className="homeopinionsSwiper pb-4"
                  >
                    <SwiperSlide className={homecss.optionbg}>
                      <Link href="">
                        <div className="Opinionspart px-2">
                          <div className="row">
                            <div className="col-md-6 col-6">
                              <h2 className={homecss.optionhead}>
                                What to make of Ambani wedding?
                              </h2>
                              <p className={homecss.optionpera}>
                                checking Like you, I’ve been wondering about
                                Bombay’s big, fat ‘begaani shaadi’;...
                              </p>
                            </div>
                            <div className="col-md-6 text-center py-1 col-6">
                              <div className={homecss.borderMain}>
                                <Image
                                  src={change}
                                  alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  className={`border-radius-img ${homecss.imgeWidth}`}
                                />
                                <p className={homecss.swiperHead}>MS Word</p>
                                <p className={homecss.swiperPera}>
                                  By Mayank Shekhar
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>

                    <SwiperSlide className={homecss.optionbg}>
                      <Link href="">
                        <div className="Opinionspart px-2">
                          <div className="row">
                            <div className="col-md-6 col-6">
                              <h2 className={homecss.optionhead}>
                                What to make of Ambani wedding?
                              </h2>
                              <p className={homecss.optionpera}>
                                checking Like you, I’ve been wondering about
                                Bombay’s big, fat ‘begaani shaadi’;...
                              </p>
                            </div>
                            <div className="col-md-6 col-6 text-center py-1">
                              <div className={homecss.borderMain}>
                                <Image
                                  src={change}
                                  alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  className={`border-radius-img ${homecss.imgeWidth}`}
                                />
                                <p className={homecss.swiperHead}>MS Word</p>
                                <p className={homecss.swiperPera}>
                                  By Mayank Shekhar
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className={homecss.optionbg}>
                      <Link href="">
                        <div className="Opinionspart px-2">
                          <div className="row">
                            <div className="col-md-6 col-6">
                              <h2 className={homecss.optionhead}>
                                What to make of Ambani wedding?
                              </h2>
                              <p className={homecss.optionpera}>
                                checking Like you, I’ve been wondering about
                                Bombay’s big, fat ‘begaani shaadi’;...
                              </p>
                            </div>
                            <div className="col-md-6 col-6 text-center py-1 ">
                              <div className={homecss.borderMain}>
                                <Image
                                  src={change}
                                  alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  className={`border-radius-img ${homecss.imgeWidth}`}
                                />
                                <p className={homecss.swiperHead}>MS Word</p>
                                <p className={homecss.swiperPera}>
                                  By Mayank Shekhar
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className={homecss.optionbg}>
                      <Link href="">
                        <div className="Opinionspart px-2">
                          <div className="row">
                            <div className="col-md-6 col-6">
                              <h2 className={homecss.optionhead}>
                                What to make of Ambani wedding?
                              </h2>
                              <p className={homecss.optionpera}>
                                checking Like you, I’ve been wondering about
                                Bombay’s big, fat ‘begaani shaadi’;...
                              </p>
                            </div>
                            <div className="col-md-6 col-6 text-center py-1">
                              <div className={homecss.borderMain}>
                                <Image
                                  src={change}
                                  alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  className={`border-radius-img ${homecss.imgeWidth}`}
                                />
                                <p className={homecss.swiperHead}>MS Word</p>
                                <p className={homecss.swiperPera}>
                                  By Mayank Shekhar
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className={homecss.optionbg}>
                      <Link href="">
                        <div className="Opinionspart px-2">
                          <div className="row">
                            <div className="col-md-6 col-6">
                              <h2 className={homecss.optionhead}>
                                What to make of Ambani wedding?
                              </h2>
                              <p className={homecss.optionpera}>
                                checking Like you, I’ve been wondering about
                                Bombay’s big, fat ‘begaani shaadi’;...
                              </p>
                            </div>
                            <div className="col-md-6 col-6 text-center py-1">
                              <div className={homecss.borderMain}>
                                <Image
                                  src={change}
                                  alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  className={`border-radius-img ${homecss.imgeWidth}`}
                                />
                                <p className={homecss.swiperHead}>MS Word</p>
                                <p className={homecss.swiperPera}>
                                  By Mayank Shekhar
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import homecss from "../../../styles/category.module.css";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Opinions({ categoryData, categoryName, isMobile }) {
  return (
    <section className="opinions">
      <div className="container">
        <div className={homecss.photosHeade}>
          <h2 className={homecss.photoshead}>Opinions</h2>
        </div>
        <div className="optioncard">
          <div className="row px-2 mb-md-0 mb-3">
            <div className="col-md-12 px-0">
              <div className="row pb-2">
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
                        <div className="Opinionspart px-3 py-2">
                          <div className="row">
                            <div className="col-md-6 col-6 pt-3">
                              <h2 className={homecss.optionhead}>
                                What to make of Ambani wedding?
                              </h2>
                              <p className={homecss.optionpera}>
                                checking Like you, I’ve been wondering about
                                Bombay’s big, fat ‘begaani shaadi’;...
                              </p>
                            </div>
                            <div className="col-md-6 text-center py-2 col-6">
                              <div className={homecss.borderMain}>
                                <img
                                  src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                  alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  className={homecss.imgeWidth}
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
                        <div className="Opinionspart px-3 py-2">
                          <div className="row">
                            <div className="col-md-6 col-6 pt-3">
                              <h2 className={homecss.optionhead}>
                                What to make of Ambani wedding?
                              </h2>
                              <p className={homecss.optionpera}>
                                checking Like you, I’ve been wondering about
                                Bombay’s big, fat ‘begaani shaadi’;...
                              </p>
                            </div>
                            <div className="col-md-6 text-center py-2 col-6">
                              <div className={homecss.borderMain}>
                                <img
                                  src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                  alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  className={homecss.imgeWidth}
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
                        <div className="Opinionspart px-3 py-2">
                          <div className="row">
                            <div className="col-md-6 col-6 pt-3">
                              <h2 className={homecss.optionhead}>
                                What to make of Ambani wedding?
                              </h2>
                              <p className={homecss.optionpera}>
                                checking Like you, I’ve been wondering about
                                Bombay’s big, fat ‘begaani shaadi’;...
                              </p>
                            </div>
                            <div className="col-md-6 text-center py-2 col-6">
                              <div className={homecss.borderMain}>
                                <img
                                  src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                  alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  className={homecss.imgeWidth}
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
                        <div className="Opinionspart px-3 py-2">
                          <div className="row">
                            <div className="col-md-6 col-6 pt-3">
                              <h2 className={homecss.optionhead}>
                                What to make of Ambani wedding?
                              </h2>
                              <p className={homecss.optionpera}>
                                checking Like you, I’ve been wondering about
                                Bombay’s big, fat ‘begaani shaadi’;...
                              </p>
                            </div>
                            <div className="col-md-6 text-center py-2 col-6">
                              <div className={homecss.borderMain}>
                                <img
                                  src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                  alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  className={homecss.imgeWidth}
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
                        <div className="Opinionspart px-3 py-2">
                          <div className="row">
                            <div className="col-md-6 col-6 pt-3">
                              <h2 className={homecss.optionhead}>
                                What to make of Ambani wedding?
                              </h2>
                              <p className={homecss.optionpera}>
                                checking Like you, I’ve been wondering about
                                Bombay’s big, fat ‘begaani shaadi’;...
                              </p>
                            </div>
                            <div className="col-md-6 text-center py-2 col-6">
                              <div className={homecss.borderMain}>
                                <img
                                  src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                  alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                  className={homecss.imgeWidth}
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
        <div className="row pt-4">
          <div className="col-md-12">
            <p className="advertisement-text text-center mt-md-3 mb-0">
              ADVERTISEMENT
            </p>
            {/* 970*250 Add Start */}
            <div className="add-970x250 mx-auto text-center mb-3 d-none d-md-block"></div>
            {/* 970*250 Add End */}
            {/* 300*250 Add Start */}
            <div className="add-300x250 mx-auto text-center mb-3 d-block d-md-none"></div>
            {/* 300*250 Add End */}
          </div>
        </div>
      </div>
    </section>
  );
}

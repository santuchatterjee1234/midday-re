import React, { useState, useEffect } from "react";
import homecss from "../../../styles/category.module.css";
import Image from "next/image";
import Link from "next/link";
import cta from "../../../public/assets/images/cta.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ctaMobile from "../../../public/assets/images/cta-mobile.png";
import axios from 'axios';
import { config } from '../../../next.config.js';

export default function categoryupperslider({ upperBannerTagName }) {
  const [upperData, setUpperData] = useState(null);
  useEffect(() => { 
      const fetchData = async () => {
          try {
              let tag_name = upperBannerTagName.replace("'", '').replace(/ /g, '-') + '-P1';
              let formatdata = new FormData();
              formatdata.append('top_keyword', tag_name); 
              const responseQuiz = await axios.post(`${config.API_HOST}getCategoryPageDataForTopSection`, formatdata);
              setUpperData(responseQuiz.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, [upperBannerTagName]);
  return (
    <>
    {upperData && upperData['top_section_data'] && upperData['top_section_data'].length > 0 && (
      <section className="firstLayou">
        <div className={homecss.spotligtbg}>
          <div className="container">
            <div className="left-inner-colm pb-0 mb-2 px-md-2 pt-3 d-flex aling-items-center justify-content-between">
              <h1 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar category-side-bar"></span>
                <span className="px-md-3 px-2">{upperBannerTagName}</span>
              </h1>
              <div className="">
                {/* <Link href="">
                <Image src={cta} className="cta-position d-none d-md-block" />
                <Image
                  src={ctaMobile}
                  className="cta-position d-block d-md-none"
                />
              </Link> */}
              </div>
            </div>
            <div className="spoliteswiper pb-md-3 pb-0">
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
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="entSwiper pb-0 pb-md-4"
              >
                {upperData['top_section_data'].length > 0 && upperData['top_section_data'].map(
                (item, index) => (
                  <SwiperSlide className="liveBlogpart pt-md-4 pt-0">
                    <Link href={item.URL}>
                      <div className="entswiper px-2">
                        <div className="row">
                          <img 
                             src={item.Images.Image1}
                             alt={item.image_caption}
                             title={item.Homeheadline}
                             className="border-radius-img"
                          />
                          <p className={homecss.entheadpera}>{item.SubCategoryName}</p>
                          <p className={homecss.entmainpera}>
                            {item.Homeheadline}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    )}
    </>
  );
}

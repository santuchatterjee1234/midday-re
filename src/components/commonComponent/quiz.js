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

export default function quiz({ categoryId }) {
  const [quizData, setQuizData] = useState(null);

  useEffect(() => { 
      const fetchData = async () => {
          try {
              let formatdata = new FormData();
              formatdata.append('category_id', categoryId); 
              const responseQuiz = await axios.post(`${config.API_HOST}getCategorywiseQuizPollData`, formatdata);
              setQuizData(responseQuiz.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, [categoryId]); // Added categoryId to the dependency array

  return ( 
      <section id="quiz">
        <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
          <div className="left-inner-colm pb-0 mb-2">
            <h2 className="d-md-inline mr-md-3 main-heading">
              <span className="main-headline-sidebar"></span>
              <span className="px-2">Quiz</span>
            </h2>
          </div>
          <div>
            <Link href="">
              <Image
                src={cta}
                className="cta-position d-none d-md-block"
                alt="cta-view"
              />
              <Image
                src={ctaMobile}
                className="cta-position d-block d-md-none"
                alt="cta-view"
              />
            </Link>
          </div>
        </div>

        {/* Render quizData if available */}
        {quizData && quizData.quiz_data && (
          <div>
            <div className={`${homecss.borderMain} border text-center pb-2`}>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="homeopinionsSwiper pb-4"
              >
                {quizData.quiz_data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link href={item.URL}>
                        <p className={homecss.quizepera}>
                          {item.Homeheadline}
                        </p>
                        <button className={homecss.playnow}>
                          Play Now
                        </button>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </section>
  );
}

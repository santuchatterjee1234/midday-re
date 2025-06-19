import React, { useState, useEffect } from "react";
import axios from 'axios';
import { config } from '../../../next.config.js';
import homecss from "../../../styles/category.module.css";
import Image from "next/image";
import batch from "../../../public/assets/images/batch.png";
import Link from "next/link";
import cta from "../../../public/assets/images/cta.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
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

export default function LiveBlogSection({ categoryId }) {
  const [liveBlogData, setLiveBlogData] = useState(null);

  useEffect(() => { 
      const fetchData = async () => {
          try {
              const formatdata = new FormData();
              formatdata.append('category_id', categoryId); 
              const responseLiveBlog = await axios.post(`${config.API_HOST}getCategorywiseLiveBlogData`, formatdata);
              setLiveBlogData(responseLiveBlog.data); // Set the data correctly
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, [categoryId]);

  if (!liveBlogData || !liveBlogData.liveblog_data || liveBlogData.liveblog_data.length === 0) {
    return null; // Return nothing if there's no live blog data
  }

  return (
    <section className="liveBlog">
      <div className="container">
        <div className="row">
          <div className={homecss.liveBlogbg}>
            <p className={homecss.liveblog}>
              <span className={homecss.catagoryIcon2}></span>Live Blogs
            </p>
            <h2 className="d-md-inline mr-md-3 main-heading">
              <span className="main-headline-sidebar category-side-bar"></span>
              <span className="px-md-3 px-2 text-dark">
                {liveBlogData.liveblog_data[0].title}
              </span>
            </h2>

            <Swiper
              slidesPerView={6}
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
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination, Navigation]}
              className="homeopinionsSwiper pb-4"
            >
              {liveBlogData.liveblog_data[0].comment_data &&
                liveBlogData.liveblog_data[0].comment_data.length > 0 &&
                liveBlogData.liveblog_data[0].comment_data.map((item, index) => (
                  <SwiperSlide className="liveBlogpart pt-4" key={index}>
                    <Link
                      href={sanitizedUrl(
                        liveBlogData.liveblog_data[0].category_name,
                        liveBlogData.liveblog_data[0].sub_category_name,
                        liveBlogData.liveblog_data[0].url,
                        "live-blog",
                        liveBlogData.liveblog_data[0].id
                      )}
                    >
                      <div className="Opinionspart px-2">
                        <div className="row">
                          <div className="position-relative pe-1">
                            <div className="liveborder d-flex align-items-baseline">
                              <span className={homecss.catagoryIconslide}></span>
                              <p className={homecss.borderrightSide}></p>
                            </div>
                            <p
                              className={`${homecss.blogPera} pb-3 ps-0 ms-1 ${homecss.liveblogclamp}`}
                            >
                              {item.title ? (
                                item.title
                              ) : (
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: item.comment_story,
                                  }}
                                />
                              )}
                            </p>
                            <span className={homecss.dating}>
                              {item.minutes_ago}
                            </span>
                          </div>
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
  );
}

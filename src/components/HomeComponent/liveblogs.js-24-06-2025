import { Swiper, SwiperSlide } from "swiper/react";
import homecss from "../../../styles/Home.module.css";
import Image from "next/image";
import cta from "../../../public/assets/images/cta-mobile.png";
import Link from "next/link";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { sanitizedUrl } from "../../../utils/commonFunction";
function Liveblogs({ data }) {
  return (
    <div className="container mb-3 px-md-0">
      <section className="liveBlog">
        <div className="container">
          <div className="row">
            <div className={homecss.liveBlogbg}>
              <div className="d-flex justify-content-between align-items-center pb-0 pt-4 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-1 px-0">
                  <h2 className="d-md-inline main-heading">
                    <span
                      className={`${homecss.catagoryIconslide} ${homecss.liveblopos}`}
                    ></span>
                    <span className="mt-2 px-2">Live Blogs</span>
                  </h2>
                </div>
                <div className="">
                  <Link
                    href={sanitizedUrl(
                      data.liveblog_data[0].category_name,
                      data.liveblog_data[0].sub_category_name,
                      data.liveblog_data[0].url,
                      "live-blog", // This is the extraPath
                      data.liveblog_data[0].id
                    )}
                  >
                    <Image src={cta} className="cta-position" />
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="d-md-inline mr-md-3 main-heading ps-1">
                  <span className="main-headline-sidebar category-side-bar"></span>
                  <span
                    className={`${homecss.liveblogmainheadingmobile} px-md-3 px-2`}
                  >
                    {data.liveblog_data[0].title}
                  </span>
                </h2>
              </div>
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
                className="liveblogSwiper pb-5"
              >
                {data.liveblog_data &&
                  data.liveblog_data.length > 0 &&
                  data.liveblog_data[0].comment_data &&
                  data.liveblog_data[0].comment_data.length > 0 &&
                  data.liveblog_data[0].comment_data.map((item, index) => (
                    <SwiperSlide className="liveBlogpart pt-4" key={index}>
                      <Link
                        href={sanitizedUrl(
                          data.liveblog_data[0].category_name,
                          data.liveblog_data[0].sub_category_name,
                          data.liveblog_data[0].url,
                          "live-blog", // This is the extraPath
                          data.liveblog_data[0].id
                        )}
                      >
                        <div className="Opinionspart px-2">
                          <div className="row">
                            <div className="position-relative pe-1">
                              <div className="liveborder d-flex align-items-baseline">
                                <p className={homecss.borderrightSide}></p>
                              </div>
                              <div className={`${homecss.liveblogheight} position-relative`}>
                                <span className={homecss.catagoryIconslide}></span>
                                <div className={homecss.liveblogtextpos}>
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
                                    <span className={`${homecss.dating} ps-1`}>
                                    {item.minutes_ago}
                                    </span>
                                </div>
                              </div>
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
    </div>
  );
}

export default Liveblogs;

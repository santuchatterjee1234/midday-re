import React, { useState, useEffect } from "react";
import homecss from "../../../styles/category.module.css";
import Image from "next/image";
import batch from "../../../public/assets/images/batch.png";
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
import Tagwisevideo from "./rhsComponant/tagwisevideo";
export default function videosection({
  categoryData,
  categoryName,
  videoTagName,
}) {
  return (
    <section className="subcategory pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-9 lhselement border-right my-3">
            <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
              <div className="left-inner-colm pb-0 mb-2 px-md-2">
                <h2 className="d-md-inline mr-md-3 main-heading">
                  <span className="main-headline-sidebar category-side-bar"></span>
                  <span className="px-md-3 px-2">{categoryName} Videos</span>
                </h2>
              </div>
              <div>
                <Link href="">
                  <Image
                    src={cta}
                    className="cta-position d-none d-md-block"
                    alt="Call to action"
                  />
                  <Image
                    src={ctaMobile}
                    className="cta-position d-block d-md-none"
                    alt="Call to action mobile"
                  />
                </Link>
              </div>
            </div>
            {categoryData.videos_data &&
              categoryData.videos_data.length > 0 && (
                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <div className="row">
                      {/* First Section Start */}
                      <div className="col-md-6 px-md-4">
                        {/* 1st part start */}
                        {categoryData.videos_data &&
                          categoryData.videos_data.length > 0 &&
                          categoryData.videos_data
                            .slice(0, 1)
                            .map((item, index) => (
                              <div className="position-relative">
                                <Link href={item.URL}>
                                  <img
                                    src={item.Images.Image1}
                                    alt={item.image_caption}
                                    title={item.Homeheadline}
                                    className="border-radius-img"
                                  />
                                  {/* <div className="taglineDiv d-flex justify-content-between">
                                    <p className={homecss.tagline}>
                                      {item.show_date_format}
                                    </p>
                                    <Image
                                      src={share}
                                      className={homecss.share}
                                      alt="Share icon"
                                    />
                                  </div> */}
                                  {/* <Image
                                src={batch}
                                className="batchimg-big"
                                alt="Batch image"
                            /> */}
                                  {item.username === "Videos" && (
                                    <Image
                                      src={pauseicon}
                                      className="pauseicon-big"
                                      alt="Pause icon"
                                    />
                                  )}
                                  <h1
                                    className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                                  >
                                    {item.Homeheadline}
                                  </h1>
                                  <p>
                                    {/* <span className={homecss.updatate}>
                                20 August,2024 10:00 AM IST
                                <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                    | Dharmendra Jore
                                </Link> 
                                </span> */}
                                  </p>
                                </Link>
                              </div>
                            ))}
                        {/* 1st part End */}
                        {/* 2nd part Start */}
                        {categoryData.videos_data &&
                          categoryData.videos_data.length > 0 &&
                          categoryData.videos_data
                            .slice(1, 2)
                            .map((item, index) => (
                              <div className="row pt-2 position-relative">
                                <div className="col-9 mb-3 mb-md-0">
                                  <Link href={item.URL}>
                                    <h2
                                      className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                                    >
                                      {item.Homeheadline}
                                    </h2>
                                  </Link>
                                </div>

                                <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                                  <Link href={item.URL}>
                                    <img
                                      src={
                                        item.Images.Image2 ===
                                        "https://images.mid-day.com/images/"
                                          ? item.Images.Image1
                                          : item.Images.Image2
                                      }
                                      alt={item.image_caption}
                                      title={item.Homeheadline}
                                      className="border-radius-img"
                                    />
                                    {item.username === "Videos" && (
                                      <Image
                                        src={pauseicon}
                                        className="pauseicon-small"
                                        alt="Pause icon"
                                      />
                                    )}
                                  </Link>
                                </div>
                              </div>
                            ))}
                        {/* 2nd part End */}
                      </div>
                      {/* First Section End */}
                      {/* Second Section Start */}
                      <div className="col-md-6 position-relative">
                        <div className="row-pos">
                          {categoryData.videos_data &&
                            categoryData.videos_data.length > 0 &&
                            categoryData.videos_data
                              .slice(2, 8)
                              .map((item, index) => (
                                <div className="row row-height-position-new">
                                  <div className="col-9 mb-3 mb-md-2">
                                    <Link href={item.URL}>
                                      <h2
                                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                                      >
                                        {item.Homeheadline}
                                      </h2>
                                      {/* <p>
                                    <span className={homecss.updatate}>
                                    20 August,2024 10:00 AM IST
                                    <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                        | Dharmendra Jore
                                    </Link>
                                    </span>
                                </p> */}
                                    </Link>
                                  </div>
                                  <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                                    <Link href={item.URL}>
                                      <img
                                        src={
                                          item.Images.Image2 ===
                                          "https://images.mid-day.com/images/"
                                            ? item.Images.Image1
                                            : item.Images.Image2
                                        }
                                        alt={item.image_caption}
                                        title={item.Homeheadline}
                                        className="border-radius-img"
                                      />
                                      <Image
                                        src={pauseicon}
                                        className="pauseicon-small"
                                        alt="Pause icon"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              ))}
                        </div>
                      </div>
                      {/* Second Section End */}
                    </div>
                  </div>
                </div>
              )}
          </div>
          <div className="col-md-3 rhselement pt-2">
            {/* LHS Tag Wise Start */}
            {categoryData.category_data &&
              categoryData.category_data.length > 0 && (
                <Tagwisevideo
                  categoryId={categoryData.category_data[0].catID}
                  videoTagName={videoTagName}
                />
              )}
            {/* LHS Tag Wise End */}
          </div>
        </div>
      </div>
    </section>
  );
}

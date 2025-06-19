import React, { useState } from "react";
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
import batch from "../../../public/assets/images/batch.png";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import camera from "../../../public/assets/images/camera.png";
import trending from "../../../public/assets/images/trending.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import { useEffect } from "react";
import share from "../../../public/assets/images/share.png";
export default function latestlifestylesection({ categoryData }) {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <div className="tab-content">
      <div
        className={`tab-pane fade ${activeTab === "All" ? "show active" : ""}`}
      >
        <div className="row mb-3">
          {/* First Section Start */}
          <div className="col-md-5 px-md-4">
            {/* 1st part start */}
            {categoryData.category_data &&
              categoryData.category_data.length > 0 &&
              categoryData.category_data.slice(0, 1).map((item, index) => (
                <>
                  <p className={homecss.fashionhead}> {item.SubCategoryName}</p>
                  <div className="position-relative">
                    <Link href={item.URL}>
                      <img
                        src={item.Images.Image1}
                        alt={item.image_caption}
                        title={item.Homeheadline}
                        className="border-radius-img"
                      />
                      {/* <Image src={batch} className="batchimg-big" />
                                <Image src={pauseicon} className="pauseicon-big" />
                                <Image src={camera} className="camera-position-big" /> */}
                      {item.story_label !== "" && (
                        <span className={homecss.storylabel}>
                          {item.story_label}
                        </span>
                      )}
                      <h1
                        className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                      >
                        {item.ispaid === "Y" && (
                          <img
                            src="https://www.mid-day.com/assets/images/md-premium.png"
                            className="md-premium-small"
                          />
                        )}
                        <span>{item.Homeheadline}</span>
                      </h1>
                    </Link>
                  </div>
                </>
              ))}
            {/* 1st part End */}
            {categoryData.keywords["All"] &&
              categoryData.keywords["All"].length > 0 && (
                <div className="trending-container px-0">
                  <div className="row trending-row-pos py-2 mb-0">
                    <div className="col-3 border-right-position pe-1 ps-0">
                      <button className="btn-red">
                        <Image
                          src={trending}
                          className="trending-pos"
                          alt="Trending"
                        />
                        <span className="trending-txt">Trending</span>
                      </button>
                    </div>
                    <div className="trending-keywords-scroller px-0">
                      {categoryData.keywords["All"].map((item, index) => (
                        <div key={index} className="col-inline pe-0 ps-1">
                          <Link href={item.trending_keyword_master_url}>
                            <button className="btn-white">
                              #{item.trending_keyword_master_keyword}
                            </button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>
          {/* First Section End */}

          <div className="col-md-7">
            <div className="row">
              {categoryData.category_data &&
                categoryData.category_data.length > 0 &&
                categoryData.category_data.slice(1, 4).map((item, index) => (
                  <div className={index === 2 ? "col-md-4 col-12" : "col-md-4 col-6"} key={index}>
                    <p className={homecss.fashionheadsemi}>
                      {item.SubCategoryName}
                    </p>
                    <div className="position-relative">
                      <Link href={item.URL}>
                        <img
                            src={index === 2 ? item.Images.Image1 : item.Images.Image2}
                          alt={item.image_caption}
                          title={item.Homeheadline}
                          className="border-radius-img"
                        />
                        {/* <Image src={batch} className="batchimg-big" /> */}
                        <h1
                          className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                        >
                          <span className={homecss.lifestyle}>
                            {item.Homeheadline}
                          </span>
                        </h1>
                      </Link>
                      {item.story_label !== "" && (
                        <span className="img-story-label-position-category-new">
                          {item.story_label}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
            </div>

            <div className="row">
              {categoryData.category_data &&
                categoryData.category_data.length > 0 &&
                categoryData.category_data.slice(4, 7).map((item, index) => (
                  <div className={index === 2 ? "col-md-4 col-12" : "col-md-4 col-6"} key={index}>
                    <p className={homecss.fashionheadsemi}>
                      {item.SubCategoryName}
                    </p>
                    <div className="position-relative">
                      <Link href="">
                        <img
                          src={index === 2 ? item.Images.Image1 : item.Images.Image2}
                          alt={item.image_caption}
                          title={item.Homeheadline}
                          className="border-radius-img"
                        />
                        {/* <Image src={batch} className="batchimg-big" /> */}
                        <h1
                          className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                        >
                          <span className={homecss.lifestyle}>
                            {item.Homeheadline}
                          </span>
                        </h1>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Second Section End */}
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="row px-md-2">
              {categoryData.category_data &&
                categoryData.category_data.length > 0 &&
                categoryData.category_data.slice(7, 11).map((item, index) => (
                  <div className="col-md-3 col-6">
                    <p className={homecss.fashionheadsemi}>
                      {item.SubCategoryName}
                    </p>
                    <div className="position-relative">
                      <Link href="">
                        <img
                          src={item.Images.Image2}
                          alt={item.image_caption}
                          title={item.Homeheadline}
                          className="border-radius-img"
                        />
                        {/* <Image src={batch} className="batchimg-big" /> */}
                        <h1
                          className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                        >
                          <span className={homecss.lifestyle}>
                            {item.Homeheadline}
                          </span>
                        </h1>
                      </Link>
                    </div>
                    {item.story_label !== "" && (
                      <span className="img-story-label-position-category-small">
                        {item.story_label}
                      </span>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

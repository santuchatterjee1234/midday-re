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
import MiddayImpact from "./rhsComponant/middayImpact";
import Adds300x250 from "./rhsComponant/adds300x250";
import Quiz from "../commonComponent/quiz";
import Poll from "../commonComponent/poll";
export default function subcategorydesign_two({
  categoryData,
  categoryName,
  subCategoryKey,
}) {
  return (
    <div className="col-md-4 ">
      <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
        <div className="left-inner-colm pb-0 mb-2 mx-0">
          <h2 className="d-md-inline ms-md-0 main-heading ">
            <span className="main-headline-sidebar category-side-bar ms-0"></span>
            <span className="px-2">{subCategoryKey.replace(/_/g, " ")}</span>
          </h2>
        </div>
        <div>
          <Link
            href={`${categoryName.toLowerCase()}/${subCategoryKey
              .replace(/_/g, "-")
              .toLowerCase()}`}
          >
            <Image src={cta} className="cta-position" />
          </Link>
        </div>
      </div>
      {categoryData.subcategory_data[subCategoryKey]
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
              {/* <Image src={batch} className="batchimg-big" /> */}
              {/* {item.ispaid === "Y" && (
                <Image src={pauseicon} className="pauseicon-big" />
                )} */}
              <h1
                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
              >
                {item.Homeheadline}
              </h1>
            </Link>
            {/* <p className="date-time-loc-pos d-none d-md-block">
                    <span>{item.show_date_format}</span>
                </p> */}
          </div>
        ))}
      {/* Trending Start */}
      {categoryData.keywords[subCategoryKey] &&
        categoryData.keywords[subCategoryKey].length > 0 && (
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
                {categoryData.keywords[subCategoryKey].map((item, index) => (
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
      {/* Trending End */}
      {categoryData.subcategory_data[subCategoryKey]
        .slice(1, 3)
        .map((item, index) => (
          <div
            className="row pt-3 position-relative mx-1 my-3"
            style={{ background: "#F7E2F7" }}
          >
            <div className="col-9 mb-3 mb-md-0">
              <Link href="">
                <h2
                  className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp4} pt-2`}
                >
                  {item.Homeheadline}
                </h2>
              </Link>
            </div>
            <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
              <Link href="">
                <img
                  src={item.Images.Image2}
                  alt={item.image_caption}
                  title={item.Homeheadline}
                  className="border-radius-img"
                />
                {/* <Image src={batch} className="batchimg-small-position" />
                <Image src={pauseicon} className="pauseicon-small" /> */}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

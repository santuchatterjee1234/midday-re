import React, { useState } from "react";
import homecss from "../../../styles/Home.module.css";
import Image from "next/image";
import cta from "../../../public/assets/images/cta-mobile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function Sundaymidday({data}) {

  return (
    <div className="container mb-3 pb-md-5 px-md-0 sundaymiddaybackground">
      <div className="pt-5 px-md-3">
        <div className="col-md-12 px-0">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header border-bottom">
            <div className="left-inner-colm pb-0 mb-2">
              <h2 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar category-side-bar mx-0"></span>
                <span className="px-2">Sunday Mid-day</span>
              </h2>
            </div>
            <div className="pe-md-0">
              <Link href="/sunday-mid-day">
                <Image src={cta} className="cta-position" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* 1st Section Start */}
      {data.sunday_midday_data && data.sunday_midday_data.length > 0 && (
        <div className="row px-md-5">
          {data.sunday_midday_data && data.sunday_midday_data.length > 0 && data.sunday_midday_data.slice(0,1).map((item, index) => (
          <div className="col-md-9 px-md-4 pt-3">
            <Link href={item.URL}>
              <div className="row px-0">
                <div className="col-md-5 px-0">
                  <div
                    className="card p-3 card-height"
                    style={{ border: "none", borderRadius: "0px" }}
                  >
                    <h2
                      className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2 pb-1`}
                    >
                    {item.Homeheadline}
                    </h2>
                    <p className={`${homecss.lineclamp10} mb-0`}>
                      {item.Description}
                    </p>
                    {/* <p className="date-time-loc-pos d-none d-md-block">
                      <span>{item.show_date_format}  {item.location ? ` | ${item.location}` : ''} </span> 
                      <span className="date-time-loc-color"> | Jane Borges</span>
                    </p> */}
                  </div>
                </div>
                <div className="col-md-7 px-md-0 px-3">
                  <img
                    src={item.Images.Image1}
                    alt={item.image_caption}
                    title={item.Homeheadline}
                    className="sundaymiddayimg border-radius-img"
                  />
                </div>
              </div>
            </Link>
          </div>
          ))}
          {data.sunday_midday_data && data.sunday_midday_data.length > 0 && data.sunday_midday_data.slice(1,2).map((item, index) => (
            <div className="col-md-3 mt-3 pe-md-0">
              <Link href={item.URL}>
                <div className="card p-md-2 p-3 card-height-repeat">
                  <img
                    className="border-radius-img"
                    alt={item.image_caption}
                    title={item.Homeheadline}
                    src={item.Images.Image1}
                  />
                  <h2
                    className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2 mb-0`}
                  >
                    {item.Homeheadline}
                  </h2>
                  <p className="date-time-loc-pos pt-2 my-0">
                    {/* <span>{item.show_date_format}  {item.location ? ` | ${item.location}` : ''}</span> */}
                    {/* <span className="date-time-loc-color"> | Jane Borges</span> */}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      {/* 1st Section End */}
      {/* 2nd Section Start */}
      <div className="row px-md-5 mt-4">
        <div className="col-md-6">
          {data.sunday_midday_data && data.sunday_midday_data.length > 0 && data.sunday_midday_data.slice(2,4).map((item, index) => (
            <Link href={item.URL}>
              <div className="row mb-3 pe-3 pe-md-0">
                <div className="col-md-7 col-8 pe-0">
                  <div className="card sundaymiddaycard-repeat p-md-3 p-2">
                    <h2
                      className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp3} pt-2 mobiletitle`}
                    >
                      {item.Homeheadline}
                    </h2>
                    <p className="date-time-loc-pos d-none d-md-block">
                      {/* <span>{item.show_date_format}  {item.location ? ` | ${item.location}` : ''}</span> */}
                      {/* <span className="date-time-loc-color"> | Jane Borges</span> */}
                    </p>
                  </div>
                </div>
                <div className="col-md-5 col-4 px-0">
                  <img
                    src={item.Images.Image2}
                    alt={item.image_caption}
                    title={item.Homeheadline}
                    className="sundaymiddayimg-repeat border-radius-img"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="col-md-6">
          {data.sunday_midday_data && data.sunday_midday_data.length > 0 && data.sunday_midday_data.slice(4,6).map((item, index) => (
            <Link href={item.URL}>
              <div className="row mb-3 pe-3 pe-md-0">
                <div className="col-md-7 col-8 pe-0">
                  <div className="card sundaymiddaycard-repeat p-md-3 p-2">
                    <h2
                      className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp3} pt-2 mobiletitle`}
                    >
                      {item.Homeheadline}
                    </h2>
                    <p className="date-time-loc-pos d-none d-md-block">
                      {/* <span>{item.show_date_format}  {item.location ? ` | ${item.location}` : ''}</span> */}
                      {/* <span className="date-time-loc-color"> | Jane Borges</span> */}
                    </p>
                  </div>
                </div>
                <div className="col-md-5 col-4 px-0">
                  <img
                    src={item.Images.Image2}
                    alt={item.image_caption}
                    title={item.Homeheadline}
                    className="sundaymiddayimg-repeat border-radius-img"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* 2nd Section End */}
    </div>
  );
}

export default Sundaymidday;

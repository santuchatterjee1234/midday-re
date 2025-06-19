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
export default function subcategorydesign_thre({ categoryData, categoryName, subCategoryKey }) {
    return ( 
       <section className="CultureNews py-3" id={subCategoryKey}>
            <div className="container">
            <div className="row">
                <div className="col-md-9 lhselement border-right my-3">
                    <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                        <div className="left-inner-colm pb-0 mb-2 px-md-2">
                        <h1 className="d-md-inline mr-md-3 main-heading">
                            <span className="main-headline-sidebar category-side-bar"></span>
                            <span className="px-md-3 px-2">{subCategoryKey.replace(/_/g, " ")}</span>
                        </h1>
                        </div>
                        <div>
                        <Link href={`${categoryName.toLowerCase()}/${subCategoryKey
                            .replace(/_/g, "-")
                            .toLowerCase()}`}>
                            <Image
                            src={cta}
                            className="cta-position d-none d-md-block"
                            />
                            <Image
                            src={ctaMobile}
                            className="cta-position d-block d-md-none"
                            />
                        </Link>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active">
                        <div className="row mb-3">
                            <div className="col-md-5 px-md-4">
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
                                        {/* <Image src={pauseicon} className="pauseicon-big" /> */}
                                        <Image
                                            src={camera}
                                            className={homecss.camerapositionbig}
                                        />
                                        {item.story_label !== "" && (
                                            <span className={homecss.imgstorylabelposition}>
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
                            ))}
                            <div className="trending-container px-0 pt-1">
                                <div className="row trending-row-pos-new">
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
                                {/* <div className="trending-keywords-scroller"> */}
                                <Link href="#" className={homecss.links}>
                                    <button className={homecss.btnwhite}>
                                    Nature & Wildlife News Nature & Wildlife News
                                    </button>
                                </Link>
                                {/* </div> */}
                                {/* <div className="trending-keywords-scroller"> */}
                                <Link href="#" className={homecss.links}>
                                    <button className={homecss.btnwhite}>
                                    Nature & Wildlife News Nature & Wildlife News
                                    </button>
                                </Link>
                                {/* </div> */}
                                </div>
                            </div>
                            </div>
                            <div className="col-md-7">
                                <div className="row">
                                {categoryData.subcategory_data[subCategoryKey]
                                .slice(1,7)
                                .map((item, index) => (
                                    <div className="col-md-4">
                                        <div className="position-relative">
                                            <Link href={item.URL}>
                                            <img
                                                src={item.Images.Image1}
                                                alt={item.image_caption}
                                                title={item.Homeheadline}
                                                className="border-radius-img"
                                            />
                                            {/* <Image src={batch} className="batchimg-big" /> */}
                                            {/* <Image
                                                src={pauseicon}
                                                className="pauseicon-big"
                                            /> */}
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
                        </div>
                        </div>
                    </div>
                </div>
                {/* LEFT SIDE ELEMENT */}
                <div className="col-md-3 rhselement pt-2">
                    {["Food"].includes(subCategoryKey) && (
                         <Quiz categoryId={categoryData.category_data[0].catID} />
                    )}
                    {["Health_&_Fitness"].includes(subCategoryKey) && (
                        <Poll categoryId={categoryData.category_data[0].catID} />
                    )}
                    {["Relationships","Culture","Travel","Fashion","Infotainment","Nature_&_Wildlife"].includes(subCategoryKey) && (
                         <Adds300x250 />
                    )}
                </div>
            </div>
            </div>
      </section>
    );
}
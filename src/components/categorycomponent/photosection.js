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
export default function photosection({ categoryData, categoryName, isMobile }) {
    return ( 
        <section className={homecss.MumbaiPhotos}>
            <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center pt-2 pb-md-2 tab-header">
                <div className="left-inner-colm pb-0 mb-2">
                <h2 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar"></span>
                    <span className="px-2">{categoryName} Photos</span>
                </h2>
                </div>
                <div className="">
                <Link href="">
                    <Image src={cta} className="cta-position d-none d-md-block" />
                    <Image
                    src={ctaMobile}
                    className="cta-position d-block d-md-none"
                    />
                </Link>
                </div>
            </div>
            <div className="">
                <Swiper
                effect={isMobile ? undefined : "coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={isMobile ? 1 : "auto"}
                spaceBetween={isMobile ? 10 : 50}
                initialSlide={3}
                loop={true}
                coverflowEffect={
                    isMobile
                    ? undefined
                    : {
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                        }
                }
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="homephotoSwiper pb-4"
                >
                {categoryData.photos_data &&
                    categoryData.photos_data.length > 0 &&
                    categoryData.photos_data.map((item, index) => (
                    <SwiperSlide>
                        <Link href={item.URL}>
                        <img
                            src={item.Images.Image1}
                            alt={item.image_caption}
                            title={item.Homeheadline}
                            className="photoimg"
                        />
                        <div className="banner-color pos">
                            <div className="photo-text-pos">
                            <p className="photo-date-time mb-1">
                                <span>{item.show_date_format}</span>
                            </p>
                            <p className="photo-title mb-1">
                                {item.Homeheadline}
                            </p>
                            <Image src={camera} className="camera-position" />
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            </div>
        </section>
    );
}
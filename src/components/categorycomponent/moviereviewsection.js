import React from "react";
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
import { useState } from "react";
import batch from "../../../public/assets/images/batch.png";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import camera from "../../../public/assets/images/camera.png";
import trending from "../../../public/assets/images/trending.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import { useEffect } from "react";
import share from "../../../public/assets/images/share.png";
import axios from 'axios';
import { config } from '../../../next.config.js';
export default function moviereviewsection({ categoryData, categoryName, isMobile }) {
    const [upcomingFilmData, setUpcomingFilmData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let formatdata = new FormData();
                formatdata.append('cur', 0);
                formatdata.append('max', 5);
                const response = await axios.post(`${config.API_HOST}getHomePageDataUpcomingFilms`, formatdata);
                setUpcomingFilmData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return ( 
        <>
        {upcomingFilmData && upcomingFilmData.upcoming_films_data && upcomingFilmData.upcoming_films_data.length > 0 && (
        <section className="thirdlayout">
            <div className="container  px-md-0 ps-md-3">
            {/* Advertisement Start */}
            <div className="row d-md-none d-block">
                <div className="col-md-12">
                <p className="advertisement-text text-center mt-1 mb-0">
                    ADVERTISEMENT
                </p>
                <div className="add-300x250 mx-auto text-center mb-3"></div>
                </div>
            </div>
            {/* Advertisement End */}
            <div className="row">
                <div className="mt-4 ps-md-1">
                <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header mb-0">
                    <div className="left-inner-colm pb-0">
                    <h2 className="d-md-inline mr-md-3 main-heading mb-0">
                        <span className="main-headline-sidebar category-side-bar"></span>
                        <span className="px-md-3 px-2">Movie Reviews</span>
                    </h2>
                    </div>
                    <div className="">
                    <Link href="">
                        <Image src={cta} className="cta-position" />
                    </Link>
                    </div>
                </div>
                {/* Swiper Slider Start */}
                <Swiper
                    slidesPerView={5} // Default for larger screens
                    spaceBetween={20}
                    pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    }}
                    breakpoints={{
                    // When the viewport width is <= 768px (mobile devices)
                    0: {
                        slidesPerView: 2, // Show 3 slides per view on mobile
                        spaceBetween: 10, // Optional: Adjust space between slides for mobile
                    },
                    // When the viewport width is > 768px (tablets and desktops)
                    769: {
                        slidesPerView: 5, // Show 5 slides per view on desktop
                        spaceBetween: 20, // Adjust space between slides for desktop
                    },
                    }}
                    modules={[Pagination]}
                    className="homewebstoriesSwiper pb-4 ms-md-2 mb-md-0 mb-3 mt-3"
                >
                    {upcomingFilmData.upcoming_films_data.map((item, index) => (
                    <SwiperSlide className="pb-4">
                    <div className="poster position-relative">
                        <div className="poster-image">
                        <img
                            src={item.Image}
                            alt={item.Homeheadline}
                        />
                        <div className="poster-title">{item.Homeheadline}</div>
                        {/* <div className="rating-container">
                            <div className="rating">
                            <input
                                type="radio"
                                id="star1"
                                name="rating"
                                value="1"
                                // onChange={handleRatingChange}
                                // checked={rating === "1"}
                                checked
                            />
                            <label
                                className="star"
                                htmlFor="star5"
                                title="Awesome"
                                aria-hidden="true"
                            >
                                <FontAwesomeIcon
                                icon={faStar}
                                className="checked"
                                />
                            </label>

                            <input
                                type="radio"
                                id="star2"
                                name="rating"
                                value="2"
                                // onChange={handleRatingChange}
                                // checked={rating === "2"}
                                checked
                            />
                            <label
                                className="star"
                                htmlFor="star4"
                                title="Great"
                                aria-hidden="true"
                            >
                                <FontAwesomeIcon
                                icon={faStar}
                                className="checked"
                                />
                            </label>

                            <input
                                type="radio"
                                id="star3"
                                name="rating"
                                value="3"
                                // onChange={handleRatingChange}
                                // checked={rating === "3"}
                            />
                            <label
                                className="star"
                                htmlFor="star3"
                                title="Very good"
                                aria-hidden="true"
                            >
                                <FontAwesomeIcon
                                icon={faStar}
                                className="checked"
                                />
                            </label>

                            <input
                                type="radio"
                                id="star4"
                                name="rating"
                                value="4"
                                // onChange={handleRatingChange}
                                // checked={rating === "4"}
                            />
                            <label
                                className="star"
                                htmlFor="star2"
                                title="Good"
                                aria-hidden="true"
                            >
                                <FontAwesomeIcon
                                icon={faStar}
                                className="checked"
                                />
                            </label>

                            <input
                                type="radio"
                                id="star5"
                                name="rating"
                                value="5"
                                // onChange={handleRatingChange}
                                // checked={rating === "5"}
                            />
                            <label
                                className="star"
                                htmlFor="star1"
                                title="Bad"
                                aria-hidden="true"
                            >
                                <FontAwesomeIcon
                                icon={faStar}
                                className="checked"
                                />
                            </label>
                            </div>

                            <span className="rating-pos">
                            <span className="rating-value">5</span>
                            <span style={{ color: "#AAAAAA" }}>
                                <span style={{ fontSize: "20px" }}>/</span>5
                            </span>
                            </span>
                        </div> */}
                        </div>
                    </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                {/* Swiper Slider End */}
                </div>
            </div>
            </div>
        </section>
        )}
        </>
    );
}
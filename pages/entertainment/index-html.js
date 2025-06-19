import React from "react";
import homecss from "../../styles/category.module.css";
import cta from "../../public/assets/images/cta.png";
import ctaMobile from "../../public/assets/images/cta-mobile.png";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import batch from "../../public/assets/images/batch.png";
import pauseicon from "../../public/assets/images/pauseicon.png";
import camera from "../../public/assets/images/camera.png";
import trending from "../../public/assets/images/trending.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import { useEffect } from "react";
import share from "../../public/assets/images/share.png";

const Entertainment = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [isMobile, setIsMobile] = useState(false);

  //   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check screen size on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mainEnt">
      {/* FIRST LAYOUT START */}
      <section className="firstLayou">
        <div className={homecss.spotligtbg}>
          <div className="container">
            <div className="left-inner-colm pb-0 mb-2 px-md-2 pt-3 d-flex aling-items-center justify-content-between">
              <h1 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar category-side-bar"></span>
                <span className="px-md-3 px-2">Spotlight</span>
              </h1>
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
            <div className="spoliteswiper pb-md-3 pb-0">
              <Swiper
                slidesPerView={3}
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
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },

                  0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="entSwiper pb-0 pb-md-4"
              >
                <SwiperSlide className="liveBlogpart pt-md-4 pt-0">
                  <Link href="">
                    <div className="entswiper px-2">
                      <div className="row">
                        <img src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg" />
                        <p className={homecss.entheadpera}>Television News</p>
                        <p className={homecss.entmainpera}>
                          ‘Mid-Day 45th Anniversary Special: See the film
                          even...
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="liveBlogpart pt-md-4 pt-0">
                  <Link href="">
                    <div className="entswiper px-2">
                      <div className="row">
                        <img src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg" />
                        <p className={homecss.entheadpera}>Television News</p>
                        <p className={homecss.entmainpera}>
                          ‘Mid-Day 45th Anniversary Special: See the film
                          even...
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="liveBlogpart pt-4">
                  <Link href="">
                    <div className="entswiper px-2">
                      <div className="row">
                        <img src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg" />
                        <p className={homecss.entheadpera}>Television News</p>
                        <p className={homecss.entmainpera}>
                          ‘Mid-Day 45th Anniversary Special: See the film
                          even...
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="liveBlogpart pt-4">
                  <Link href="">
                    <div className="entswiper px-2">
                      <div className="row">
                        <img src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg" />
                        <p className={homecss.entheadpera}>Television News</p>
                        <p className={homecss.entmainpera}>
                          ‘Mid-Day 45th Anniversary Special: See the film
                          even...
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* FIRST LAYOUT END */}
      {/* SECOND LAYOUT START */}
      <section className="secondLayout py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement border-right my-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h2 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Entertainment News</span>
                  </h2>
                </div>
                <div className="">
                  <Link href="">
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
              <div className="row">
                <div className="col-12 px-0 px-2">
                  <ul className="nav nav-tabs category-nav-tabs mb-3 pb-1">
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => handleTabClick("All")}
                        className={`mx-1 ${
                          activeTab === "All" ? "category-active" : ""
                        }`}
                      >
                        All
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Mumbai-Crime-News");
                          document
                            .getElementById("bollywoodSection")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Mumbai-Crime-News"
                            ? "category-active"
                            : ""
                        }`}
                      >
                        Bollywood News
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Mumbai-Crime-News");
                          document
                            .getElementById("Mumbai-Crime-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Mumbai-Crime-News"
                            ? "category-active"
                            : ""
                        }`}
                      >
                        OTT News
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Korean-Entertainment-News");
                          document
                            .getElementById("Korean-Entertainment-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Korean-Entertainment-News"
                            ? "category-active"
                            : ""
                        }`}
                      >
                        Korean Entertainment News
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Mumbai-Crime-News");
                          document
                            .getElementById("Mumbai-Crime-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Mumbai-Crime-News"
                            ? "category-active"
                            : ""
                        }`}
                      >
                        Hollywood News
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Mumbai-Crime-News");
                          document
                            .getElementById("Mumbai-Crime-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Mumbai-Crime-News"
                            ? "category-active"
                            : ""
                        }`}
                      >
                        Television News
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Mumbai-Crime-News");
                          document
                            .getElementById("Mumbai-Crime-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Mumbai-Crime-News"
                            ? "category-active"
                            : ""
                        }`}
                      >
                        Regional Cinema News
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "All" ? "show active" : ""
                  }`}
                >
                  <div className="row">
                    {/* First Section Start */}
                    <div className="col-md-6 px-md-4">
                      {/* 1st part start */}
                      <div className="position-relative">
                        <Link href="">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                            alt="Devendra Fadnavis for BJP national chief?"
                            title="Devendra Fadnavis for BJP national chief?"
                            className=""
                          />
                          <Image src={batch} className="batchimg-big" />
                          <Image src={pauseicon} className="pauseicon-big" />
                          <Image src={camera} className="camera-position-big" />
                          <span className="img-story-label-position">PM Modi</span>
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            India will become third largest economy soon: PM
                            Modi
                          </h1>
                        </Link>
                      </div>
                      {/* 1st part End */}
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
                      {/* 2nd part Start */}
                      <div className="row pt-2 position-relative">
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <p className="subcategory-heading mb-0">
                              Bollywood News
                            </p>
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <p>
                          <span className={homecss.updatate}>
                            20 August,2024 10:00 AM IST
                            <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                              {" "}
                              | Dharmendra Jore
                            </Link>
                          </span>
                        </p>

                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <p className="subcategory-heading mb-0">
                              Mumbai Crime News
                            </p>
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <p>
                          <span className={homecss.updatate}>
                            20 August,2024 10:00 AM IST
                            <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                              {" "}
                              | Dharmendra Jore
                            </Link>
                          </span>
                        </p>

                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <p className="subcategory-heading mb-0">
                              Mumbai Crime News
                            </p>
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                      </div>
                      {/* 2nd part End */}

                      {/* 3rd part Start*/}
                      <div className="row mb-3">
                        <div className="col-3 border-right pe-1">
                          <button className="btn-red">
                            <Image src={trending} className="trending-pos" />{" "}
                            <span className="trending-txt">Trending</span>
                          </button>
                        </div>
                        <div className="col-4 pe-0 ps-1">
                          <button className="btn-white">#Mumbai Weather</button>
                        </div>
                        <div className="col-4 pe-0 ps-1">
                          <button className="btn-white">
                            #Mumbai railways
                          </button>
                        </div>
                        {/* 3rd part End*/}
                      </div>
                    </div>

                    {/* First Section Start */}
                    {/* Second Section Start */}

                    <div className="col-md-6 position-relative">
                      <div className="row">
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <p className="subcategory-heading mb-0">
                              Television News
                            </p>
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium-small"
                              />
                              <Image
                                src={camera}
                                className="camera-position-new"
                              />
                              <span>
                                {" "}
                                working Four-time Mumbai Marathon winner Sudha
                                Singh hails maiden bronze feat in 2015 date
                              </span>
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            {/* <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            /> */}
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <p className="subcategory-heading mb-0">
                              Mumbai Crime News
                            </p>
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium-small"
                              />
                              <span>
                                {" "}
                                working Four-time Mumbai Marathon winner Sudha
                                Singh hails maiden bronze feat in 2015 date
                              </span>
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <p className="subcategory-heading mb-0">
                              Mumbai Crime News
                            </p>
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium-small"
                              />
                              <span>
                                {" "}
                                working Four-time Mumbai Marathon winner Sudha
                                Singh hails maiden bronze feat in 2015 date
                              </span>
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <p className="subcategory-heading mb-0">
                              Mumbai Crime News
                            </p>
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium-small"
                              />
                              <span>
                                {" "}
                                working Four-time Mumbai Marathon winner Sudha
                                Singh hails maiden bronze feat in 2015 date
                              </span>
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <p className="subcategory-heading mb-0">
                              Mumbai Crime News
                            </p>
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium-small"
                              />
                              <span>
                                {" "}
                                working Four-time Mumbai Marathon winner Sudha
                                Singh hails maiden bronze feat in 2015 date
                              </span>
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <p className="subcategory-heading mb-0">
                              Mumbai Crime News
                            </p>
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium-small"
                              />
                              <span>
                                {" "}
                                working Four-time Mumbai Marathon winner Sudha
                                Singh hails maiden bronze feat in 2015 date
                              </span>
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <p className="subcategory-heading mb-0">
                              Mumbai Crime News
                            </p>
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium-small"
                              />
                              <span>
                                {" "}
                                working Four-time Mumbai Marathon winner Sudha
                                Singh hails maiden bronze feat in 2015 date
                              </span>
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Second Section Start */}
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "Mumbai-News" ? "show active" : ""
                  }`}
                >
                  <div className="row">
                    {/* First Section Start */}
                    <div className="col-md-6 px-md-4">
                      {/* 1st part start */}
                      <div className="position-relative">
                        <img
                          src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                          alt="Devendra Fadnavis for BJP national chief?"
                          title="Devendra Fadnavis for BJP national chief?"
                          className=""
                        />
                        <Image src={batch} className="batchimg-big" />
                        <Image src={pauseicon} className="pauseicon-big" />
                        <Link href="">
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            India will become third largest economy soon: PM
                            Modis
                          </h1>
                        </Link>
                      </div>
                      {/* 1st part End */}
                      {/* 2nd part Start */}
                      <div className="row pt-2 position-relative">
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                            >
                              {" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            className=""
                          />
                          <Image src={pauseicon} className="pauseicon-small" />
                        </div>
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-md-2`}
                            >
                              {" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            className=""
                          />
                          <Image src={pauseicon} className="pauseicon-small" />
                        </div>
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-md-2`}
                            >
                              {" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            className=""
                          />
                          <Image src={pauseicon} className="pauseicon-small" />
                        </div>
                      </div>
                      {/* 2nd part End */}
                      {/* 3rd part Start*/}
                      <div className="row">
                        <div className="col-3 border-right pe-1">
                          <button className="btn-red">
                            <Image src={trending} className="trending-pos" />{" "}
                            <span className="trending-txt">Trending</span>
                          </button>
                        </div>
                        <div className="col-4 pe-0 ps-1">
                          <button className="btn-white">#Mumbai Weather</button>
                        </div>
                        <div className="col-4 pe-0 ps-1">
                          <button className="btn-white">
                            #Mumbai railways
                          </button>
                        </div>
                        {/* 3rd part End*/}
                      </div>
                    </div>
                    {/* First Section Start */}
                    {/* Second Section Start */}
                    <div className="col-md-6 position-relative">
                      <div className="row">
                        <div className="col-9 mb-3 mb-md-2">
                          <p className="subcategory-heading mb-0">
                            Mumbai Crime News
                          </p>
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium-small"
                              />{" "}
                              WEDWD Four-time Mumbai Marathon winner Sudha Singh
                              hails maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            className=""
                          />
                          <Image src={pauseicon} className="pauseicon-small" />
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <p className="subcategory-heading mb-0">
                            Mumbai Crime News
                          </p>
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              {" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            className=""
                          />
                          <Image src={pauseicon} className="pauseicon-small" />
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <p className="subcategory-heading mb-0">
                            Mumbai Crime News
                          </p>
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              {" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            className=""
                          />
                          <Image src={pauseicon} className="pauseicon-small" />
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <p className="subcategory-heading mb-0">
                            Mumbai Crime News
                          </p>
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              {" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            className=""
                          />
                          <Image src={pauseicon} className="pauseicon-small" />
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <p className="subcategory-heading mb-0">
                            Mumbai Crime News
                          </p>
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              {" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            className=""
                          />
                          <Image src={pauseicon} className="pauseicon-small" />
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <p className="subcategory-heading mb-0">
                            Mumbai Crime News
                          </p>
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              {" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            className=""
                          />
                          <Image src={pauseicon} className="pauseicon-small" />
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <p className="subcategory-heading mb-0">
                            Mumbai Crime News
                          </p>
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              {" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            className=""
                          />
                          <Image src={pauseicon} className="pauseicon-small" />
                        </div>
                      </div>
                    </div>
                    {/* Second Section Start */}
                  </div>
                </div>
              </div>
            </div>
            {/* LEFT SIDE ELEMENT */}
            <div className="col-md-3 rhselement pt-2">
              {/* Advertisement Start */}
              <div className="row">
                <div className="col-md-12">
                  <p className="advertisement-text text-center mt-1 mb-0">
                    ADVERTISEMENT
                  </p>
                  <div className="add-300x250 mx-auto text-center mb-3"></div>
                </div>
              </div>
              {/* Advertisement End */}
              {/* Exclusives Start */}
              {/* <div className="row">
                <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                  <div className="left-inner-colm pb-0 mb-2">
                    <h2 className="d-md-inline mr-md-3 main-heading">
                      <span className="main-headline-sidebar"></span>
                      <span className="px-2">Exclusive</span>
                      <img
                        src="https://www.mid-day.com/assets/images/md-premium.png"
                        className="md-premium"
                      />
                    </h2>
                  </div>
                  <div className="">
                    <Link href="">
                      <Image src={cta} className="cta-position" />
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-12 exclusive-background-pos mb-3"
                  style={{ background: "#FFFBE7" }}
                >
                  <div className="row py-1">
                    <div className="col-9  mb-3">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} mb-3`}
                      >
                        <span>
                          <img
                            src="https://www.mid-day.com/assets/images/md-premium.png"
                            className="md-premium"
                          />
                        </span>
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </div>
                    <div className="col-3 ps-md-0 mb-3 position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        className=""
                      />
                    </div>
                    <div className="col-9  mb-3">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} mb-3`}
                      >
                        <span>
                          <img
                            src="https://www.mid-day.com/assets/images/md-premium.png"
                            className="md-premium"
                          />
                        </span>
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </div>
                    <div className="col-3 ps-md-0 mb-3 position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        className=""
                      />
                    </div>
                    <div className="col-9  mb-3">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} mb-3`}
                      >
                        <span>
                          <img
                            src="https://www.mid-day.com/assets/images/md-premium.png"
                            className="md-premium"
                          />
                        </span>
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </div>
                    <div className="col-3 ps-md-0 mb-3 position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        className=""
                      />
                    </div>
                    <div className="col-9">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2}`}
                      >
                        <span>
                          <img
                            src="https://www.mid-day.com/assets/images/md-premium.png"
                            className="md-premium"
                          />
                        </span>
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </div>
                    <div className="col-3 ps-md-0 position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* Exclusives End */}

              {/* SOPRTS EDITION ADDED */}
              {/* Upcomming Events Start */}
              <div className="d-flex justify-content-between align-items-center pt-2 tab-header">
                <div className="left-inner-colm pb-0 mb-2">
                  <h2 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar"></span>
                    <span className="px-2">Upcoming Events</span>
                  </h2>
                </div>
                <div className="">
                  <Link href="">
                    <Image src={cta} className="cta-position" />
                  </Link>
                </div>
              </div>
              <div className={homecss.events}>
                <Link href="">
                  <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                      <p className={homecss.eventhead}>Cricket</p>
                      <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                      <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                      </p>
                      <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                      </span>
                    </div>
                  </div>
                </Link>
                <Link href="">
                  <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                      <p className={homecss.eventhead}>Cricket</p>
                      <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                      <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                      </p>
                      <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                      </span>
                    </div>
                  </div>
                </Link>
                <Link href="">
                  <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                      <p className={homecss.eventhead}>Cricket</p>
                      <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                      <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                      </p>
                      <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                      </span>
                    </div>
                  </div>
                </Link>
                <Link href="">
                  <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                      <p className={homecss.eventhead}>Cricket</p>
                      <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                      <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                      </p>
                      <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                      </span>
                    </div>
                  </div>
                </Link>
                <Link href="">
                  <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                      <p className={homecss.eventhead}>Cricket</p>
                      <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                      <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                      </p>
                      <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                      </span>
                    </div>
                  </div>
                </Link>
                <Link href="">
                  <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                      <p className={homecss.eventhead}>Cricket</p>
                      <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                      <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                      </p>
                      <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                      </span>
                    </div>
                  </div>
                </Link>
                <Link href="">
                  <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                      <p className={homecss.eventhead}>Cricket</p>
                      <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                      <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                      </p>
                      <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              {/* Upcomming Events End */}
            </div>
          </div>
        </div>
      </section>
      {/* SECOND LAYOUT START */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}

      {/* MOVIE REVIEWS SECTION START */}
      <section className="thirdlayout">
        <div className="container mb-md-5 mb-0 px-md-0 ps-md-3">
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
                <SwiperSlide className="pb-4">
                  <div className="poster position-relative">
                    <div className="poster-image">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/janhviherodevara_ws.jpg"
                        alt="Bad Newz"
                      />
                      <div className="poster-title">Bad Newz</div>
                      <div className="rating-container">
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
                          {/* <span className='rating-value'>{rating}</span> */}
                          <span className="rating-value">5</span>
                          <span style={{ color: "#AAAAAA" }}>
                            <span style={{ fontSize: "20px" }}>/</span>5
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="pb-4">
                  <div className="poster position-relative">
                    <div className="poster-image">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/janhviherodevara_ws.jpg"
                        alt="Bad Newz"
                      />
                      <div className="poster-title">Bad Newz</div>
                      <div className="rating-container">
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
                          {/* <span className='rating-value'>{rating}</span> */}
                          <span className="rating-value">5</span>
                          <span style={{ color: "#AAAAAA" }}>
                            <span style={{ fontSize: "20px" }}>/</span>5
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="pb-4">
                  <div className="poster position-relative">
                    <div className="poster-image">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/janhviherodevara_ws.jpg"
                        alt="Bad Newz"
                      />
                      <div className="poster-title">Bad Newz</div>
                      <div className="rating-container">
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
                          {/* <span className='rating-value'>{rating}</span> */}
                          <span className="rating-value">5</span>
                          <span style={{ color: "#AAAAAA" }}>
                            <span style={{ fontSize: "20px" }}>/</span>5
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="pb-4">
                  <div className="poster position-relative">
                    <div className="poster-image">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/janhviherodevara_ws.jpg"
                        alt="Bad Newz"
                      />
                      <div className="poster-title">Bad Newz</div>
                      <div className="rating-container">
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
                          {/* <span className='rating-value'>{rating}</span> */}
                          <span className="rating-value">5</span>
                          <span style={{ color: "#AAAAAA" }}>
                            <span style={{ fontSize: "20px" }}>/</span>5
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="pb-4">
                  <div className="poster position-relative">
                    <div className="poster-image">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/janhviherodevara_ws.jpg"
                        alt="Bad Newz"
                      />
                      <div className="poster-title">Bad Newz</div>
                      <div className="rating-container">
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
                          {/* <span className='rating-value'>{rating}</span> */}
                          <span className="rating-value">5</span>
                          <span style={{ color: "#AAAAAA" }}>
                            <span style={{ fontSize: "20px" }}>/</span>5
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* Swiper Slider End */}
            </div>
          </div>
        </div>
      </section>
      {/* MOVIE REVIEWS SECTION END */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}

      {/* Web Stories START */}
      <section className="fouthLayout pt-3">
        <div className="container mb-5 px-md-0">
          <div
            className="row opinions-background-pos ms-md-2"
            style={{ borderRadius: "0px" }}
          >
            <div className="mt-4 ps-md-1">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header mb-0">
                <div className="left-inner-colm pb-0">
                  <h2 className="d-md-inline mr-md-3 main-heading mb-0">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Web Stories</span>
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
                    slidesPerView: 3, // Show 3 slides per view on mobile
                    spaceBetween: 10, // Optional: Adjust space between slides for mobile
                  },
                  // When the viewport width is > 768px (tablets and desktops)
                  769: {
                    slidesPerView: 5, // Show 5 slides per view on desktop
                    spaceBetween: 20, // Adjust space between slides for desktop
                  },
                }}
                modules={[Pagination]}
                className="homewebstoriesSwiper pb-4 ms-md-2 mb-md-0 mb-3"
              >
                <SwiperSlide>
                  <div className="my-3">
                    <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                      <div className="bg-white rounded shortbox">
                        <div className="position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                            alt="Shami likely to play in Ranji Trophy"
                            title="Shami likely to play in Ranji Trophy"
                            className="shorts-image"
                          />
                          <i className="imageovericon"></i>
                        </div>

                        <h6 className="m-2 webstories-lineclamp">
                          Shami likely to play in Ranji Trophy
                        </h6>
                        <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                          59 minutes ago
                        </p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="my-3">
                    <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                      <div className="bg-white rounded shortbox">
                        <div className="position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                            alt="Shami likely to play in Ranji Trophy"
                            title="Shami likely to play in Ranji Trophy"
                            className="shorts-image"
                          />
                          <i className="imageovericon"></i>
                        </div>

                        <h6 className="m-2 webstories-lineclamp">
                          Shami likely to play in Ranji Trophy
                        </h6>
                        <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                          59 minutes ago
                        </p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="my-3">
                    <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                      <div className="bg-white rounded shortbox">
                        <div className="position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                            alt="Shami likely to play in Ranji Trophy"
                            title="Shami likely to play in Ranji Trophy"
                            className="shorts-image"
                          />
                          <i className="imageovericon"></i>
                        </div>

                        <h6 className="m-2 webstories-lineclamp">
                          Shami likely to play in Ranji Trophy
                        </h6>
                        <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                          59 minutes ago
                        </p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="my-3">
                    <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                      <div className="bg-white rounded shortbox">
                        <div className="position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                            alt="Shami likely to play in Ranji Trophy"
                            title="Shami likely to play in Ranji Trophy"
                            className="shorts-image"
                          />
                          <i className="imageovericon"></i>
                        </div>

                        <h6 className="m-2 webstories-lineclamp">
                          Shami likely to play in Ranji Trophy
                        </h6>
                        <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                          59 minutes ago
                        </p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="my-3">
                    <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                      <div className="bg-white rounded shortbox">
                        <div className="position-relative">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                            alt="Shami likely to play in Ranji Trophy"
                            title="Shami likely to play in Ranji Trophy"
                            className="shorts-image"
                          />
                          <i className="imageovericon"></i>
                        </div>

                        <h6 className="m-2 webstories-lineclamp">
                          Shami likely to play in Ranji Trophy
                        </h6>
                        <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                          59 minutes ago
                        </p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* Swiper Slider End */}
            </div>
          </div>
        </div>
      </section>
      {/* Web Stories END */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}

      <div className="container">
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
      </div>

      {/* photos LAYOUT START */}
      <section className="fifthlayout">
        <div
          className="container mt-4 pb-md-2 tab-header opinions-background-pos py-4"
          style={{ borderRadius: "0px" }}
        >
          <div className="d-flex justify-content-between align-items-center pt-2">
            <div className="left-inner-colm pb-0 mb-2">
              <h2 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar"></span>
                <span className="px-2">Entertainment Photos</span>
              </h2>
            </div>
            <div className="">
              <Link href="">
                <Image src={cta} className="cta-position " />
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
              className="homephotoSwiper pb-5 mb-3"
            >
              <SwiperSlide>
                <img
                  src="https://images.mid-day.com/images/images/2024/aug/PTI08_16_2024_000075B_35984765_d.jpg"
                  alt="Nature 1"
                  className="photoimg"
                />
                <div className="banner-color pos">
                  <div className="photo-text-pos">
                    <p className="photo-date-time mb-1">
                      <span>11 December, 2022 10:52 PM IST</span>
                    </p>
                    <p className="photo-title mb-1">
                      Dilip Kumar's 100th Birth Anniversary Film Festival, Saira
                      Banu Gets Emotional
                    </p>
                    <Image src={camera} className="camera-position" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.mid-day.com/images/images/2024/aug/PrezPM_d.jpg"
                  alt="Nature 2"
                  className="photoimg"
                />
                <div className="banner-color">
                  <div className="photo-text-pos">
                    <p className="photo-date-time mb-1">
                      <span>11 December, 2022 10:52 PM IST</span>
                    </p>
                    <p className="photo-title mb-1">
                      Dilip Kumar's 100th Birth Anniversary Film Festival, Saira
                      Banu Gets Emotional
                    </p>
                    <Image src={camera} className="camera-position" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.mid-day.com/images/images/2024/aug/iffm-24-melbunre_d.jpg"
                  alt="Nature 3"
                  className="photoimg"
                />
                <div className="banner-color">
                  <div className="photo-text-pos">
                    <p className="photo-date-time mb-1">
                      <span>11 December, 2022 10:52 PM IST</span>
                    </p>
                    <p className="photo-title mb-1">
                      Dilip Kumar's 100th Birth Anniversary Film Festival, Saira
                      Banu Gets Emotional
                    </p>
                    <Image src={camera} className="camera-position" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.mid-day.com/images/images/2023/aug/saifalikhan10yearsgalleru_d.jpg"
                  alt="Nature 3"
                  className="photoimg"
                />
                <div className="banner-color">
                  <div className="photo-text-pos">
                    <p className="photo-date-time mb-1">
                      <span>11 December, 2022 10:52 PM IST</span>
                    </p>
                    <p className="photo-title mb-1">
                      Dilip Kumar's 100th Birth Anniversary Film Festival, Saira
                      Banu Gets Emotional
                    </p>
                    <Image src={camera} className="camera-position" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* photos LAYOUT END */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}

      {/* OPINIOS SECTION START */}
      <section className="opinions mt-4">
        <div className="container">
          <div className={homecss.photosHeade}>
            <h2 className={homecss.photoshead}>Opinions </h2>
          </div>
          <div className="optioncard">
            <div className="row px-2 mb-md-0 mb-3">
              <div className="col-md-12 px-0">
                <div className="row py-2">
                  <div>
                    <Swiper
                      slidesPerView={3}
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
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },

                        0: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                      }}
                      modules={[Pagination, Navigation]}
                      className="homeopinionsSwiper pb-4"
                    >
                      <SwiperSlide className={homecss.optionbg}>
                        <Link href="">
                          <div className="Opinionspart px-2">
                            <div className="row">
                              <div className="col-md-6 col-6">
                                <h2 className={homecss.optionhead}>
                                  What to make of Ambani wedding?
                                </h2>
                                <p className={homecss.optionpera}>
                                  checking Like you, I’ve been wondering about
                                  Bombay’s big, fat ‘begaani shaadi’;...
                                </p>
                              </div>
                              <div className="col-md-6 text-center py-1 col-6">
                                <div className={homecss.borderMain}>
                                  <img
                                    src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                    alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                    title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                    className={homecss.imgeWidth}
                                  />
                                  <p className={homecss.swiperHead}>MS Word</p>
                                  <p className={homecss.swiperPera}>
                                    By Mayank Shekhar
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>

                      <SwiperSlide className={homecss.optionbg}>
                        <Link href="">
                          <div className="Opinionspart px-2">
                            <div className="row">
                              <div className="col-md-6 col-6">
                                <h2 className={homecss.optionhead}>
                                  What to make of Ambani wedding?
                                </h2>
                                <p className={homecss.optionpera}>
                                  checking Like you, I’ve been wondering about
                                  Bombay’s big, fat ‘begaani shaadi’;...
                                </p>
                              </div>
                              <div className="col-md-6 col-6 text-center py-1">
                                <div className={homecss.borderMain}>
                                  <img
                                    src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                    alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                    title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                    className={homecss.imgeWidth}
                                  />
                                  <p className={homecss.swiperHead}>MS Word</p>
                                  <p className={homecss.swiperPera}>
                                    By Mayank Shekhar
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide className={homecss.optionbg}>
                        <Link href="">
                          <div className="Opinionspart px-2">
                            <div className="row">
                              <div className="col-md-6 col-6">
                                <h2 className={homecss.optionhead}>
                                  What to make of Ambani wedding?
                                </h2>
                                <p className={homecss.optionpera}>
                                  checking Like you, I’ve been wondering about
                                  Bombay’s big, fat ‘begaani shaadi’;...
                                </p>
                              </div>
                              <div className="col-md-6 col-6 text-center py-1 ">
                                <div className={homecss.borderMain}>
                                  <img
                                    src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                    alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                    title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                    className={homecss.imgeWidth}
                                  />
                                  <p className={homecss.swiperHead}>MS Word</p>
                                  <p className={homecss.swiperPera}>
                                    By Mayank Shekhar
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide className={homecss.optionbg}>
                        <Link href="">
                          <div className="Opinionspart px-2">
                            <div className="row">
                              <div className="col-md-6 col-6">
                                <h2 className={homecss.optionhead}>
                                  What to make of Ambani wedding?
                                </h2>
                                <p className={homecss.optionpera}>
                                  checking Like you, I’ve been wondering about
                                  Bombay’s big, fat ‘begaani shaadi’;...
                                </p>
                              </div>
                              <div className="col-md-6 col-6 text-center py-1">
                                <div className={homecss.borderMain}>
                                  <img
                                    src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                    alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                    title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                    className={homecss.imgeWidth}
                                  />
                                  <p className={homecss.swiperHead}>MS Word</p>
                                  <p className={homecss.swiperPera}>
                                    By Mayank Shekhar
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide className={homecss.optionbg}>
                        <Link href="">
                          <div className="Opinionspart px-2">
                            <div className="row">
                              <div className="col-md-6 col-6">
                                <h2 className={homecss.optionhead}>
                                  What to make of Ambani wedding?
                                </h2>
                                <p className={homecss.optionpera}>
                                  checking Like you, I’ve been wondering about
                                  Bombay’s big, fat ‘begaani shaadi’;...
                                </p>
                              </div>
                              <div className="col-md-6 col-6 text-center py-1">
                                <div className={homecss.borderMain}>
                                  <img
                                    src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                    alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                    title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                    className={homecss.imgeWidth}
                                  />
                                  <p className={homecss.swiperHead}>MS Word</p>
                                  <p className={homecss.swiperPera}>
                                    By Mayank Shekhar
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OPINIOS SECTION START */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}

      {/* ENTERTAINMANT NEWS SECTION START */}
      <section className="entnews pt-4" id="entnews">
        <div className="container md-md-0 mb-0">
          <div className="row">
            <div className="col-md-9 lhselement border-right my-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h2 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Entertainment Videos</span>
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

              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <div className="row">
                    {/* First Section Start */}
                    <div className="col-md-6 px-md-4">
                      {/* 1st part start */}
                      <div className="position-relative">
                        <Link href="">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                            alt="Devendra Fadnavis for BJP national chief?"
                            title="Devendra Fadnavis for BJP national chief?"
                            className=""
                          />
                          {/* <div className="taglineDiv d-flex justify-content-between">
                            <p className={homecss.tagline}>
                              26 June,2024 07:30 PM IST
                            </p>
                            <Image
                              src={share}
                              className={homecss.share}
                              alt="Share icon"
                            />
                          </div> */}
                          <Image
                            src={batch}
                            className="batchimg-big"
                            alt="Batch image"
                          />
                          <Image
                            src={pauseicon}
                            className="pauseicon-big"
                            alt="Pause icon"
                          />
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            Mumbai’s unique salon and cafe is changing lives -
                            Pride Month...
                          </h1>
                          <p>
                            <span className={homecss.updatate}>
                              20 August,2024 10:00 AM IST
                              <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                {" "}
                                | Dharmendra Jore
                              </Link>
                            </span>
                          </p>
                        </Link>
                      </div>
                      {/* 1st part End */}
                      {/* 2nd part Start */}
                      <div className="row pt-2 position-relative">
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                            >
                              Mumbai’s unique salon and cafe is changing lives -
                              Pride Month...
                            </h2>
                          </Link>
                        </div>

                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                              alt="Pause icon"
                            />
                          </Link>
                        </div>
                      </div>
                      {/* 2nd part End */}
                    </div>
                    {/* First Section End */}
                    {/* Second Section Start */}
                    <div className="col-md-6 position-relative">
                      <div className="row">
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Mumbai’s unique salon and cafe is changing lives -
                              Pride Month...
                            </h2>
                            <p>
                              <span className={homecss.updatate}>
                                20 August,2024 10:00 AM IST
                                <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                  {" "}
                                  | Dharmendra Jore
                                </Link>
                              </span>
                            </p>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                              alt="Pause icon"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Mumbai’s unique salon and cafe is changing lives -
                              Pride Month...
                            </h2>
                            <p>
                              <span className={homecss.updatate}>
                                20 August,2024 10:00 AM IST
                                <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                  {" "}
                                  | Dharmendra Jore
                                </Link>
                              </span>
                            </p>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                              alt="Pause icon"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Mumbai’s unique salon and cafe is changing lives -
                              Pride Month...
                            </h2>
                            <p>
                              <span className={homecss.updatate}>
                                20 August,2024 10:00 AM IST
                                <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                  {" "}
                                  | Dharmendra Jore
                                </Link>
                              </span>
                            </p>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                              alt="Pause icon"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Mumbai’s unique salon and cafe is changing lives -
                              Pride Month...
                            </h2>
                            <p>
                              <span className={homecss.updatate}>
                                20 August,2024 10:00 AM IST
                                <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                  {" "}
                                  | Dharmendra Jore
                                </Link>
                              </span>
                            </p>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                              alt="Pause icon"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Second Section End */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 rhselement pt-2">
              <div className="container">
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
              </div>
              {/* In This Week Start */}
              <div className="row">
                <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                  <div className="left-inner-colm pb-0 mb-2">
                    <h2 className="d-md-inline mr-md-3 main-heading">
                      <span className="main-headline-sidebar"></span>
                      <span className="px-2">Sit With Hitlist</span>
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
                <div className="col-md-12">
                  <div className="row pb-3">
                    <div className="col-md-6 col-6 mb-3">
                      <Link href="">
                        <div className="ps-md-0 mb-3 position-relative">
                          <Image
                            src={pauseicon}
                            className="pauseicon-new"
                            alt="Pause icon"
                          />
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/hardikjasminpicsdtings_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                          />
                          <Image
                            src={batch}
                            className="batchimg-small-repeat"
                            alt="Batch image"
                          />
                        </div>
                        <h2
                          className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2}`}
                        >
                          IN Videos: Fans celebrate Amitabh Bachchan’s...
                        </h2>
                      </Link>
                    </div>
                    <div className="col-md-6 col-6 mb-3">
                      <Link href="">
                        <div className="ps-md-0 mb-3 position-relative">
                          <Image
                            src={pauseicon}
                            className="pauseicon-new"
                            alt="Pause icon"
                          />
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/hardikjasminpicsdtings_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                          />
                          <Image
                            src={batch}
                            className="batchimg-small-repeat"
                            alt="Batch image"
                          />
                        </div>
                        <h2
                          className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2}`}
                        >
                          Four-time Mumbai Marathon winner Sudha Singh hails
                          maiden bronze feat in 2015
                        </h2>
                      </Link>
                    </div>
                    <div className="col-md-6 col-6 mb-3">
                      <Link href="">
                        <div className="ps-md-0 mb-3 position-relative">
                          <Image
                            src={pauseicon}
                            className="pauseicon-new"
                            alt="Pause icon"
                          />
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/hardikjasminpicsdtings_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                          />
                          <Image
                            src={batch}
                            className="batchimg-small-repeat"
                            alt="Batch image"
                          />
                        </div>
                        <h2
                          className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2}`}
                        >
                          IN Videos: Fans celebrate Amitabh Bachchan’s...
                        </h2>
                      </Link>
                    </div>
                    <div className="col-md-6 col-6 mb-3">
                      <Link href="">
                        <div className="ps-md-0 mb-3 position-relative">
                          <Image
                            src={pauseicon}
                            className="pauseicon-new"
                            alt="Pause icon"
                          />
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/hardikjasminpicsdtings_d.jpg"
                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                          />
                          <Image
                            src={batch}
                            className="batchimg-small-repeat"
                            alt="Batch image"
                          />
                        </div>
                        <h2
                          className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2}`}
                        >
                          IN Videos: Fans celebrate Amitabh Bachchan’s...
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* In This Week End */}
            </div>
          </div>
        </div>
      </section>
      {/* ENTERTAINMANT NEWS SECTION END */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}

      {/* BOLLYWOOD NEWS SECTION START */}
      <section className="bollywoodSection" id="bollywoodSection">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-9 lhselement category-right-border-desktop">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h2 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Bollywood News</span>
                  </h2>
                </div>
                <div>
                  <Link href="">
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
                  <div className="row">
                    {/* First Section Start */}
                    <div className="col-md-6 px-md-4">
                      {/* 1st part start */}
                      <div className="position-relative">
                        <Link href="">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                            alt="Devendra Fadnavis for BJP national chief?"
                            title="Devendra Fadnavis for BJP national chief?"
                            className=""
                          />
                          <Image src={batch} className="batchimg-big" />
                          <Image src={pauseicon} className="pauseicon-big" />
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            India will become third largest economy soon: PM
                            Modi
                          </h1>
                        </Link>
                        <p>
                          <span className={homecss.updatate}>
                            20 August,2024 10:00 AM IST
                            <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                              {" "}
                              | Dharmendra Jore
                            </Link>
                          </span>
                        </p>
                      </div>
                      {/* 1st part End */}
                      {/* 2nd part Start */}
                      <div className="row  position-relative">
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                          <p>
                            <span className={homecss.updatate}>
                              20 August,2024 10:00 AM IST
                              <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                {" "}
                                | Dharmendra Jore
                              </Link>
                            </span>
                          </p>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-md-2`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-md-2`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                      </div>
                      {/* 2nd part End */}
                      {/* 3rd part Start*/}
                      <div className="row mb-3">
                        <div className="col-3 border-right pe-1">
                          <Link href="">
                            <button className="btn-red">
                              <Image src={trending} className="trending-pos" />
                              <span className="trending-txt">Trending</span>
                            </button>
                          </Link>
                        </div>
                        <div className="col-4 pe-0 ps-1">
                          <Link href="">
                            <button className="btn-white">
                              #Mumbai Weather
                            </button>
                          </Link>
                        </div>
                        <div className="col-4 pe-0 ps-1">
                          <Link href="">
                            <button className="btn-white">
                              #Mumbai railways
                            </button>
                          </Link>
                        </div>
                      </div>
                      {/* 3rd part End*/}
                    </div>
                    {/* First Section End */}
                    {/* Second Section Start */}
                    <div className="col-md-6 position-relative">
                      <div className="row">
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium-small mr-1"
                              />{" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                            <p>
                              <span className={homecss.updatate}>
                                20 August,2024 10:00 AM IST
                                <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                  {" "}
                                  | Dharmendra Jore
                                </Link>
                              </span>
                            </p>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              {" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Second Section End */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 rhselement pt-4">
              {/* Advertisement Start */}
              <div className="row">
                <div className="col-md-12">
                  <p className="advertisement-text text-center mt-1 mb-0">
                    ADVERTISEMENT
                  </p>
                  <div className="add-300x250 mx-auto text-center mb-3"></div>
                </div>
              </div>
              {/* Advertisement End */}

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
                      />
                      <Image
                        src={ctaMobile}
                        className="cta-position d-block d-md-none"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className={`${homecss.borderMain} border text-center pb-2`}
                >
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
                    <SwiperSlide>
                      <p className={homecss.quizepera}>
                        Pride Month: How much do
                      </p>
                      <p className={homecss.quizepera}>you know of Mumbai's</p>
                      <p className={homecss.quizepera}>LGBTQIA+ legacy?</p>
                      <button className={homecss.playnow}>Play Now</button>
                    </SwiperSlide>
                    <SwiperSlide>
                      <p className={homecss.quizepera}>
                        Pride Month: How much do
                      </p>
                      <p className={homecss.quizepera}>you know of Mumbai's</p>
                      <p className={homecss.quizepera}>LGBTQIA+ legacy?</p>
                      <button className={homecss.playnow}>Play Now</button>
                    </SwiperSlide>
                    <SwiperSlide>
                      <p className={homecss.quizepera}>
                        Pride Month: How much do
                      </p>
                      <p className={homecss.quizepera}>you know of Mumbai's</p>
                      <p className={homecss.quizepera}>LGBTQIA+ legacy?</p>
                      <button className={homecss.playnow}>Play Now</button>
                    </SwiperSlide>
                    <SwiperSlide>
                      <p className={homecss.quizepera}>
                        Pride Month: How much do
                      </p>
                      <p className={homecss.quizepera}>you know of Mumbai's</p>
                      <p className={homecss.quizepera}>LGBTQIA+ legacy?</p>
                      <button className={homecss.playnow}>Play Now</button>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </section>

              {/* In This Week End */}
            </div>
          </div>
        </div>
      </section>
      {/* BOLLYWOOD NEWS SECTION END */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}

      {/* OTT-NEWS section ::start */}
      <section className="OTT-News" id="OTT-News">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement category-right-border-desktop">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h2 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">OTT News</span>
                  </h2>
                </div>
                <div>
                  <Link href="">
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
                  <div className="row">
                    {/* First Section Start */}
                    <div className="col-md-6 px-md-4">
                      {/* 1st part start */}
                      <div className="position-relative">
                        <Link href="">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                            alt="Devendra Fadnavis for BJP national chief?"
                            title="Devendra Fadnavis for BJP national chief?"
                            className=""
                          />
                          <Image src={batch} className="batchimg-big" />
                          <Image src={pauseicon} className="pauseicon-big" />
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            Top 5 must-watch series on streaming platforms this
                            week
                          </h1>
                        </Link>
                      </div>
                      {/* 1st part End */}
                      {/* 2nd part Start */}
                      <div className="row  position-relative">
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                            >
                              How streaming platforms are changing the movie
                              industry
                            </h2>
                            <p>
                              <span className={homecss.updatate}>
                                20 August,2024 10:00 AM IST
                                <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                  {" "}
                                  | Jane Doe
                                </Link>
                              </span>
                            </p>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-md-2`}
                            >
                              Inside the making of the latest OTT blockbuster
                            </h2>
                            <p>
                              <span className={homecss.updatate}>
                                20 August,2024 10:00 AM IST
                                <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                  {" "}
                                  | John Smith
                                </Link>
                              </span>
                            </p>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-md-2`}
                            >
                              The rise of international content on OTT platforms
                            </h2>
                            <p>
                              <span className={homecss.updatate}>
                                20 August,2024 10:00 AM IST
                                <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                  {" "}
                                  | Emily Clark
                                </Link>
                              </span>
                            </p>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                      </div>
                      {/* 2nd part End */}
                      {/* 3rd part Start*/}
                      <div className="row mb-3">
                        <div className="col-3 border-right pe-1">
                          <Link href="">
                            <button className="btn-red">
                              <Image src={trending} className="trending-pos" />
                              <span className="trending-txt">Trending</span>
                            </button>
                          </Link>
                        </div>
                        <div className="col-4 pe-0 ps-1">
                          <Link href="">
                            <button className="btn-white">
                              #StreamingWars
                            </button>
                          </Link>
                        </div>
                        <div className="col-4 pe-0 ps-1">
                          <Link href="">
                            <button className="btn-white">#NewReleases</button>
                          </Link>
                        </div>
                      </div>
                      {/* 3rd part End*/}
                    </div>
                    {/* First Section End */}
                    {/* Second Section Start */}
                    <div className="col-md-6 position-relative">
                      <div className="row">
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium-small mr-1"
                              />{" "}
                              Exclusive: Upcoming OTT trends in 2024
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              How to pick your next binge-worthy show
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              The impact of streaming on traditional cinema
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              The future of film festivals in the age of
                              streaming
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              The role of AI in content recommendation on OTT
                              platforms
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Second Section End */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 rhselement pt-4">
              {/* Advertisement Start */}
              <div className="row">
                <div className="col-md-12">
                  <p className="advertisement-text text-center mt-1 mb-0">
                    ADVERTISEMENT
                  </p>
                  <div className="add-300x250 mx-auto text-center mb-3"></div>
                </div>
              </div>
              {/* Advertisement End */}
              <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                <div className="left-inner-colm pb-0 mb-2">
                  <h2 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar"></span>
                    <span className="px-2">Poll</span>
                  </h2>
                </div>
                <div>
                  <Link href="">
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
              <div className={`${homecss.borderMain} border py-2 px-2`}>
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
                  className="changeSwiper pb-4"
                >
                  <SwiperSlide>
                    <h5 className={homecss.pollPera}>
                      Which streaming service do you use the most?
                    </h5>
                    <div className="row align-items-center">
                      <div className="col-md-1 col-1">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                        />
                      </div>
                      <div
                        className="col-md-10 col-10  mx-2 mb-3 py-2"
                        style={{ border: "1px solid #46C1F2" }}
                      >
                        <div className="progressHead d-flex justify-content-between">
                          <span className={homecss.progressheadpera}>
                            Netflix
                          </span>
                          <span className={homecss.progresspercent}> 60%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "60%",
                              backgroundColor: "rgb(36, 83, 167)",
                            }}
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-1 col-1">
                        <input
                          type="radio"
                          name="one"
                          className="form-check-input"
                        />
                      </div>
                      <div
                        className="col-md-10 col-10  mx-2 mb-3 py-2"
                        style={{ border: "1px solid #46C1F2" }}
                      >
                        <div className="progressHead d-flex justify-content-between">
                          <span className={homecss.progressheadpera}>
                            Prime Video
                          </span>
                          <span className={homecss.progresspercent}> 25%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "25%",
                              backgroundColor: "rgb(36, 83, 167)",
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-1 col-1">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="flexRadioDefault"
                        />
                      </div>
                      <div
                        className="col-md-10 col-10  mx-2 mb-3 py-2"
                        style={{ border: "1px solid #46C1F2" }}
                      >
                        <div className="progressHead d-flex justify-content-between">
                          <span className={homecss.progressheadpera}>
                            Disney+
                          </span>
                          <span className={homecss.progresspercent}> 15%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "15%",
                              backgroundColor: "rgb(36, 83, 167)",
                            }}
                            aria-valuenow="15"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h5 className={homecss.pollPera}>
                      How often do you binge-watch a series in one sitting?
                    </h5>
                    <div className="row align-items-center">
                      <div className="col-md-1 col-1">
                        <input type="radio" name="one" />
                      </div>
                      <div
                        className="col-md-10 col-10  mx-2 mb-3 py-2"
                        style={{ border: "1px solid #46C1F2" }}
                      >
                        <div className="progressHead d-flex justify-content-between">
                          <span className={homecss.progressheadpera}>
                            Often
                          </span>
                          <span className={homecss.progresspercent}> 70%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "70%",
                              backgroundColor: "rgb(36, 83, 167)",
                            }}
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-1 col-1">
                        <input type="radio" />
                      </div>
                      <div
                        className="col-md-10 col-10  mx-2 mb-3 py-2"
                        style={{ border: "1px solid #46C1F2" }}
                      >
                        <div className="progressHead d-flex justify-content-between">
                          <span className={homecss.progressheadpera}>
                            Sometimes
                          </span>
                          <span className={homecss.progresspercent}> 25%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "25%",
                              backgroundColor: "rgb(36, 83, 167)",
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-1 col-1">
                        <input type="radio" name="one" />
                      </div>
                      <div
                        className="col-md-10 col-10  mx-2 mb-3 py-2"
                        style={{ border: "1px solid #46C1F2" }}
                      >
                        <div className="progressHead d-flex justify-content-between">
                          <span className={homecss.progressheadpera}>
                            Rarely
                          </span>
                          <span className={homecss.progresspercent}> 5%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "5%",
                              backgroundColor: "rgb(36, 83, 167)",
                            }}
                            aria-valuenow="5"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* In This Week End */}
          </div>
        </div>
      </section>
      {/* OTT-News section ::end */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}

      {/* KOREAN ENTERTAINMENT NEWS SECTION START */}
      <section className="Korean" id="Korean-Entertainment-News">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-9 lhselement category-right-border-desktop-for-ent">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h2 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">
                      Korean Entertainment News
                    </span>
                  </h2>
                </div>
                <div>
                  <Link href="">
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
                  <div className="row">
                    {/* First Section Start */}
                    <div className="col-md-6 px-md-4">
                      {/* 1st part start */}
                      <div className="position-relative">
                        <Link href="">
                          <img
                            src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                            alt="Devendra Fadnavis for BJP national chief?"
                            title="Devendra Fadnavis for BJP national chief?"
                            className=""
                          />
                          <Image src={batch} className="batchimg-big" />
                          <Image src={pauseicon} className="pauseicon-big" />
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            India will become third largest economy soon: PM
                            Modi
                          </h1>
                        </Link>
                      </div>
                      {/* 1st part End */}
                      <div className="row  position-relative">
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href="">
                            <p>
                              <span className={homecss.updatate}>
                                20 August,2024 10:00 AM IST
                                <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                  {" "}
                                  | Dharmendra Jore
                                </Link>
                              </span>
                            </p>
                          </Link>
                        </div>
                      </div>
                      {/* 3rd part Start*/}
                      <div className="row mb-3">
                        <div className="col-3 border-right pe-1">
                          <Link href="">
                            <button className="btn-red">
                              <Image src={trending} className="trending-pos" />
                              <span className="trending-txt">Trending</span>
                            </button>
                          </Link>
                        </div>
                        <div className="col-4 pe-0 ps-1">
                          <Link href="">
                            <button className="btn-white">
                              #Mumbai Weather
                            </button>
                          </Link>
                        </div>
                        <div className="col-4 pe-0 ps-1">
                          <Link href="">
                            <button className="btn-white">
                              #Mumbai railways
                            </button>
                          </Link>
                        </div>
                      </div>
                      {/* 3rd part End*/}
                    </div>
                    {/* First Section End */}
                    {/* Second Section Start */}
                    <div className="col-md-6 position-relative">
                      <div className="row">
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium-small mr-1"
                              />{" "}
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                          <p>
                            <span className={homecss.updatate}>
                              20 August,2024 10:00 AM IST
                              <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                {" "}
                                | Dharmendra Jore
                              </Link>
                            </span>
                          </p>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                          <p>
                            <span className={homecss.updatate}>
                              20 August,2024 10:00 AM IST
                              <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                {" "}
                                | Dharmendra Jore
                              </Link>
                            </span>
                          </p>
                        </div>
                        <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                          <Link href="">
                            <img
                              src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                              alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                              className=""
                            />
                            <Image
                              src={pauseicon}
                              className="pauseicon-small"
                            />
                          </Link>
                        </div>
                        <div className="col-9 mb-3 mb-md-2">
                          <Link href="">
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                            >
                              Four-time Mumbai Marathon winner Sudha Singh hails
                              maiden bronze feat in 2015
                            </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Second Section End */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 rhselement pt-4">
              {/* Advertisement Start */}
              <div className="row">
                <div className="col-md-12">
                  <p className="advertisement-text text-center mt-1 mb-0">
                    ADVERTISEMENT
                  </p>
                  <div className="add-300x250 mx-auto text-center mb-3"></div>
                </div>
              </div>
              {/* Advertisement End */}
            </div>
          </div>
        </div>
      </section>
      {/* KOREAN ENTERTAINMENT NEWS SECTION END */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}

      <div className="container pt-md-5 pt-0">
        <div className="row">
          {/* <div className="lhselement tech-right-border-desktop-repeat mt-4"> */}
          {/* Tech News Start */}
          <div className="col-md-4">
            <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
              <div className="left-inner-colm pb-0 mb-2 mx-0">
                <h2 className="d-md-inline ms-md-0 main-heading ">
                  <span className="main-headline-sidebar category-side-bar ms-0"></span>
                  <span className="px-2">Hollywood News</span>
                </h2>
              </div>
              <div>
                <Link href="">
                  <Image src={cta} className="cta-position" />
                </Link>
              </div>
            </div>
            <div className="position-relative">
              <Link href="">
                <img
                  src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                  alt="Tech Update"
                  title="Tech Update"
                  className=""
                />
                <Image src={batch} className="batchimg-big" />
                <Image src={pauseicon} className="pauseicon-big" />
                <h1
                  className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                >
                  Latest in Tech: Innovations to Watch
                </h1>
              </Link>
              <p className="date-time-loc-pos d-none d-md-block">
                <span>21 August, 2024 08:00 AM IST</span>
                <span className="date-time-loc-color"> | John Doe</span>
              </p>
            </div>
            {/* Trending Start */}
            <div className="scroll-btn">
              <div className="row mb-3 scrollable pe-3 pe-md-2">
                <div className="col-3 border-right pe-1">
                  <button className="btn-red">
                    <Image src={trending} className="trending-pos" />
                    <span className="trending-txt">Trending</span>
                  </button>
                </div>
                <div className="col-4 pe-0 ps-1">
                  <button className="btn-white">#Top 5 Trends</button>
                </div>
                <div className="col-4 pe-0 ps-1">
                  <button className="btn-white">#Tech</button>
                </div>
              </div>
            </div>
            {/* Trending End */}
            <div
              className="row pt-3 position-relative mx-1 my-3"
              style={{ background: "#F7E2F7" }}
            >
              <div className="col-9 mb-3 mb-md-0">
                <Link href="">
                  <h2
                    className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                  >
                    How AI is Transforming the Tech Industry
                  </h2>
                </Link>
              </div>
              <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                <Link href="">
                  <img
                    src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                    alt="AI and Tech"
                    title="AI and Tech"
                    className=""
                  />
                  <Image src={batch} className="batchimg-small-position" />
                  <Image src={pauseicon} className="pauseicon-small" />
                </Link>
              </div>
              <div className="col-9 mb-3 mb-md-0">
                <Link href="">
                  <h2
                    className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                  >
                    The Rise of Quantum Computing in 2024
                  </h2>
                </Link>
              </div>
              <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                <Link href="">
                  <img
                    src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                    alt="Quantum Computing"
                    title="Quantum Computing"
                    className=""
                  />
                  <Image src={batch} className="batchimg-small-position" />
                  <Image src={pauseicon} className="pauseicon-small" />
                </Link>
              </div>
            </div>
          </div>
          {/* Tech News End */}

          {/* Television News Start */}
          <div className="col-md-4">
            <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
              <div className="left-inner-colm pb-0 mb-2 mx-0">
                <h2 className="d-md-inline ms-md-0 main-heading ">
                  <span className="main-headline-sidebar category-side-bar ms-0"></span>
                  <span className="px-2">Television News</span>
                </h2>
              </div>
              <div>
                <Link href="">
                  <Image src={cta} className="cta-position" />
                </Link>
              </div>
            </div>
            <div className="position-relative">
              <Link href="">
                <img
                  src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                  alt="TV Show Updates"
                  title="TV Show Updates"
                  className=""
                />
                <Image src={batch} className="batchimg-big" />
                <Image src={pauseicon} className="pauseicon-big" />
                <h1
                  className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                >
                  Top TV Shows to Watch This Week
                </h1>
              </Link>
              <p className="date-time-loc-pos d-none d-md-block">
                <span>21 August, 2024 08:00 AM IST</span>
                <span className="date-time-loc-color"> | Jane Doe</span>
              </p>
            </div>
            {/* Trending Start */}
            <div className="scroll-btn">
              <div className="row mb-3 scrollable pe-3 pe-md-2">
                <div className="col-3 border-right pe-1">
                  <button className="btn-red">
                    <Image src={trending} className="trending-pos" />
                    <span className="trending-txt">Trending</span>
                  </button>
                </div>
                <div className="col-4 pe-0 ps-1">
                  <button className="btn-white">#Top TV Shows</button>
                </div>
                <div className="col-4 pe-0 ps-1">
                  <button className="btn-white">#Television</button>
                </div>
              </div>
            </div>
            {/* Trending End */}
            <div
              className="row pt-3 position-relative mx-1 my-3"
              style={{ background: "#F7E2F7" }}
            >
              <div className="col-9 mb-3 mb-md-0">
                <Link href="">
                  <h2
                    className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                  >
                    The Most Anticipated TV Series Premieres
                  </h2>
                </Link>
              </div>
              <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                <Link href="">
                  <img
                    src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                    alt="TV Premieres"
                    title="TV Premieres"
                    className=""
                  />
                  <Image src={batch} className="batchimg-small-position" />
                  <Image src={pauseicon} className="pauseicon-small" />
                </Link>
              </div>
              <div className="col-9 mb-3 mb-md-0">
                <Link href="">
                  <h2
                    className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                  >
                    Breaking Down the Latest TV Ratings
                  </h2>
                </Link>
              </div>
              <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                <Link href="">
                  <img
                    src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                    alt="TV Ratings"
                    title="TV Ratings"
                    className=""
                  />
                  <Image src={batch} className="batchimg-small-position" />
                  <Image src={pauseicon} className="pauseicon-small" />
                </Link>
              </div>
            </div>
          </div>
          {/* Television News End */}

          {/* Regional Cinema News Start */}
          <div className="col-md-4">
            <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
              <div className="left-inner-colm pb-0 mb-2 mx-0">
                <h2 className="d-md-inline ms-md-0 main-heading ">
                  <span className="main-headline-sidebar category-side-bar ms-0"></span>
                  <span className="px-2">Regional Cinema News</span>
                </h2>
              </div>
              <div>
                <Link href="">
                  <Image src={cta} className="cta-position" />
                </Link>
              </div>
            </div>
            <div className="position-relative">
              <Link href="">
                <img
                  src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                  alt="Regional Cinema"
                  title="Regional Cinema"
                  className=""
                />
                <Image src={batch} className="batchimg-big" />
                <Image src={pauseicon} className="pauseicon-big" />
                <h1
                  className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                >
                  Spotlight on Regional Cinema: Top Picks
                </h1>
              </Link>
              <p className="date-time-loc-pos d-none d-md-block">
                <span>21 August, 2024 08:00 AM IST</span>
                <span className="date-time-loc-color"> | Alex Doe</span>
              </p>
            </div>
            {/* Trending Start */}
            <div className="scroll-btn">
              <div className="row mb-3 scrollable pe-3 pe-md-2">
                <div className="col-3 border-right pe-1">
                  <button className="btn-red">
                    <Image src={trending} className="trending-pos" />
                    <span className="trending-txt">Trending</span>
                  </button>
                </div>
                <div className="col-4 pe-0 ps-1">
                  <button className="btn-white">#Regional Hits</button>
                </div>
                <div className="col-4 pe-0 ps-1">
                  <button className="btn-white">#Cinema</button>
                </div>
              </div>
            </div>
            {/* Trending End */}
            <div
              className="row pt-3 position-relative mx-1 my-3"
              style={{ background: "#F7E2F7" }}
            >
              <div className="col-9 mb-3 mb-md-0">
                <Link href="">
                  <h2
                    className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                  >
                    The Growth of Regional Films in India
                  </h2>
                </Link>
              </div>
              <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                <Link href="">
                  <img
                    src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                    alt="Regional Films"
                    title="Regional Films"
                    className=""
                  />
                  <Image src={batch} className="batchimg-small-position" />
                  <Image src={pauseicon} className="pauseicon-small" />
                </Link>
              </div>
              <div className="col-9 mb-3 mb-md-0">
                <Link href="">
                  <h2
                    className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                  >
                    Must-Watch Regional Movies of 2024
                  </h2>
                </Link>
              </div>
              <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                <Link href="">
                  <img
                    src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                    alt="Top Regional Movies"
                    title="Top Regional Movies"
                    className=""
                  />
                  <Image src={batch} className="batchimg-small-position" />
                  <Image src={pauseicon} className="pauseicon-small" />
                </Link>
              </div>
            </div>
          </div>
          {/* Regional Cinema News End */}
        </div>
      </div>

      {/* Advertisement Start */}
      <div className="container">
        <div className="row d-md-none d-block">
          <div className="col-md-12">
            <p className="advertisement-text text-center mt-1 mb-0">
              ADVERTISEMENT
            </p>
            <div className="add-300x250 mx-auto text-center mb-3"></div>
          </div>
        </div>
      </div>
      {/* Advertisement End */}
    </div>
    // </div>
  );
};
export default Entertainment;

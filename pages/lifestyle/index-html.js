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

const lifestyle = () => {
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
    <div className="main">
      {/* first LAYOUT START */}
      <section className="firstlayout py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement border-right my-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h1 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Latest Updates</span>
                  </h1>
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
                  <ul
                    id="style-4"
                    className={`nav nav-tabs category-nav-tabs mb-3 pb-1 ${homecss.navTabs}`}
                  >
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => handleTabClick("All")}
                        className={`mx-1 ${
                          activeTab === "All" ? homecss.categoryActive : ""
                        }`}
                      >
                        All
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Health-Fitness-News");
                          document
                            .getElementById("Health-Fitness-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Health-Fitness-News"
                            ? homecss.categoryActive
                            : ""
                        }`}
                      >
                        Health & Wellness
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Culture-News");
                          document
                            .getElementById("Culture-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Culture-News"
                            ? homecss.categoryActive
                            : ""
                        }`}
                      >
                        Culture & Arts
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Fashion-News");
                          document
                            .getElementById("Fashion-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Fashion-News"
                            ? homecss.categoryActive
                            : ""
                        }`}
                      >
                        Fashion & Style
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Food-News");
                          document
                            .getElementById("Food-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Food-News"
                            ? homecss.categoryActive
                            : ""
                        }`}
                      >
                        Food & Dining
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Relationships-News");
                          document
                            .getElementById("Relationships-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Relationships-News"
                            ? homecss.categoryActive
                            : ""
                        }`}
                      >
                        Relationships
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Travel-News");
                          document
                            .getElementById("Travel-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Travel-News"
                            ? homecss.categoryActive
                            : ""
                        }`}
                      >
                        Travel & Adventure
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleTabClick("Nature-Wildlife-News");
                          document
                            .getElementById("Nature-Wildlife-News")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`mx-1 ${
                          activeTab === "Nature-Wildlife-News"
                            ? homecss.categoryActive
                            : ""
                        }`}
                      >
                        Nature & Wildlife
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
                  <div className="row mb-3">
                    {/* First Section Start */}
                    <div className="col-md-6 px-md-4">
                      {/* 1st part start */}
                      <p className={homecss.fashionhead}>Health & Wellness</p>
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
                          <span className={homecss.storylabel}>PM MODI</span>
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            <img
                              src="https://www.mid-day.com/assets/images/md-premium.png"
                              className="md-premium-small"
                            />
                            <span>
                              Healthy Living: Simple Habits for a Better Life
                            </span>
                          </h1>
                        </Link>
                      </div>
                      {/* 1st part End */}
                      <div className="trending-container px-0 pt-1">
                        <div className="row trending-row-pos">
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
                    {/* First Section End */}

                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-4 col-6">
                          <p className={homecss.fashionheadsemi}>Fitness</p>
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  The Ultimate Workout Routine for Beginners
                                </span>
                              </h1>
                            </Link>
                            <span className="img-story-label-position-category-new">
                              PM MODI
                            </span>
                          </div>
                        </div>
                        <div className="col-md-4 col-6">
                          <p className={homecss.fashionheadsemi}>
                            Nutrition & Diet
                          </p>
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Top 10 Foods for a Balanced Diet
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <p className={homecss.fashionheadsemi}>
                            Mental Health
                          </p>
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  How to Maintain Mental Wellness in Daily Life
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 col-6">
                          <p className={homecss.fashionheadsemi}>
                            Healthy Recipes
                          </p>
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Quick and Easy Healthy Breakfast Ideas
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-4 col-6">
                          <p className={homecss.fashionheadsemi}>
                            Yoga & Meditation
                          </p>
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Benefits of Daily Meditation Practices
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <p className={homecss.fashionheadsemi}>
                            Beauty & Skincare
                          </p>
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Skincare Tips for Radiant Skin
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second Section End */}
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="row px-md-2">
                        <div className="col-md-4 col-6">
                          <p className={homecss.fashionheadsemi}>
                            Sustainable Living
                          </p>
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Eco-Friendly Tips for a Sustainable Life
                                </span>
                              </h1>
                            </Link>
                          </div>
                          <span className="img-story-label-position-category-small">
                            PM MODI
                          </span>
                        </div>
                        <div className="col-md-4 col-6">
                          <p className={homecss.fashionheadsemi}>
                            Fashion & Trends
                          </p>
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Latest Fashion Trends for This Season
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <p className={homecss.fashionheadsemi}>
                            Home & Decor
                          </p>
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  How to Create a Cozy Living Space
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
              <div className="row">
                <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                  <div className="left-inner-colm pb-0 mb-2">
                    <h2 className="d-md-inline mr-md-3 main-heading">
                      <span className="main-headline-sidebar"></span>
                      <span className="px-2">Exclusives</span>
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
                        Interview: Marathon Champion Shares Her Journey
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
                        In-Depth: The Path to Marathon Success
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
                        Exclusive Insights: Training for the Big Race
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
                        Behind the Scenes: Marathon Winner's Diet
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
                  </div>
                </div>
              </div>
              {/* Exclusives End */}
            </div>
          </div>
        </div>
      </section>
      {/* first LAYOUT END */}
      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END  */}
      {/* POTHO SECTION START:: */}
      <section className="photolayout">
        <div
          className="container mt-4 pb-md-2 tab-header opinions-background-pos py-4 px-md-4"
          style={{ borderRadius: "0px" }}
        >
          <div className="d-flex justify-content-between align-items-center pt-2">
            <div className="left-inner-colm pb-0 mb-2">
              <h2 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar"></span>
                <span className="px-2">Lifestyle Photos</span>
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
                  className="photoimg border-radius-img"
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
                  className="photoimg border-radius-img"
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
                  className="photoimg border-radius-img"
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
                  className="photoimg border-radius-img"
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
      {/* POTHO SECTION END:: */}
      {/* UNSUNG HERO SECTION START:: */}
      <section className="UnsungHeroes pt-0 pt-md-0 position-relative">
        <div className="container px-md-0 border-top border-bottom my-5 px-md-4">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
            <div className="left-inner-colm pb-0 mb-2">
              <h2 className="d-md-inline mr-md-3 main-heading d-flex-position">
                <span className="main-headline-sidebar category-side-bar"></span>
                <span className="px-md-3 px-2">Unsung Heroes</span>
              </h2>
            </div>
            <div className="d-block d-md-none">
              <Link href="">
                <Image src={cta} className="cta-position " />
              </Link>
            </div>
          </div>
          <div className="left-inner-colm pb-0 mb-2">
            <Swiper
              slidesPerView={3}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  navigation: false,
                  pagination: {
                    clickable: true,
                  },
                },
                768: {
                  slidesPerView: 3,
                  // navigation: true,
                  pagination: false,
                },
              }}
              modules={[Navigation, Pagination]}
              className="heroesSwiper mx-md-2"
            >
              <Link href="#">
                <SwiperSlide className="pt-5">
                  <div className="row mb-4 md-md-0">
                    <div className="col-md-8 col-8">
                      <p className={homecss.unsungpera}>
                        <img
                          src="https://www.mid-day.com/assets/images/md-premium.png"
                          className="md-premium-small"
                        />
                        Unsung heroes: How this journalist-turned-educator
                        brings '3 Idiots' Rancho to life in Spiti...
                      </p>
                    </div>
                    <div className="col-md-3 col-3 border-right">
                      <img
                        className={homecss.unsungImage}
                        src="https://images.mid-day.com/images/images/2020/dec/Mayank-Shekar_l.jpg"
                        width="68px"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Link>
              <Link href="#">
                <SwiperSlide className="pt-5">
                  <div className="row">
                    <div className="col-md-8 col-8">
                      <p className={homecss.unsungpera}>
                        <img
                          src="https://www.mid-day.com/assets/images/md-premium.png"
                          className="md-premium-small"
                        />
                        Unsung heroes: How this journalist-turned-educator
                        brings '3 Idiots' Rancho to life in Spiti...
                      </p>
                    </div>
                    <div className="col-md-3 col-3 border-right">
                      <img
                        className={homecss.unsungImage}
                        src="https://images.mid-day.com/images/images/2020/dec/Mayank-Shekar_l.jpg"
                        width="68px"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Link>
              <Link href="#">
                <SwiperSlide className="pt-5">
                  <div className="row">
                    <div className="col-md-8 col-8">
                      <p className={homecss.unsungpera}>
                        <img
                          src="https://www.mid-day.com/assets/images/md-premium.png"
                          className="md-premium-small"
                        />
                        Unsung heroes: How this journalist-turned-educator
                        brings '3 Idiots' Rancho to life in Spiti...
                      </p>
                    </div>
                    <div className="col-md-3 col-3 border-right">
                      <img
                        className={homecss.unsungImage}
                        src="https://images.mid-day.com/images/images/2020/dec/Mayank-Shekar_l.jpg"
                        width="68px"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Link>
              <Link href="#">
                <SwiperSlide className="pt-5">
                  <div className="row">
                    <div className="col-md-8 col-8">
                      <p className={homecss.unsungpera}>
                        <img
                          src="https://www.mid-day.com/assets/images/md-premium.png"
                          className="md-premium-small"
                        />
                        Unsung heroes: How this journalist-turned-educator
                        brings '3 Idiots' Rancho to life in Spiti...
                      </p>
                    </div>
                    <div className="col-md-3 col-3 border-right">
                      <img
                        className={homecss.unsungImage}
                        src="https://images.mid-day.com/images/images/2020/dec/Mayank-Shekar_l.jpg"
                        width="68px"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Link>
              <Link href="#">
                <SwiperSlide className="pt-5">
                  <div className="row">
                    <div className="col-md-8 col-8">
                      <p className={homecss.unsungpera}>
                        <img
                          src="https://www.mid-day.com/assets/images/md-premium.png"
                          className="md-premium-small"
                        />
                        Unsung heroes: How this journalist-turned-educator
                        brings '3 Idiots' Rancho to life in Spiti...
                      </p>
                    </div>
                    <div className="col-md-3 col-3 border-right">
                      <img
                        className={homecss.unsungImage}
                        src="https://images.mid-day.com/images/images/2020/dec/Mayank-Shekar_l.jpg"
                        width="68px"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Link>
            </Swiper>
          </div>
        </div>
      </section>
      {/* UNSUNG HERO SECTION END:: */}
      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END  */}
      <div className="Lifestyle">
        {/* Lifestyle  NEWS SECTION START */}
        <section className="Lifestyle  pt-4" id="entnews">
          <div className="container md-md-0 mb-0">
            <div className="row">
              <div className="col-md-9 lhselement border-right my-3">
                <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                  <div className="left-inner-colm pb-0 mb-2 px-md-2">
                    <h2 className="d-md-inline mr-md-3 main-heading">
                      <span className="main-headline-sidebar category-side-bar"></span>
                      <span className="px-md-3 px-2">Lifestyle Videos</span>
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
                            <span className="img-story-label-position-category-new">
                              PM MODI
                            </span>

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
                        {/* 1st part End */}
                        {/* 2nd part Start */}
                        <div className="row pt-2 position-relative">
                          <div className="col-9 mb-3 mb-md-0">
                            <Link href="">
                              <h2
                                className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                              >
                                Mumbai’s unique salon and cafe is changing lives
                                - Pride Month...
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
                                Mumbai’s unique salon and cafe is changing lives
                                - Pride Month...
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
                                Mumbai’s unique salon and cafe is changing lives
                                - Pride Month...
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
                                Mumbai’s unique salon and cafe is changing lives
                                - Pride Month...
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
                                Mumbai’s unique salon and cafe is changing lives
                                - Pride Month...
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
                                Mumbai’s unique salon and cafe is changing lives
                                - Pride Month...
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
                        <span className="px-2">Navigating The Wild</span>
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
        {/* Lifestyle  NEWS SECTION END */}
      </div>
      <section className="Health & Fitness py-3" id="HealthFitness">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement border-right my-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h1 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Health & Fitness News</span>
                  </h1>
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
                  <div className="row mb-3">
                    <div className="col-md-5 px-md-4">
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
                          <Image
                            src={camera}
                            className={homecss.camerapositionbig}
                          />
                          <span className={homecss.imgstorylabelposition}>
                            PM Modi
                          </span>
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            <img
                              src="https://www.mid-day.com/assets/images/md-premium.png"
                              className="md-premium-small"
                            />
                            <span> Healthy Eating: Key to a Balanced Life</span>
                          </h1>
                        </Link>
                      </div>
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
                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Mindfulness Techniques for Stress
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Staying Active: Tips for Daily Exercise
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Yoga for Flexibility and Strength
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Healthy Eating Habits
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Cardio Exercises for Heart Health
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Managing Stress Through Meditation
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* LEFT SIDE ELEMENT */}
            <div className="col-md-3 rhselement pt-2">
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
            </div>
          </div>
        </div>
      </section>
      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END  */}
      <section className="CultureNews py-3" id="CultureNews">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement border-right my-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h1 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Culture News</span>
                  </h1>
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
                  <div className="row mb-3">
                    <div className="col-md-5 px-md-4">
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
                          <Image
                            src={camera}
                            className={homecss.camerapositionbig}
                          />
                          <span className={homecss.imgstorylabelposition}>
                            PM Modi
                          </span>
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            <img
                              src="https://www.mid-day.com/assets/images/md-premium.png"
                              className="md-premium-small"
                            />
                            <span> Healthy Eating: Key to a Balanced Life</span>
                          </h1>
                        </Link>
                      </div>
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
                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Mindfulness Techniques for Stress
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Staying Active: Tips for Daily Exercise
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Yoga for Flexibility and Strength
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Healthy Eating Habits
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Cardio Exercises for Heart Health
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Managing Stress Through Meditation
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* LEFT SIDE ELEMENT */}
            <div className="col-md-3 rhselement pt-2">
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
                          // type="radio"
                          // name="flexRadioDefault"
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
                          // type="radio"
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
          </div>
        </div>
      </section>
      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END  */}

      {/* Fashion News LAYOUT START */}
      <section className="Fashion-News py-3" id="Fashion-News">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement border-right my-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h1 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Fashion News</span>
                  </h1>
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
                  <div className="row mb-3">
                    <div className="col-md-5 px-md-4">
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
                          <Image
                            src={camera}
                            className={homecss.camerapositionbig}
                          />
                          <span className={homecss.imgstorylabelposition}>
                            PM Modi
                          </span>
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            <img
                              src="https://www.mid-day.com/assets/images/md-premium.png"
                              className="md-premium-small"
                            />
                            <span> Healthy Eating: Key to a Balanced Life</span>
                          </h1>
                        </Link>
                      </div>
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
                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Mindfulness Techniques for Stress
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Staying Active: Tips for Daily Exercise
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Yoga for Flexibility and Strength
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Healthy Eating Habits
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Cardio Exercises for Heart Health
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Managing Stress Through Meditation
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
            </div>
          </div>
        </div>
      </section>
      {/* Fashion News LAYOUT START */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END  */}

      {/* Food  News LAYOUT START */}
      <section className="Fashion-News py-3" id="Fashion-News">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement border-right my-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h1 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Food News</span>
                  </h1>
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
                  <div className="row mb-3">
                    <div className="col-md-5 px-md-4">
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
                          <Image
                            src={camera}
                            className={homecss.camerapositionbig}
                          />
                          <span className={homecss.imgstorylabelposition}>
                            PM Modi
                          </span>
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            <img
                              src="https://www.mid-day.com/assets/images/md-premium.png"
                              className="md-premium-small"
                            />
                            <span> Healthy Eating: Key to a Balanced Life</span>
                          </h1>
                        </Link>
                      </div>
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
                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Mindfulness Techniques for Stress
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Staying Active: Tips for Daily Exercise
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Yoga for Flexibility and Strength
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Healthy Eating Habits
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Cardio Exercises for Heart Health
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Managing Stress Through Meditation
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
            </div>
          </div>
        </div>
      </section>
      {/* Food  News LAYOUT START */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END  */}

      {/* Food  News LAYOUT START */}
      <section className="Fashion-News py-3" id="Fashion-News">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement border-right my-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h1 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Relationships News</span>
                  </h1>
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
                  <div className="row mb-3">
                    <div className="col-md-5 px-md-4">
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
                          <Image
                            src={camera}
                            className={homecss.camerapositionbig}
                          />
                          <span className={homecss.imgstorylabelposition}>
                            PM Modi
                          </span>
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            <img
                              src="https://www.mid-day.com/assets/images/md-premium.png"
                              className="md-premium-small"
                            />
                            <span> Healthy Eating: Key to a Balanced Life</span>
                          </h1>
                        </Link>
                      </div>
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
                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Mindfulness Techniques for Stress
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Staying Active: Tips for Daily Exercise
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Yoga for Flexibility and Strength
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Healthy Eating Habits
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Cardio Exercises for Heart Health
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Managing Stress Through Meditation
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
            </div>
          </div>
        </div>
      </section>
      {/* Food  News LAYOUT START */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END  */}

      {/* Travel News LAYOUT START */}
      <section className="Fashion-News py-3" id="Fashion-News">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement border-right my-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h1 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Travel News</span>
                  </h1>
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
                  <div className="row mb-3">
                    <div className="col-md-5 px-md-4">
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
                          <Image
                            src={camera}
                            className={homecss.camerapositionbig}
                          />
                          <span className={homecss.imgstorylabelposition}>
                            PM Modi
                          </span>
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            <img
                              src="https://www.mid-day.com/assets/images/md-premium.png"
                              className="md-premium-small"
                            />
                            <span> Healthy Eating: Key to a Balanced Life</span>
                          </h1>
                        </Link>
                      </div>
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
                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Mindfulness Techniques for Stress
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Staying Active: Tips for Daily Exercise
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Yoga for Flexibility and Strength
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Healthy Eating Habits
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Cardio Exercises for Heart Health
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Managing Stress Through Meditation
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
            </div>
          </div>
        </div>
      </section>
      {/* Travel News LAYOUT START */}

      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END  */}

      {/* Nature & Wildlife News LAYOUT START */}
      <section className="Fashion-News py-3" id="Fashion-News">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement border-right my-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h1 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">Nature & Wildlife News</span>
                  </h1>
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
                  <div className="row mb-3">
                    <div className="col-md-5 px-md-4">
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
                          <Image
                            src={camera}
                            className={homecss.camerapositionbig}
                          />
                          <span className={homecss.imgstorylabelposition}>
                            PM Modi
                          </span>
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            <img
                              src="https://www.mid-day.com/assets/images/md-premium.png"
                              className="md-premium-small"
                            />
                            <span> Healthy Eating: Key to a Balanced Life</span>
                          </h1>
                        </Link>
                      </div>
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
                          <Link href="#" className={homecss.links}>
                            <button className={homecss.btnwhite}>
                              Nature & Wilife News
                            </button>
                          </Link>
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Mindfulness Techniques for Stress
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Staying Active: Tips for Daily Exercise
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Yoga for Flexibility and Strength
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Healthy Eating Habits
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Cardio Exercises for Heart Health
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="position-relative">
                            <Link href="">
                              <img
                                src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                                alt="Devendra Fadnavis for BJP national chief?"
                                title="Devendra Fadnavis for BJP national chief?"
                                className=""
                              />
                              <Image src={batch} className="batchimg-big" />
                              <Image
                                src={pauseicon}
                                className="pauseicon-big"
                              />
                              <h1
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                <span className={homecss.lifestyle}>
                                  Managing Stress Through Meditation
                                </span>
                              </h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
            </div>
          </div>
        </div>
      </section>
      {/* Nature & Wildlife News LAYOUT START */}
    </div>
  );
};
export default lifestyle;

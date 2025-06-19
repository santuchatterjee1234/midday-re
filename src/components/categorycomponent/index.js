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
import Quiz from "../commonComponent/quiz";
import Exclusive from "./rhsComponant/exclusive";
import UpcommingEvents from "./rhsComponant/upcommingEvents";
import Liveblogsection from "./liveblogsection";
import Photosection from "./photosection";
import Videosection from "./videosection";
import Opinionsection from "./opinionsection";
import Categoryupperslider from "./categoryupperslider";
import Webstorysection from "./webstorysection";
import Moviereviewsection from "./moviereviewsection";
import Latestallsection from "./latestallsection";
import Latestlifestylesection from "./latestlifestylesection";
import Subcategorydesign_one from "./subcategorydesign_one";
import Subcategorydesign_two from "./subcategorydesign_two";
import Subcategorydesign_three from "./subcategorydesign_three";
import { useRouter } from "next/router";
export default function Index({
  categoryData,
  categoryName,
  videoTagName,
  upperBannerTagName,
}) {
  const [activeTab, setActiveTab] = useState("All");
  const router = useRouter();
  const mainBgClass =
    router.pathname === "/mumbai" ||
    router.pathname === "/entertainment" ||
    router.pathname === "/celebrity-life"
      ? homecss.mainbg
      : "";

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [isMobile, setIsMobile] = useState(false);

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

  const scrollToSection = (subCategoryKey) => {
    const element = document.getElementById(subCategoryKey.subCategoryKey);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with ID ${subCategoryKey} not found.`);
    }
  };
  return (
    <div className="main mb-3">
      {/* FIRST LAYOUT START */}
      {["Mumbai Guide", "Entertainment", "Celebrity Life"].includes(
        categoryName
      ) && <Categoryupperslider upperBannerTagName={upperBannerTagName} />}
      {/* FIRST LAYOUT END */}
      {/* MAIN FIRST LAYOUT SECTION ::START */}
      <section className="catogery">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement border-right my-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-md-2">
                  <h2 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar category-side-bar"></span>
                    <span className="px-md-3 px-2">{categoryName}</span>
                  </h2>
                </div>
                {/* <div className="">
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
                </div> */}
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
                    {categoryData.subcategory_data &&
                      Object.keys(categoryData.subcategory_data).length > 0 &&
                      Object.keys(categoryData.subcategory_data).map(
                        (subCategoryKey, index, array) => (
                          <li>
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                scrollToSection({ subCategoryKey })
                              }
                              className={`mx-1`}
                            >
                              {subCategoryKey.replace(/_/g, " ")}
                            </span>
                          </li>
                        )
                      )}
                  </ul>
                </div>
              </div>
              {/* LATEST ALL CATEGORIES START */}
              {categoryName !== "Lifestyle" &&
                categoryData.category_data &&
                categoryData.category_data.length > 0 && (
                  <Latestallsection categoryData={categoryData} />
                )}
              {/* LATEST ALL CATEGORIES END */}
              {/* LATEST LIFESTYLE CATEGORIES START */}
              {["Lifestyle"].includes(categoryName) &&
                categoryData.category_data &&
                categoryData.category_data.length > 0 && (
                  <Latestlifestylesection categoryData={categoryData} />
                )}
              {/* LATEST LIFESTYLE CATEGORIES END */}
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
              {[
                "Mumbai",
                "News",
                "Entertainment",
                "Tech",
                "Business",
                "Celebrity Life",
                "Lifestyle",
              ].includes(categoryName) &&
                categoryData?.category_data &&
                categoryData.category_data.length > 0 && (
                  <Exclusive categoryId={categoryData.category_data[0].catID} />
                )}
              {/* Exclusives End */}
              {/* Upcomming Events Start */}
              {["Sport"].includes(categoryName) &&
                categoryData.category_data &&
                categoryData.category_data.length > 0 && (
                  <UpcommingEvents categoryData={categoryData} />
                )}
              {/* Upcomming Events End */}
              {/* Quiz Start */}
              {["Mumbai Guide"].includes(categoryName) &&
                categoryData.category_data &&
                categoryData.category_data.length > 0 && (
                  <Quiz categoryId={categoryData.category_data[0].catID} />
                )}
              {/* Quiz End */}
            </div>
          </div>
        </div>
        {/* MAIN FIRST LAYOUT SECTION ::END */}
      </section>
      {/* MAIN FIRST LAYOUT SECTION ::END */}
      {/* LIVE BLOG SECTION ::START */}
      {categoryData.category_data && categoryData.category_data.length > 0 && (
        <Liveblogsection categoryId={categoryData.category_data[0].catID}  />
      )}
      {/* LIVE BLOG SECTION ::END */}
      {/* BE HARD SECTION ::START */}
      {["Mumbai", "News"].includes(categoryName) &&
        categoryData.category_data &&
        categoryData.category_data.length > 0 && (
          <div className="be-hard-section md-mb-0 mb-3">
            <div className="col-md-12 px-0 text-center pt-3">
              <div className={homecss.hardbg}>
                <h1 className={homecss.behardtext}>
                  Let Your Voice be Heard.
                  <button className={homecss.hardbtn}>Click Here</button>
                </h1>
              </div>
            </div>
          </div>
        )}
      {/* BE HARD SECTION ::END */}
      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}
      {/*  MOVIE REVIEWS SECTION START */}
      {["Entertainment"].includes(categoryName) &&
        categoryData.category_data &&
        categoryData.category_data.length > 0 && <Moviereviewsection />}
      {/* MOVIE REVIEWS SECTION END */}
      {/* Web Stories START */}
      {["Entertainment", "Celebrity Life"].includes(categoryName) &&
        categoryData.category_data &&
        categoryData.category_data.length > 0 && (
          <Webstorysection categoryName={categoryName} />
        )}
      {/* Web Stories END */}
      {/* PHOTOS LAYOUT START SLIDER COVER*/}
      {categoryName !== "Mumbai Guide" &&
        categoryData.photos_data &&
        categoryData.photos_data.length > 0 && (
          <Photosection
            categoryData={categoryData}
            categoryName={categoryName}
            isMobile={isMobile}
          />
        )}
      {/* PHOTOS LAYOUT END */}

      {/* OPTION LAYOUT START */}
      <Opinionsection />
      {/* OPTION LAYOUT END */}
      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}
      {/* Video section ::start */}
      {categoryData.videos_data && categoryData.videos_data.length > 0 && (
        <Videosection
          categoryData={categoryData}
          categoryName={categoryName}
          videoTagName={videoTagName}
        />
      )}
      {/* Video section ::end */}
      {/* Mumbai news */}
      {/* DESKTOP ADVERTISEMENT SECTION START */}
      <div className="adsmain d-none d-md-block">
        <p className={homecss.adspera}>ADVERTISEMENT</p>
        <div className="desktopAds d-flex justify-content-center">
          <div className={homecss.adspart}></div>
        </div>
      </div>
      {/* DESKTOP ADVERTISEMENT SECTION END */}

      {/* subcategory section not used for Hollywood_News/Television_News/Regional_Indian_Cinema_News/Parenting/Activism/Well_Being start */}
      {categoryName !== "Lifestyle" &&
        categoryData.subcategory_data &&
        Object.keys(categoryData.subcategory_data).length > 0 &&
        Object.keys(categoryData.subcategory_data)
          .filter(
            (subCategoryKey) =>
              subCategoryKey !== "Hollywood_News" &&
              subCategoryKey !== "Television_News" &&
              subCategoryKey !== "Regional_Indian_Cinema_News" &&
              subCategoryKey !== "Parenting" &&
              subCategoryKey !== "Activism" &&
              subCategoryKey !== "Well_Being"
          )
          .map(
            (subCategoryKey, index, array) =>
              categoryData.subcategory_data[subCategoryKey] &&
              categoryData.subcategory_data[subCategoryKey].length > 0 && (
                <Subcategorydesign_one
                  categoryData={categoryData}
                  categoryName={categoryName}
                  subCategoryKey={subCategoryKey}
                />
              )
          )}
      {/* subcategory section not used for Hollywood_News/Television_News/Regional_Indian_Cinema_News/Parenting/Activism/Well_Being end */}

      {/* subcategory section used for Hollywood_News/Television_News/Regional_Indian_Cinema_News/Parenting/Activism/Well_Being start */}
      {categoryName !== "Lifestyle" && categoryName !== "Mumbai" && (
      <div className={`${mainBgClass}`}>
        <div className="container pt-md-4 pt-3">
          <div className="row">
            {categoryName !== "Lifestyle" &&
              categoryData.subcategory_data &&
              Object.keys(categoryData.subcategory_data).length > 0 &&
              Object.keys(categoryData.subcategory_data)
                .filter(
                  (subCategoryKey) =>
                    subCategoryKey === "Hollywood_News" ||
                    subCategoryKey === "Television_News" ||
                    subCategoryKey === "Regional_Indian_Cinema_News" ||
                    subCategoryKey === "Parenting" ||
                    subCategoryKey === "Activism" ||
                    subCategoryKey === "Well_Being"
                )
                .map((subCategoryKey, index, array) => (
                  <Subcategorydesign_two
                    categoryData={categoryData}
                    categoryName={categoryName}
                    subCategoryKey={subCategoryKey}
                  />
                ))}
          </div>
        </div>
      </div>
      )}

      {/* subcategory section used for  Hollywood_News/Television_News/Regional_Indian_Cinema_News/Parenting/Activism/Well_Being end */}

      {/* subcategory section used for only lifestyle category start */}
      {categoryName === "Lifestyle" &&
        categoryData.subcategory_data &&
        Object.keys(categoryData.subcategory_data).length > 0 &&
        Object.keys(categoryData.subcategory_data).map(
          (subCategoryKey, index, array) => (
            <Subcategorydesign_three
              categoryData={categoryData}
              categoryName={categoryName}
              subCategoryKey={subCategoryKey}
            />
          )
        )}
      {/* subcategory section used for lifestyle category end */}
    </div>
  );
}

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
import Exclusive from "./rhsComponant/exclusive";

export default function subcategorydesign_one({
  categoryData,
  categoryName,
  subCategoryKey,
}) {
  const getStartRange = (key) => {
    if (
      key === "Diet" ||
      key === "Leisure" ||
      key === "Luxury" ||
      key === "Pawrenting" ||
      key === "Newsmakers" ||
      key === "Korean_Entertainment"
    ) {
      return 1; // Custom range for 'diet' and 'pawerting'
    }
    return 4; // Default range
  };
  const getEndRange = (key) => {
    if (
      key === "Diet" ||
      key === "Leisure" ||
      key === "Luxury" ||
      key === "Pawrenting" ||
      key === "Newsmakers" ||
      key === "Korean_Entertainment"
    ) {
      return 6; // Custom range for 'diet' and 'pawerting'
    }
    return 14; // Default range
  };
  return (
    <section className="subcategory" id={subCategoryKey}>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-9 lhselement category-right-border-desktop">
            <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
              <div className="left-inner-colm pb-0 mb-2 px-md-2">
                <h2 className="d-md-inline mr-md-3 main-heading">
                  <span className="main-headline-sidebar category-side-bar"></span>
                  <span className="px-md-3 px-2">
                    {subCategoryKey.replace(/_/g, " ")}
                  </span>
                </h2>
              </div>
              <div>
                <Link
                  href={`${categoryName.toLowerCase()}/${subCategoryKey
                    .replace(/_/g, "-")
                    .toLowerCase()}`}
                >
                  <Image src={cta} className="cta-position d-none d-md-block" />
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
                            <h1
                              className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                            >
                              {item.Homeheadline}
                            </h1>
                          </Link>
                          {/* <p>
                            <span className={homecss.updatate}>
                              {item.show_date_format}
                            </span>
                          </p> */}
                        </div>
                      ))}
                    {/* 1st part End */}
                    {/* 2nd part Start */}
                    {subCategoryKey !== "Diet" &&
                      subCategoryKey !== "Pawrenting" &&
                      subCategoryKey !== "Luxury" &&
                      subCategoryKey !== "Leisure" &&
                      subCategoryKey !== "Newsmakers" &&
                      subCategoryKey !== "Korean_Entertainment" &&
                      categoryData.subcategory_data[subCategoryKey]
                        .slice(1, 4)
                        .map((item, index) => (
                          <div className="row position-relative row-height-position">
                            <div className="col-9 mb-3 mb-md-0">
                              <Link href={item.URL}>
                                <h2
                                  className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                                >
                                  {item.Homeheadline}
                                </h2>
                              </Link>
                              {/* <p>
                                <span className={homecss.updatate}>
                                  {item.show_date_format}
                                </span>
                              </p> */}
                            </div>
                            <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                              <Link href={item.URL}>
                                <img
                                  src={item.Images.Image1}
                                  alt={item.image_caption}
                                  title={item.Homeheadline}
                                  className="border-radius-img"
                                />
                                {/* <Image
                                src={pauseicon}
                                className="pauseicon-small"
                                /> */}
                              </Link>
                            </div>
                          </div>
                        ))}
                    {/* 2nd part End */}
                    {/* 3rd part Start*/}
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
                              {categoryData.keywords[subCategoryKey].map(
                                (item, index) => (
                                  <div
                                    key={index}
                                    className="col-inline pe-0 ps-1"
                                  >
                                    <Link
                                      href={item.trending_keyword_master_url}
                                    >
                                      <button className="btn-white">
                                        #{item.trending_keyword_master_keyword}
                                      </button>
                                    </Link>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    {/* 3rd part End*/}
                  </div>
                  {/* First Section End */}
                  {/* Second Section Start */}
                  <div className="col-md-6 position-relative">
                    {categoryData.subcategory_data[subCategoryKey]
                      .slice(
                        getStartRange(subCategoryKey),
                        getEndRange(subCategoryKey)
                      )
                      .map((item, index) => (
                        <div className="row-pos">
                          <div className="row row-height-position-new">
                            <div className="col-9 mb-3 mb-md-2">
                              <Link href={item.URL}>
                                <h2
                                  className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                                >
                                  {item.ispaid === "Y" && (
                                    <img
                                      src="https://www.mid-day.com/assets/images/md-premium.png"
                                      className="md-premium-small mr-1"
                                    />
                                  )}
                                  {item.Homeheadline}
                                </h2>
                                {/* <p>
                                <span className={homecss.updatate}>
                                20 August,2024 10:00 AM IST
                                <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                                    {" "}
                                    | Dharmendra Jore
                                </Link>
                                </span>
                            </p> */}
                              </Link>
                            </div>
                            <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                              <Link href={item.URL}>
                                <img
                                  src={item.Images.Image1}
                                  alt={item.image_caption}
                                  title={item.Homeheadline}
                                  className="border-radius-img"
                                />
                                {/* <Image
                                src={pauseicon}
                                className="pauseicon-small"
                            /> */}
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  {/* Second Section End */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 rhselement pt-4">
            {/* Advertisement Start */}
            {[
              "Mumbai_Crime_News",
              "Ott_News",
              "Offbeat_News",
              "India_News",
              "World_News",
              "Other_Sports",
              "Fashion And Beauty News",
              "Culture_News",
              "Mumbai_Food",
              "Things_to_do",
              "Famous_Personalities",
              "Football",
              "Cricket",
              "Gadgets",
              "AI",
              "Tech_News",
              "Gaming",
              "Automobile",
              "Social",
              "Business_News",
              "Stock_Market",
              "Personal_Finance",
              "Real_Estate",
              "Telecom",
              "Bollywood_News",
              "Web_Series",
              "Hollywood_News",
              "Television_News",
              "Regional_Indian_Cinema_News",
              "Korean_Entertainment",
              "Weddings_And_Relationships",
              "Fashion_And_Beauty",
              "Pawrenting",
              "Newsmakers",
              "Diet",
              "Leisure",
              "Luxury",
            ].includes(subCategoryKey) && <Adds300x250 />}
            {/* Advertisement End */}

            {["Mumbai_News", "World_News"].includes(subCategoryKey) &&
              categoryData.category_data &&
              categoryData.category_data.length > 0 && (
                <MiddayImpact
                  categoryId={categoryData.category_data[0].catID}
                />
              )}

            {["Cricket"].includes(subCategoryKey) &&
              categoryData.category_data &&
              categoryData.category_data.length > 0 && (
                <Exclusive categoryId={categoryData.category_data[0].catID} />
              )}
            {[
              "Mumbai_News",
              "Bollywood_News",
              "India_News",
              "Football",
              "Weddings_And_Relationships",
              "Health_And_Fitness_News",
              "Tech_News",
              "Business_News",
            ].includes(subCategoryKey) && (
              <Quiz categoryId={categoryData.category_data[0].catID} />
            )}

            {[
              "Mumbai_Crime_News",
              "Ott_News",
              "Offbeat_News",
              "Other_Sports",
              "Fashion And Beauty News",
              "Culture_News",
              "Mumbai_Food",
              "Gadgets",
              "Stock_Market",
              "Web_Series",
              "Fashion_And_Beauty",
            ].includes(subCategoryKey) && (
              <Poll categoryId={categoryData.category_data[0].catID} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

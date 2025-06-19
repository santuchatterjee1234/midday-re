import React, { useState } from "react";
import homecss from "../../../styles/Home.module.css";
import Image from "next/image";
import batch from "../../../public/assets/images/batch.png";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import cta from "../../../public/assets/images/cta-mobile.png";
import trending from "../../../public/assets/images/trending.png";
import Link from "next/link";
function Entertainment({ data }) {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab.subCategoryKey);
  };
  return (
    <div className="container mb-3 mb-md-0 px-md-3">
      <div className="row">
        <div className="col-md-9 lhselement category-right-border-desktop ps-md-0">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
            <div className="left-inner-colm pb-0 mb-2 px-md-2">
              <h2 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar category-side-bar"></span>
                <span className="px-md-3 px-2">Entertainment</span>
              </h2>
            </div>
            <div className="">
              <Link href="/entertainment">
                <Image src={cta} className="cta-position" />
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 px-2">
              <ul
                className="nav nav-tabs category-nav-tabs mb-3 pb-1"
                id="style-4"
              >
                <div className="scrollbar"></div>
                {data.subcategory_data &&
                  Object.keys(data.subcategory_data).length > 0 &&
                  Object.keys(data.subcategory_data).map(
                    (subCategoryKey, index, array) => (
                      <li
                        className={
                          index === array.length - 1 ? "" : "nav-tabs-right"
                        }
                        key={subCategoryKey}
                      >
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => handleTabClick({ subCategoryKey })}
                          className={`mx-1 ${
                            activeTab === subCategoryKey
                              ? "category-active active-border-bottom"
                              : ""
                          }`}
                        >
                          {subCategoryKey.replace(/_/g, " ")}
                        </span>
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
          <div className="tab-content">
            {data.subcategory_data &&
              Object.keys(data.subcategory_data).length > 0 &&
              Object.keys(data.subcategory_data).map((subCategoryKey) => (
                <div
                  className={`tab-pane fade ${
                    activeTab === subCategoryKey ? "show active" : ""
                  }`}
                >
                  <div className="row">
                    {/* First Section Start */}
                    <div className="col-md-6 ps-md-4 pe-md-2 pt-md-1">
                      {/* 1st part start */}
                      {data.subcategory_data[subCategoryKey]
                        .slice(0, 1)
                        .map((item, index) => (
                          <div>
                            <Link href={item.URL}>
                              <div className="position-relative">
                                <img
                                  src={item.Images.Image1}
                                  alt={item.image_caption}
                                  title={item.Homeheadline}
                                  className="border-radius-img"
                                />
                                {/* <Image src={batch} className="batchimg-big" /> */}
                                {item.username === "Videos" && (
                                  <Image
                                    src={pauseicon}
                                    className="pauseicon-big"
                                  />
                                )}
                                {item.story_label != "" && (
                                  <span className="img-story-label-position-category">
                                    {item.story_label}
                                  </span>
                                )}
                                {item.username === "Photos" && (
                                  <Image
                                    src={camera}
                                    className="camera-position-small-repeat-category"
                                  />
                                )}
                              </div>
                              <h2
                                className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                              >
                                {item.Homeheadline}
                              </h2>
                            </Link>
                          </div>
                        ))}
                      {/* 1st part End */}
                      {/* 2nd part Start */}
                      {data.subcategory_data[subCategoryKey]
                        .slice(1, 4)
                        .map((item, index) => (
                          <div className="row pt-2 position-relative row-height-position">
                            <div className="col-9 mb-1">
                              <Link href={item.URL}>
                                <h2
                                  className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                                >
                                  {item.Homeheadline}
                                </h2>
                              </Link>
                            </div>
                            <div className="col-3 ps-0 mb-1 position-relative">
                              <Link href={item.URL}>
                                  <img
                                    src={item.Images.Image2}
                                    alt={item.image_caption}
                                    title={item.Homeheadline}
                                    className="border-radius-img"
                                  />
                                  {item.username === "Videos" && (
                                    <Image
                                      src={pauseicon}
                                      className="pauseicon-small"
                                    />
                                  )}
                              </Link>
                            </div>
                          </div>
                        ))}
                      {/* 2nd part End */}
                      {/* 3rd part Start*/}
                      {data.keywords[subCategoryKey] &&
                      data.keywords[subCategoryKey].length > 0 && (
                        <div className="trending-container px-0 pt-1 mb-3 mb-md-0">
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
                            <div className="trending-keywords-scroller">
                              {data.keywords[subCategoryKey].map(
                                (item, index) => (
                                  <div
                                    key={index}
                                    className="col-inline pe-0 ps-1"
                                  >
                                    <Link href={item.trending_keyword_master_url}>
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
                    {/* First Section Start */}
                    {/* Second Section Start */}
                    <div className="col-md-6 position-relative ">
                      {data.subcategory_data[subCategoryKey]
                        .slice(4, 14)
                        .map((item, index) => (
                          <div className="row-pos">
                            <div className="row row-height-position">
                              <div className="col-9 mb-3 mb-md-0">
                                <Link href={item.sub_cat_url}>
                                  <p className="subcategory-heading mb-0">
                                    {item.SubCategoryName}
                                  </p>
                                </Link>
                                <Link href={item.URL}>
                                  <h2
                                    className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2}`}
                                  >
                                    {item.ispaid === "Y" && (
                                      <img
                                        src="https://www.mid-day.com/assets/images/md-premium.png"
                                        className="md-premium-small"
                                      />
                                    )}
                                    {item.Homeheadline}
                                  </h2>
                                </Link>
                              </div>
                              <div className="col-3 ps-0 mb-3 mb-md-0 position-relative mb-3">
                                <Link href={item.URL}>
                                  <img
                                    src={item.Images.Image2}
                                    alt={item.image_caption}
                                    title={item.Homeheadline}
                                    className="pt-md-0 border-radius-img"
                                  />
                                  {item.username === "Videos" && (
                                    <Image
                                      src={pauseicon}
                                      className="pauseicon-small pt-1 pt-md-0"
                                    />
                                  )}
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    {/* Second Section Start */}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="col-md-3 rhselement pt-2 pt-md-3">
          {/* Advertisement Start */}
          <div className="row">
            <div className="col-md-12">
              <p className="advertisement-text text-center mt-1 mt-md-3 mb-0">
                ADVERTISEMENT
              </p>
              <div className="add-300x250 mx-auto text-center mb-3"></div>
            </div>
          </div>
          {/* Advertisement End */}
          {/* In This Week Start */}
          <div className="row">
            <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
              <div className="left-inner-colm pb-0 mb-2">
                <h2 className="d-md-inline mr-md-3 main-heading">
                  <span className="main-headline-sidebar"></span>
                  <span className="px-2">Sit With Hitlist</span>
                </h2>
              </div>
              <div className="">
                <Link href="">
                  <Image src={cta} className="cta-position" />
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              {data.rhs_data &&
                data.rhs_data.length > 0 &&
                data.rhs_data.map((item, index) => (
                  <div className="row row-height-position-repeat">
                    <div className="col-9 col-md-8">
                      <Link href={item.URL}>
                        <h2
                          className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2}`}
                        >
                          {item.Homeheadline}
                        </h2>
                      </Link>
                    </div>
                    <div className="col-3 col-md-4 ps-0 position-relative">
                      <Link href={item.URL}>
                        <img
                          src={item.Images.Image1}
                          alt={item.image_caption}
                          title={item.Homeheadline}
                          className="border-radius-img"
                        />
                        {/* <Image src={batch} className="batchimg-small-repeat" /> */}
                        <Image src={pauseicon} className="entertainment-pauseicon-small" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* In This Week End */}
        </div>
      </div>
    </div>
  );
}

export default Entertainment;

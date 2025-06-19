import React, { useState } from "react";
import homecss from "../../../styles/category.module.css";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import camera from "../../../public/assets/images/camera.png";
import trending from "../../../public/assets/images/trending.png";
export default function latestallsection({ categoryData }) {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <div className="tab-content">
      <div
        className={`tab-pane fade ${activeTab === "All" ? "show active" : ""}`}
      >
        <div className="row">
          {/* First Section Start */}
          <div className="col-md-6 px-md-4">
            {/* 1st part start */}
            {categoryData.category_data &&
              categoryData.category_data.length > 0 &&
              categoryData.category_data.slice(0, 1).map((item, index) => (
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
                      <Image src={pauseicon} className="pauseicon-big" />
                    )}
                    {item.username === "Photos" && (
                      <Image src={camera} className="camera-position-big" />
                    )}
                    {item.story_label != "" && (
                      <span className="img-story-label-position-category">
                        {item.story_label}
                      </span>
                    )}
                  </div>
                  <h1
                    className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2 mb-4`}
                  >
                    {item.Homeheadline}
                  </h1>
                </Link>
              ))}
            {/* 1st part End */}
            {/* 2nd part Start */}
            {categoryData.category_data &&
              categoryData.category_data.length > 0 &&
              categoryData.category_data.slice(1, 4).map((item, index) => (
                <div className="row position-relative row-height-position">
                  <div className="col-9 mb-1">
                    <Link href={item.URL}>
                      <p className="subcategory-heading mb-0">
                        {item.SubCategoryName}
                      </p>
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-1`}
                      >
                        {item.Homeheadline}
                      </h2>
                    </Link>
                  </div>
                  <div className="col-3 ps-0 mb-1">
                    <Link href={item.URL}>
                      <img
                        src={item.Images.Image2}
                        alt={item.image_caption}
                        title={item.Homeheadline}
                        className="border-radius-img"
                      />
                      {item.username === "Videos" && (
                        <Image src={pauseicon} className="pauseicon-small" />
                      )}
                    </Link>
                  </div>
                  {/* <p>
                        <span className={homecss.updatate}>
                        {item.show_date_format}
                        <Link href="https://www.mid-day.com/author-detail/dharmendra-jore-59-all">
                            | Dharmendra Jore
                        </Link> 
                        </span>
                    </p> */}
                </div>
              ))}
            {/* 2nd part End */}

            {/* 3rd part Start*/}
            {categoryData.keywords["All"] &&
              categoryData.keywords["All"].length > 0 && (
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
                      {categoryData.keywords["All"].map((item, index) => (
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
            {/* 3rd part End*/}
          </div>

          {/* First Section Start */}
          {/* Second Section Start */}

          <div className="col-md-6 position-relative">
            <div className="row-pos">
              {categoryData.category_data &&
                categoryData.category_data.length > 0 &&
                categoryData.category_data.slice(4, 12).map((item, index) => (
                  <div className="row row-height-position">
                    <div className="col-9 mb-3 mb-md-0">
                      <Link href={item.URL}>
                        <p className="subcategory-heading mb-0">
                          {item.SubCategoryName}
                        </p>
                        <h2
                          className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0`}
                        >
                          {item.ispaid == "Y" && (
                            <img
                              src="https://www.mid-day.com/assets/images/md-premium.png"
                              className="md-premium-small"
                            />
                          )}
                          {item.username === "Photos" && (
                            <Image
                              src={camera}
                              className="camera-position-new"
                            />
                          )}
                          <span>{item.Homeheadline}</span>
                        </h2>
                      </Link>
                    </div>
                    <div className="col-3 ps-md-0 mb-3 mb-md-0 position-relative">
                      <Link href={item.URL}>
                        <img
                          src={item.Images.Image2}
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
            </div>
          </div>
          {/* Second Section Start */}
        </div>
      </div>
    </div>
  );
}

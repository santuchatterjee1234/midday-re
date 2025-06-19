import React from "react";
import homecss from "../../../styles/Home.module.css";
import categorycss from "../../../styles/category.module.css";
import Image from "next/image";
import batch from "../../../public/assets/images/batch.png";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import cta from "../../../public/assets/images/cta-mobile.png";
import trending from "../../../public/assets/images/trending.png";
import camera from "../../../public/assets/images/camera.png";
import Link from "next/link";
import Quiz from "../commonComponent/quiz";
import Adds970x250 from "./rhsComponant/adds970x250";
import Adds300x250 from "./rhsComponant/adds300x250";
import Menubar from "./menubar";
function Latestnews({initialSubcategoryData, categoryName, subcategoryName}) {
  return (
    <div className="container px-md-0">
      <div className="row">
        <div className="col-md-9 lhselement category-right-border-desktop">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
            <div className="left-inner-colm pb-0 mb-2 px-md-2">
              <h2 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar category-side-bar"></span>
                <span className="px-md-3 px-2">{subcategoryName}</span>
              </h2>
            </div>
          </div>

          {/* Menubar Section Start */}
          <Menubar categoryName={categoryName} subcategoryName={subcategoryName} type='All'/>
          {/* Menubar Section Start */}

          <div className="row">
            {/* First Section Start */}
            <div className="col-md-6 ps-md-4 pe-md-2 pt-md-1">
              {/* 1st part start */}
              {initialSubcategoryData.subcategory_data &&
              initialSubcategoryData.subcategory_data.length > 0 &&
              initialSubcategoryData.subcategory_data.slice(0, 1).map((item, index) => (
              <Link href={item.URL}>
                <div className="position-relative">
                  <img
                    src={item.Images.Image1}
                    alt={item.image_caption}
                    title={item.Homeheadline}
                    className="border-radius-img"
                  />
                  {/* <Image src={batch} alt="batch" className="batchimg-big" />
                  <Image src={pauseicon} alt="pauseicon"  className="pauseicon-big" />
                  <Image
                    src={camera}
                    alt="camera"
                    className="camera-position-small-repeat-category"
                  /> */}
                  {item.story_label != "" && (
                      <span className="img-story-label-position-category">
                        {item.story_label}
                      </span>
                    )}
                </div>
                <h1
                  className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                >
                  {item.Homeheadline}
                </h1>
              </Link>
              ))}
              {/* 1st part End */}
              <div className="d-block d-md-none">
                <div className="row pt-3">
                  <div className="col-md-12">
                    <p className="advertisement-text text-center mt-md-3 mb-0">
                      ADVERTISEMENT
                    </p>
                    {/* 300*250 Add Start */}
                    <div className="d-block d-md-none">
                      <Adds300x250 />
                    </div>
                    {/* 300*250 Add End */}
                  </div>
                </div>
              </div>
              {/* 2nd part Start */}
              {initialSubcategoryData.subcategory_data &&
              initialSubcategoryData.subcategory_data.length > 0 &&
              initialSubcategoryData.subcategory_data.slice(1, 4).map((item, index) => (
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
                  <div className="col-3 ps-0 mb-1">
                    <Link href={item.URL}>
                      <div className="position-relative">
                        <img
                          src={item.Images.Image1}
                          alt={item.image_caption}
                          title={item.Homeheadline}
                          className="border-radius-img"
                        />
                        {/* <Image src={pauseicon} alt="pauseicon" className="pauseicon-small" />
                        <Image
                          src={camera}
                          alt="camera"
                          className="camera-position-small-repeat-icon"
                        /> */}
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
              {/* 2nd part End */}
              {/* 3rd part Start*/}
              {initialSubcategoryData.keywords["All"] &&
              initialSubcategoryData.keywords["All"].length > 0 && (
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
                      {initialSubcategoryData.keywords["All"].map((item, index) => (
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
            {/* First Section End */}
            {/* Second Section Start */}
            <div className="col-md-6 position-relative ">
            {initialSubcategoryData.subcategory_data &&
              initialSubcategoryData.subcategory_data.length > 0 &&
              initialSubcategoryData.subcategory_data.slice(4, 12).map((item, index) => (
              <div className="row-pos">
                <div className="row row-height-position">
                  <div className="col-9 mb-3 mb-md-0">
                    <Link href={item.URL}>
                      <span className="subcategory-heading mb-0">
                      {item.SubCategoryName}
                      </span>
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0 mb-md-0`}
                      >
                        {item.ispaid === "Y" && (
                          <img
                            src="https://www.mid-day.com/assets/images/md-premium.png"
                            alt="premium"
                            className="md-premium-small"
                          />
                        )}
                        {item.Homeheadline}
                      </h2>
                    </Link>
                  </div>
                  <div className="col-3 ps-0 mb-1">
                    <div className="position-relative">
                      <Link href={item.URL}>
                        <img
                          src={item.Images.Image1}
                          alt={item.image_caption}
                          title={item.Homeheadline}
                          className="border-radius-img"
                        />
                        {/* <Image src={pauseicon} alt="pauseicon" className="pauseicon-small" />
                        <Image
                          src={camera}
                          alt="camera"
                          className="camera-position-small-repeat-icon"
                        /> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
            {/* Second Section Start */}
          </div>
        </div>
        <div className="col-md-3 rhselement pt-2 pt-md-3">
          {/* Advertisement Start */}
          <div className="row">
            <div className="col-md-12">
              <p className="advertisement-text text-center mt-1 mt-md-4 mb-0">
                ADVERTISEMENT
              </p>
              <Adds300x250 />
            </div>
          </div>
          {/* Advertisement End */}
          {/* Quiz Start */}
          {initialSubcategoryData.subcategory_data &&
            initialSubcategoryData.subcategory_data.length > 0 && (
              <Quiz categoryId={initialSubcategoryData.subcategory_data[0].catID} />
          )}
          {/* Quiz End */}
        </div>
      </div>
      <div className="be-hard-section mt-5">
        <div className="col-md-12 px-0 text-center">
          <div className="col-md-12 px-0 text-center pt-3">
            <div className={categorycss.hardbg}>
              <h1 className={categorycss.behardtext}>
                Let Your Voice be Heard.
                <button className={categorycss.hardbtn}>Click Here</button>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-md-12">
          <p className="advertisement-text text-center mt-md-3 mb-0">
            ADVERTISEMENT
          </p>
          {/* 970*250 Add Start */}
          <div className="d-none d-md-block">
             <Adds970x250 />
          </div>
          {/* 970*250 Add End */}
          {/* 300*250 Add Start */}
            <div className="d-block d-md-none">
              <Adds300x250 />
            </div>
          {/* 300*250 Add End */}
        </div>
      </div>
    </div>
  );
}

export default Latestnews;

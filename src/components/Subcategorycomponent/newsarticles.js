import React, { useState, useEffect } from "react";
import homecss from "../../../styles/Home.module.css";
import categorycss from "../../../styles/category.module.css";
import Image from "next/image";
import batch from "../../../public/assets/images/batch.png";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import cta from "../../../public/assets/images/cta-mobile.png";
import trending from "../../../public/assets/images/trending.png";
import ctaMobile from "../../../public/assets/images/cta-mobile.png";
import Link from "next/link";
import axios from 'axios';
import { config } from '../../../next.config.js';
import Poll from "../commonComponent/poll";
function Newsarticles({categoryName, subcategoryName}) {
  const [newsArticleData, setNewsArticleData] = useState(null);
  useEffect(() => { 
      const fetchData = async () => {
          const category_name = categoryName.replaceAll('News', '').toLowerCase();
          const subcategory_name = subcategoryName.toLowerCase();
          try {
              let formatdata = new FormData();
              formatdata.append('category_name', category_name);
              formatdata.append('sub_category_name', subcategory_name);
              formatdata.append('flag', '');
              formatdata.append('cur', '12');
              formatdata.append('max', '12');
              const responseNewsArticle = await axios.post(`${config.API_HOST}getDataBySubCategorywise`, formatdata);
              setNewsArticleData(responseNewsArticle.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, [subcategoryName]); 
  return (
    <>
    {newsArticleData && newsArticleData['subcategory_data'] && newsArticleData['subcategory_data'].length > 0 && (
      <div className="container px-md-0 mb-5">
        <div className="row">
          <div className="col-md-9 lhselement category-right-border-desktop">
            <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
              <div className="left-inner-colm pb-0 mb-2 px-md-2">
                <h2 className="d-md-inline mr-md-3 main-heading">
                  <span className="main-headline-sidebar category-side-bar"></span>
                  <span className="px-md-3 px-2">{subcategoryName} Articles</span>
                </h2>
              </div>
              <div className="">
                <Link href={`/${categoryName.replaceAll(" ", "-").toLowerCase()}/${subcategoryName.replaceAll(" ", "-").toLowerCase()}/articles`}>
                  <Image src={cta} alt="cta-view" className="cta-position " />
                </Link>
              </div>
            </div>
            <div className="row">
              {/* First Section Start */}
              <div className="col-md-6 ps-md-4 pe-md-2 pt-md-1">
                {/* 1st part start */}
                {newsArticleData['subcategory_data'] &&
                newsArticleData['subcategory_data'].length > 0 &&
                newsArticleData['subcategory_data'].slice(0, 1).map((item, index) => (
                <Link href={item.URL}>
                  <div className="position-relative">
                    <img
                      src={item.Images.Image1}
                      alt={item.image_caption ? item.image_caption : item.Homeheadline} 
                      title={item.Homeheadline}
                      className="border-radius-img"
                    />
                    {/* <Image src={batch} className="batchimg-big" />
                    <Image src={pauseicon} className="pauseicon-big" />
                    <Image
                      src={camera}
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
                {/* 2nd part Start */}
                {newsArticleData['subcategory_data'] &&
                newsArticleData['subcategory_data'].length > 0 &&
                newsArticleData['subcategory_data'].slice(1, 4).map((item, index) => (
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
                      <div className="position-relative">
                        <Link href={item.URL}>
                          <img
                            src={item.Images.Image1}
                            alt={item.image_caption ? item.image_caption : item.Homeheadline} 
                            title={item.Homeheadline}
                            className="border-radius-img"
                          />
                          {/* <Image src={pauseicon} className="pauseicon-small" />
                          <Image
                            src={camera}
                            className="camera-position-small-repeat-icon"
                          /> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                {/* 2nd part End */}
                {/* 3rd part Start*/}
                {newsArticleData.keywords["All"] &&
                newsArticleData.keywords["All"].length > 0 && (
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
                        {newsArticleData.keywords["All"].map((item, index) => (
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
                  {newsArticleData['subcategory_data'] &&
                  newsArticleData['subcategory_data'].length > 0 &&
                  newsArticleData['subcategory_data'].slice(4, 12).map((item, index) => (
                  <div className="row-pos">
                    <div className="row row-height-position">
                      <div className="col-9 mb-3 mb-md-0">
                        <Link href={item.URL}>
                          <p className="subcategory-heading mb-0">
                          {item.SubCategoryName}
                          </p>
                          <h2
                            className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 pt-md-0 mb-md-0`}
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
                      <div className="col-3 ps-0 mb-1">
                        <div className="position-relative">
                          <Link href={item.URL}>
                            <img
                              src={item.Images.Image1}
                              alt={item.image_caption ? item.image_caption : item.Homeheadline} 
                              title={item.Homeheadline}
                              className="border-radius-img"
                            />
                            {/* <Image src={pauseicon} className="pauseicon-small" />
                            <Image
                              src={camera}
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
                <div className="add-300x250 mx-auto text-center mb-3"></div>
              </div>
            </div>
            {/* Advertisement End */}
            {/* POll Start */}
            {newsArticleData['subcategory_data'] &&
            newsArticleData['subcategory_data'].length > 0 && (
              <Poll categoryId={newsArticleData['subcategory_data'][0].catID} />
            )}
            {/* Poll End */}
          </div>
        </div>
      </div>
    )}
    </>
  );
}

export default Newsarticles;

import React, { useState, useEffect } from 'react';
import homecss from "../../../styles/Home.module.css";
import categorycss from "../../../styles/category.module.css";
import Image from "next/image";
import batch from "../../../public/assets/images/batch.png";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import cta from "../../../public/assets/images/cta-mobile.png";
import trending from "../../../public/assets/images/trending.png";
import Link from "next/link";
import axios from 'axios';
import { config } from '../../../next.config.js';
import Adds300x250 from "./rhsComponant/adds300x250.js";
import Tagwisevideo from "./rhsComponant/tagwisevideo.js";
function Videos({categoryName, subcategoryName, subcategoryId}) {
  const [subcategoryVideosData, setSubcategoryVideosData] = useState(null);
  useEffect(() => { 
      const fetchData = async () => {
          try {
              let formatdata = new FormData();
              formatdata.append('subcategory_id', subcategoryId);
              const responseSubcategoryVideos = await axios.post(`${config.API_HOST}getDataPhotosVideosBySubCategorywise`, formatdata);
              setSubcategoryVideosData(responseSubcategoryVideos.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, [subcategoryId]); 
  return (
    <>
    {subcategoryVideosData && subcategoryVideosData.videos_data && subcategoryVideosData.videos_data.length > 0 && (
      <div className="container px-md-0 mb-5">
        <div className="row">
          <div className="col-md-9 lhselement category-right-border-desktop">
            <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
              <div className="left-inner-colm pb-0 mb-2 px-md-2">
                <h2 className="d-md-inline mr-md-3 main-heading">
                  <span className="main-headline-sidebar category-side-bar"></span>
                  <span className="px-md-3 px-2">{subcategoryName} Videos</span>
                </h2>
              </div>
              <div className="">
                <Link href={`/${categoryName.replaceAll(" ", "-").toLowerCase()}/${subcategoryName.replaceAll(" ", "-").toLowerCase()}/videos`}>
                  <Image src={cta}  alt="cta-view" className="cta-position " />
                </Link>
              </div>
            </div>
            <div className="row">
              {/* First Section Start */}
              <div className="col-md-6 ps-md-4 pe-md-2 pt-md-1">
                {/* 1st part start */}
                {subcategoryVideosData.videos_data &&
                subcategoryVideosData.videos_data.length > 0 &&
                subcategoryVideosData.videos_data.slice(0,1).map((item, index) => (
                <Link href={item.URL}>
                  <div className="position-relative">
                    <img
                      src={item.Images.Image1}
                      alt={item.image_caption ? item.image_caption : item.Homeheadline} 
                      title={item.Homeheadline}
                      className="border-radius-img"
                    />
                    {/* <Image src={batch} className="batchimg-big" /> */}
                    <Image src={pauseicon} alt="pauseicon" className="pauseicon-big" />
                    {item.story_label === "Y" && (
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
                {subcategoryVideosData.videos_data &&
                subcategoryVideosData.videos_data.length > 0 &&
                subcategoryVideosData.videos_data.slice(1,2).map((item, index) => (
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
                        src={item.Images.Image1}
                       alt={item.image_caption ? item.image_caption : item.Homeheadline} 
                        title={item.Homeheadline}
                        className="border-radius-img"
                      />
                      <Image src={pauseicon} alt="pauseicon" className="pauseicon-small" />
                    </Link>
                  </div>
                </div>
                ))}
                {/* 2nd part End */}
              </div>
              {/* First Section End */}
              {/* Second Section Start */}
              <div className="col-md-6 position-relative ">
              {subcategoryVideosData.videos_data &&
                subcategoryVideosData.videos_data.length > 0 &&
                subcategoryVideosData.videos_data.slice(2,7).map((item, index) => (
                <div className="row-pos">
                  <div className="row row-height-position">
                    <div className="col-9 mb-3 mb-md-0">
                      <Link href={item.URL}>
                        <h2
                          className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 mb-md-0`}
                        >
                          {item.Homeheadline}
                        </h2>
                      </Link>
                    </div>
                    <div className="col-3 ps-0 mb-1 position-relative">
                      <Link href={item.URL}>
                        <img
                          src={item.Images.Image1}
                          alt={item.image_caption ? item.image_caption : item.Homeheadline} 
                          title={item.Homeheadline}
                          className="border-radius-img"
                        />
                        <Image
                          src={pauseicon}
                          alt="pauseicon"
                          className="pauseicon-small pt-1 pt-md-0"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              </div>
              {/* Second Section Start */}
            </div>
          </div>
          <div className="d-block d-md-none">
              <div className="row pt-4">
                <div className="col-md-12">
                    <p className="advertisement-text text-center mt-md-3 mb-0">
                    ADVERTISEMENT
                    </p>
                    {/* 300*250 Add Start */}
                    <div className="d-block d-md-none">
                      <Adds300x250/>
                    </div>
                    {/* 300*250 Add End */}
                </div>
              </div>
          </div>
          <div className="col-md-3 rhselement pt-2 pt-md-4 mt-md-1">
              <Tagwisevideo subcategoryId={subcategoryId} videoTagName = 'Video IP' />
          </div>
        </div>
      </div>
    )}
    </>
  );
}

export default Videos;

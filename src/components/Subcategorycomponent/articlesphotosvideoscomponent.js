import React, { useState, useEffect } from "react";
import homecss from "../../../styles/Home.module.css";
import Image from "next/image";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import camera from "../../../public/assets/images/camera.png";
import Link from "next/link";
import Quiz from "../commonComponent/quiz";
import Poll from "../commonComponent/poll";
import Menubar from "./menubar";
import InfiniteScroll from 'react-infinite-scroll-component'; 
import axios from 'axios';
import { config } from '../../../next.config.js';
function Articlesphotosvideoscomponent({initialSubcategoryListingData, categoryName, subcategoryName, type}) {
  const [newsData, setNewsData] = useState(initialSubcategoryListingData.subcategory_data);
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = async () => {
    try {
      const formatdata = new FormData();
      const category_name = categoryName.replaceAll('News', '').toLowerCase();
      const subcategory_name = subcategoryName.toLowerCase();
      formatdata.append('category_name', category_name);
      formatdata.append('sub_category_name', subcategory_name);
      formatdata.append('flag', type); 
      formatdata.append("cur", newsData.length);
      formatdata.append('max', '12');
      const response = await axios.post(`${config.API_HOST}getDataBySubCategorywise`, formatdata);
      if (typeof response.data !== "function") {
        const newData = response.data;
        if (newData.subcategory_data.length === 0) {
          setHasMore(false);
          return;
        }
        setNewsData([...newsData, ...newData.subcategory_data]);
      } else {
        console.error("Response data is not in the expected format.");
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  // Sticky start
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;

      const stickyAds = document.getElementById("sticky-ads");
      if (scrollY > 1000 && offsetHeight - scrollY - innerHeight > 500) {
        stickyAds.classList.add("sticky_sticked");
      } else {
        stickyAds.classList.remove("sticky_sticked");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Sticky End
  return (
    <div className="container px-md-0">
      <div className="row">
        <div className="col-md-9 lhselement category-right-border-desktop">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
            <div className="left-inner-colm pb-0 mb-2 px-md-2">
              <h2 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar category-side-bar"></span>
                <span className="px-md-3 px-2">
                {type === 'Articles' && `Read ${subcategoryName}`}
                {type === 'Photos' && `${subcategoryName} Photos`}
                {type === 'Videos' && `${subcategoryName} Videos`}
                {type === 'Live Blogs' && `${subcategoryName} Live Blogs`}
                </span>
              </h2>
            </div>
          </div>
          {/* Menubar Section Start */}
           <Menubar categoryName={categoryName} subcategoryName={subcategoryName} type={type}/>
          {/* Menubar Section Start */}

          {/* 1St Position Start */}
          <div className="row">
            {/* First Section Start */}
            <div className="col-md-6 ps-md-4 pe-md-2 pt-md-1">
              {/* 1st part start */}
              {newsData &&
              newsData.length > 0 &&
              newsData.slice(0, 1).map((item, index) => (
                <>
                  <Link href={item.URL}>
                    <div className="position-relative">
                      <img
                        src={item.Images.Image1}
                        alt={item.image_caption ? item.image_caption : item.Homeheadline} 
                        title={item.Homeheadline}
                        className="border-radius-img"
                      />
                      {/* <Image src={batch} className="batchimg-big" /> */}
                      {type === "Videos" && (
                        <Image src={pauseicon} alt="pauseicon" className="pauseicon-big" />
                      )}
                      {type === "Photos" && (
                      <Image
                        src={camera}
                        alt="camera"
                        className="camera-position-small-repeat-category"
                      />
                      )}
                      {item.story_label !== "" && (
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
                  <Link href={item.URL}>
                    <div className="mb-2 d-none d-md-block">
                      <p className="lineclamp-position">{item.Description}</p>
                    </div>
                  </Link>
                  <p className='date-time-loc-pos my-0 d-none d-md-block' style={{color: '#777777'}}>
                    <span>{item.show_date_format} {item.location ? ` | ${item.location}` : ''}</span>
                    {item.byline !== "" && (
                      <span className='date-time-loc-color' style={{color: '#777777'}}> | {item.byline}</span>
                    )}
                  </p>
                </>
              ))}
              {/* 1st part End */}
              <div className="d-block d-md-none">
                <div className="row pt-3">
                  <div className="col-md-12">
                    <p className="advertisement-text text-center mt-md-3 mb-0">
                      ADVERTISEMENT
                    </p>
                    {/* 300*250 Add Start */}
                    <div className="add-300x250 mx-auto text-center mb-3 d-block d-md-none"></div>
                    {/* 300*250 Add End */}
                  </div>
                </div>
              </div>
            </div>
            {/* First Section End */}
            {/* Second Section Start */}
            <div className="col-md-6">
              <div className="row mb-1">
                {newsData &&
                newsData.length > 0 &&
                newsData.slice(1, 3).map((item, index) => (
                  <div className="col-6 mb-2">
                    <Link href={item.URL}>
                      <div className="position-relative">
                        <img
                          src={item.Images.Image1}
                          alt={item.image_caption ? item.image_caption : item.Homeheadline} 
                          title={item.Homeheadline}
                          className="border-radius-img"
                       />
                        {/* <Image src={batch} className='batchimg-small'/> */}
                        {type === "Videos" && (
                          <Image src={pauseicon} alt="pauseicon" className="pauseicon-medium" />
                        )}
                      </div>
                      <div className="position-relative">
                        {type === "Photos" && (
                          <Image
                            src={camera}
                            alt="camera"
                            className="camera-position-small-repeat"
                          />
                        )}
                        {item.story_label !== "" && (
                        <span className="img-story-label-position-medium">
                          {item.story_label}
                        </span>
                        )}
                      </div>
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 mb-1`}
                      >
                       {item.Homeheadline}
                      </h2>
                    </Link>
                    <p className='date-time-loc-pos my-0 d-none d-md-block' style={{color: '#777777'}}>
                      <span>{item.show_date_format} {item.location ? ` | ${item.location}` : ''}</span>
                      {item.byline !== "" && (
                      <span className='date-time-loc-color' style={{color: '#777777'}}> | {item.byline}</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
              <div className="row mb-1">
                {newsData &&
                newsData.length > 0 &&
                newsData.slice(3, 5).map((item, index) => (
                  <div className="col-6 mb-2">
                    <Link href={item.URL}>
                      <div className="position-relative">
                        <img
                          src={item.Images.Image1}
                          alt={item.image_caption ? item.image_caption : item.Homeheadline} 
                          title={item.Homeheadline}
                          className="border-radius-img"
                       />
                        {/* <Image src={batch} className='batchimg-small'/> */}
                        {type === "Videos" && (
                          <Image src={pauseicon}  alt="pauseicon" className="pauseicon-medium" />
                        )}
                      </div>
                      <div className="position-relative">
                        {type === "Photos" && (
                          <Image
                            src={camera}
                            alt="camera"
                            className="camera-position-small-repeat"
                          />
                        )}
                        {item.story_label !== "" && (
                        <span className="img-story-label-position-medium">
                          {item.story_label}
                        </span>
                        )}
                      </div>
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2 mb-1`}
                      >
                       {item.Homeheadline}
                      </h2>
                    </Link>
                    <p className='date-time-loc-pos my-0 d-none d-md-block' style={{color: '#777777'}}>
                      <span>{item.show_date_format} {item.location ? ` | ${item.location}` : ''}</span>
                      {item.byline !== "" && (
                      <span className='date-time-loc-color' style={{color: '#777777'}}> | {item.byline}</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Second Section Start */}
          </div>
          {/* 1St Position End */}
          {/* 2nd Position Start */}
          <InfiniteScroll
            dataLength={newsData.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b className="color">No More Content</b>
              </p>
            }
          >
            {newsData.slice(5).map((item, index) => (
              <div className="row pt-4">
                <div className="col-8 poster ps-md-4">
                  <Link href={item.URL}>
                    <h2 className="article-title pt-md-0 pt-3">
                      {item.Homeheadline}
                    </h2>
                  </Link>
                  <div className="d-none d-md-block">
                    <Link href={item.URL}>
                    <p className="mb-2 articles-shortdescription">{item.Description}</p>
                    </Link>
                    <p className='date-time-loc-pos my-0' style={{color: '#777777'}}>
                      <span> {item.show_date_format} {item.location ? ` | ${item.location}` : ''}</span>
                      {item.byline !== "" && (
                      <span className='date-time-loc-color' style={{color: '#777777'}}> | {item.byline}</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-4 ps-0 ps-md-3">
                  <Link href={item.URL}>
                    <div className="position-relative">
                      <img
                        src={item.Images.Image1}
                        alt={item.image_caption ? item.image_caption : item.Homeheadline} 
                        title={item.Homeheadline}
                        className="border-radius-img"
                      />
                      {/* <Image src={batch} className="batchimg-big" /> */}
                      {type === "Videos" && (
                      <Image src={pauseicon} alt="pauseicon" className="pauseicon-big" />
                      )}
                      {type === "Photos" && (
                      <Image
                        src={camera}
                        alt="camera"
                        className="camera-position-small-repeat-category camera-position-small-article"
                      />
                      )}
                      {item.story_label !== "" && (
                      <span className="img-story-label-position-category">
                        {item.story_label}
                      </span>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </InfiniteScroll>
          {/* 2nd Position End */}
          
        </div>
        <div className="col-md-3 rhselement pt-2 pt-md-3">
          {/* Advertisement Start */}
          <div className="row">
            <div className="col-md-12">
              <p className="advertisement-text text-center mt-1 mt-md-4 mb-0">
                ADVERTISEMENT
              </p>
              <div className="add-300x250 mx-auto text-center mb-3" style={{width: '100% !important'}}></div>
            </div>
          </div>
          {/* Advertisement End */}
          {/* Quiz Start */}
          {newsData &&
            newsData.length > 0 && (
            <Quiz categoryId={newsData[0].catID} />
          )}
          {/* Quiz End */}
          {/* Advertisement Start */}
          <div className="row">
            <div className="col-md-12">
              <p className="advertisement-text text-center mt-1 mt-md-4 mb-0">
                ADVERTISEMENT
              </p>
              <div className="add-300x250 mx-auto text-center mb-3" style={{width: '100% !important'}}></div>
            </div>
          </div>
          {/* Advertisement End */}
          {/* POll Start */}
          <div className="sticky_sticked stick-desktop" id="sticky-ads">
            {newsData &&
              newsData.length > 0 && (
              <Poll categoryId={newsData[0].catID} />
            )}
          </div>
          {/* Poll End */}
        </div>
      </div>
    </div>
  );
}

export default Articlesphotosvideoscomponent;

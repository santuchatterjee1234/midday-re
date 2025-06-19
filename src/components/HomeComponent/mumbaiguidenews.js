import React, { useState } from 'react';
import homecss from '../../../styles/Home.module.css'
import Image from 'next/image'
import batch from '../../../public/assets/images/batch.png'
import pauseicon from '../../../public/assets/images/pauseicon.png'
import cta from '../../../public/assets/images/cta-mobile.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
function Mumbaiguidenews({data}) {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab) => {
    setActiveTab(tab.subCategoryKey);
  };
  return (
    <div className='container pb-3 pb-md-1 px-md-3'>
      <div className='row'>
        <div className='col-md-9 lhselement category-right-border-desktop-repeat ps-md-0'>
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
            <div className="left-inner-colm pb-0 mb-2 px-md-1">
              <h2 className="d-md-inline mr-md-3 main-heading"><span className='main-headline-sidebar category-side-bar'></span><span className='px-md-3 px-2'>Mumbai Guide News</span></h2>
            </div>
            <div className="">
              <Link href="/mumbai-guide">
                <Image src={cta} className='cta-position'/>
              </Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 px-md-1 px-2'>
              <ul className="nav nav-tabs category-nav-tabs mb-3 pb-2">
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
            <div className={`tab-pane fade ${activeTab === subCategoryKey ? 'show active' : ''}`}>
              {/* Desktop Start */}
              <div className='d-none d-md-block'>
                <div className='row'> 
                  {/* First Section Start */}
                  {data.subcategory_data[subCategoryKey].slice(0, 4).map((item, index) => (
                    <div className='col-md-6 ps-md-4 pt-md-1'>
                      <p className="subcategory-heading mb-1">{item.SubCategoryName}</p>
                      <div className='position-relative'>
                        <Link href={item.URL}>
                           <img src={item.Images.Image1} alt={item.image_caption} title={item.Homeheadline} className="border-radius-img"/>
                        </Link>
                        {/* <Image src={batch} className='batchimg-big'/> */}
                        {item.username === "Videos" && (           
                          <Image src={pauseicon} className='pauseicon-big'/> 
                        )} 
                        <Link href={item.URL}>
                        <h1 className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}>
                          {item.Homeheadline}
                        </h1>
                        </Link>
                      </div>
                    </div>
                  ))}
                  {/* First Section End */}
                </div>
              </div>
               {/* Desktop End */}
               {/* Mobile Start */}
              <div className='d-block d-md-none'>
                <Swiper
                  slidesPerView={1}
                  pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="homeopinionsSwiper pb-4">
                  {data.subcategory_data[subCategoryKey].map((item, index) => (
                    <SwiperSlide>
                      <p className="subcategory-heading mb-2">{item.SubCategoryName}</p>
                      <div className='position-relative'>
                        <Link href={item.URL}>
                          {/* <Image src={batch} className='batchimg-big'/> */}
                          <img src={item.Images.Image1} alt={item.image_caption} title={item.Homeheadline} className="border-radius-img"/>    
                          <Image src={pauseicon} className='pauseicon-big'/> 
                          <h1 className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}>
                            {item.Homeheadline}
                          </h1>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Mobile End */}
            </div>
           ))}
          </div>
        </div>
        <div className='col-md-3 rhselement pt-2'>
          {/* Advertisement Start */}
          <div className='row'>
            <div className='col-md-12'>
              <p className="advertisement-text text-center mt-1 mt-md-5 pt-md-4 mb-0">ADVERTISEMENT</p>
              <div className="add-300x250 mx-auto text-center mb-3"></div>
            </div>
          </div>
          {/* Advertisement End */}
          {/* Mid-Day Impact Start */}
          {data.rhs_data && data.rhs_data.length > 0 && (
            <div className='row'>
              <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                <div className="left-inner-colm pb-0 mb-2">
                  <h2 className="d-md-inline mr-md-3 main-heading"><span className='main-headline-sidebar'></span><span className='px-2'>Mid-Day Impact</span></h2>
                </div>
                {/* <div className="">
                  <Link href="">
                    <Image src={cta} className='cta-position'/>
                  </Link>
                </div> */}
              </div>
              <div className='col-md-12 ps-4 pe-0'>
                <div className='row pb-2 mid-day-impact-bacground pt-4'>
                  {data.rhs_data.map((item, index) => (
                    <div className='col-12 mb-2'>
                      <Link href={item.URL}>
                        <h2 className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2}`}>
                          {item.ispaid === "Y" && (
                            <img src="https://www.mid-day.com/assets/images/md-premium.png" className='md-premium'/>
                          )} 
                          {item.Homeheadline}
                        </h2>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Mid-Day Impact End */}
        </div>
      </div>
      <div className='row d-none d-md-block'>
        <div className='col-md-12'>
          <p className="advertisement-text text-center mt-md-5 mt-4 pt-md-4 mb-0">ADVERTISEMENT</p>
          {/* 970*250 Add Start */}
          <div className="add-970x250 mx-auto text-center mb-2"></div>
          {/* 970*250 Add End */}
        </div>
      </div>
    </div>
  )
}

export default Mumbaiguidenews;
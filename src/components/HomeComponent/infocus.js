import React , { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import homecss from '../../../styles/Home.module.css'
import Image from 'next/image'
import batch from '../../../public/assets/images/batch.png'
import pauseicon from '../../../public/assets/images/pauseicon.png'
import camera from '../../../public/assets/images/camera.png';
import cta from '../../../public/assets/images/cta-mobile.png'
import Link from 'next/link'
// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
function Infocus({data}) {
  return (
    <div className='container mb-3 px-md-3'>
      <div className='row'>
        <div className='col-md-9 lhselement right-border-desktop'>
          <div className='row pt-4 pt-md-0'> 
            <div className='col-md-6 pe-md-2'>
              {data.priority_data && data.priority_data.length > 0 && data.priority_data.slice(0, 1).map((item, index) => (
                <div key={index}>
                  <div className='position-relative'>
                    <Link href={item.URL}>
                      <img 
                        src={item.Images?.Image1 || '/path/to/placeholder.jpg'} 
                        alt={item.image_caption || 'Default caption'} 
                        title={item.Homeheadline || 'Default caption'} 
                        className="border-radius-img"
                      />        
                      {/* <Image src={batch} className='batchimg-big'/> */}
                      {item.username === 'Videos' && (
                      <Image src={pauseicon} className='pauseicon-big'/> 
                      )}
                      <h1 className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}>
                        {item.username === 'Live Blogs' && ( 
                          <span className={`${homecss.catagoryIcon2} ${homecss.liveblopos} me-0`}></span> 
                        )} 
                        {item.Homeheadline}
                      </h1>
                    </Link>
                  </div>
                  <div className='position-relative'> 
                    {item.username === 'Photos' && (
                      <Image src={camera} className="camera-position-small-repeat"/>
                    )}
                    {item.story_label != '' && (
                      <span className="img-story-label-position">{item.story_label}</span>
                    )}
                  </div>
                </div> 
              ))}
              {/*Mobile Advertisement Start */}
              <div className='row d-block d-md-none'>
                <div className='col-md-12'>
                  <p className="advertisement-text text-center mt-1 mb-0">ADVERTISEMENT</p>
                  <div className="add-300x250 mx-auto text-center mb-3"></div>
                </div>
              </div>
              {/*Mobile Advertisement End */}
              {data.priority_data && data.priority_data.length > 0 &&  data.priority_data.slice(1, 5).map((item, index) => (
                <div className='row py-1 infocus-height-position'>
                  <div className='col-9'>
                    <Link href={item.URL}>
                      <h2 className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-md-2`}> 
                        {item.username === 'Live Blogs' && ( 
                        <span className={`${homecss.catagoryIcon2} ${homecss.liveblopos} me-2`}></span> 
                        )}
                        {item.Homeheadline} 
                      </h2>
                    </Link>
                  </div>
                  <div className='col-3 ps-0'>
                    <div className='position-relative'>
                      <Link href="{item.URL}"> 
                        <img src={item.Images.Image2} alt={item.image_caption} title={item.Homeheadline} className="border-radius-img"/>
                        {item.username === 'Videos' && (
                        <Image src={pauseicon} className='pauseicon-small'/> 
                        )}
                        {item.username === 'Photos' && (
                        <Image src={camera} className="camera-position-small-repeat"/>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* Opnions Start */}
              {data.opinion_data && data.opinion_data.length > 0 && (
                <div className='row px-2 ps-md-3 mb-md-0 mb-3 mt-2 mt-md-1'>
                  <div className='col-md-12 opinions-background-pos'>
                    <div className='row py-2'>
                      <div className="d-flex justify-content-between align-items-center pt-2 pb-md-0 tab-header">
                        <div className="left-inner-colm pb-0 mb-2">
                          <h2 className="d-md-inline mr-md-3 main-heading"><span className='main-headline-sidebar'></span><span className='px-2'>Opinions</span></h2>
                        </div>
                        <div className="">
                          <Link href="">
                            <Image src={cta} className='cta-position'/>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <Swiper
                          slidesPerView={1}
                          pagination={{
                          dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="homeopinionsSwiper pb-4">
                          {data.opinion_data.map((item, index) => (
                          <SwiperSlide>
                            <div className='row'>
                              <div className='col-6 pe-0'>
                                <Link href={item.URL}>
                                  <h2 className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp3} font`} style={{fontWeight: 'bold'}}> {item.Homeheadline}</h2>
                                </Link>
                              </div>
                              <div className='col-6'>
                                <div className={`${homecss.opinionborderpos} row p-1`}>
                                  <div className='col-4 ps-md-0 mb-0 position-relative px-0'>
                                    <Link href={item.URL}>
                                      <img src={item.Author_Images.Image1} alt={item.image_caption} title={item.Homeheadline} className={homecss.opinionimg}/>
                                    </Link>
                                  </div>
                                  <div className='col-8 px-md-0'>
                                    <p className={homecss.opinionmaintitle}>{item.author_coloum}</p> 
                                    <p className={homecss.opinionmainname}>{item.author_name}</p> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Opinions End */}
            </div>
            <div className='col-md-6'>
              <div className='row '>
                {data.priority_data && data.priority_data.length > 0 && data.priority_data.slice(5, 13).map((item, index) => (
                  <div className='col-6 mb-2'>
                    <Link href={item.URL}>
                      <div className='position-relative'>
                        <img alt={item.Homeheadline} title={item.Homeheadline} className="border-radius-img" src={item.Images.Image2}/>
                        {/* <Image src={batch} className='batchimg-small'/> */}
                        {item.username === 'Videos' && (
                        <Image src={pauseicon} className='pauseicon-medium'/> 
                        )}
                      </div>
                      <div className='position-relative'>
                        {item.username === 'Photos' && (
                        <Image src={camera} className="camera-position-small-repeat"/>
                        )}
                        {item.story_label != '' && (
                        <span className="img-story-label-position-medium">{item.story_label}</span>
                        )}
                      </div>
                      <h2 className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}> 
                        {item.username === 'Live Blogs' && (
                          <span className={`${homecss.catagoryIcon2} ${homecss.liveblopos} me-2`}></span> 
                        )}
                        {item.Homeheadline} </h2>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 rhselement pt-2'>
          {/* Advertisement Start */}
          <div className='row'>
            <div className='col-md-12'>
              <p className="advertisement-text text-center mt-1 mb-0">ADVERTISEMENT</p>
              <div className="add-300x250 mx-auto text-center mb-3"></div>
            </div>
          </div>
          {/* Advertisement End */}
          {/* Exclusives Start */}
          {data.rhs_data && data.rhs_data.length > 0 && (
            <div className='row'>
              <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                <div className="left-inner-colm pb-0 mb-2">
                  <h2 className="d-md-inline mr-md-3 main-heading"><span className='main-headline-sidebar'></span><span className='px-2'>Exclusive</span><img src="https://www.mid-day.com/assets/images/md-premium.png" className='md-premium'/></h2>
                </div>
                <div className="">
                  <Link href="/midday-premium/">
                    <Image src={cta} className='cta-position'/>
                  </Link>
                </div>
              </div>
              <div className='col-md-12 py-1 exclusive-background-pos' style={{background: '#FFFBE7'}}>
                {data.rhs_data.map((item, index) => (
                  <div className='row py-1 pb-md-0 infocus-height-position'>
                    <div className='col-9 col-md-8'>
                      <Link href={item.URL}>
                        <h2 className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}> <span>
                        <img src="https://www.mid-day.com/assets/images/md-premium.png" className='md-premium'/></span>{item.Homeheadline}</h2>
                      </Link>
                    </div>
                    <div className='col-3 col-md-4 ps-0 position-relative'>
                      <Link href={item.URL}>
                        <img src={item.Images.Image2} alt={item.image_caption}  title={item.Homeheadline}  className="border-radius-img"/>
                        {item.username === 'Photos' && (
                          <Image src={camera} className="camera-position-small-right"/>
                        )}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Exclusives End */}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <p className="advertisement-text text-center mt-4 pt-md-4 mb-0">ADVERTISEMENT</p>
          {/* 970*250 Add Start */}
          <div className="add-970x250 mx-auto text-center mb-2 d-none d-md-block"></div>
          {/* 970*250 Add End */}
          {/* 300*250 Add Start */}
          <div className="add-300x250 mx-auto text-center mb-3 d-block d-md-none"></div>
          {/* 300*250 Add End */}
        </div>
      </div>
    </div>
  )
}

export default Infocus
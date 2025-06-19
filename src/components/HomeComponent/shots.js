// components/MidDayNewsSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/fontawesome-free-solid";
import {faFacebook, faLinkedin, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image'
import ctamobile from '../../../public/assets/images/cta-mobile.png'
import Link from 'next/link'
import { extractIdFromUrl } from "../../../utils/commonFunction";
// Initialize Swiper modules
// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards'
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import required modules
import { EffectCards } from 'swiper/modules';
const Shots = ({data}) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
  return (
    <div className='shots'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 px-0'>
                    <div className="slider-container horoscope shotsswiper mb-3 mb-md-0 ps-3">
                        <div className="d-flex justify-content-between align-items-center pt-2 tab-header">
                            <div className="left-inner-colm pb-0 mb-2">
                                <h2 className="d-md-inline mr-md-3 main-heading"><span className='main-headline-sidebar'></span><span className='px-2'>Mid-Day News In-Shots</span></h2>
                            </div>
                            <div className="">
                                <Link href="text-shots/">
                                <Image src={ctamobile} className='cta-position'/>
                                </Link>
                            </div>
                        </div>
                        {/* <Desktop Start */}
                        <div className='d-none d-md-block'>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={3}
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                // navigation={{
                                //     prevEl: '.swiper-button-prev',
                                //     nextEl: '.swiper-button-next',
                                // }}
                                breakpoints={{
                                // When the viewport width is <= 768px (mobile devices)
                                0: {
                                    slidesPerView: 1, // Show 3 slides per view on mobile
                                    // spaceBetween: 10, // Optional: Adjust space between slides for mobile
                                },
                                // When the viewport width is > 768px (tablets and desktops)
                                    769: {
                                        slidesPerView:  3, // Show 5 slides per view on desktop
                                        spaceBetween: 20, // Adjust space between slides for desktop
                                    },
                                }}
                                modules={[Pagination]}
                                className="shotsSwiper pb-5">
                                {data.inshots_data && data.inshots_data.length > 0 && data.inshots_data.map((item, index) => (
                                <SwiperSlide>
                                    <div className="slide-card">
                                        <h3 className="slide-title">{capitalizeFirstLetter(item.CategoryName)}</h3>
                                        <p className="slide-content">{item.Homeheadline}</p>
                                        <Link href={item.URL} className="slide-link">Click To Read</Link>
                                        <div className="slide-share">
                                            <FontAwesomeIcon icon={faShareAlt} />
                                            <div className="share-options">
                                                <div className="share-social-icon">
                                                    <ul className="social-icons-inline social-icons-inline-repeat d-inline-block">
                                                        <li>
                                                            <Link href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(item.URL)}`}>
                                                                <FontAwesomeIcon icon={faFacebook} />
                                                            </Link>
                                                        </li>
                                                        <li> 
                                                            <Link href={`https://api.whatsapp.com/send?text=${encodeURIComponent(item.URL)}`} className="share-btn whatsapp">
                                                                <FontAwesomeIcon icon={faWhatsapp} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`https://twitter.com/share?url=${encodeURIComponent(item.URL)}`} className="new-twitter-size-black">
                                                                <FontAwesomeIcon icon={faXTwitter} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(item.URL)}`}>
                                                                <FontAwesomeIcon icon={faLinkedin} />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               ))}
                            </Swiper>
                            {/* Prev and Next buttons */}
                            {/* <div className="swiper-button-prev d-none d-md-block" style={{position: 'absolute', top: '10px', left: '10px'}}></div>
                            <div className="swiper-button-next d-none d-md-block" style={{position: 'absolute', top: '10px', right: '10px'}}></div> */}
                        </div>
                        <div className='d-block d-md-none pe-2 cardparent'>
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards, Pagination]}
                                className="cardSwiper pb-4"
                                pagination={{
                                    dynamicBullets: true,
                                }}>
                                {data.inshots_data && data.inshots_data.length > 0 && data.inshots_data.map((item, index) => (
                                <SwiperSlide>
                                    <div className="slide-card">
                                        <h3 className="slide-title">{capitalizeFirstLetter(item.CategoryName)}</h3>
                                        <p className="slide-content">{item.Homeheadline}</p>
                                        <Link href={item.URL} className="slide-link">Click To Read</Link>
                                        <div className="slide-share">
                                            <FontAwesomeIcon icon={faShareAlt} />
                                            <div className="share-options">
                                                <div className="share-social-icon">
                                                    <ul className="social-icons-inline social-icons-inline-repeat d-inline-block">
                                                        <li>
                                                            <Link href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(item.URL)}`}>
                                                                <FontAwesomeIcon icon={faFacebook} />
                                                            </Link>
                                                        </li>
                                                        <li> 
                                                            <Link href={`https://api.whatsapp.com/send?text=${encodeURIComponent(item.URL)}`} className="share-btn whatsapp">
                                                                <FontAwesomeIcon icon={faWhatsapp} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`https://twitter.com/share?url=${encodeURIComponent(item.URL)}`} className="new-twitter-size-black">
                                                                <FontAwesomeIcon icon={faXTwitter} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(item.URL)}`}>
                                                                <FontAwesomeIcon icon={faLinkedin} />
                                                            </Link>
                                                        </li>
                                                    </ul>
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
        </div>
    </div>
  );
};

export default Shots;

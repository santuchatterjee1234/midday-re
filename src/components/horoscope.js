import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import aries from "../../public/assets/images/aries.png"
import taurus from "../../public/assets/images/taurus.png"
import gemini from "../../public/assets/images/gemini.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Horoscope = () => {
    const [expanded, setExpanded] = useState({
        daily: false,
        weekly: false,
        monthly: false,
    });

    // Toggle description expansion for a specific tab
    const toggleDescription = (tab) => {
        setExpanded((prevState) => ({
            ...prevState,
            [tab]: !prevState[tab],  // Toggle the specific tab's expanded state
        }));
    };

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className='col-md-8'></div>
                    <div className="col-md-4">
                        <div className="horoscope-header my-3">
                            <h2>Horoscope</h2>
                        </div>

                        <div className="horoscope-container">
                            {/* Swiper Container for Zodiac Cards (Slider) */}
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination]}
                                spaceBetween={5}
                                slidesPerView={2}
                                navigation
                                pagination={{ clickable: true, dynamicBullets: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                className='horoscopeHome'
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,  // For tablets and up
                                        spaceBetween: 0
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div class="horoscope-card">
                                        <Image src={aries} alt='Aries' />
                                        <div className='horoscope-name'>
                                            <p>Aries</p>
                                        </div>
                                        <div className='horoscope-date-time'>
                                            <p>Mar 21 - Apr 19</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="horoscope-card">
                                        <Image src={taurus} alt='Taurus' />
                                        <div className='horoscope-name'>
                                            <p>Taurus</p>
                                        </div>
                                        <div className='horoscope-date-time'>
                                            <p>Mar 21 - Apr 19</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="horoscope-card">
                                        <Image src={gemini} alt='Gemini' />
                                        <div className='horoscope-name'>
                                            <p>Gemini</p>
                                        </div>
                                        <div className='horoscope-date-time'>
                                            <p>Mar 21 - Apr 19</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="horoscope-card">
                                        <Image src={taurus} alt='Taurus' />
                                        <div className='horoscope-name'>
                                            <p>Taurus</p>
                                        </div>
                                        <div className='horoscope-date-time'>
                                            <p>Mar 21 - Apr 19</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            {/* Pills for Daily, Weekly, Monthly (Separate from Swiper) */}
                            <div className="horoscope-footer">
                                <ul className="nav nav-pills border-bottom" id="horoscopeTabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <Link className="nav-link active" id="daily-tab" data-bs-toggle="pill" href="#daily" role="tab" aria-controls="daily" aria-selected="true">Daily</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link className="nav-link" id="weekly-tab" data-bs-toggle="pill" href="#weekly" role="tab" aria-controls="weekly" aria-selected="false">Weekly</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link className="nav-link" id="monthly-tab" data-bs-toggle="pill" href="#monthly" role="tab" aria-controls="monthly" aria-selected="false">Monthly</Link>
                                    </li>
                                </ul>
                                <div className="tab-content" id="horoscopeTabsContent">
                                    <div className="tab-pane fade show active" id="daily" role="tabpanel" aria-labelledby="daily-tab">
                                        <p className="mt-3 horoscope-description">
                                            Today emphasizes the power of consistent effort over fleeting success in all aspects
                                            of life.Whether in love, career, or finances, steady discipline yields lasting
                                            results.Prioritize routine and avoid distractions, trusting that your consistent actions are
                                            building a strong foundation for your future.
                                            <span className={expanded.daily ? 'extra-content expanded' : 'extra-content'}>
                                                Keep your focus and avoid any sudden moves that could derail your progress. This is a
                                                great time to build a steady momentum for the coming days. Stay disciplined, and
                                                things will fall into place.</span>
                                            <span href="#" className="read-more-btn" onClick={() => toggleDescription('daily')}>{expanded.daily ? 'Read Less' : 'Read More'}</span>
                                        </p>
                                    </div>
                                    <div className="tab-pane fade" id="weekly" role="tabpanel" aria-labelledby="weekly-tab">
                                        <p className="mt-3 horoscope-description">
                                            This week brings the opportunity to slow down and reflect. Take time for
                                            introspection, and consider how you can further develop your skills. Your long-term goals are in focus, and the effort you put in now will pay off in the coming months.
                                            <span className={expanded.weekly ? 'extra-content expanded' : 'extra-content'}>
                                                Your patience will be tested, but the reward will be worth it. Focus on building
                                                your skills, whether professionally or personally, and avoid distractions. This is a
                                                week of personal growth.
                                            </span>
                                            <span href="#" className="read-more-btn" onClick={() => toggleDescription('weekly')}>{expanded.weekly ? 'Read Less' : 'Read More'}</span>
                                        </p>
                                    </div>
                                    <div className="tab-pane fade" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                                        <p className="mt-3 horoscope-description">
                                            The month ahead promises growth in both personal and professional areas. Focus on
                                            balancing your ambition with patience. Relationships may require more effort, but the rewards
                                            will be worth it. Keep an eye on your health and wellness.
                                            <span className={expanded.monthly ? 'extra-content expanded' : 'extra-content'}>
                                                Your relationships will need more attention, and you may feel pulled in
                                                different directions. It's important to stay balanced and focused on your long-term goals.
                                            </span>
                                            <span href="#" className="read-more-btn" onClick={() => toggleDescription('monthly')}>{expanded.monthly ? 'Read Less' : 'Read More'}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Horoscope;

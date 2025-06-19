import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import Link from "next/link";
// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function Latestpodcast() {
  return (
    <div className="container mb-2 px-md-0">
      <div
        className="row ms-md-2"
        style={{ borderRadius: "0px", backgroundColor: "#FBF3EC" }}
      >
        <div className="mt-4 ps-md-1">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header mb-0">
            <div className="left-inner-colm pb-0">
              <h2 className="d-md-inline mr-md-3 main-heading mb-0">
                <span className="main-headline-sidebar category-side-bar"></span>
                <span className="px-md-3 px-2">Latest Podcast</span>
              </h2>
            </div>
          </div>
          {/* Swiper Slider Start */}
          <Swiper
            slidesPerView={4} // Default for larger screens
            spaceBetween={20}
            pagination={{
              dynamicBullets: true,
            }}
            breakpoints={{
              // When the viewport width is <= 768px (mobile devices)
              0: {
                slidesPerView: 2, // Show 3 slides per view on mobile
                spaceBetween: 10, // Optional: Adjust space between slides for mobile
              },
              // When the viewport width is > 768px (tablets and desktops)
              769: {
                slidesPerView: 4, // Show 5 slides per view on desktop
                spaceBetween: 20, // Adjust space between slides for desktop
              },
            }}
            modules={[Pagination]}
            className="homewebstoriesSwiper pb-4 ms-md-2 mb-md-0 mb-3"
          >
            <SwiperSlide>
              <div className="my-3">
                <Link href="">
                  <div className="position-relative">
                    <img
                      alt="The Healthy Gossip"
                      title="The Healthy Gossip"
                      className=""
                      src="https://images.mid-day.com/images/images/2022/may/sonialulla-main_l.jpg"
                    />
                    <Image src={pauseicon} className="pauseicon-big"/>
                  </div>
                  <p style={{ color: "#2B2B2B" }} className="pt-2">
                    The Healthy Gossip
                  </p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-3">
                <Link href="">
                  <div className="position-relative">
                    <img
                      alt="The Healthy Gossip"
                      title="The Healthy Gossip"
                      className=""
                      src="https://images.mid-day.com/images/images/2022/may/sonialulla-main_l.jpg"
                    />
                    <Image src={pauseicon} className="pauseicon-big"/>
                  </div>
                  <p style={{ color: "#2B2B2B" }} className="pt-2">
                    The Healthy Gossip
                  </p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-3">
                <Link href="">
                  <div className="position-relative">
                    <img
                      alt="The Healthy Gossip"
                      title="The Healthy Gossip"
                      className=""
                      src="https://images.mid-day.com/images/images/2022/may/sonialulla-main_l.jpg"
                    />
                    <Image src={pauseicon} className="pauseicon-big"/>
                  </div>
                  <p style={{ color: "#2B2B2B" }} className="pt-2">
                    The Healthy Gossip
                  </p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-3">
                <Link href="">
                  <div className="position-relative">
                    <img
                      alt="The Healthy Gossip"
                      title="The Healthy Gossip"
                      className=""
                      src="https://images.mid-day.com/images/images/2022/may/sonialulla-main_l.jpg"
                    />
                    <Image src={pauseicon} className="pauseicon-big"/>
                  </div>
                  <p style={{ color: "#2B2B2B" }} className="pt-2">
                    The Healthy Gossip
                  </p>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Swiper Slider End */}
        </div>
      </div>
      {/* Advertisement Start */}
      <div className="row pt-3 pt-md-0">
        <div className="col-md-12">
          <p className="advertisement-text text-center mt-4 mb-0">ADVERTISEMENT</p>
          {/* 970*250 Add Start */}
          <div className="add-970x250 mx-auto text-center mb-2 d-none d-md-block"></div>
          {/* 970*250 Add End */}
          {/* 300*250 Add Start */}
          <div className="add-300x250 mx-auto text-center mb-3 d-block d-md-none"></div>
          {/* 300*250 Add End */}
        </div>
      </div>
      {/* Advertisement End */}
    </div>
  );
}

export default Latestpodcast;

import React, { useEffect } from "react";
import homecss from "../../../styles/Home.module.css";
import Image from "next/image";
import cta from "../../../public/assets/images/cta-mobile.png";
import Link from "next/link";
import ctaMobile from "../../../public/assets/images/cta-mobile.png";
import whatsapp from "../../../public/assets/images/whatsapp-icon.png";
import facebook from "../../../public/assets/images/facebook-icon.png";
import twitter from "../../../public/assets/images/twitter-icon.png";
import followus from "../../../public/assets/images/followus-icon.png";

function Webstories() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;

      const stickyAds = document.getElementById("sticky-ads");
      if (scrollY > 750 && offsetHeight - scrollY - innerHeight > 500) {
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
  return (
    <div className="container mb-5 px-md-0">
      <div className="row ms-md-2">
        <div className="col-md-9 lhselement desktop-border">
          <div className="ps-md-1">
            <div className="row justify-content-between align-items-center pb-md-0 tab-header">
              <div className="col-md-6 pb-0 px-md-1">
                <h2 className="d-md-inline mr-md-3 main-heading">
                  <span className="main-headline-sidebar category-side-bar"></span>
                  <span className="px-md-3 px-2">Web Stories</span>
                </h2>
              </div>
              <div className="col-md-6 text-right-pos">
                <p className="mb-0">
                    <span style={{color: '#000000'}}>Share:</span>
                    <a href="" className="px-2">
                        <Image src={whatsapp} className=""/>
                    </a>
                    <a href="" className="px-2">
                        <Image src={facebook} className=""/>
                    </a>
                    <a href="" className="px-2">
                        <Image src={twitter} className=""/>
                    </a>
                    <a href="" className="px-2">
                        <Image src={followus} className=""/>
                    </a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-6 my-3">
                <a href="https://www.mid-day.com/web-stories/mohammed-shami-likely-to-play-in-ranji-trophy-3995">
                  <div className="bg-white rounded shortbox">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/shamire_ws.jpg"
                        alt="Shami likely to play in Ranji Trophy"
                        title="Shami likely to play in Ranji Trophy"
                        className="shorts-image"
                      />
                      <i className="imageovericon"></i>
                    </div>

                    <h6 className="m-2 webstories-lineclamp">
                      Shami likely to play in Ranji Trophy
                    </h6>
                    <p className="text px-2 text-secondary mb-2 webstories-month-pos">
                      59 minutes ago
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 rhselement">
          {/* Advertisement Start */}
          <div className="row">
            <div className="col-md-12">
              <p className="advertisement-text text-center mt-1 mt-md-0 mb-0">
                ADVERTISEMENT
              </p>
              <div className="add-300x250 mx-auto text-center mb-3"></div>
            </div>
          </div>
          {/* Advertisement End */}
          {/* POll Start */}
          <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header px-0">
            <div className="left-inner-colm pb-0 mb-2">
              <h2 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar"></span>
                <span className="px-2">Poll</span>
              </h2>
            </div>
            <div>
              <Link href="">
                <Image src={cta} className="cta-position d-none d-md-block" />
                <Image
                  src={ctaMobile}
                  className="cta-position d-block d-md-none"
                />
              </Link>
            </div>
          </div>
          <div className={`${homecss.borderMain} border py-2 px-2`}>
            <h2 className="pollPera">
              Do you support the immediate implementation of the Hawkers Policy
              to regulate street vending in Mumbai?
            </h2>

            <div className="row align-items-center">
              <div className="col-md-1 col-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
              </div>
              <div
                className="col-md-10 col-10  mx-2 mb-3 py-2"
                style={{ border: "1px solid #46C1F2" }}
              >
                <div className="progressHead d-flex justify-content-between">
                  <span className={homecss.progressheadpera}>Yes</span>
                  <span className={homecss.progresspercent}> 80%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "80%",
                      backgroundColor: "rgb(36, 83, 167)",
                    }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-1 col-1">
                <input
                  type="radio"
                  className="form-check-input"
                  name="flexRadioDefault"
                />
              </div>
              <div
                className="col-md-10 col-10  mx-2 mb-3 py-2"
                style={{ border: "1px solid #46C1F2" }}
              >
                <div className="progressHead d-flex justify-content-between">
                  <span className={homecss.progressheadpera}>No</span>
                  <span className={homecss.progresspercent}> 80%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "80%",
                      backgroundColor: "rgb(36, 83, 167)",
                    }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-1 col-1">
                <input
                  type="radio"
                  className="form-check-input"
                  name="flexRadioDefault"
                />
              </div>
              <div
                className="col-md-10 col-10  mx-2 mb-3 py-2"
                style={{ border: "1px solid #46C1F2" }}
              >
                <div className="progressHead d-flex justify-content-between">
                  <span className={homecss.progressheadpera}>Maybe</span>
                  <span className={homecss.progresspercent}> 80%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "80%",
                      backgroundColor: "rgb(36, 83, 167)",
                    }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* Poll End */}
          {/* Quiz Start */}
          <div className="sticky_sticked" id="sticky-ads">
            <div className="row pt-3">
              <div className="d-flex justify-content-between align-items-center pt-2 tab-header">
                <div className="left-inner-colm pb-0 mb-2">
                  <h2 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar"></span>
                    <span className="px-2">Quiz</span>
                  </h2>
                </div>
                <div className="">
                  <Link href="">
                    <Image src={cta} className="cta-position" />
                  </Link>
                </div>
              </div>
              <div className="col-md-12">
                <div className="border text-center p-3">
                  <p className={homecss.categoryquizepera}>
                    Pride Month: How much do
                  </p>
                  <p className={homecss.categoryquizepera}>you know of Mumbai's</p>
                  <p className={homecss.categoryquizepera}>LGBTQIA+ legacy?</p>
                  <button className={homecss.categoryplaynow}>Play Now</button>
                </div>
              </div>
            </div>
          </div>
          {/* Quiz End */}
        </div>
      </div>
    </div>
  );
}

export default Webstories;

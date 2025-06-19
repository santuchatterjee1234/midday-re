import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import pauseicon from "../../../public/assets/images/pauseicon.png";

function Podcastdetailcomponent() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;

      const stickyAds = document.getElementById("sticky-ads");
      if (scrollY > 250 && offsetHeight - scrollY - innerHeight > 500) {
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
    <div className="container mb-5">
      <div className="row pt-3">
        <div className="col-md-9 lhselement desktop-border">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header mb-0">
            <div className="left-inner-colm pb-0">
              <h2 className="d-md-inline mr-md-3 main-heading podcast-main-heading mb-0">
                <span className="podcast-main-headline-sidebar main-headline-sidebar category-side-bar mx-0"></span>
                <span className="px-2">Mid-day's Mumbai Cricket Podcast</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 mt-2 px-3">
              <div className="img2">
                <img
                  alt="Mid-day's Mumbai Cricket Podcast"
                  title="Mid-day's Mumbai Cricket Podcast"
                  className=""
                  src="https://images.mid-day.com/images/images/2021/aug/Clyton-cricket-podcast-showimage_d.jpg"
                />
              </div>
            </div>
            <div className="col-md-5 mt-2">
              <p className="podcast-main-description mb-2">
                Mumbai's most loved cricketers, coaches, selectors, and
                well-wishers get candid with Mid-day's Sports Editor, Clayton
                Murzello about their experiences on and off the field, trials
                and triumphs, and their unconditional love for the game.
              </p>
              <p className="mb-2">Total Episodes : 30</p>
              <p style={{ fontSize: "14px" }}>
                <span>By </span>
                <span className="">
                  <Link href="" className="author-name">
                    Clayton Murzello
                  </Link>
                  <span className=""></span>
                </span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 episodeparent pt-2">
              <Link href="">
                <div className="card p-3 mb-3">
                  <div className="col-md-11">
                    <p
                      className="mb-2"
                      style={{ color: "#E50018", fontSize: "12px" }}
                    >
                      Episode 30
                    </p>
                    <p className="podcast-title-size mb-2">
                      Mid-day’s Mumbai Cricket Podcast with Clayton Murzello ft.
                      former Mumbai University and Mumbai U-22 cricketer, Hemant
                      Kenkre
                    </p>
                    <p className="podcast-description mb-2">
                      Sachin Tendulkar’s first senior division Kanga League
                      captain, Hemant Kenkre, who represented Sassanian CC and
                      Cricket.
                    </p>
                    <p className="podcast-date-titme mb-0">
                      30 August,2024 03:53 PM IST | Mumbai
                    </p>
                  </div>
                  <div className="col-md-1 poisition-relative">
                    <Image src={pauseicon} className="podcast-pauseicon" />
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="card p-3 mb-3">
                  <div className="col-md-11">
                    <p
                      className="mb-2"
                      style={{ color: "#E50018", fontSize: "12px" }}
                    >
                      Episode 30
                    </p>
                    <p className="podcast-title-size mb-2">
                      Mid-day’s Mumbai Cricket Podcast with Clayton Murzello ft.
                      former Mumbai University and Mumbai U-22 cricketer, Hemant
                      Kenkre
                    </p>
                    <p className="podcast-description mb-2">
                      Sachin Tendulkar’s first senior division Kanga League
                      captain, Hemant Kenkre, who represented Sassanian CC and
                      Cricket.
                    </p>
                    <p className="podcast-date-titme mb-0">
                      30 August,2024 03:53 PM IST | Mumbai
                    </p>
                  </div>
                  <div className="col-md-1 poisition-relative">
                    <Image src={pauseicon} className="podcast-pauseicon" />
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="card p-3 mb-3">
                  <div className="col-md-11">
                    <p
                      className="mb-2"
                      style={{ color: "#E50018", fontSize: "12px" }}
                    >
                      Episode 30
                    </p>
                    <p className="podcast-title-size mb-2">
                      Mid-day’s Mumbai Cricket Podcast with Clayton Murzello ft.
                      former Mumbai University and Mumbai U-22 cricketer, Hemant
                      Kenkre
                    </p>
                    <p className="podcast-description mb-2">
                      Sachin Tendulkar’s first senior division Kanga League
                      captain, Hemant Kenkre, who represented Sassanian CC and
                      Cricket.
                    </p>
                    <p className="podcast-date-titme mb-0">
                      30 August,2024 03:53 PM IST | Mumbai
                    </p>
                  </div>
                  <div className="col-md-1 poisition-relative">
                    <Image src={pauseicon} className="podcast-pauseicon" />
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="card p-3 mb-3">
                  <div className="col-md-11">
                    <p
                      className="mb-2"
                      style={{ color: "#E50018", fontSize: "12px" }}
                    >
                      Episode 30
                    </p>
                    <p className="podcast-title-size mb-2">
                      Mid-day’s Mumbai Cricket Podcast with Clayton Murzello ft.
                      former Mumbai University and Mumbai U-22 cricketer, Hemant
                      Kenkre
                    </p>
                    <p className="podcast-description mb-2">
                      Sachin Tendulkar’s first senior division Kanga League
                      captain, Hemant Kenkre, who represented Sassanian CC and
                      Cricket.
                    </p>
                    <p className="podcast-date-titme mb-0">
                      30 August,2024 03:53 PM IST | Mumbai
                    </p>
                  </div>
                  <div className="col-md-1 poisition-relative">
                    <Image src={pauseicon} className="podcast-pauseicon" />
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="card p-3 mb-3">
                  <div className="col-md-11">
                    <p
                      className="mb-2"
                      style={{ color: "#E50018", fontSize: "12px" }}
                    >
                      Episode 30
                    </p>
                    <p className="podcast-title-size mb-2">
                      Mid-day’s Mumbai Cricket Podcast with Clayton Murzello ft.
                      former Mumbai University and Mumbai U-22 cricketer, Hemant
                      Kenkre
                    </p>
                    <p className="podcast-description mb-2">
                      Sachin Tendulkar’s first senior division Kanga League
                      captain, Hemant Kenkre, who represented Sassanian CC and
                      Cricket.
                    </p>
                    <p className="podcast-date-titme mb-0">
                      30 August,2024 03:53 PM IST | Mumbai
                    </p>
                  </div>
                  <div className="col-md-1 poisition-relative">
                    <Image src={pauseicon} className="podcast-pauseicon" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 rhselement px-0">
          <div className="sticky_sticked" id="sticky-ads">
            <div className="row">
              <div className="stickysidebar">
                <div className="col-md-12">
                  {/* Advertisement Start */}
                  <p className="advertisement-text text-center">
                    ADVERTISEMENT
                  </p>
                  {/* 300*250 Add Start */}
                  <div className="add-300x250 mx-auto text-center mb-3"></div>
                  {/* Advertisement End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcastdetailcomponent;

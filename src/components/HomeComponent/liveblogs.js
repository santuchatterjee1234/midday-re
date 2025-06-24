import homecss from "../../../styles/Home.module.css";
import Image from "next/image";
import cta from "../../../public/assets/images/cta-mobile.png";
import Link from "next/link";

function LiveBlogs() {
  return (
    <div className="container mb-3 px-md-0">
      <section className="liveBlog">
        <div className="container">
          <div className="row">
            <div className="col-md-9 lhselement">
              <div className={homecss.liveBlogbg} style={{ background: 'none !important' }}>
                <div className="d-flex justify-content-between align-items-center pb-0 pt-4 tab-header border-bottom mb-3">
                  <div className={`${homecss.leftinnercolm} left-inner-colm pb-0 mb-2 px-md-1 px-0`}>
                    <h2 className="d-md-inline main-heading">
                      <span className="main-headline-sidebar"></span>
                      <span className="mt-2 px-2">Live Blogs</span>
                    </h2>
                    <Link href="/live-blog/sample-url">
                      <Image src={cta} className={`${homecss.ctaposition} cta-position`} style={{ top: '0px' }} />
                    </Link>
                  </div>
                </div>

                <div>
                  <h2 className="d-md-inline mr-md-3 main-heading ps-1">
                    <span className={`${homecss.catagoryIconslide} ${homecss.liveblopos}`}></span>
                    <span className={`${homecss.liveblogmainheadingmobile} liveblogheadingpos px-md-3 px-2`}>
                      Thug hife movie review and box office collection live updates: Kamal Haasan and Silambarasan likely to have 20 crore opening
                    </span>
                  </h2>
                </div>
                <div className="row pe-md-5">
                  {/* Static Data for Swiper Slides */}
                  <div className="liveBlogpart pt-md-4 col-md-3 pe-md-0">
                    <Link href="/live-blog/sample-url">
                      <div className="Opinionspart px-2">
                        <div className="row">
                          <div className="position-relative pe-1">
                            <div className="liveborder d-flex align-items-baseline">
                              <p className={homecss.borderrightSide}></p>
                            </div>
                            <div className={`${homecss.liveblogheight} position-relative`}>
                              <span className={homecss.catagoryIconslide}></span>
                              <div className={homecss.liveblogtextpos}>
                                <p
                                  className={`${homecss.blogPera} pb-3 ps-0 ms-1 ${homecss.liveblogclamp}`}
                                >
                                  How these residential areas are battling mosquito menace round the year
                                </p>
                                <span className={`${homecss.dating} ps-1`}>
                                  6 minutes ago
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="liveBlogpart pt-md-4 col-md-3 pe-md-0">
                    <Link href="/live-blog/sample-url">
                      <div className="Opinionspart px-2">
                        <div className="row">
                          <div className="position-relative pe-1">
                            <div className="liveborder d-flex align-items-baseline">
                              <p className={homecss.borderrightSide}></p>
                            </div>
                            <div className={`${homecss.liveblogheight} position-relative`}>
                              <span className={homecss.catagoryIconslide}></span>
                              <div className={homecss.liveblogtextpos}>
                                <p
                                  className={`${homecss.blogPera} pb-3 ps-0 ms-1 ${homecss.liveblogclamp}`}
                                >
                                  How these residential areas are battling mosquito menace round the year
                                </p>
                                <span className={`${homecss.dating} ps-1`}>
                                  10 minutes ago
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Additional Static Swiper Slides */}
                  <div className="liveBlogpart pt-md-4 col-md-3 pe-md-0">
                    <Link href="/live-blog/sample-url">
                      <div className="Opinionspart px-2">
                        <div className="row">
                          <div className="position-relative pe-1">
                            <div className="liveborder d-flex align-items-baseline">
                              <p className={homecss.borderrightSide}></p>
                            </div>
                            <div className={`${homecss.liveblogheight} position-relative`}>
                              <span className={homecss.catagoryIconslide}></span>
                              <div className={homecss.liveblogtextpos}>
                                <p
                                  className={`${homecss.blogPera} pb-3 ps-0 ms-1 ${homecss.liveblogclamp}`}
                                >
                                  How these residential areas are battling mosquito menace round the year
                                </p>
                                <span className={`${homecss.dating} ps-1`}>
                                  15 minutes ago
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="liveBlogpart pt-md-4 col-md-3 pe-md-0">
                    <Link href="/live-blog/sample-url">
                      <div className="Opinionspart px-2">
                        <div className="row">
                          <div className="position-relative pe-1">
                            <div className="liveborder d-flex align-items-baseline">
                              <p className={homecss.borderrightSide}></p>
                            </div>
                            <div className={`${homecss.liveblogheight} position-relative`}>
                              <span className={homecss.catagoryIconslide}></span>
                              <div className={homecss.liveblogtextpos}>
                                <p
                                  className={`${homecss.blogPera} pb-3 ps-0 ms-1 ${homecss.liveblogclamp}`}
                                >
                                  How these residential areas are battling mosquito menace round the year
                                </p>
                                <span className={`${homecss.dating} ps-1`}>
                                  18 minutes ago
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 rhselement">
              <p className="advertisement-text text-center mt-4 pt-md-4 mb-0">ADVERTISEMENT</p>
              {/* 300*250 Add Start */}
              <div className="add-300x250 mx-auto text-center mb-3"></div>
              {/* 300*250 Add End */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LiveBlogs;

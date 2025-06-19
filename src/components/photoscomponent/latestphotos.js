import React, { useState, useEffect } from "react";
import homecss from "../../../styles/Home.module.css";
import Image from "next/image";
import cta from "../../../public/assets/images/cta-mobile.png";
import camera from "../../../public/assets/images/camera.png";
import trending from "../../../public/assets/images/trending.png";
import Link from "next/link";

function Latestphotos() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [containerHeight, setContainerHeight] = useState(0);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const element = document.getElementById(category);
    if (element) {
      // Adjust this value based on the height of your header or any fixed element
      const headerOffset = 100; // Adjust this value as needed
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Function to update height after scroll
  const updateHeight = () => {
    const container = document.querySelector(".photosall");
    if (container) {
      setContainerHeight(container.scrollHeight);
    }
  };

  useEffect(() => {
    // Adding scroll event listener to update height
    window.addEventListener("scroll", updateHeight);
    
    // Initial height update
    updateHeight();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);
  return (
    <div className="container mb-2 px-0 photosall">
      <div className="row">
        <div className="col-md-9 lhselement category-right-border-desktop">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
            <div className="left-inner-colm pb-0 mb-2">
              <h2 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar category-side-bar mx-0"></span>
                <span className="px-2">Latest Photos</span>
              </h2>
            </div>
            <div className="">
              <Link href="">
                <Image src={cta} className="cta-position" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 px-0 px-2">
              <ul className="nav nav-tabs category-nav-tabs mb-3 pb-1 mx-1">
                <li>
                  <span
                    className={`me-3 ${
                      activeCategory === "All" ? "category-active active-border-bottom" : ""
                    }`}
                    onClick={() =>
                      handleCategoryClick(
                        "All",
                        document
                          .getElementById("All")
                          .scrollIntoView({ behavior: "smooth" })
                      )
                    }
                 style={{cursor: 'pointer'}} >
                    All
                  </span>
                </li>
                <li>
                  <span
                    className={`me-3 ${
                      activeCategory === "Entertainmentphotosnews"
                        ? "category-active active-border-bottom"
                        : ""
                    }`}
                    onClick={() =>
                      handleCategoryClick(
                        "Entertainmentphotosnews",
                        document
                          .getElementById("Entertainmentphotosnews")
                          .scrollIntoView({ behavior: "smooth" })
                      )
                    }
                 style={{cursor: 'pointer'}} >
                    Entertainment Photos News
                  </span>
                </li>
                <li>
                  <span
                    className={`me-3 ${
                      activeCategory === "Sportsphotosnews"
                        ? "category-active active-border-bottom"
                        : ""
                    }`}
                    onClick={() =>
                      handleCategoryClick(
                        "Sportsphotosnews",
                        document
                          .getElementById("Sportsphotosnews")
                          .scrollIntoView({ behavior: "smooth" })
                      )
                    }
                 style={{cursor: 'pointer'}} >
                    Sports Photos News
                  </span>
                </li>
                <li>
                  <span
                    className={`me-3 ${
                      activeCategory === "Newsphotos" ? "category-active active-border-bottom" : ""
                    }`}
                    onClick={() =>
                      handleCategoryClick(
                        "Newsphotos",
                        document
                          .getElementById("Newsphotos")
                          .scrollIntoView({ behavior: "smooth" })
                      )
                    }
                 style={{cursor: 'pointer'}} >
                    News Photos
                  </span>
                </li>
                <li>
                  <span
                    className={`me-3 ${
                      activeCategory === "Lifestylephotonews"
                        ? "category-active active-border-bottom"
                        : ""
                    }`}
                    onClick={() =>
                      handleCategoryClick(
                        "Lifestylephotonews",
                        document
                          .getElementById("Lifestylephotonews")
                          .scrollIntoView({ behavior: "smooth" })
                      )
                    }
                 style={{cursor: 'pointer'}} >
                    Lifestyle Photo News
                  </span>
                </li>
                <li>
                  <span
                    className={`me-3 ${
                      activeCategory === "Mumbaiphotonews"
                        ? "category-active active-border-bottom"
                        : ""
                    }`}
                    onClick={() =>
                      handleCategoryClick(
                        "Mumbaiphotonews",
                        document
                          .getElementById("Mumbaiphotonews")
                          .scrollIntoView({ behavior: "smooth" })
                      )
                    }
                 style={{cursor: 'pointer'}} >
                    Mumbai Photo News
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-md-6">
                <p className="subcategory-heading-pos mb-1">Mumbai News</p>
                <Link href="">
                  <div className="position-relative">
                    <img
                      src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                      alt="Devendra Fadnavis for BJP national chief?"
                      title="Devendra Fadnavis for BJP national chief?"
                      className="border-radius-img"
                    />
                    <Image src={camera} className="camera-position" />
                    <span className="img-story-label-position-category">
                      PM Modi
                    </span>
                  </div>
                  <h1
                    className={`${homecss.lineclamp2} pt-2 photos-all-title-latest`}
                  >
                    India will become third largest economy soon: PM Modi
                  </h1>
                </Link>

                {/*Mobile Advertisement Start */}
                <div className="row d-block d-md-none">
                  <div className="col-md-12">
                    <p className="advertisement-text text-center mt-1 mb-0">
                      ADVERTISEMENT
                    </p>
                    <div className="add-300x250 mx-auto text-center mb-3"></div>
                  </div>
                </div>
                {/*Mobile Advertisement End */}
                <div className="trending-container ps-0 pe-1">
                  <div className="row trending-row-pos pt-2 mb-0">
                    <div className="col-3 border-right-position pe-1 ps-0">
                      <button className="btn-red">
                        <Image src={trending} className="trending-pos" />{" "}
                        <span className="trending-txt">Trending</span>
                      </button>
                    </div>
                    <div className="col-inline pe-0 ps-1">
                      <button className="btn-white">#Mumbai Weather</button>
                    </div>
                    <div className="col-inline pe-0 ps-1">
                      <button className="btn-white">#Mumbai railways</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mb-2">
                  <div className="col-6">
                    <p className="subcategory-heading-pos mb-1">Mumbai News</p>
                    <Link href="">
                      <div className="position-relative">
                        <img
                          src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                          alt="Devendra Fadnavis for BJP national chief?"
                          title="Devendra Fadnavis for BJP national chief?"
                          className="border-radius-img"
                        />
                        <Image src={camera} className="camera-position-small" />
                        <span className="img-story-label-position-category">
                          PM Modi
                        </span>
                      </div>
                      <h2
                        className={`${homecss.lineclamp2} pt-2 photos-all-title-other`}
                      >
                        India will become third largest economy soon: PM Modi
                      </h2>
                    </Link>
                  </div>
                  <div className="col-6">
                    <p className="subcategory-heading-pos mb-1">Mumbai News</p>
                    <Link href="">
                      <div className="position-relative">
                        <img
                          src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                          alt="Devendra Fadnavis for BJP national chief?"
                          title="Devendra Fadnavis for BJP national chief?"
                          className="border-radius-img"
                        />
                        <Image src={camera} className="camera-position-small" />
                        <span className="img-story-label-position-category">
                          PM Modi
                        </span>
                      </div>
                      <h2
                        className={`${homecss.lineclamp2} pt-2 photos-all-title-other`}
                      >
                        India will become third largest economy soon: PM Modi
                      </h2>
                    </Link>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <p className="subcategory-heading-pos mb-1">Mumbai News</p>
                    <Link href="">
                      <div className="position-relative">
                        <img
                          src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                          alt="Devendra Fadnavis for BJP national chief?"
                          title="Devendra Fadnavis for BJP national chief?"
                          className="border-radius-img"
                        />
                        <Image src={camera} className="camera-position-small" />
                        <span className="img-story-label-position-category">
                          PM Modi
                        </span>
                      </div>
                      <h2
                        className={`${homecss.lineclamp2} pt-2 photos-all-title-other`}
                      >
                        India will become third largest economy soon: PM Modi
                      </h2>
                    </Link>
                  </div>
                  <div className="col-6">
                    <p className="subcategory-heading-pos mb-1">Mumbai News</p>
                    <Link href="">
                      <div className="position-relative">
                        <img
                          src="https://images.mid-day.com/images/images/2024/aug/Fadnavis-kk_d.jpg"
                          alt="Devendra Fadnavis for BJP national chief?"
                          title="Devendra Fadnavis for BJP national chief?"
                          className="border-radius-img"
                        />
                        <Image src={camera} className="camera-position-small" />
                        <span className="img-story-label-position-category">
                          PM Modi
                        </span>
                      </div>
                      <h2
                        className={`${homecss.lineclamp2} pt-2 photos-all-title-other`}
                      >
                        India will become third largest economy soon: PM Modi
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 rhselement pt-2 d-none d-md-block">
          {/* Advertisement Start */}
          <div className="row">
            <div className="col-md-12">
              <p className="advertisement-text text-center mt-1 mt-md-5 mb-0">
                ADVERTISEMENT
              </p>
              <div className="add-300x250 mx-auto text-center mb-3"></div>
            </div>
          </div>
          {/* Advertisement End */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="advertisement-text text-center mt-4 pt-md-5 mb-0">
            ADVERTISEMENT
          </p>
          {/* 970*250 Add Start */}
          <div className="add-970x250 mx-auto text-center mb-2 d-none d-md-block"></div>
          {/* 970*250 Add End */}
          {/* 300*250 Add Start */}
          <div className="add-300x250 mx-auto text-center mb-3 d-block d-md-none"></div>
          {/* 300*250 Add End */}
        </div>
      </div>
    </div>
  );
}

export default Latestphotos;

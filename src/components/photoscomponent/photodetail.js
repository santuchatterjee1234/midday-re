import React, { useState } from "react";
import homecss from "../../../styles/Home.module.css";
import styles from "../../../styles/article.module.css";
import Image from "next/image";
import cta from "../../../public/assets/images/cta-mobile.png";
import ctaMobile from "../../../public/assets/images/cta-mobile.png";
import camera from "../../../public/assets/images/camera.png";
import followus from "../../../public/assets/images/followusicon.png";
import share from "../../../public/assets/images/shareicon.png";
import joinus from "../../../public/assets/images/joinus.png";
import Link from "next/link";
import { faPlay, faPause, faShare } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Photodetail() {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const toggleSocialIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  return (
    <>
      {/* First Gallery Start */}
      <div className="container mb-2 px-0 photosall">
        <div className="mainshare">
          {/* Share Icon */}
          <div className="first fixedShareIcon">
            <ul>
              <li className="shareIcon" onClick={toggleSocialIcons}>
                <FontAwesomeIcon icon={faShare} />
              </li>
            </ul>

            {/* Social Icons (appear below the Share icon) */}
            <div
              className={`${styles.socialIcons} ${
                !showSocialIcons ? styles.hiddenIcons : ""
              }`}
            >
              <ul className="sharefull">
                <Link href="#">
                  <li className="shareIcon">
                    <FontAwesomeIcon icon={faFacebook} />
                  </li>
                </Link>
                <Link href="#">
                  <li className="shareIcon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </li>
                </Link>
                <Link href="#">
                  <li className="shareIcon">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 lhselement mt-md-5">
            <h1 className="detail-title">
              Malti Marie closes eyes as Priyanka & Nick kiss, check out
              adorable picture of Jonas family from London
            </h1>
            <div className="row">
              <div className="col-md-7 col-8 pe-0">
                <p className="date-time">
                  02 September,2024 11:20 AM IST | Compiled by : Athulya Nambiar
                </p>
              </div>
              <div className="col-md-2 col-4 px-md-0 px-1 pt-1">
                <Link href="">
                  <Image src={followus} alt="" className="" />
                </Link>
              </div>
              <div className="col-md-1 pt-2 d-none d-md-block tooltipWrapper">
                <Link href="">
                  <Image src={share} alt="" className="startimge" />
                </Link>
                <span className="tooltip">
                  <ul className="d-flex justify-content-center p-0 mb-0">
                    <li className="m-2">
                      <Link href="">
                        <FontAwesomeIcon icon={faFacebook} style={{color: '#FFFFFF'}}/>
                      </Link>
                    </li>
                    <li className="m-2">
                      <Link href="">
                        <FontAwesomeIcon icon={faLinkedin} style={{color: '#FFFFFF'}}/>
                      </Link>
                    </li>
                    <li className="m-2">
                      <Link href="">
                        <FontAwesomeIcon icon={faWhatsapp} style={{color: '#FFFFFF'}}/>
                      </Link>
                    </li>
                    <li className="m-2">
                      <Link href="">
                        <FontAwesomeIcon icon={faXTwitter} style={{color: '#FFFFFF'}}/>
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="col-md-2 pt-1 px-0 d-none d-md-block">
                <Link href="">
                  <Image src={joinus} alt="" className="" />
                </Link>
              </div>
            </div>
            {/* Short Description */}
            <p className="shortdescription pt-md-2">
              Chiranjeevi Birthday 2024: The veteran Telugu movie star turns a
              year older today. Having ruled the Telugu industry for decades,
              the superstar is loved and respected by members across film
              industries in India. On his birthday, we look at rare photos from
              his star-studded family album. Chiranjeevi's family has several
              superstars including Allu Arjun, Pawan Kalyan, Varun Tej and his
              son Ram Charan (All Photos/Instagram)
            </p>
            {/* List of Photos */}
            <div className="mb-3">
              <div class="position-relative">
                <img
                  src="https://images.mid-day.com/images/images/2024/sep/nickjonasbirthdaypostcute12.jpg"
                  class=" articlePageImgBlk"
                  alt="Puravive Reviews"
                  title="Puravive Reviews"
                />
                <div class="photo-count">
                  <p class="count-text">
                    <span class="span-one">1/</span>
                    <span class="span-two">4</span>
                  </p>
                </div>
              </div>
              <div class="pt-3 card-detail">
                <p class="px-3 photo-detail-title pt-2">
                  The first picture itself will make you melt like wax. This
                  snap shows the cutest Malti closing her eyes as her parents,
                  Nick Jonas and Priyanka Chopra, kiss
                </p>
              </div>
            </div>
            <div className="mb-3">
              <div class="position-relative">
                <img
                  src="https://images.mid-day.com/images/images/2024/sep/nickjonasbirthdaypostcute7.jpg"
                  alt="Puravive Reviews"
                  title="Puravive Reviews"
                />
                <div class="photo-count">
                  <p class="count-text">
                    <span class="span-one">2/</span>
                    <span class="span-two">4</span>
                  </p>
                </div>
              </div>
              <div class="pt-3 card-detail">
                <p class="px-3 photo-detail-title pt-2">
                  Nick and Priyanka sizzled in stylish outfits. While Nick wore
                  a blue outfit, Priyanka complemented him in a brown body-con
                  dress. This picture shows NikYanka in their sizzling couple
                  avatar as they hold each other close
                </p>
              </div>
            </div>
            <div className="mb-3">
              <div class="position-relative">
                <img
                  src="https://images.mid-day.com/images/images/2024/sep/nickjonasbirthdaypostcute10.jpg"
                  class=" articlePageImgBlk"
                  alt="Puravive Reviews"
                  title="Puravive Reviews"
                />
                <div class="photo-count">
                  <p class="count-text">
                    <span class="span-one">3/</span>
                    <span class="span-two">4</span>
                  </p>
                </div>
              </div>
              <div class="pt-3 card-detail">
                <p class="px-3 photo-detail-title pt-2">
                  Priyanka Chopra was a proud wife as she attended Nick Jonas'
                  concert with their daughter. The twist in the story is that
                  Priyanka was crowned Miss World at the same arena 24 years ago
                </p>
              </div>
            </div>
            <div className="mb-3">
              <div class="position-relative">
                <img
                  src="https://images.mid-day.com/images/images/2024/sep/nickjonasbirthdaypostcute4.jpg"
                  alt="Puravive Reviews"
                  title="Puravive Reviews"
                />
                <div class="photo-count">
                  <p class="count-text">
                    <span class="span-one">4/</span>
                    <span class="span-two">4</span>
                  </p>
                </div>
              </div>
              <div class="pt-3 card-detail">
                <p class="px-3 photo-detail-title pt-2">
                  Once an Indian mom, always an Indian mom: Priyanka Chopra
                  holds Malti Marie in her arms as she smiles brightly
                </p>
              </div>
            </div>
            {/* Tags */}
            <div class="pb-3">
              <div class="tag-list">
                <span class="tag-item">priyanka chopra</span>
                <span class="tag-item">Nick Jonas</span>
                <span class="tag-item">Malti Marie Chopra Jonas</span>
                <span class="tag-item">Entertainment News</span>
                <span class="tag-item">hollywood news</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 rhselement pt-2">
            {/* Advertisement Start */}
            <div className="row">
              <div className="col-md-12">
                <p class="advertisement-text text-center mt-1 mt-md-4 mb-0">
                  ADVERTISEMENT
                </p>
                <div class="add-300x250 mx-auto mx-md-0 text-center mb-3" style={{width: '100% !important'}}></div>
              </div>
            </div>
            {/* Advertisement End */}
            {/* Related Photos Start */}
            <div className="row">
              <div class="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                <div class="left-inner-colm pb-0 mb-2">
                  <h2 class="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar"></span>
                    <span className="px-2">Related Photos</span>
                  </h2>
                </div>
                <div class="">
                  <Link href="">
                    <Image alt="" src={cta} className="cta-position" />
                  </Link>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row row-height-position-repeat">
                  <div className="col-9 col-md-8">
                    <Link href="">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                      >
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="col-3 col-md-4 ps-0">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        class="border-radius-img"
                      />
                      <Image
                        src={camera}
                        className="camera-position-small-right"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-height-position-repeat">
                  <div className="col-9 col-md-8">
                    <Link href="">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                      >
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="col-3 col-md-4 ps-0">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        class="border-radius-img"
                      />
                      <Image
                        src={camera}
                        className="camera-position-small-right"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-height-position-repeat">
                  <div className="col-9 col-md-8">
                    <Link href="">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                      >
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="col-3 col-md-4 ps-0">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        class="border-radius-img"
                      />
                      <Image
                        src={camera}
                        className="camera-position-small-right"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-height-position-repeat">
                  <div className="col-9 col-md-8">
                    <Link href="">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                      >
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="col-3 col-md-4 ps-0">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        class="border-radius-img"
                      />
                      <Image
                        src={camera}
                        className="camera-position-small-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Related Photos End */}
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
                  <Image
                    alt=""
                    src={cta}
                    className="cta-position d-none d-md-block"
                  />
                  <Image
                    src={ctaMobile}
                    className="cta-position d-block d-md-none"
                  />
                </Link>
              </div>
            </div>
            <div className={`${homecss.borderMain} border py-2 px-2`}>
              <h2 className="pollPera">
                Do you support the immediate implementation of the Hawkers
                Policy to regulate street vending in Mumbai?
              </h2>

              <div className="row align-items-center">
                <div className="col-md-1 col-1">
                  <input
                    class="form-check-input"
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
                    class="form-check-input"
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
                    class="form-check-input"
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
            <div class="mb-3" id="sticky-ads">
              <div className="row pt-3">
                <div class="d-flex justify-content-between align-items-center pt-2 tab-header">
                  <div class="left-inner-colm pb-0 mb-2">
                    <h2 class="d-md-inline mr-md-3 main-heading">
                      <span className="main-headline-sidebar"></span>
                      <span className="px-2">Quiz</span>
                    </h2>
                  </div>
                  <div class="">
                    <Link href="">
                      <Image alt="" src={cta} className="cta-position" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-12">
                  <div class="border text-center p-3">
                    <p class={homecss.categoryquizepera}>
                      Pride Month: How much do
                    </p>
                    <p class={homecss.categoryquizepera}>
                      you know of Mumbai's
                    </p>
                    <p class={homecss.categoryquizepera}>LGBTQIA+ legacy?</p>
                    <button class={homecss.categoryplaynow}>Play Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Quiz End */}
          </div>
        </div>
      </div>
      {/* First Gallery End */}
      {/* Next Gallery Start */}
      <div className="container mb-2 px-0 photosall">
        <div class="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
          <div class="left-inner-colm pb-0 mb-2">
            <h2 class="d-md-inline mr-md-3 main-heading">
              <span className="main-headline-sidebar"></span>
              <span className="px-2">Next Gallery</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 lhselement">
            <h1 className="detail-title">
              Malti Marie closes eyes as Priyanka & Nick kiss, check out
              adorable picture of Jonas family from London
            </h1>
            <div className="row">
              <div className="col-md-7 col-8 pe-0">
                <p className="date-time">
                  02 September,2024 11:20 AM IST | Compiled by : Athulya Nambiar
                </p>
              </div>
              <div className="col-md-2 col-4 px-md-0 px-1 pt-1">
                <Link href="">
                  <Image src={followus} alt="" className="" />
                </Link>
              </div>
              <div className="col-md-1 pt-2 d-none d-md-block tooltipWrapper">
                <Link href="">
                  <Image src={share} alt="" className="startimge" />
                </Link>
                <span className="tooltip">
                  <ul className="d-flex justify-content-center p-0 mb-0">
                    <li className="m-2">
                      <Link href="">
                        <FontAwesomeIcon icon={faFacebook} style={{color: '#FFFFFF'}}/>
                      </Link>
                    </li>
                    <li className="m-2">
                      <Link href="">
                        <FontAwesomeIcon icon={faLinkedin} style={{color: '#FFFFFF'}}/>
                      </Link>
                    </li>
                    <li className="m-2">
                      <Link href="">
                        <FontAwesomeIcon icon={faWhatsapp} style={{color: '#FFFFFF'}}/>
                      </Link>
                    </li>
                    <li className="m-2">
                      <Link href="">
                        <FontAwesomeIcon icon={faXTwitter} style={{color: '#FFFFFF'}}/>
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="col-md-2 pt-1 px-0 d-none d-md-block">
                <Link href="">
                  <Image src={joinus} alt="" className="" />
                </Link>
              </div>
            </div>
            {/* Short Description */}
            <p className="shortdescription pt-md-2">
              Chiranjeevi Birthday 2024: The veteran Telugu movie star turns a
              year older today. Having ruled the Telugu industry for decades,
              the superstar is loved and respected by members across film
              industries in India. On his birthday, we look at rare photos from
              his star-studded family album. Chiranjeevi's family has several
              superstars including Allu Arjun, Pawan Kalyan, Varun Tej and his
              son Ram Charan (All Photos/Instagram)
            </p>
            {/* List of Photos */}
            <div className="mb-3">
              <div class="position-relative">
                <img
                  src="https://images.mid-day.com/images/images/2024/sep/nickjonasbirthdaypostcute12.jpg"
                  class=" articlePageImgBlk"
                  alt="Puravive Reviews"
                  title="Puravive Reviews"
                />
                <div class="photo-count">
                  <p class="count-text">
                    <span class="span-one">1/</span>
                    <span class="span-two">4</span>
                  </p>
                </div>
              </div>
              <div class="pt-3 card-detail">
                <p class="px-3 photo-detail-title pt-2">
                  The first picture itself will make you melt like wax. This
                  snap shows the cutest Malti closing her eyes as her parents,
                  Nick Jonas and Priyanka Chopra, kiss
                </p>
              </div>
            </div>
            <div className="mb-3">
              <div class="position-relative">
                <img
                  src="https://images.mid-day.com/images/images/2024/sep/nickjonasbirthdaypostcute7.jpg"
                  alt="Puravive Reviews"
                  title="Puravive Reviews"
                />
                <div class="photo-count">
                  <p class="count-text">
                    <span class="span-one">2/</span>
                    <span class="span-two">4</span>
                  </p>
                </div>
              </div>
              <div class="pt-3 card-detail">
                <p class="px-3 photo-detail-title pt-2">
                  Nick and Priyanka sizzled in stylish outfits. While Nick wore
                  a blue outfit, Priyanka complemented him in a brown body-con
                  dress. This picture shows NikYanka in their sizzling couple
                  avatar as they hold each other close
                </p>
              </div>
            </div>
            <div className="mb-3">
              <div class="position-relative">
                <img
                  src="https://images.mid-day.com/images/images/2024/sep/nickjonasbirthdaypostcute10.jpg"
                  class=" articlePageImgBlk"
                  alt="Puravive Reviews"
                  title="Puravive Reviews"
                />
                <div class="photo-count">
                  <p class="count-text">
                    <span class="span-one">3/</span>
                    <span class="span-two">4</span>
                  </p>
                </div>
              </div>
              <div class="pt-3 card-detail">
                <p class="px-3 photo-detail-title pt-2">
                  Priyanka Chopra was a proud wife as she attended Nick Jonas'
                  concert with their daughter. The twist in the story is that
                  Priyanka was crowned Miss World at the same arena 24 years ago
                </p>
              </div>
            </div>
            <div className="mb-3">
              <div class="position-relative">
                <img
                  src="https://images.mid-day.com/images/images/2024/sep/nickjonasbirthdaypostcute4.jpg"
                  alt="Puravive Reviews"
                  title="Puravive Reviews"
                />
                <div class="photo-count">
                  <p class="count-text">
                    <span class="span-one">4/</span>
                    <span class="span-two">4</span>
                  </p>
                </div>
              </div>
              <div class="pt-3 card-detail">
                <p class="px-3 photo-detail-title pt-2">
                  Once an Indian mom, always an Indian mom: Priyanka Chopra
                  holds Malti Marie in her arms as she smiles brightly
                </p>
              </div>
            </div>
            {/* Tags */}
            <div class="pb-3">
              <div class="tag-list">
                <span class="tag-item">priyanka chopra</span>
                <span class="tag-item">Nick Jonas</span>
                <span class="tag-item">Malti Marie Chopra Jonas</span>
                <span class="tag-item">Entertainment News</span>
                <span class="tag-item">hollywood news</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 rhselement pt-2 pt-md-0">
            {/* Advertisement Start */}
            <div className="row">
              <div className="col-md-12">
                <p class="advertisement-text text-center mt-1 mt-md-0 mb-0">
                  ADVERTISEMENT
                </p>
                <div class="add-300x250 mx-auto mx-md-0 text-center mb-3" style={{width: '100% !important'}}></div>
              </div>
            </div>
            {/* Advertisement End */}
            {/* Related Photos Start */}
            <div className="row">
              <div class="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                <div class="left-inner-colm pb-0 mb-2">
                  <h2 class="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar"></span>
                    <span className="px-2">Related Photos</span>
                  </h2>
                </div>
                <div class="">
                  <Link href="">
                    <Image alt="" src={cta} className="cta-position" />
                  </Link>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row row-height-position-repeat">
                  <div className="col-9 col-md-8">
                    <Link href="">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                      >
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="col-3 col-md-4 ps-0">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        class="border-radius-img"
                      />
                      <Image
                        src={camera}
                        className="camera-position-small-right"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-height-position-repeat">
                  <div className="col-9 col-md-8">
                    <Link href="">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                      >
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="col-3 col-md-4 ps-0">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        class="border-radius-img"
                      />
                      <Image
                        src={camera}
                        className="camera-position-small-right"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-height-position-repeat">
                  <div className="col-9 col-md-8">
                    <Link href="">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                      >
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="col-3 col-md-4 ps-0">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        class="border-radius-img"
                      />
                      <Image
                        src={camera}
                        className="camera-position-small-right"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-height-position-repeat">
                  <div className="col-9 col-md-8">
                    <Link href="">
                      <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                      >
                        Four-time Mumbai Marathon winner Sudha Singh hails
                        maiden bronze feat in 2015
                      </h2>
                    </Link>
                  </div>
                  <div className="col-3 col-md-4 ps-0">
                    <div className="position-relative">
                      <img
                        src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                        alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                        class="border-radius-img"
                      />
                      <Image
                        src={camera}
                        className="camera-position-small-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Related Photos End */}
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
                  <Image
                    alt=""
                    src={cta}
                    className="cta-position d-none d-md-block"
                  />
                  <Image
                    src={ctaMobile}
                    className="cta-position d-block d-md-none"
                  />
                </Link>
              </div>
            </div>
            <div className={`${homecss.borderMain} border py-2 px-2`}>
              <h2 className="pollPera">
                Do you support the immediate implementation of the Hawkers
                Policy to regulate street vending in Mumbai?
              </h2>

              <div className="row align-items-center">
                <div className="col-md-1 col-1">
                  <input
                    class="form-check-input"
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
                    class="form-check-input"
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
                    class="form-check-input"
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
            <div class="mb-3" id="sticky-ads">
              <div className="row pt-3">
                <div class="d-flex justify-content-between align-items-center pt-2 tab-header">
                  <div class="left-inner-colm pb-0 mb-2">
                    <h2 class="d-md-inline mr-md-3 main-heading">
                      <span className="main-headline-sidebar"></span>
                      <span className="px-2">Quiz</span>
                    </h2>
                  </div>
                  <div class="">
                    <Link href="">
                      <Image alt="" src={cta} className="cta-position" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-12">
                  <div class="border text-center p-3">
                    <p class={homecss.categoryquizepera}>
                      Pride Month: How much do
                    </p>
                    <p class={homecss.categoryquizepera}>
                      you know of Mumbai's
                    </p>
                    <p class={homecss.categoryquizepera}>LGBTQIA+ legacy?</p>
                    <button class={homecss.categoryplaynow}>Play Now</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Quiz End */}
          </div>
        </div>
      </div>
      {/* Next Gallery End */}
    </>
  );
}

export default Photodetail;

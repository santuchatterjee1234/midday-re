import React, { useState, useRef, useEffect } from "react";
import styles from "../../../styles/article.module.css";
import Image from "next/image";
import whatsappframe from "../../../public/assets/images/whatsappframe.png";
import premuim from "../../../public/assets/images/premuim.png";
import starshare from "../../../public/assets/images/startimg.png";
import followus from "../../../public/assets/images/followus.png";
import sharenew from "../../../public/assets/images/sharenew.png";
import whatsappshare from "../../../public/assets/images/whatsappshare.png";
import Link from "next/link";
import { faPlay, faPause, faShare } from "@fortawesome/fontawesome-free-solid";
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import cta from "../../../public/assets/images/cta.png";
import ctaMobile from "../../../public/assets/images/cta-mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Articlemain = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration] = useState(210);
  const progressRef = useRef(null);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev < duration) {
            return prev + 1;
          } else {
            clearInterval(intervalRef.current);
            setIsPlaying(false);
            audioRef.current.pause();
            return duration;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, duration]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;

      const stickyAds = document.getElementById("sticky-ads");
      if (scrollY > 850 && offsetHeight - scrollY - innerHeight > 650) {
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

  const toggleSocialIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  return (
    <div className="main">
      <div className="container px-md-4 px-0 pt-3">
        {/* <Link href="#">
          <Image
            src={premuim}
            width={33}
            height={31.26}
            alt="Share icon"
            className={styles.startimgenew}
          />
        </Link> */}
        <button className={styles.premiumtopbutton}>Premium</button>
      </div>
      <h1 className={`${styles.main} container pt-3 px-md-4 px-0`}>
        Worli hit-and-run case: Bar’s licence temporarily suspended for serving
        booze past permitted hrs
      </h1>
      <div className={styles.mainshare}>
        {/* Share Icon */}
        <div className={`first ${styles.fixedShareIcon}`}>
          <ul>
            <li className={styles.shareIcon} onClick={toggleSocialIcons}>
              <FontAwesomeIcon icon={faShare} />
            </li>
          </ul>

          {/* Social Icons (appear below the Share icon) */}
          <div
            className={`${styles.socialIcons} ${
              !showSocialIcons ? styles.hiddenIcons : ""
            }`}
          >
            <ul className={styles.sharefull}>
              <Link href="#">
                <li className={styles.shareIcon}>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
              </Link>
              <Link href="#">
                <li className={styles.shareIcon}>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
              </Link>
              <Link href="#">
                <li className={styles.shareIcon}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="articlelhs">
        <div className="container px-0 px-md-2">
          <div className="row">
            <div className="col-md-8">
              <div className={styles.articlemainrightborderdesktop}>
                <div className="container px-0 px-md-2">
                  <div className="row">
                    <div className="col-md-6 col-8">
                      <span className={styles.date}>
                        Updated on: 15 July,2024 06:38 AM IST  |  Mumbai
                      </span>
                    </div>
                    <div className="col-md-6 col-4 ps-0 ps-md-2">
                      <div className="sharepart">
                        <ul className="d-flex justify-content-between ulpadding">
                          <li>
                            <Link href="">
                              <Image
                                src={starshare}
                                // width={33}
                                // height={31.26}
                                alt="Share icon"
                                className={styles.startimgenew}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="">
                              <Image
                                src={followus}
                                // width={105}
                                // height={30}
                                alt="followus icon"
                                className={styles.startimgefollowus}
                              />
                            </Link>
                          </li>
                          <li className={styles.tooltipWrapper}>
                            <Link href="">
                              <Image
                                src={sharenew}
                                width={44}
                                height={29.73}
                                alt="sharenew icon"
                                className={`${styles.startimge} d-none d-md-block`}
                              />
                              <span className={styles.tooltip}>
                                <ul className="d-flex justify-content-center p-0">
                                  <li className="m-2">
                                    <FontAwesomeIcon icon={faFacebook} />
                                  </li>
                                  <li className="m-2">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                  </li>
                                  <li className="m-2">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                  </li>
                                  <li className="m-2">
                                    <FontAwesomeIcon icon={faXTwitter} />
                                  </li>
                                </ul>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="">
                              <Image
                                src={whatsappshare}
                                width={124.59}
                                height={28.08}
                                alt="WhatsApp share icon"
                                className={`${styles.startimge} d-none d-md-block`}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="discripttion">
                      <p className={styles.discripttion}>
                        Establishment also under scrutiny for failing to provide
                        CCTV footage for past 2 months to authorities; police
                        probe reveals unpaid challans on BMW linked to Mihir
                        Shah
                      </p>
                    </div>
                    <div className="discriptcard">
                      <img
                        src="https://images.mid-day.com/images/images/2024/sep/akki-thres_d.jpg"
                        width="100%"
                      />
                      <div className="discriptpera">
                        <span className={styles.rightborder}></span>
                        <p className={styles.discriptpera}>
                          Accused Mihir Shah (right) The BMW car involved in the
                          accident is now in custody of the Worli police.
                          Pic/Ashish Raje
                        </p>
                      </div>
                    </div>
                    <div className="premiumsection">
                      <p className={styles.premiumsectionpera}>
                        As the city gears up for Maharashtra's biggest
                        festival, Ganesh Chaturthi, the Mumbai Police have
                        planned comprehensive security measures including
                        traffic management to ensure smooth and safe festive
                        celebrations during the upcoming Ganeshotsav.
                      </p>
                    </div>

                    <div className="container">
                      <div className={`${styles.premiumbox} col-md-12`}>
                        <div className="row">
                          <div className="col-md-8">
                            <h2 className={styles.boxpera}>
                              To continue reading this article
                            </h2>
                            <h3 className={styles.secondboxpera}>
                              Subscribe to Mid-day GOLD
                            </h3>
                          </div>
                          <div className="col-md-4 text-center">
                            <p className={styles.starting}>
                              Starting For Just ₹99/-
                            </p>
                            <button className={styles.prebutton}>
                              Subscribe Now
                            </button>
                            <br />
                            <span className={styles.secondmain}>
                              Already a member?
                              <Link href="#">
                                <span
                                  className={`${styles.secondmainspan} border-bottom border-dark`}
                                >
                                  Login
                                </span>
                              </Link>
                            </span>
                          </div>
                          <p
                            className={`${styles.membershiptext} text-center mb-0 pt-3`}
                          >
                            Become a{" "}
                            <span className={styles.middygold}>
                              Mid-day GOLD
                            </span>{" "}
                            member and we'll deliver the most premium news to
                            you.
                          </p>
                          <p
                            className={`${styles.membershiptextsecond} text-center mb-3`}
                          >
                            For any queries please contact us: E-mail:
                            <span>
                              <Link
                                href="mailto:support@mid-day.com"
                                className={`${styles.textprimry} text-primary`}
                              >
                                support@mid-day.com
                              </Link>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="texttospeech mb-3">
                      <div className={styles.card}>
                        <h2 className={styles.text}>Listen to this article</h2>
                        <div className="row">
                          <div className="col-md-1 col-2">
                            <div className="player p-2">
                              <FontAwesomeIcon
                                onClick={handleClick}
                                className={styles.faPlay}
                                icon={isPlaying ? faPause : faPlay}
                              />
                            </div>
                          </div>
                          <div className="col-md-10 col-8 pt-4">
                            <div
                              className="progress"
                              style={{
                                height: "8px", // Height of the progress bar
                                backgroundColor: "#E2E2E2",
                                position: "relative",
                                width: "100%", // Full width of the bar
                                borderRadius: "4px", // Rounded edges of the progress bar
                                overflow: "hidden", // Make sure nothing spills outside
                              }}
                            >
                              {/* Progress bar fill */}
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: `${(progress / duration) * 100}%`,
                                  backgroundColor: "#007bff", // Color of the progress
                                  borderRadius: "4px", // Rounded edges of the progress
                                }}
                                aria-valuenow={(progress / duration) * 100}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>

                              {/* Circular image/marker that follows the progress */}
                              {/* <div
                                style={{
                                  position: "absolute",
                                  top: "50%", // Align to the vertical middle of the bar
                                  left: `calc(${
                                    (progress / duration) * 100
                                  }% - 10px)`, // Adjust the position so it's centered
                                  transform: "translateY(-50%)", // Vertically center the circle
                                  transition: "left 0.1s linear", // Smooth movement of the circle
                                  zIndex: 1, // Make sure it is above the progress bar
                                  width: "20px", // Size of the circle
                                  height: "20px",
                                  backgroundColor: "white", // Background color of the marker (you can change this)
                                  border: "2px solid #007bff", // Border color to match the progress
                                  borderRadius: "50%", // Make it a circle
                                }}
                              ></div> */}
                            </div>
                          </div>

                          <div className="col-md-1 col-2 pt-3">
                            {/* Show remaining time */}
                            <span>{formatTime(duration - progress)}</span>
                          </div>
                        </div>

                        {/* Dummy audio file */}
                        <audio
                          ref={audioRef}
                          src="/dummy-audio-file.mp3"
                          preload="metadata"
                        ></audio>
                      </div>
                    </div>
                    <div className="container">
                      <div className={styles.summary}>
                        <div className="container">
                          <p className={`${styles.borderbottom} pb-2 pt-2`}>
                            SUMMARY
                          </p>
                          <div className="summarytext">
                            <ul>
                              <li className={styles.fonts}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum is simply
                                dummy text of the printing and typesetting
                                industry.
                              </li>
                              <li className={styles.fonts}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </li>
                              <li className={styles.fonts}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </li>
                              <li className={styles.fonts}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </li>
                              <li className={styles.fonts}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="summery px-0">
                          <div className={styles.genrated}>
                            <p className="p-3">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-to-speech">
                      <p className={styles.speech}>
                        The Maharashtra Excise Department has temporarily
                        suspended Malad’s Sai Prasad Bar’s licence until further
                        notice for allegedly serving the prime accused, Mihir
                        Shah, four beer cans beyond the permitted time limit.
                        The bar is facing scrutiny for several alleged
                        violations. mid-day spoke with excise officers, who
                        elaborated on the reasons for the suspension.
                      </p>
                    </div>
                    <div className="container col-md-12 text-center d-flex justify-content-center">
                      <div className={styles.bigadspart}></div>
                    </div>
                    <div className="text-to-speech">
                      <p className={`${styles.speech} pt-3`}>
                        The Maharashtra Excise Department has temporarily
                        suspended Malad’s Sai Prasad Bar’s licence until further
                        notice for allegedly serving the prime accused, Mihir
                        Shah, four beer cans beyond the permitted time limit.
                        The bar is facing scrutiny for several alleged
                        violations. mid-day spoke with excise officers, who
                        elaborated on the reasons for the suspension.
                      </p>
                    </div>
                    {/* DESKTOP ADVERTISEMENT SECTION START */}
                    <div className="adsmain d-none d-md-block">
                      <p className={styles.adspera}>ADVERTISEMENT</p>
                      <div className="desktopAds d-flex justify-content-center">
                        <div className={styles.adspart}></div>
                      </div>
                    </div>
                    {/* DESKTOP ADVERTISEMENT SECTION END */}
                    <div className="text-to-speech">
                      <p className={`${styles.speech} pt-3`}>
                        The Maharashtra Excise Department has temporarily
                        suspended Malad’s Sai Prasad Bar’s licence until further
                        notice for allegedly serving the prime accused, Mihir
                        Shah, four beer cans beyond the permitted time limit.
                        The bar is facing scrutiny for several alleged
                        violations. mid-day spoke with excise officers, who
                        elaborated on the reasons for the suspension.
                      </p>
                    </div>
                    <div className="toppickmain">
                      <h2 className={styles.toppick}>Top Pick For You</h2>
                      <div className={styles.toppickbg}>
                        <div className="row">
                          <div className="col-md-2 col-5">
                            <img
                              className={styles.imagemain}
                              src="https://images.mid-day.com/images/images/2022/jun/jun6-jail_l.jpg"
                            />
                          </div>
                          <div className="col-md-8 col-7 px-md-2 px-0">
                            <p className={styles.toppicpera}>
                              Mumbai: Parents and students question NEET-UG
                              scoring irregularities
                            </p>
                          </div>
                          <div className={styles.topdesc}>
                            <p className="mb-0 pt-2">
                              The National Eligibility-cum-Entrance
                              Test-Undergraduate (NEET-UG) results announced
                              earlier this month have opened up a box of
                              controversies and allegations regarding several
                              discrepancies.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-to-speech">
                      <p className={`${styles.speech} pt-3`}>
                        The excise officer revealed that the data on the
                        Naukarnama (servant licence) did not match. “The bar
                        owner is Jyoti Shetty, but the names of the two people
                        running the bar on her behalf are missing,” the officer
                        said.
                      </p>
                    </div>
                    <span className={styles.spanhead}>Pending challans</span>
                    <div className="text-to-speech">
                      <p className={`${styles.speech} pt-3`}>
                        The excise officer revealed that the data on the
                        Naukarnama (servant licence) did not match. “The bar
                        owner is Jyoti Shetty, but the names of the two people
                        running the bar on her behalf are missing,” the officer
                        said.
                      </p>
                    </div>
                    {/* DESKTOP ADVERTISEMENT SECTION START */}
                    <div className="adsmain d-none d-md-block">
                      <p className={styles.adspera}>ADVERTISEMENT</p>
                      <div className="desktopAds d-flex justify-content-center">
                        <div className={styles.adspart}></div>
                      </div>
                    </div>
                    {/* DESKTOP ADVERTISEMENT SECTION END */}
                    <div className="text-to-speech">
                      <p className={`${styles.speech} pt-3`}>
                        A challan was issued on May 16, 2023, for causing
                        danger, obstruction, or undue inconvenience to other
                        public space users. The police are investigating the
                        location of this violation. According to Mumbai police
                        records, the car is owned by Rajesh Doshi, who allegedly
                        sold it to Shah. “We are checking the car’s documents,”
                        said the police.
                      </p>
                    </div>
                    <span className={styles.spanhead}>Kin demands justice</span>
                    <div className="text-to-speech">
                      <p className={`${styles.speech} pt-3`}>
                        Kaveri Nakhwa was dragged by Mihir Shah and then rammed
                        by the driver, Rajrishi Bidawat, in the Worli area. The
                        Nakhwa family has requested a fast-track investigation
                        into the matter. “We have full faith in the judiciary
                        and request a fast-track investigation. We do not want
                        this matter to be politicised. We seek justice for the
                        loss of our family member. Mihir and the other accused
                        should be punished according to the law,” said Pradeep
                        Nakhwa, husband of Kaveri and a survivor of the
                        incident.
                      </p>
                    </div>
                    {/* WHATS APP CHANNEL START */}
                    <div className="whatmain border-top border-bottom">
                      <div className="row">
                        <div className="col-md-2 col-3 pt-2 text-center">
                          <Image
                            src={whatsappframe}
                            alt="WhatsApp frame"
                            className={styles.wahtsappimg}
                          />
                        </div>
                        <div className="col-md-10 col-9 pt-2 ">
                          <p className={styles.wahtsappchanel}>
                            Mid-day is now on WhatsApp Channels
                          </p>
                          <p className={styles.descpmain}>
                            Subscribe today by clicking the link and stay
                            updated with the latest news!"
                            <Link href="#">
                              <span className={styles.clickhere}>
                                Click Here
                              </span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 p-0">
                      <div className="maintrending my-2">
                        <span className={styles.trending}>#Mumbai Police</span>
                        <span className={styles.trending}>
                          #Mumbai Crime Branch
                        </span>
                        <span className={styles.trending}>
                          #Mumbai Crime Branch
                        </span>
                      </div>
                    </div>
                    {/* WHATS APP CHANNEL END */}
                    {/* DESKTOP ADVERTISEMENT SECTION START */}
                    <div className="adsmain d-none d-md-block">
                      <p className={styles.adspera}>ADVERTISEMENT</p>
                      <div className="desktopAds d-flex justify-content-center">
                        <div className={styles.adspart}></div>
                      </div>
                    </div>
                    {/* DESKTOP ADVERTISEMENT SECTION END */}
                    {/* OPINIOS SECTION START */}
                    <section className="UnsungHeroes pt-0 pt-md-0 position-relative">
                      <div className="container px-md-0 my-0 px-my-5">
                        <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                          <div className="left-inner-colm pb-0 mb-2">
                            <h2 className="d-md-inline mr-md-3 main-heading d-flex-position">
                              <span className="main-headline-sidebar category-side-bar"></span>
                              <span className="px-md-3 px-2">Opinions</span>
                            </h2>
                          </div>
                          <div className="d-block d-md-none">
                            <Link href="">
                              <Image src={cta} className="cta-position " />
                            </Link>
                          </div>
                        </div>
                        <div className="left-inner-colm pb-0 mb-2">
                          <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation={true}
                            pagination={{
                              clickable: true,
                            }}
                            breakpoints={{
                              0: {
                                slidesPerView: 1,
                                navigation: false,
                                pagination: {
                                  clickable: true,
                                },
                              },
                              768: {
                                slidesPerView: 2,
                                // navigation: true,
                                pagination: false,
                              },
                            }}
                            modules={[Navigation, Pagination]}
                            className="heroesSwiper mx-md-2"
                          >
                            <Link href="#">
                              <SwiperSlide
                                className={`${styles.optionbg} mt-5`}
                              >
                                <Link href="">
                                  <div className="Opinionspart px-2">
                                    <div className="row">
                                      <div className="col-md-6 col-6">
                                        <h2 className={styles.optionhead}>
                                          What to make of Ambani wedding?
                                        </h2>
                                        <p className={styles.optionpera}>
                                          checking Like you, I’ve been wondering
                                          about Bombay’s big, fat ‘begaani
                                          shaadi’;...
                                        </p>
                                      </div>
                                      <div className="col-md-6 text-center py-1 col-6">
                                        <div className={styles.borderMain}>
                                          <img
                                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            className={styles.imgeWidth}
                                          />
                                          <p className={styles.swiperHead}>
                                            MS Word
                                          </p>
                                          <p className={styles.swiperPera}>
                                            By Mayank Shekhar
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </SwiperSlide>
                            </Link>
                            <Link href="#">
                              <SwiperSlide
                                className={`${styles.optionbg} mt-5`}
                              >
                                <Link href="">
                                  <div className="Opinionspart px-2">
                                    <div className="row">
                                      <div className="col-md-6 col-6">
                                        <h2 className={styles.optionhead}>
                                          What to make of Ambani wedding?
                                        </h2>
                                        <p className={styles.optionpera}>
                                          checking Like you, I’ve been wondering
                                          about Bombay’s big, fat ‘begaani
                                          shaadi’;...
                                        </p>
                                      </div>
                                      <div className="col-md-6 text-center py-1 col-6">
                                        <div className={styles.borderMain}>
                                          <img
                                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            className={styles.imgeWidth}
                                          />
                                          <p className={styles.swiperHead}>
                                            MS Word
                                          </p>
                                          <p className={styles.swiperPera}>
                                            By Mayank Shekhar
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </SwiperSlide>
                            </Link>
                            <Link href="#">
                              <SwiperSlide
                                className={`${styles.optionbg} mt-5`}
                              >
                                <Link href="">
                                  <div className="Opinionspart px-2">
                                    <div className="row">
                                      <div className="col-md-6 col-6">
                                        <h2 className={styles.optionhead}>
                                          What to make of Ambani wedding?
                                        </h2>
                                        <p className={styles.optionpera}>
                                          checking Like you, I’ve been wondering
                                          about Bombay’s big, fat ‘begaani
                                          shaadi’;...
                                        </p>
                                      </div>
                                      <div className="col-md-6 text-center py-1 col-6">
                                        <div className={styles.borderMain}>
                                          <img
                                            src="https://images.mid-day.com/images/images/2024/aug/sudhair_d.jpg"
                                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            className={styles.imgeWidth}
                                          />
                                          <p className={styles.swiperHead}>
                                            MS Word
                                          </p>
                                          <p className={styles.swiperPera}>
                                            By Mayank Shekhar
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </SwiperSlide>
                            </Link>
                          </Swiper>
                        </div>
                      </div>
                    </section>
                    {/* OPINIOS SECTION START */}

                    {/* OPINIOS SECTION START */}
                    <section className="UnsungHeroes pt-0 pt-md-0 position-relative">
                      <div className={styles.alsobg}>
                        <div className="container px-md-0 my-2 px-my-5">
                          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                            <div className="left-inner-colm pb-0 mb-2">
                              <h2 className="d-md-inline mr-md-3 main-heading d-flex-position">
                                <span className="main-headline-sidebar category-side-bar"></span>
                                <span className="px-md-3 px-2">Also Read</span>
                              </h2>
                            </div>
                            <div className="d-block d-md-none">
                              <Link href="">
                                <Image src={cta} className="cta-position " />
                              </Link>
                            </div>
                          </div>
                          <div className="left-inner-colm pb-0 mb-2">
                            <Swiper
                              slidesPerView={3}
                              spaceBetween={30}
                              navigation={true}
                              pagination={{
                                clickable: true,
                              }}
                              breakpoints={{
                                0: {
                                  slidesPerView: 3,
                                  navigation: false,
                                  pagination: {
                                    clickable: true,
                                  },
                                },
                                768: {
                                  slidesPerView: 5,
                                  // navigation: true,
                                  pagination: false,
                                },
                              }}
                              modules={[Navigation, Pagination]}
                              className="heroesSwiper mx-md-2"
                            >
                              <Link href="#">
                                <SwiperSlide className="mt-5">
                                  <Link href="">
                                    <div className="Opinionspart px-2">
                                      <div className="row">
                                        <div className="py-1">
                                          <img
                                            src="https://images.mid-day.com/images/images/2024/sep/Malaikafatherdiepicmain_l.jpg"
                                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            // className={styles.imgeWidth}
                                          />
                                          <p className={styles.swiperHeadnew}>
                                            Salman Khan threat case:
                                            Rajasthan-based Youtuber...
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </SwiperSlide>
                              </Link>
                              <Link href="#">
                                <SwiperSlide className="mt-5">
                                  <Link href="">
                                    <div className="Opinionspart px-2">
                                      <div className="row">
                                        <div className="py-1">
                                          <img
                                            src="https://images.mid-day.com/images/images/2024/sep/Malaikafatherdiepicmain_l.jpg"
                                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            // className={styles.imgeWidth}
                                          />
                                          <p className={styles.swiperHeadnew}>
                                            Salman Khan threat case:
                                            Rajasthan-based Youtuber...
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </SwiperSlide>
                              </Link>
                              <Link href="#">
                                <SwiperSlide className="mt-5">
                                  <Link href="">
                                    <div className="Opinionspart px-2">
                                      <div className="row">
                                        <div className="py-1">
                                          <img
                                            src="https://images.mid-day.com/images/images/2024/sep/Malaikafatherdiepicmain_l.jpg"
                                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            // className={styles.imgeWidth}
                                          />
                                          <p className={styles.swiperHeadnew}>
                                            Salman Khan threat case:
                                            Rajasthan-based Youtuber...
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </SwiperSlide>
                              </Link>
                              <Link href="#">
                                <SwiperSlide className="mt-5">
                                  <Link href="">
                                    <div className="Opinionspart px-2">
                                      <div className="row">
                                        <div className="py-1">
                                          <img
                                            src="https://images.mid-day.com/images/images/2024/sep/Malaikafatherdiepicmain_l.jpg"
                                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            // className={styles.imgeWidth}
                                          />
                                          <p className={styles.swiperHeadnew}>
                                            Salman Khan threat case:
                                            Rajasthan-based Youtuber...
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </SwiperSlide>
                              </Link>
                              <Link href="#">
                                <SwiperSlide className="mt-5">
                                  <Link href="">
                                    <div className="Opinionspart px-2">
                                      <div className="row">
                                        <div className="py-1">
                                          <img
                                            src="https://images.mid-day.com/images/images/2024/sep/Malaikafatherdiepicmain_l.jpg"
                                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            // className={styles.imgeWidth}
                                          />
                                          <p className={styles.swiperHeadnew}>
                                            Salman Khan threat case:
                                            Rajasthan-based Youtuber...
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </SwiperSlide>
                              </Link>
                              <Link href="#">
                                <SwiperSlide className="mt-5">
                                  <Link href="">
                                    <div className="Opinionspart px-2">
                                      <div className="row">
                                        <div className="py-1">
                                          <img
                                            src="https://images.mid-day.com/images/images/2024/sep/Malaikafatherdiepicmain_l.jpg"
                                            alt="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            title="Four-time Mumbai Marathon winner Sudha Singh hails maiden bronze feat in 2015"
                                            // className={styles.imgeWidth}
                                          />
                                          <p className={styles.swiperHeadnew}>
                                            Salman Khan threat case:
                                            Rajasthan-based Youtuber...
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </SwiperSlide>
                              </Link>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* OPINIOS SECTION START */}
                  </div>
                </div>
              </div>
            </div>
            {/* LEFT SIDE SECTION */}
            <div className="col-md-4">
              <div className="row">
                <div className={`${styles.stickysidebar}`}>
                  {/* <div className={`${styles.stickysidebar} `}> */}
                  <div className="col-md-12">
                    <p className="advertisement-text text-center mt-1 mb-0">
                      ADVERTISEMENT
                    </p>
                    <div className="add-300x250 mx-auto text-center mb-3"></div>
                  </div>
                  <div className="sticky_sticked" id="sticky-ads">
                    <section>
                      <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                        <div className="left-inner-colm pb-0 mb-2">
                          <h2 className="d-md-inline mr-md-3 main-heading">
                            <span className="main-headline-sidebar"></span>
                            <span className="px-2">Poll</span>
                          </h2>
                        </div>
                        <div>
                          <Link href="">
                            <Image
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
                      <div
                        className={`${styles.borderMain} border py-2 px-2 mx-2`}
                      >
                        <Swiper
                          slidesPerView={1}
                          spaceBetween={30}
                          pagination={{
                            clickable: true,
                            dynamicBullets: true,
                          }}
                          breakpoints={{
                            0: {
                              slidesPerView: 1,
                              spaceBetween: 10,
                            },
                          }}
                          modules={[Pagination, Navigation]}
                          className="changeSwiper pb-4"
                        >
                          <SwiperSlide>
                            <h5 className={styles.pollPera}>
                              Which streaming service do you use the most?
                            </h5>
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
                                  <span className={styles.progressheadpera}>
                                    Netflix
                                  </span>
                                  <span className={styles.progresspercent}>
                                    60%
                                  </span>
                                </div>
                                <div
                                  className="progress"
                                  style={{ height: "10px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: "60%",
                                      backgroundColor: "rgb(36, 83, 167)",
                                    }}
                                    aria-valuenow="60"
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
                                  name="one"
                                  className="form-check-input"
                                  // type="radio"
                                  // name="flexRadioDefault"
                                />
                              </div>
                              <div
                                className="col-md-10 col-10  mx-2 mb-3 py-2"
                                style={{ border: "1px solid #46C1F2" }}
                              >
                                <div className="progressHead d-flex justify-content-between">
                                  <span className={styles.progressheadpera}>
                                    Prime Video
                                  </span>
                                  <span className={styles.progresspercent}>
                                    25%
                                  </span>
                                </div>
                                <div
                                  className="progress"
                                  style={{ height: "10px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: "25%",
                                      backgroundColor: "rgb(36, 83, 167)",
                                    }}
                                    aria-valuenow="25"
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
                                  // type="radio"
                                  name="flexRadioDefault"
                                />
                              </div>
                              <div
                                className="col-md-10 col-10  mx-2 mb-3 py-2"
                                style={{ border: "1px solid #46C1F2" }}
                              >
                                <div className="progressHead d-flex justify-content-between">
                                  <span className={styles.progressheadpera}>
                                    Disney+
                                  </span>
                                  <span className={styles.progresspercent}>
                                    15%
                                  </span>
                                </div>
                                <div
                                  className="progress"
                                  style={{ height: "10px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: "15%",
                                      backgroundColor: "rgb(36, 83, 167)",
                                    }}
                                    aria-valuenow="15"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <h5 className={styles.pollPera}>
                              How often do you binge-watch a series in one
                              sitting?
                            </h5>
                            <div className="row align-items-center">
                              <div className="col-md-1 col-1">
                                <input type="radio" name="one" />
                              </div>
                              <div
                                className="col-md-10 col-10  mx-2 mb-3 py-2"
                                style={{ border: "1px solid #46C1F2" }}
                              >
                                <div className="progressHead d-flex justify-content-between">
                                  <span className={styles.progressheadpera}>
                                    Often
                                  </span>
                                  <span className={styles.progresspercent}>
                                    70%
                                  </span>
                                </div>
                                <div
                                  className="progress"
                                  style={{ height: "10px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: "70%",
                                      backgroundColor: "rgb(36, 83, 167)",
                                    }}
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-md-1 col-1">
                                <input type="radio" />
                              </div>
                              <div
                                className="col-md-10 col-10  mx-2 mb-3 py-2"
                                style={{ border: "1px solid #46C1F2" }}
                              >
                                <div className="progressHead d-flex justify-content-between">
                                  <span className={styles.progressheadpera}>
                                    Sometimes
                                  </span>
                                  <span className={styles.progresspercent}>
                                    25%
                                  </span>
                                </div>
                                <div
                                  className="progress"
                                  style={{ height: "10px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: "25%",
                                      backgroundColor: "rgb(36, 83, 167)",
                                    }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-md-1 col-1">
                                <input type="radio" name="one" />
                              </div>
                              <div
                                className="col-md-10 col-10  mx-2 mb-3 py-2"
                                style={{ border: "1px solid #46C1F2" }}
                              >
                                <div className="progressHead d-flex justify-content-between">
                                  <span className={styles.progressheadpera}>
                                    Rarely
                                  </span>
                                  <span className={styles.progresspercent}>
                                    5%
                                  </span>
                                </div>
                                <div
                                  className="progress"
                                  style={{ height: "10px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: "5%",
                                      backgroundColor: "rgb(36, 83, 167)",
                                    }}
                                    aria-valuenow="5"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </section>
                    <section id="quiz" className="d-block d-md-none">
                      <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                        <div className="left-inner-colm pb-0 mb-2">
                          <h2 className="d-md-inline mr-md-3 main-heading">
                            <span className="main-headline-sidebar"></span>
                            <span className="px-2">Quiz</span>
                          </h2>
                        </div>
                        <div>
                          <Link href="">
                            <Image
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
                      <div
                        className={`${styles.borderMain} border text-center pb-2`}
                      >
                        <Swiper
                          slidesPerView={1}
                          spaceBetween={30}
                          pagination={{
                            clickable: true,
                            dynamicBullets: true,
                          }}
                          breakpoints={{
                            0: {
                              slidesPerView: 1,
                              spaceBetween: 10,
                            },
                          }}
                          modules={[Pagination, Navigation]}
                          className="homeopinionsSwiper pb-4"
                        >
                          <SwiperSlide>
                            <p className={styles.quizepera}>
                              Pride Month: How much do
                            </p>
                            <p className={styles.quizepera}>
                              you know of Mumbai's
                            </p>
                            <p className={styles.quizepera}>LGBTQIA+ legacy?</p>
                            <button className={styles.playnow}>Play Now</button>
                          </SwiperSlide>
                          <SwiperSlide>
                            <p className={styles.quizepera}>
                              Pride Month: How much do
                            </p>
                            <p className={styles.quizepera}>
                              you know of Mumbai's
                            </p>
                            <p className={styles.quizepera}>LGBTQIA+ legacy?</p>
                            <button className={styles.playnow}>Play Now</button>
                          </SwiperSlide>
                          <SwiperSlide>
                            <p className={styles.quizepera}>
                              Pride Month: How much do
                            </p>
                            <p className={styles.quizepera}>
                              you know of Mumbai's
                            </p>
                            <p className={styles.quizepera}>LGBTQIA+ legacy?</p>
                            <button className={styles.playnow}>Play Now</button>
                          </SwiperSlide>
                          <SwiperSlide>
                            <p className={styles.quizepera}>
                              Pride Month: How much do
                            </p>
                            <p className={styles.quizepera}>
                              you know of Mumbai's
                            </p>
                            <p className={styles.quizepera}>LGBTQIA+ legacy?</p>
                            <button className={styles.playnow}>Play Now</button>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </section>
                    {/* </div> */}
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

export default Articlemain;

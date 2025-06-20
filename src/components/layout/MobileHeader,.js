import { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../../../next.config.js";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faArrowRight,
  faAngleRight,
  faSun,
  faSearch
} from "@fortawesome/fontawesome-free-solid";
import Image from "next/image";
import googleNotification from "../../../public/assets/images/google-notification.png";
import facebook from "../../../public/assets/images/facebook.png";
import instagram from "../../../public/assets/images/instagram.png";
import youtube from "../../../public/assets/images/youTube.png";
import whatsapp from "../../../public/assets/images/whatsapp.png";
import line from "../../../public/assets/images/line.png";
import greaterthan from "../../../public/assets/images/doublegreaterthan.png";
import TrendingNews from "../../../pages/TrendingNews.js";
import searchMobile from "../../../public/assets/images/search-mobile.png";
import UserMobile from "../../../public/assets/images/user-mobile.png";
import maps from '../../../public/assets/images/maps-icon.png';
import microphone from '../../../public/assets/images/microphone-icon.png';
import home from "../../../public/assets/images/home-icon.png";
import photos from "../../../public/assets/images/photos-icon.png";
import epaper from "../../../public/assets/images/e-paper-icon.png";
import video from "../../../public/assets/images/videos-icon.png";
import shots from "../../../public/assets/images/shots-icon.png";
import sun from '../../../public/assets/images/sun-icon.png';

function MobileHeader() {
  const [menuData, setMenuData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [submenuStates, setSubmenuStates] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);  // Track the active dropdown (either 'search' or 'user')
  const [menuDropdownOpen, setMenuDropdownOpen] = useState({});  // State for each menu item dropdown
  const [weather, setWeather] = useState(null);
  const toggleSearchDropdown = () => {
    setIsSearchDropdownVisible(!isSearchDropdownVisible);
  };
  const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        let formatdata = new FormData();
        response = await axios.post(`${config.API_HOST}getMenu`, formatdata);
        const sortedData = response.data;
        setMenuData(sortedData);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        let formatdata = new FormData();
        response = await axios.post(`${config.API_HOST}getMenu`, formatdata);
        const sortedData = response.data;
        setMenuData(sortedData);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }

      try {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=YOUR_API_KEY&units=metric`);
        setWeather(weatherResponse.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setActiveItem(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.mobile-sticky');
      if (window.scrollY > 10) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = (menuUrl) => {
    setSubmenuStates((prevState) => ({
      ...prevState,
      [menuUrl]: !prevState[menuUrl],
    }));
  };

  const handleDropdownClick = (dropdownType) => {
    // If clicking the same dropdown, toggle its visibility
    if (activeDropdown === dropdownType) {
      setActiveDropdown(null);  // Close the dropdown
    } else {
      setActiveDropdown(dropdownType);  // Open the clicked dropdown and close others
    }
  };

  const toggleMenuDropdown = (menuUrl) => {
    setMenuDropdownOpen((prevState) => ({
      ...prevState,
      [menuUrl]: !prevState[menuUrl], // Toggle the clicked menu item dropdown
    }));
  };

  return (
    <div className="container d-block d-md-none">
      <div class="row">
        <div class="col-12 text-center">
          <div class="top-mobile-add"></div>
        </div>
      </div>
      <div className="mobile-sticky">

        <div className="row pt-2">
          <div className="col-5 logo-pos">
            <Link href="/">
              <img
                src="https://www.mid-day.com/assets/images/logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="col-5 mobile-subscribe-column px-0 text-right">
            <Image
              src={searchMobile}
              className="user-icon-mobile-pos"
              alt=""
              title=""
              onClick={() => handleDropdownClick("search")}  // Trigger dropdown for search icon
            />
            <Image
              src={UserMobile}
              className="user-icon-mobile-pos"
              alt=""
              title=""
              onClick={() => handleDropdownClick("user")}  // Trigger dropdown for user icon
            />
          </div>
        </div>
        {/* Dropdown for search icon */}
        {activeDropdown === "search" && (
          <div className="custom-dropdown px-2" style={{ overflowX: 'hidden' }}>
            <div className="row px-3">
              <div className="col-12" style={{ background: '#F6F6F6', border: '1px solid #DFDFDF', padding: '10px' }}>
                <div className="search-section d-flex align-items-center" onClick={toggleSearchDropdown} style={{ position: 'relative' }}>
                  <FontAwesomeIcon icon={faSearch} className="mr-2 text-muted" />
                  <input type="text" className="border-0 shadow-none" placeholder="Search here" style={{ background: '#F6F6F6', width: '100%' }} />
                  <div>
                    <Image src={microphone} alt="Microphone" className="ml-2" style={{ width: '15px' }} />
                  </div>
                  {/* Dropdown menu */}
                  {isSearchDropdownVisible && (
                    <div className="search-dropdown search-dropdown-position">
                     
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Dropdown for user icon */}
        {activeDropdown === "user" && (
          <div className="custom-dropdown custom-dropdown-user">
            <ul>
              <li>User Option 1</li>
              <li>User Option 2</li>
              <li>User Option 3</li>
            </ul>
          </div>
        )}
        <div className="row">
          <div className="col-12 nav-height px-0">
            <nav role="navigation">
              <div id="menuToggle">
                <input
                  type="checkbox"
                  checked={menuOpen}
                  onChange={toggleMenu}
                />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu" className={menuOpen ? "open px-0 px-3" : ""}>
                  <div className="row py-2 px-3 mobile-border-bottom-pos">
                    <div className="col-6 px-4" style={{paddingTop: '7px'}}>
                      <span className="date-time-day">Monday, 13 Jan 2025<br /></span>
                    </div>
                    <div className="col-6">
                      <div className="weather-widget d-flex align-items-center" style={{ marginTop: '1px' }}>
                        <div className="location d-flex align-items-center">
                          <Image src={maps} alt="Location" className="me-2" style={{ width: '15px', position: 'relative', top: '2px' }} />
                          <span className="me-2" style={{ fontSize: '14px', left: '-4px !important', top: '-4px !important', color: '#595959', background: '#FFFFFF' }}>{weather ? weather.name : "Mumbai"}</span>
                        </div>
                        <div className="weather-info d-flex align-items-center">
                          <Image src={sun} alt="Weather Icon" className="me-2" style={{ width: '30px', position: 'relative', left: '12px', top: '3px' }} />
                          <span style={{ fontSize: '18px', left: '10px !important', top: '-7px !important', color: '#595959', background: '#FFFFFF', fontWeight: 'bold' }}>{weather ? `${weather.main.temp}°C` : "31°C"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row py-2 px-5 justify-content-center border-bottom">
                    <div className="col text-center">
                      <Link href="" style={{ fontSize: '12px', color: '#14263D !important', textDecoration: 'underline !important' }}>Mid-day Gujarati</Link>
                    </div>
                    <div className="col text-center">
                      <Link href="" style={{ fontSize: '12px', color: '#14263D !important', textDecoration: 'underline !important' }}>Inquilab</Link>
                    </div>
                    <div className="col text-center">
                      <Link href="" style={{ fontSize: '12px', color: '#14263D !important', textDecoration: 'underline !important' }}>Mid-day Hindi</Link>
                    </div>
                  </div>
                  <Link href="/">
                    <li
                      className={`mx-0 ps-3 ${activeItem === "/" ? "active" : ""
                        }`}
                    >
                      <div
                        className={`nav-side-bar ${activeItem === "/" ? "active" : ""
                          }`}
                      ></div>
                      Home
                    </li>
                  </Link>
                  {menuData &&
                    menuData.length > 0 &&
                    menuData.map((menuDataitem, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          toggleMenuDropdown(menuDataitem.burger_menu_master_url);
                          setActiveItem(menuDataitem.burger_menu_master_url);
                        }}
                        style={{ cursor: "pointer" }}
                        className={`mx-0 ps-3 ${activeItem.startsWith(
                          menuDataitem.burger_menu_master_url
                        )
                          ? "active"
                          : ""
                          }`}
                      >
                        <div
                          className={`nav-side-bar ${activeItem.startsWith(
                            menuDataitem.burger_menu_master_url
                          )
                            ? "active"
                            : ""
                            }`}
                        ></div>
                        {menuDataitem.burger_menu_master_title}
                        {menuDataitem.sub_menu &&
                          menuDataitem.sub_menu.length > 0 && (
                            <spans
                              style={{
                                display: "inline-block",
                                transition: "transform 0.3s ease",
                              }}
                            >
                              {menuDropdownOpen[
                                menuDataitem.burger_menu_master_url
                              ] ? (
                                <FontAwesomeIcon icon={faChevronUp} />
                              ) : (
                                <FontAwesomeIcon icon={faChevronDown} />
                              )}
                            </spans>
                          )}
                        {menuDataitem.sub_menu &&
                          menuDataitem.sub_menu.length > 0 && (
                            <ul
                              style={{
                                display: menuDropdownOpen[
                                  menuDataitem.burger_menu_master_url
                                ]
                                  ? "block"
                                  : "none",
                              }}
                            >
                              {menuDataitem.sub_menu.map(
                                (submenuitem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={submenuitem.burger_menu_child_master_url}
                                  >
                                    <li className="mx-0">
                                      <Image
                                        src={line}
                                        style={{ width: "3%" }}
                                        className="me-1"
                                      />
                                      {submenuitem.burger_menu_child_master_title}
                                    </li>
                                  </Link>
                                )
                              )}
                            </ul>
                          )}
                      </li>
                    ))}
                  <div className="row my-3">
                    <div className="col-12 text-center">
                      <div className="border-top border-bottom py-3">
                        <div className="never-miss-headline">
                          <p>Never Miss a Headline!</p>
                        </div>
                        <div className="text-center">
                          <button class="subscribenow-btn">Subscribe Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12 text-center">
                      <ul className="social-icons-inline inline-menu d-inline-block pt-md-1">
                        <li>Follow Us:</li>
                        <li>
                          <Link href="https://www.facebook.com/middayindia">
                            <span className="icon-facebook-logo new-social-size"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/middayindia">
                            <span className="icon-instagram new-social-size"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com/mid_day">
                            <img src="https://www.mid-day.com/assets/images/twitter-new-icon.png" alt="Twitter"
                              className="new-twitter-size-black" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.youtube.com/c/middayindia">
                            <span className="icon-youtube new-social-size pe-1"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          <div
            className="bg-grey text-mid-header sticky"
            style={{ marginTop: "0px" }}
          >
            <div style={{ background: "#F5F5F5 !important" }}>
              <div className="row">
                <div className="col-12 px-0">
                  <TrendingNews />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ background: '#FFFFFF', position: 'fixed', bottom: '0', width: '100%', zIndex: '1000', boxShadow: '0 10px 13px -1px #919191' }}>
        <div className="col text-center">
          <Link href=""><Image src={home} alt="Home" className="mobile-footer-icon" /></Link>
        </div>
        <div className="col text-center">
          <Link href=""><Image src={photos} alt="Photos" className="mobile-footer-icon" /></Link>
        </div>
        <div className="col text-center">
          <Link href=""><Image src={epaper} alt="E-Paper" className="mobile-footer-icon" /></Link>
        </div>
        <div className="col text-center">
          <Link href=""><Image src={video} alt="Videos" className="mobile-footer-icon" /></Link>
        </div>
        <div className="col text-center">
          <Link href=""><Image src={shots} alt="Shots" className="mobile-footer-icon" /></Link>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;

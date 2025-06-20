import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAngleDown, faAngleUp, faSearch, faSun } from "@fortawesome/fontawesome-free-solid";
import TrendingNews from "../../../pages/TrendingNews.js";
import axios from "axios";
import { config } from "../../../next.config.js";
import Image from 'next/image';
import maps from '../../../public/assets/images/maps-icon.png';
import microphone from '../../../public/assets/images/microphone-icon.png';
import shorts from '../../../public/assets/images/shorts-icon.png';
import notification from '../../../public/assets/images/notification-icon.png';
import userIcon from '../../../public/assets/images/users-icon.png';
import sun from '../../../public/assets/images/sun-icon.png';

const DesktopHeader = () => {
  const [menuData, setMenuData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);
  const [isUserDropdownVisible, setIsUserDropdownVisible] = useState(false); // Track user dropdown visibility

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
    const handleScroll = () => {
      const header = document.querySelector(".sticky");
      if (window.scrollY > 0) {
        header.classList.add("fixed-header");
      } else {
        header.classList.remove("fixed-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const homeIcon = document.querySelector(".home-icon");
      if (window.scrollY > 0) {
        homeIcon.style.display = "block"; // Show the icon after scrolling
      } else {
        homeIcon.style.display = "none"; // Hide the icon when at the top
      }
    };

    // Set up the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the user starts the page scrolled down
    handleScroll();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnterMenu = (index) => {
    setIsHovered(true);
    setActiveIndex(index);
  };

  const handleMouseLeaveMenu = () => {
    setIsHovered(false);
    setActiveIndex(null);
  };

  const handleMouseEnterUser = () => {
    setIsUserDropdownVisible(true); // Show user dropdown
  };

  const handleMouseLeaveUser = () => {
    setIsUserDropdownVisible(false); // Hide user dropdown
  };

  const toggleSearchDropdown = () => {
    setIsSearchDropdownVisible(!isSearchDropdownVisible);
  };

  return (
    <div className="mainheader">
      <div className="Large-Desktop-only">
        {/* Sticky Ads */}
        <div className="rw_right_sticky d-none d-md-block" id="rw_right_sticky">
          <div id="div-gpt-ad-radiocityin41478"></div>
        </div>
        <div className="rw_left_sticky d-none d-md-block" id="rw_left_sticky">
          <div id="div-gpt-ad-radiocityin41477"></div>
        </div>
      </div>
      <div className="d-md-block d-none mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="top-desktop-add"></div>
            </div>
          </div>
        </div>

      </div>
      <div className="header d-none d-md-block">
        <div className="mt-3 pb-1 d-md-block d-none" style={{ backgroundColor: "#F6F6F6" }}>
          <div className="container">
            <div className="row py-1 top-nav-border" style={{ borderRight: 'none !important' }}>
              <div className="col-3 px-md-3">
                <div className="search-section d-flex align-items-center border-bottom" onClick={toggleSearchDropdown} style={{ position: 'relative' }}>
                  <FontAwesomeIcon icon={faSearch} className="mr-2 text-muted" />
                  <input type="text" className="border-0 shadow-none" placeholder="Search" style={{ background: '#F6F6F6', marginLeft: '5px' }} />
                  <Image src={microphone} alt="Microphone" className="ml-2" style={{ width: '12px', position: 'relative', left: '22px' }} />
                  {/* Dropdown menu */}
                  {isSearchDropdownVisible && (
                    <div className="search-dropdown search-dropdown-position">
                      <ul style={{ listStyleType: 'none', margin: '0', padding: '0', overflowY: 'auto', border: 'none' }}>
                        <li style={{ padding: '10px', cursor: 'pointer' }}>Search Result 1</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-3">
                <div className="px-3 col text-dark" style={{ marginTop: "4px", fontSize:'14px' }}>
                  <span>
                    Monday, 13 Jan 2025
                    <br />
                  </span>
                </div>
              </div>
              <div className="col-6 text-right">
                <ul className="social-icons-inline inline-menu d-inline-block socialIconRhs pt-md-1">
                  <li className="border-right">
                    <Link href="">
                      <Image src={notification} alt="Notification" className="" style={{ width: '18px', marginTop: '-5px' }} />
                    </Link>
                  </li>
                  <li className="border-right">
                    <Link href="">
                      <Image src={shorts} alt="Shorts" className="" style={{ width: '18px', marginTop: '-5px' }} />
                    </Link>
                  </li>
                  <li className="border-right">
                    <Link href="https://epaper.mid-day.com/">
                      <p className="mb-0 pl-2 text-danger text-center" style={{fontSize: '12px', fontWeight: 'bold', textDecoration: 'underline'}}>Today's E-Paper</p>
                    </Link>
                  </li>
                  <li style={{fontSize: '12px'}}>Follow Us:</li>
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
                      <img src="https://www.mid-day.com/assets/images/twitter-new-icon.png" alt="Twitter" className="new-twitter-size-black" />
                    </Link>
                  </li>
                  <li className="border-right">
                    <Link href="https://www.youtube.com/c/middayindia">
                      <span className="icon-youtube new-social-size pe-1"></span>
                    </Link>
                  </li>
                  <li>
                    <div className="position-relative" onMouseEnter={handleMouseEnterUser} onMouseLeave={handleMouseLeaveUser}>
                      <button style={{ background: 'none', border: 'none', padding: 0 }}>
                        <Image src={userIcon} alt="User Icon" className="new-user-icon" style={{ width: '18px', marginTop: '-4px' }} />
                      </button>
                      {isUserDropdownVisible && (
                        <div className="user-dropdown-menu">
                          <ul>
                            <li><Link href="/profile">Profile</Link></li>
                            <li><Link href="/settings">Settings</Link></li>
                            <li><Link href="/logout">Logout</Link></li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Weather, Links, and Main Logo Sections */}
        <div className="container text-mid-header pt-3 d-md-block d-none">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col">
              <div className="container h-100 text-left">
                <div className="row">
                  <div className="col text-center" style={{ paddingLeft: "5px", paddingRight: "52px", paddingTop: "10px" }}>
                    <div className="weather-widget d-flex align-items-center">
                      <div className="location d-flex align-items-center">
                        <Image src={maps} alt="Location" className="me-2" style={{ width: '16px' }} />
                        <span className="me-2" style={{ fontSize: '18px', color: '#595959' }}>{weather ? weather.name : "Mumbai"}</span>
                      </div>
                      <div className="weather-info d-flex align-items-center">
                        <Image src={sun} alt="Weather Icon" className="me-2" style={{ width: '30px' }} />
                        <span style={{ fontSize: '21px', color: '#595959', fontWeight: 'bold' }}>{weather ? `${weather.main.temp}°C` : "31°C"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <Link href="https://www.gujaratimidday.com/">
                <small className="othersite">Mid-day Gujarati</small>
              </Link>
              <Link href="https://www.inquilab.com/">
                <small className="othersite">Inquilab</small>
              </Link>
              <Link href="https://hindi.mid-day.com/">
                <small className="othersite">Mid-day Hindi</small>
              </Link>
              <div>
                <Link href="/">
                  <img src="https://www.mid-day.com/assets/images/logo.png" alt="Mid-Day" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="container h-100 text-right justify-content-right">
                <div className="row justify-content-right h-100" style={{ alignItems: "center", justifyContent: "flex-end" }}>
                  <div className="col px-0 position-relative subhover">
                    <Link href=""><button className="btn sub-button rounded"><span className="subscribe-position">SUBSCRIBE</span></button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="borderred pt-2"></div>

        <div className="bg-grey text-mid-header sticky">
          <div className="nav-background">
            <ul className="px-md-0 mt-md-0 pr-2 pl-1 py-3 header-list text-center mb-0 header-list-mobile">
              <li>
                <Link href="/" className="home-color">
                  <FontAwesomeIcon icon={faHome} className="home-icon" />
                </Link>
              </li>
              {menuData &&
                menuData.length > 0 &&
                menuData.map((menuDataitem, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => handleMouseEnterMenu(index)}
                    onMouseLeave={handleMouseLeaveMenu}
                    className={isHovered === index ? "active-dropdown" : ""}
                  >
                    <Link href={menuDataitem.burger_menu_master_url}>
                      {menuDataitem.burger_menu_master_title}
                    </Link>
                    {menuDataitem.sub_menu && menuDataitem.sub_menu.length > 0 && (
                      <div>
                        <div className="triangle-up-navbar"></div>
                        <ul className="sub-list">
                          {menuDataitem.sub_menu.map((submenuitem, subIndex) => (
                            <li key={subIndex}>
                              <Link href={submenuitem.burger_menu_child_master_url}>
                                {submenuitem.burger_menu_child_master_title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {menuDataitem.sub_menu && menuDataitem.sub_menu.length > 0 && (
                      <FontAwesomeIcon
                        icon={activeIndex === index ? faAngleUp : faAngleDown}
                        className="dropdown-arrow"
                        style={{ marginLeft: "10px", transition: "transform 0.3s ease" }}
                      />
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <TrendingNews/>
      </div>
    </div>
  );
};

export default DesktopHeader;
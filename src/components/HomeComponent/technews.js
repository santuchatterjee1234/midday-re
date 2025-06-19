import React, { useState } from "react";
import homecss from "../../../styles/Home.module.css";
import Image from "next/image";
import batch from "../../../public/assets/images/batch.png";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import cta from "../../../public/assets/images/cta-mobile.png";
import trending from "../../../public/assets/images/trending.png";
import ctaMobile from "../../../public/assets/images/cta-mobile.png";
import Link from "next/link";
import axios from "axios";
import { config } from "../../../next.config.js";

function Technews({ data }) {
  const [pollData, setPollData] = useState(data.rhs_data[0].poll_option_data);
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const handleOptionChange = async (poll_id, selectedOptionId) => {
    setSelectedOptionId(poll_id);
    let response;
    let formatdata = new FormData();
    formatdata.append("poll_id", poll_id);
    formatdata.append("poll_label", selectedOptionId);
    response = await axios.post(
      `${config.API_HOST}setHomePageSavePollVote`,
      formatdata
    );
    setPollData(response.data[0].poll_option_data);
  };

  const capitalizeFirstLetterWithReplace = (string) => {
    return (
      string.charAt(0).toUpperCase() + string.slice(1).replace("news_data", "")
    );
  };
  const ReplaceString = (string) => {
    return string.replace("news_data", "");
  };
  const roundOfValue = (number) => {
    return Math.round(number);
  };
  return (
    <div className="container px-md-3 mb-5">
      <div className="row">
        <div className="col-md-9 lhselement tech-right-border-desktop-repeat mt-4">
          <div className="row">
            {/* Tech & Bussiness News Start */}
            {data.All &&
              Object.keys(data.All).length > 0 &&
              Object.keys(data.All).map((subCategoryKey) => (
                <div className="col-md-6">
                  <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                    <div className="left-inner-colm pb-0 mb-2 mx-0">
                      <h2 className="d-md-inline ms-md-0 main-heading ">
                        <span className="main-headline-sidebar category-side-bar ms-0"></span>
                        <span className="px-2">
                          {capitalizeFirstLetterWithReplace(subCategoryKey)}{" "}
                          News
                        </span>
                      </h2>
                    </div>
                    <div className="">
                      <Link href={`/${ReplaceString(subCategoryKey)}`}>
                        <Image src={cta} className="cta-position" />
                      </Link>
                    </div>
                  </div>
                  {data.All[subCategoryKey] &&
                    data.All[subCategoryKey].length > 0 &&
                    data.All[subCategoryKey].slice(0, 1).map((item, index) => (
                      <div className="position-relative">
                        <Link href={item.URL}>
                          <img
                            src={item.Images.Image1}
                            alt={item.image_caption}
                            title={item.Homeheadline}
                            className="border-radius-img"
                          />
                          {/* <Image src={batch} className='batchimg-big'/> */}
                          {item.username === "Videos" && (
                            <Image src={pauseicon} className="pauseicon-big" />
                          )}
                          <h1
                            className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                          >
                            {item.Homeheadline}
                          </h1>
                        </Link>
                        <p className="date-time-loc-pos d-none d-md-block">
                          <span>{item.show_date_format}</span>
                          {/* <span className='date-time-loc-color'> | Jane Borges</span> */}
                        </p>
                      </div>
                    ))}
                  {/* Trending Start */}
                  {data.keywords[ReplaceString(subCategoryKey)] &&
                    data.keywords[ReplaceString(subCategoryKey)].length > 0 && (
                      <div className="trending-container px-0 mb-3 mb-md-1">
                        <div className="row trending-row-pos py-2 mb-0">
                          <div className="col-3 border-right-position pe-1 ps-0">
                            <button className="btn-red">
                              <Image
                                src={trending}
                                className="trending-pos"
                                alt="Trending"
                              />
                              <span className="trending-txt">Trending</span>
                            </button>
                          </div>
                          <div className="trending-keywords-scroller px-0">
                            {data.keywords[ReplaceString(subCategoryKey)].map(
                              (item, index) => (
                                <div
                                  key={index}
                                  className="col-inline pe-0 ps-1"
                                >
                                  <Link href={item.trending_keyword_master_url}>
                                    <button className="btn-white">
                                      #{item.trending_keyword_master_keyword}
                                    </button>
                                  </Link>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  {/* Trending End */}
                  {data.All[subCategoryKey] &&
                    data.All[subCategoryKey].length > 0 &&
                    data.All[subCategoryKey].slice(1, 5).map((item, index) => (
                      <div className="row pt-2 position-relative row-height-position">
                        <div className="col-9 mb-3 mb-md-0">
                          <Link href={item.URL}>
                            <h2
                              className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                            >
                              {item.Homeheadline}
                            </h2>
                          </Link>
                        </div>
                        <div className="col-3 ps-0 mb-3 position-relative">
                          <Link href={item.URL}>
                            <img
                              src={item.Images.Image1}
                              alt={item.image_caption}
                              title={item.Homeheadline}
                              className="border-radius-img"
                            />
                            {/* <Image src={batch} className='batchimg-small-position'/> */}
                            {item.username === "Videos" && (
                              <Image
                                src={pauseicon}
                                className="pauseicon-small"
                              />
                            )}
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            {/* Tech & Bussiness News End */}
          </div>
        </div>
        <div className="col-md-3 rhselement pt-2">
          {/* Advertisement Start */}
          <div className="row">
            <div className="col-md-12">
              <p className="advertisement-text text-center mt-1 mt-md-3 pt-md-4 mb-0">
                ADVERTISEMENT
              </p>
              <div className="add-300x250 mx-auto text-center mb-3"></div>
            </div>
          </div>
          {/* Advertisement End */}
          {/* POll Start */}
          <div className="row">
            <div className="col-md-12 px-4">
              {data.rhs_data && data.rhs_data.length > 0 && (
                <div className="row pb-2">
                  <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header px-0">
                    <div className="left-inner-colm pb-0 mb-2">
                      <h2 className="d-md-inline mr-md-3 main-heading">
                        <span className="main-headline-sidebar"></span>
                        <span className="px-2">Poll</span>
                      </h2>
                    </div>
                    <div>
                      <Link href="/timepass">
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
                  <div className={`${homecss.borderMain} border py-2 px-2`}>
                    <h2 className="pollPera">{data.rhs_data[0].title}</h2>
                    {pollData &&
                      pollData.length > 0 &&
                      pollData.map((item, index) => (
                        <div className="row align-items-center" key={index}>
                          {selectedOptionId == "" && (
                            <div className="col-md-1 col-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                checked={item.isSelected}
                                onChange={() =>
                                  handleOptionChange(
                                    data.rhs_data[0].id,
                                    item.answer_label
                                  )
                                }
                              />
                            </div>
                          )}
                          <div
                            className={`${
                              selectedOptionId == ""
                                ? "col-md-10 col-9 mx-md-1"
                                : "col-11"
                            } mx-3 mb-3 py-2`}
                            style={{ border: "1px solid #46C1F2" }}
                          >
                            <div className="progressHead d-flex justify-content-between">
                              <span className={homecss.progressheadpera}>
                                {item.answer_label}
                              </span>
                              {selectedOptionId != "" && (
                                <span className={homecss.progresspercent}>
                                  {roundOfValue(item.percentage)}%
                                </span>
                              )}
                            </div>
                            {selectedOptionId != "" && (
                              <div
                                className="progress"
                                style={{ height: "10px" }}
                              >
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: `${roundOfValue(item.percentage)}%`,
                                    backgroundColor: "rgb(36, 83, 167)",
                                  }}
                                  aria-valuenow={roundOfValue(item.percentage)}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Poll End */}
        </div>
      </div>
    </div>
  );
}

export default Technews;

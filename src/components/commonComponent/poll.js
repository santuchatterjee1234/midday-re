import React, { useState, useEffect } from "react";
import homecss from "../../../styles/category.module.css";
import Image from "next/image";
import Link from "next/link";
import cta from "../../../public/assets/images/cta.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ctaMobile from "../../../public/assets/images/cta-mobile.png";
import axios from 'axios';
import { config } from '../../../next.config.js';

export default function Poll({ categoryId }) {
    const [pollData, setPollData] = useState([]);
    const [selectedPollId, setSelectedPollId] = useState(""); // Keeps track of the poll where the option was selected
    const [pollOptions, setPollOptions] = useState({});

    useEffect(() => { 
        const fetchData = async () => {
            try {
                const formatdata = new FormData();
                formatdata.append('category_id', categoryId); 
                const responseQuiz = await axios.post(`${config.API_HOST}getCategorywiseQuizPollData`, formatdata);
                
                const fetchedPollData = responseQuiz.data.poll_data || [];
                setPollData(fetchedPollData);

                // Initialize poll options for all polls
                const initialPollOptions = fetchedPollData.reduce((acc, poll) => {
                    acc[poll.id] = poll.poll_option_data;
                    return acc;
                }, {});
                
                setPollOptions(initialPollOptions);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [categoryId]);

    const handleOptionChange = async (pollId, optionId) => {
        try {
            setSelectedPollId(pollId);
            const formatdata = new FormData();
            formatdata.append("poll_id", pollId);
            formatdata.append("poll_label", optionId);
            const response = await axios.post(`${config.API_HOST}setHomePageSavePollVote`, formatdata);

            // Update poll options in state for the specific pollId
            if (response.data && response.data[0]) {
                setPollOptions(prev => ({
                    ...prev,
                    [pollId]: response.data[0].poll_option_data
                }));
            }
        } catch (error) {
            console.error('Error saving poll vote:', error);
        }
    };

    const roundOfValue = (value) => Math.round(value);

    return ( 
        <div>
            <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                <div className="left-inner-colm pb-0 mb-2">
                    <h2 className="d-md-inline mr-md-3 main-heading">
                        <span className="main-headline-sidebar"></span>
                        <span className="px-2">Poll</span>
                    </h2>
                </div>
                <div>
                    <Link href="">
                        <Image src={cta} alt="cta-view" className="cta-position d-none d-md-block" />
                        <Image src={ctaMobile} alt="cta-view" className="cta-position d-block d-md-none" />
                    </Link>
                </div>
            </div>
            {pollData.length > 0 && (
                <div className={`${homecss.borderMain} border py-2 px-2`}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        breakpoints={{ 0: { slidesPerView: 1, spaceBetween: 10 } }}
                        modules={[Pagination, Navigation]}
                        className="changeSwiper pb-4"
                    >
                        {pollData.map((poll) => (
                            <SwiperSlide key={poll.id}>
                                <h5 className={homecss.pollPera}>{poll.title}</h5>
                                {pollOptions[poll.id] && 
                                    pollOptions[poll.id].map((option, optionIndex) => (
                                        <div className="row align-items-center" key={optionIndex}>
                                            {/* Hide radio buttons if the poll has been selected */}
                                            {selectedPollId !== poll.id && (
                                                <div className="col-md-1 col-1 me-1">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`poll-${poll.id}`}
                                                        onChange={() => handleOptionChange(poll.id, option.answer_label)}
                                                    style={{marginTop: '-5px'}}/>
                                                </div>
                                            )}
                                            <div
                                                className={`${
                                                    selectedPollId !== poll.id
                                                        ? "col-md-10 col-9 mx-md-1"
                                                        : "col-md-10 col-11"
                                                } mx-3 mb-3 py-2`}
                                                style={{ border: "1px solid #46C1F2" }}
                                            >
                                                <div className="progressHead d-flex justify-content-between">
                                                    <span className={homecss.progressheadpera}>
                                                        {option.answer_label}
                                                    </span>
                                                    {/* Show the percentage if this poll is the selected one */}
                                                    {selectedPollId === poll.id && (
                                                        <span className={homecss.progresspercent}>
                                                            {roundOfValue(option.percentage)}%
                                                        </span>
                                                    )}
                                                </div>
                                                {selectedPollId === poll.id && (
                                                    <div className="progress" style={{ height: "10px" }}>
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{
                                                                width: `${roundOfValue(option.percentage)}%`,
                                                                backgroundColor: "rgb(36, 83, 167)",
                                                            }}
                                                            aria-valuenow={roundOfValue(option.percentage)}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                }
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}

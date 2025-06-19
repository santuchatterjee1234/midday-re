import React, { useState, useEffect } from "react";
import homecss from "../../../../styles/category.module.css";
import Image from "next/image";
import Link from "next/link";
import cta from "../../../../public/assets/images/cta.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ctaMobile from "../../../../public/assets/images/cta-mobile.png";
import pauseicon from "../../../../public/assets/images/pauseicon.png";
import batch from "../../../../public/assets/images/batch.png";
import axios from 'axios';
import { config } from '../../../../next.config.js';
export default function tagwisevideo({ subcategoryId, videoTagName }) {
    const [data, setData] = useState(null);
    useEffect(() => { 
        const fetchData = async () => {
            try {
                let formatdata = new FormData();
                formatdata.append('subcategory_id', subcategoryId);
                formatdata.append('video_tag_keyword', videoTagName.replace('-',' ').toLowerCase());
                const response = await axios.post(`${config.API_HOST}getDataVideosTagBySubCategorywise`, formatdata);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return ( 
        <>
        {data && data['tagwise_data'] && data['tagwise_data'].length > 0 && (
        <div className="row">
            <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
            <div className="left-inner-colm pb-0 mb-2">
                <h2 className="d-md-inline mr-md-3 main-heading">
                <span className="main-headline-sidebar"></span>
                <span className="px-2">{videoTagName}</span>
                </h2>
            </div>
            <div>
                <Link href="">
                <Image
                    src={cta}
                    className="cta-position d-none d-md-block"
                    alt="Call to action"
                />
                <Image
                    src={ctaMobile}
                    className="cta-position d-block d-md-none"
                    alt="Call to action mobile"
                />
                </Link>
            </div>
            </div>
            <div className="col-md-12">
            <div className="row pb-3">
                {data['tagwise_data'] &&
                data['tagwise_data'].length > 0 &&
                data['tagwise_data'].slice(0,4).map((item, index) => (
                    <div className="col-md-6 col-6 mb-3">
                    <Link href={item.URL}>
                        <div className="ps-md-0 mb-3 position-relative">
                        <Image
                            src={pauseicon}
                            className="pauseicon-new"
                            alt="Pause icon"
                        />
                        <img
                            src={
                            item.Images.Image2 ===
                            "https://images.mid-day.com/images/"
                                ? item.Images.Image1
                                : item.Images.Image2
                            }
                            alt={item.image_caption ? item.image_caption : item.Homeheadline}
                            title={item.Homeheadline}
                            className="border-radius-img"
                        />
                        {/* <Image
                            src={batch}
                            className="batchimg-small-repeat"
                            alt="Batch image"
                        /> */}
                        </div>
                        <h2
                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2}`}
                        >
                        {item.Homeheadline}
                        </h2>
                    </Link>
                    </div>
                ))}
            </div>
            </div>
        </div>
        )}
        </>
    );
}
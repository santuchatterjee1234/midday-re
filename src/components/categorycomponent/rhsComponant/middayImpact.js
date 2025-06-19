import React, { useState, useEffect } from "react";
import homecss from "../../../../styles/category.module.css";
import Image from "next/image";
import Link from "next/link";
import cta from "../../../../public/assets/images/cta.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from 'axios';
import { config } from '../../../../next.config.js';
import ctaMobile from "../../../../public/assets/images/cta-mobile.png";
export default function middayImpact({ categoryId }) {
    const [data, setData] = useState(null);
    useEffect(() => { 
        const fetchData = async () => {
            try {
                let formatdata = new FormData();
                formatdata.append('category_id', categoryId);
                formatdata.append('tag_keyword', 'midday impact');
                formatdata.append('video_tag_keyword', '');
                const response = await axios.post(`${config.API_HOST}getCategorywiseTagwiseData`, formatdata);
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
                <span className="px-2">Mid-Day Impact</span>
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
            <div className={homecss.rightSide}>
            {data['tagwise_data'].length > 0 && data['tagwise_data'].map(
                (item, index) => (
                
                    <p className={`${homecss.rightpera} mb-3`}>
                        {item.ispaid === "Y" && (
                        <img
                            src="https://www.mid-day.com/assets/images/md-premium.png"
                            className="md-premium-small"
                        />
                        )}
                        
                        <span
                        className={`${homecss.rightpera} mb-0 pr-2`}
                        >
                        {item.Homeheadline}
                        </span>
                        
                    </p>
                )
            )}
            </div>
            </div>
        )}
        </>
    );
}
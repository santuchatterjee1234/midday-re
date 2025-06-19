import React, { useState, useEffect } from "react";
import homecss from "../../../../styles/category.module.css";
import Image from "next/image";
import Link from "next/link";
import cta from "../../../../public/assets/images/cta.png";
import axios from 'axios';
import { config } from '../../../../next.config.js';
import camera from "../../../../public/assets/images/camera.png"; // Assuming camera image is available

export default function exclusive({categoryId}) {  // Capitalized component name to follow React conventions
const [data, setData] = useState(null);
useEffect(() => {
    const fetchData = async () => {
        try {
            let formatdata = new FormData();
            formatdata.append('category_id', categoryId);
            const response = await axios.post(`${config.API_HOST}getCategorywiseGoldData`, formatdata);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);

return (
    <>
        {data && data.gold_data && data.gold_data.length > 0 && (
            <div className="row">
                <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                    <div className="left-inner-colm pb-0 mb-2">
                        <h2 className="d-md-inline mr-md-3 main-heading">
                            <span className="main-headline-sidebar"></span>
                            <span className="px-2">Exclusive</span>
                            <img
                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                className="md-premium"
                            />
                        </h2>
                    </div>
                    <div>
                        <Link href="/midday-premium/">
                            <Image src={cta} className="cta-position" alt="CTA" />
                        </Link>
                    </div>
                </div>
                <div
                    className="col-md-12 py-1 exclusive-background-pos"
                    style={{ background: "#FFFBE7" }}
                >
                    {data.gold_data.map((item, index) => (
                        <div key={index} className="row py-1 pb-md-0 infocus-height-position">
                            <div className="col-9 col-md-8">
                                <Link href={item.URL}>
                                    <h2
                                        className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                                    >
                                        <span>
                                            <img
                                                src="https://www.mid-day.com/assets/images/md-premium.png"
                                                className="md-premium"
                                            />
                                        </span>
                                        {item.Homeheadline}
                                    </h2>
                                </Link>
                            </div>
                            <div className="col-3 col-md-4 ps-0 position-relative">
                                <Link href={item.URL}>
                                    <img
                                        src={item.Images.Image2}
                                        alt={item.image_caption}
                                        title={item.Homeheadline}
                                        className="border-radius-img"
                                    />
                                    {item.username === "Photos" && (
                                        <Image
                                            src={camera}
                                            className="camera-position-small-right"
                                            alt="Camera Icon"
                                        />
                                    )}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </>
);
}

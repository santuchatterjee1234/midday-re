import React, { useState, useEffect } from "react";
import homecss from "../../../../styles/category.module.css";
import Image from "next/image";
import Link from "next/link";
import cta from "../../../../public/assets/images/cta.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ctaMobile from "../../../../public/assets/images/cta-mobile.png";
export default function upcommingEvents({ categoryData }) {
    return ( 
        <div>
            <div className="d-flex justify-content-between align-items-center pt-2 tab-header">
                <div className="left-inner-colm pb-0 mb-2">
                <h2 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar"></span>
                    <span className="px-2">Upcoming Events</span>
                </h2>
                </div>
                <div className="">
                <Link href="">
                    <Image src={cta} className="cta-position" />
                </Link>
                </div>
            </div>
            <div className={homecss.events}>
                <Link href="">
                <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                    <p className={homecss.eventhead}>Cricket</p>
                    <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                    <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                    </p>
                    <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                    </span>
                    </div>
                </div>
                </Link>
                <Link href="">
                <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                    <p className={homecss.eventhead}>Cricket</p>
                    <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                    <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                    </p>
                    <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                    </span>
                    </div>
                </div>
                </Link>
                <Link href="">
                <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                    <p className={homecss.eventhead}>Cricket</p>
                    <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                    <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                    </p>
                    <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                    </span>
                    </div>
                </div>
                </Link>
                <Link href="">
                <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                    <p className={homecss.eventhead}>Cricket</p>
                    <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                    <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                    </p>
                    <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                    </span>
                    </div>
                </div>
                </Link>
                <Link href="">
                <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                    <p className={homecss.eventhead}>Cricket</p>
                    <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                    <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                    </p>
                    <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                    </span>
                    </div>
                </div>
                </Link>
                <Link href="">
                <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                    <p className={homecss.eventhead}>Cricket</p>
                    <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                    <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                    </p>
                    <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                    </span>
                    </div>
                </div>
                </Link>
                <Link href="">
                <div className={homecss.borderleft}>
                    <div className="eventTittle d-flex justify-content-between px-2 pt-2">
                    <p className={homecss.eventhead}>Cricket</p>
                    <p className={homecss.eventfinal}>2nd Semi-Final</p>
                    </div>
                    <div className="evenetfinal px-2">
                    <p className={homecss.evenetcheck}>
                        ICC Men's T20 World Cup, 2024
                    </p>
                    <span className={homecss.eventspan}>
                        Guyana National Stadium, Guyana, Jun 27, 2024
                    </span>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
}
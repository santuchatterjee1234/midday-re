import React from "react";
import Link from "next/link";
import homecss from "../../../styles/Home.module.css";
import Image from "next/image";
import cta from "../../../public/assets/images/cta-mobile.png";
import batch from "../../../public/assets/images/batch.png";
import pauseicon from "../../../public/assets/images/pauseicon.png";

export default function Videos({ data }) {
  return (
    <div className="container px-md-3">
      <div
        className="row opinions-background-pos pb-3 pb-md-1"
        style={{ borderRadius: "0px" }}
      >
        <div className="d-flex justify-content-between align-items-center pt-4 pb-md-2 tab-header">
          <div className="left-inner-colm pb-0 mb-2">
            <h2 className="d-md-inline mr-md-3 main-heading">
              <span className="main-headline-sidebar"></span>
              <span className="px-2">Videos</span>
            </h2>
          </div>
          <div className="">
            <Link href="/videos-all">
              <Image src={cta} className="cta-position " />
            </Link>
          </div>
        </div>
        <div className="row pe-0">
          <div className="col-md-5 desktop-border pe-0 pe-md-3">
            {data.videos_data &&
              data.videos_data.length > 0 &&
              data.videos_data.slice(0, 1).map((item, index) => (
                <div>
                  <Link href={item.URL} className="position-relative">
                    <img
                      src={item.Images.Image1}
                      alt={item.Homeheadline}
                      title={item.Homeheadline}
                      className="border-radius-img"
                    />
                    {/* <Image src={batch} className='batchimg-big'/>               */}
                    <Image src={pauseicon} className="pauseicon-big pauseicon-big-repeat-pos " />
                    <h1
                      className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp3} pt-2`}
                    >
                      {item.Homeheadline}
                    </h1>
                  </Link>
                </div>
              ))}
          </div>
          <div className="col-md-7 pe-0">
            <div className="row">
              {data.videos_data &&
                data.videos_data.length > 0 &&
                data.videos_data.slice(1, 7).map((item, index) => (
                  <div className="col-md-4 col-6">
                    <div className="mb-3 position-relative">
                      <Link href={item.URL}>
                        <img
                          alt={item.Homeheadline}
                          title={item.Homeheadline}
                          className="border-radius-img"
                          src={item.Images.Image2}
                        />
                        {/* <Image src={batch} className='batchimg-small'/>  */}
                        <Image src={pauseicon} className="pauseicon-medium" />
                        <h2
                          className={`${homecss.titlenewsheadingsmalltitle} ${homecss.lineclamp2} pt-2`}
                        >
                          {item.Homeheadline}
                        </h2>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import cta from "../../public/assets/images/cta-mobile.png";
import homecss from "../../styles/category.module.css";
import axios from 'axios';
import { config } from '../../next.config.js';
const sundaymidday = ({initialCategoryData}) => {
  return (
    <div className={homecss.mainpart}>
      {/* // FIRST LAYOUT ::START */}
      <section className="sundaymain">
        <div className="container mb-0 mb-md-5 pb-0 mb-pb-5 px-md-0 sundaymiddaybackground">
          <div className="pt-5 px-md-3">
            <div className="col-md-12 px-0 px-md-3">
              <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header">
                <div className="left-inner-colm pb-0 mb-2">
                  <h2 className="d-md-inline main-heading">
                    <span className="main-headline-sidebar category-side-bar mx-1"></span>
                    <span className="px-3">Sunday Mid-day</span>
                  </h2>
                </div>
                {/* <div className="pe-md-0">
                <Link href="">
                  <Image src={cta} className="cta-position" />
                </Link>
              </div> */}
              </div>
            </div>
          </div>
          {/* 1st Section Start */}
          <div className="row px-md-5">
            {initialCategoryData && initialCategoryData.priority_data && initialCategoryData.priority_data.length > 0 && initialCategoryData.priority_data.slice(0,1).map((item, index) => (
            <div className="col-md-9  pt-3">
              <Link href={item.URL}>
                <div className="row px-0">
                  <div className="col-md-5 px-md-0 px-2">
                    <div
                      className="card p-3 card-height h-100"
                      style={{ border: "none", borderRadius: "0px" }}
                    >
                      <h2
                        className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                      >
                        {item.Homeheadline}
                      </h2>
                      <p className={homecss.lineclamp5}>
                        {item.Description}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7 px-md-0 px-2">
                    <img
                      src={item.Images.Image1}
                      alt={item.image_caption}
                      title={item.Homeheadline}
                      className="sundaymiddayimg"
                    />
                  </div>
                </div>
              </Link>
            </div>
            ))}
            {initialCategoryData && initialCategoryData.priority_data && initialCategoryData.priority_data.length > 0 && initialCategoryData.priority_data.slice(1,2).map((item, index) => (
            <div className="col-md-3 mt-3">
              <Link href={item.URL}>
                <div className="card p-md-2 p-3 card-height-repeat">
                  <img
                    className="sundaymiddayimg"
                    src={item.Images.Image2}
                    alt={item.image_caption}
                    title={item.Homeheadline}
                  />
                  <h2
                    className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2 mb-0`}
                  >
                    {item.Homeheadline}
                  </h2>
                </div>
              </Link>
            </div>
            ))}
          </div>
          {/* 1st Section End */}
          {/* 2nd Section Start */}
          <div className="row px-md-5 mt-4">
            {initialCategoryData && initialCategoryData.priority_data && initialCategoryData.priority_data.length > 0 && initialCategoryData.priority_data.slice(2,4).map((item, index) => (
            <div className="col-md-6">
              <div className="row">
                <Link href={item.URL}>
                  <div className="row mb-3">
                    <div className="col-md-7 col-8 pe-0 px-md-0">
                      <div className="card sundaymiddaycard-repeat p-md-3 p-2">
                        <h2
                          className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp3} pt-2 mobiletitle`}
                        >
                          {item.Homeheadline}
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-5 col-4 ps-0">
                      <img
                        className="sundaymiddayimg-repeat"
                        src={item.Images.Image2}
                        alt={item.image_caption}
                        title={item.Homeheadline}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            ))}
          </div>
          {/* 2nd Section End */}
          {/* 2nd Section Start */}
          <div className="row px-md-5 mt-4">
          {initialCategoryData && initialCategoryData.priority_data && initialCategoryData.priority_data.length > 0 && initialCategoryData.priority_data.slice(4,6).map((item, index) => (
            <div className="col-md-6">
              <div className="row">
                <Link href={item.URL}>
                  <div className="row mb-3">
                    <div className="col-md-7 col-8 pe-0 px-md-0">
                      <div className="card sundaymiddaycard-repeat p-md-3 p-2">
                        <h2
                          className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp3} pt-2 mobiletitle`}
                        >
                          {item.Homeheadline}
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-5 col-4 ps-0">
                      <img
                        className="sundaymiddayimg-repeat"
                        src={item.Images.Image2}
                        alt={item.image_caption}
                        title={item.Homeheadline}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
          </div>
          {/* 2nd Section End */}
        </div>
      </section>
      {/* // FIRST LAYOUT ::START */}

      {/* second layout */}
      <section className="secondlayout">
        <div className="container mb-5  pb-5 px-md-0 sundaymiddaybackground">
          {/* 1st Section Start */}
          {initialCategoryData && initialCategoryData.other_sunday_data && initialCategoryData.other_sunday_data.length > 0 && initialCategoryData.other_sunday_data.slice(0,1).map((item, index) => (
          <div className="row px-md-5">
            <div className="col-md-12 pt-3">
              <Link href={item.URL}>
                <div className="row px-0 mb-4">
                  <div className="col-md-7 px-md-0 px-2">
                    <div
                      className="card p-3 card-height h-100"
                      style={{ border: "none", borderRadius: "0px" }}
                    >
                      <h2
                        className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                      >
                        Ball in Palghar’s Court
                      </h2>
                      <p className={homecss.lineclamp5}>
                        dasasd Villages of Maharashtra’s coastal district have
                        long been obsessed with cricket. But local boy Shardul
                        Thakur breaching the India World Cup squad has made the
                        coaches ambitious...
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 px-md-0 px-2">
                    <img
                       src={item.Images.Image1}
                       alt={item.image_caption}
                       title={item.Homeheadline}
                      className="sundaymiddayimg"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          ))}
          {/* 1st Section End */}
          {/* 2nd Section Start */}
          <div className="container px-md-5">
            <div className="row mt-4 bg-white pt-3">
            {initialCategoryData && initialCategoryData.other_sunday_data && initialCategoryData.other_sunday_data.length > 0 && initialCategoryData.other_sunday_data.slice(1,5).map((item, index) => (
              <div className="col-md-3">
                <Link href={item.URL}>
                  <img
                    src={item.Images.Image2}
                    alt={item.image_caption}
                    title={item.Homeheadline}
                    className="mb-3"
                  />
                  <p className={homecss.sundaypera}>
                    {item.Homeheadline}
                  </p>
                </Link>
              </div>
            ))}
            </div>
          </div>
          {/* 2nd Section End */}
        </div>
      </section>
      {/* second layout */}

      {/* third layout */}
      <section className={homecss.thirdlayoutbg}>
        <div className="container mb-5 pb-5 px-md-0">
          {/* 1st Section Start */}
          {initialCategoryData && initialCategoryData.other_sunday_data && initialCategoryData.other_sunday_data.length > 0 && initialCategoryData.other_sunday_data.slice(5,6).map((item, index) => (
            <div className="row px-md-5">
              <div className="col-md-12 pt-3">
                <Link href={item.URL}>
                  <div className="row px-0 mb-4">
                    <div className="col-md-7 px-md-0 px-2">
                      <div
                        className="card p-3 card-height h-100"
                        style={{ border: "none", borderRadius: "0px" }}
                      >
                        <h2
                          className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                        >
                          {item.Homeheadline}
                        </h2>
                        <p className={homecss.lineclamp5}>
                         {item.Description}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5 px-md-0 px-2">
                      <img
                        src={item.Images.Image1}
                        alt={item.image_caption}
                        title={item.Homeheadline}
                        className="sundaymiddayimg"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
          {/* 1st Section End */}
          {/* 2nd Section Start */}
          <div className="container px-md-5">
            <div className="row mt-4 bg-white pt-3">
            {initialCategoryData && initialCategoryData.other_sunday_data && initialCategoryData.other_sunday_data.length > 0 && initialCategoryData.other_sunday_data.slice(6,10).map((item, index) => (
              <div className="col-md-3">
                <Link href={item.URL}>
                  <img
                    src={item.Images.Image2}
                    alt={item.image_caption}
                    title={item.Homeheadline}
                    className="mb-3"
                  />
                  <p className={homecss.sundaypera}>
                    {item.Homeheadline}
                  </p>
                </Link>
              </div>
            ))}
            </div>
          </div>
          {/* 2nd Section End */}
        </div>
      </section>
      {/* third layout */}

      {/* fourt section  */}
      <section className="secondlayout">
        <div className="container mb-0 mb-md-5 pb-5 px-md-0 sundaymiddaybackground">
          {/* 1st Section Start */}
          {initialCategoryData && initialCategoryData.other_sunday_data && initialCategoryData.other_sunday_data.length > 0 && initialCategoryData.other_sunday_data.slice(10,11).map((item, index) => (
            <div className="row px-md-5">
              <div className="col-md-12 pt-3">
                <Link href={item.URL}>
                  <div className="row px-0 mb-4">
                    <div className="col-md-7 px-md-0 px-2">
                      <div
                        className="card p-3 card-height h-100"
                        style={{ border: "none", borderRadius: "0px" }}
                      >
                        <h2
                          className={`${homecss.titlenewsheadingbigtitle} ${homecss.lineclamp2} pt-2`}
                        >
                          {item.Homeheadline}
                        </h2>
                        <p className={homecss.lineclamp5}>
                          {item.Description}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5 px-md-0 px-2">
                      <img
                        src={item.Images.Image2}
                        alt={item.image_caption}
                        title={item.Homeheadline}
                        className="sundaymiddayimg"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
          {/* 1st Section End */}
          {/* 2nd Section Start */}
          <div className="container px-md-5">
            <div className="row mt-4 bg-white pt-3">
            {initialCategoryData && initialCategoryData.other_sunday_data && initialCategoryData.other_sunday_data.length > 0 && initialCategoryData.other_sunday_data.slice(11,50).map((item, index) => (
              <div className="col-md-3">
                <Link href={item.URL}>
                  <img
                    src={item.Images.Image2}
                    alt={item.image_caption}
                    title={item.Homeheadline}
                    className="mb-3"
                  />
                  <p className={homecss.sundaypera}>
                    {item.Homeheadline}
                  </p>
                </Link>
              </div>
            ))}
            </div>
          </div>
          {/* 2nd Section End */}
        </div>
      </section>
      {/* fourt section  */}
    </div>
  );
};

export async function getServerSideProps(context) {
  try { 
    let formatdata = new FormData();
    const { data: CategoryData } = await axios.post(`${config.API_HOST}getCategorySundayMidDay`, formatdata);
    return {
      props: {
        initialCategoryData: CategoryData,
        categoryName: 'Sunday Mid-day',
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialCategoryData: [],
        categoryName: '',
      },
    };
  }
}
export default sundaymidday;

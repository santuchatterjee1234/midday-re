import React, { useState, useEffect } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Menubar({ categoryName, subcategoryName, type }) {
  const formattedCategory = categoryName.replaceAll(" ", "-").toLowerCase();
  const formattedSubcategory = subcategoryName.replaceAll(" ", "-").toLowerCase();
  return (
    <div className="row">
      <div className="col-12 px-2">
        <ul className="nav nav-tabs category-nav-tabs mb-3 pb-1" id="style-4">
          <div className="scrollbar"></div>
          <li>
            <Link href={`/${formattedCategory}/${formattedSubcategory}/`}>
              <span
                style={{ cursor: "pointer" }}
                className={`mx-2 ${type === 'All' ? ' category-active active-border-bottom' : ""}`}
              >
                All
              </span>
            </Link>
          </li>
          <li>
            <Link href={`/${formattedCategory}/${formattedSubcategory}/articles`}>
              <span
                style={{ cursor: "pointer" }}
                className={`mx-2 ${type === 'Articles' ? ' category-active active-border-bottom' : ""}`}
              >
                Articles
              </span>
            </Link>
          </li>
          <li>
            <Link href={`/${formattedCategory}/${formattedSubcategory}/photos`}>
              <span
                style={{ cursor: "pointer" }}
                className={`mx-2 ${type === 'Photos' ? ' category-active active-border-bottom' : ""}`}
              >
                Photos
              </span>
            </Link>
          </li>
          <li>
            <Link href={`/${formattedCategory}/${formattedSubcategory}/videos`}>
              <span
                style={{ cursor: "pointer" }}
                className={`mx-2 ${type === 'Videos' ? ' category-active active-border-bottom' : ""}`}
              >
                Videos
              </span>
            </Link>
          </li>
          {["mumbai-news"].includes(formattedSubcategory) && (
            <li>
              <Link href={`/${formattedCategory}/${formattedSubcategory}/live-blogs`}>
                <span
                  style={{ cursor: "pointer" }}
                  className={`mx-2 ${type === 'Live Blogs' ? ' category-active active-border-bottom' : ""}`}
                >
                  Live Blogs
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

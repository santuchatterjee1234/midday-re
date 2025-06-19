import React from "react";
import styles from "../../styles/BreakingNewsScroller.module.css";
import Image from "next/image";
import trendUp from '../../public/assets/images/trend-up.png';

const TrendingNewsScroller = () => {
  const newsItems = [
    { text: "Samay Raina", url: "/news/1" },
    { text: "Ranji Trophy", url: "/news/2" },
    { text: "Chhaava box office collection", url: "/news/3" },
    { text: "Politics", url: "/news/5" },
    { text: "Nifty", url: "/news/6" },
    { text: "Sensex", url: "/news/7" }
  ];

  return (
    <div className={`${styles.scrollerpadding} py-2 mb-1`}>
      <div className={styles.scrollerContainer}>
        <div className={styles.label}>Trending <Image src={trendUp} alt="Trending" className={styles.trendingImg}/></div>
        <div className={styles.scroller}>
          <div className={styles.scrollContent}>
            {/* Display the news items statically with the last item having no border-right */}
            {newsItems.map((news, index) => (
              <a
                key={index}
                href={news.url}
                className={`${styles.newsItem} ${index !== newsItems.length - 1 ? 'border-right' : ''} px-md-2 px-1`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {news.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNewsScroller;

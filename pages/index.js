import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { config } from '../next.config.js';
import Infocus from '../src/components/HomeComponent/infocus';
import Shots from '../src/components/HomeComponent/shots';
import Mumbaihome from '../src/components/HomeComponent/mumbai';
import Liveblogs from '../src/components/HomeComponent/liveblogs';
import Entertainment from '../src/components/HomeComponent/entertainment';
import Upcomingfilms from '../src/components/HomeComponent/upcomingfilms';
import Webstories from '../src/components/HomeComponent/webstories';
import News from '../src/components/HomeComponent/news';
import Sports from '../src/components/HomeComponent/sports';
import Celebritylife from '../src/components/HomeComponent/celebritylife';
import Lifestyle from '../src/components/HomeComponent/lifestyle';
import Sundaymidday from '../src/components/HomeComponent/sundaymidday';
import Mumbaiguidenews from '../src/components/HomeComponent/mumbaiguidenews';
import Photos from '../src/components/HomeComponent/photos';
import Technews from '../src/components/HomeComponent/technews';
import Videos from '../src/components/HomeComponent/videos';
import Funzone from '../src/components/HomeComponent/funzone';

const HomePage = ({ initialHomeData, homePageSections }) => {
  const [loadedSections, setLoadedSections] = useState(['Infocus']); // Initialize with Infocus loaded
  const [sectionData, setSectionData] = useState({ Infocus: initialHomeData }); // Preload Infocus data

  const sectionRefs = {
    Infocus: useRef(null),
    Shots: useRef(null),
    Mumbaihome: useRef(null),
    Liveblogs: useRef(null),
    Entertainment: useRef(null),
    Upcomingfilms: useRef(null),
    Webstories: useRef(null),
    News: useRef(null),
    Sports: useRef(null),
    Celebritylife: useRef(null),
    Lifestyle: useRef(null),
    Sundaymidday: useRef(null),
    Mumbaiguidenews: useRef(null),
    Photos: useRef(null),
    Technews: useRef(null),
    Videos: useRef(null),
    Funzone: useRef(null),
  };

  // Extended componentMap with rhs-keyword
  const componentMap = {
    "In Focus": { component: Infocus, rhsKeyword: "" },
    "Shots": { component: Shots, rhsKeyword: "" },
    "Mumbaihome": { component: Mumbaihome, rhsKeyword: "In-This-Week" },
    "Liveblogs": { component: Liveblogs, rhsKeyword: "" },
    "Entertainment": { component: Entertainment, rhsKeyword: "sit with hitlist" },
    "Upcomingfilms": { component: Upcomingfilms, rhsKeyword: "" },
    "Webstories": { component: Webstories, rhsKeyword: "" },
    "News": { component: News, rhsKeyword: "quiz" },
    "Sports": { component: Sports, rhsKeyword: "upcoming_events" },
    "Celebritylife": { component: Celebritylife, rhsKeyword: "horoscope" },
    "Lifestyle": { component: Lifestyle, rhsKeyword: "unsung heroes" },
    "Sundaymidday": { component: Sundaymidday, rhsKeyword: "Sunday-Mid-day" },
    "Mumbaiguidenews": { component: Mumbaiguidenews, rhsKeyword: "midday impact" },
    "Photos": { component: Photos, rhsKeyword: "Photo-Gallery" },
    "Technews": { component: Technews, rhsKeyword: "" },
    "Videos": { component: Videos, rhsKeyword: "Videos" },
    "Funzone": { component: Funzone, rhsKeyword: "" },
  };

  useEffect(() => {
    const fetchData = async (sectionName, rhsKeyword) => {
      console.log(`Fetching data for section: ${sectionName}`);
      try {
        let response;
        let formatdata = new FormData();

        if (sectionName === "Shots") {
          formatdata.append('cur', 0);
          formatdata.append('max', 10);
          response = await axios.post(`${config.API_HOST}getHomePageDataInshots`, formatdata);
        } else if (sectionName === "Liveblogs") {
          formatdata.append('cur', 0);
          formatdata.append('max', 1);
          response = await axios.post(`${config.API_HOST}getHomePageDataLiveBlog`, formatdata);
        } else if (sectionName === "Upcomingfilms") {
          formatdata.append('cur', 0);
          formatdata.append('max', 5);
          response = await axios.post(`${config.API_HOST}getHomePageDataUpcomingFilms`, formatdata);
        } else if (sectionName === "Webstories") {
          formatdata.append('cur', 0);
          formatdata.append('max', 5);
          response = await axios.post(`${config.API_HOST}getHomePageDataWebStories`, formatdata);
        } else if (sectionName === "Sundaymidday") {
          formatdata.append('tag_keyword', 'Sunday-Mid-day');
          response = await axios.post(`${config.API_HOST}getHomePageDataSundayMidday`, formatdata);
        } else if (sectionName === "Photos") {
          formatdata.append('tag_keyword', 'Photo-Gallery');
          response = await axios.post(`${config.API_HOST}getHomePageDataPhotos`, formatdata);
        } else if (sectionName === "Technews") {
          response = await axios.post(`${config.API_HOST}getHomePageDataTechBusinees`, formatdata);
        } else if (sectionName === "Videos") {
          formatdata.append('tag_keyword', sectionName);
          response = await axios.post(`${config.API_HOST}getHomePageDataVideos`, formatdata);
        } else {
          let categoryName = sectionName.replace('home', '').toLowerCase();
          if (categoryName === 'celebritylife') {
            categoryName = 'celebrity-life';
          } else if (categoryName === 'mumbaiguidenews') {
            categoryName = 'mumbai-guide';
          }
          formatdata.append('category_name', categoryName);
          formatdata.append('tag_keyword', rhsKeyword);
          response = await axios.post(`${config.API_HOST}getHomePageDataCategorySubcategory`, formatdata);
        }

        // Log the response data for debugging
        console.log(`API Response for ${sectionName}:`, response.data);

        // Store the data in state
        setSectionData((prev) => ({
          ...prev,
          [sectionName]: response.data,
        }));
      } catch (error) {
        console.error(`Failed to load data for ${sectionName}:`, error);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section');
            const rhsKeyword = entry.target.getAttribute('rhs-keyword');
            if (!loadedSections.includes(sectionName)) {
              console.log(`Section ${sectionName} is intersecting. Loading data...`);
              fetchData(sectionName, rhsKeyword); // Fetch data when the section is visible
              setLoadedSections((prev) => [...prev, sectionName]);
            }
          }
        });
      },
      { threshold: 0.10 }
    );

    homePageSections.forEach((section) => {
      const componentKey = section.componant_name;
      if (sectionRefs[componentKey] && sectionRefs[componentKey].current) {
        observer.observe(sectionRefs[componentKey].current);
      } else {
        console.warn(`No ref found for component: ${componentKey}`);
      }
    });

    return () => {
      homePageSections.forEach((section) => {
        const componentKey = section.componant_name;
        if (sectionRefs[componentKey] && sectionRefs[componentKey].current) {
          observer.unobserve(sectionRefs[componentKey].current);
        }
      });
    };
  }, [loadedSections, homePageSections]);

  return (
    <div className="container mb-3 px-0">
      <div ref={sectionRefs.Infocus}>
        <Infocus data={initialHomeData} />
      </div>

      {homePageSections.map((section) => {
        const componentEntry = componentMap[section.componant_name];
        if (!componentEntry) {
          console.error(`No component mapped for section: ${section.componant_name}`);
          return null; // Skip rendering if no component is found
        }

        const { component: Component, rhsKeyword } = componentEntry;

        return (
          <div key={section.position} ref={sectionRefs[section.componant_name]} data-section={section.componant_name} rhs-keyword={rhsKeyword}>
            {loadedSections.includes(section.componant_name) && sectionData[section.componant_name] ? (
              <Component data={sectionData[section.componant_name]} />
            ) : (
              <div></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const { data: HomeData } = await axios.post(`${config.API_HOST}getHomePageDataInfocus`, {});
    const { data: homeSetData } = await axios.post(`${config.API_HOST}getHomePrioritySequence`, {});

    // Sort sections by position before passing them to the component
    homeSetData.sort((a, b) => a.position - b.position);

    return {
      props: {
        initialHomeData: HomeData,
        homePageSections: homeSetData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialHomeData: [],
        homePageSections: [],
      },
    };
  }
}

export default HomePage;

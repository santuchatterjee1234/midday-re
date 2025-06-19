import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import pauseicon from "../../../public/assets/images/pauseicon.png";
import playicon from "../../../public/assets/images/play.png";

function Playpodcastcomponent() {
  const episodes = [
    {
      id: 30,
      title:
        "Mid-day’s Mumbai Cricket Podcast with Clayton Murzello ft. Hemant Kenkre",
      description:
        "Mumbai's most loved cricketers, coaches, selectors, and well-wishers get candid with Mid-day's Sports Editor, Clayton Murzello.",
      date: "30 August, 2024 03:53 PM IST | Mumbai",
      totalEpisodes: 30,
      author: "Clayton Murzello",
      src: "https://middaycdn.s.llnwi.net/images/podcast/tmd-ep-83-tumhari-udaan-128kbps.mp3?id=1140",
    },
    {
      id: 29,
      title: "Poles Apart",
      description: "Monsoons a steaming cup of tea and some heartwarming stories are some elements to a day spent well. When there's something more than friendship or feelings between two people words may take a backseat. Tere Mere Darmiyaan is one such podcast about short stories and tales with a soothing twist. Listen to the Radio City exclusive podcast now.",
      date: "29 August, 2024 03:53 PM IST | Mumbai",
      totalEpisodes: 29,
      author: "Clayton Murzello",
      src: "https://middaycdn.s.llnwi.net/images/podcast/tmd-ep-3-poles-apart-96kbps.mp3?id=850",
    },
    // Add more episodes here...
  ];

  const [currentEpisode, setCurrentEpisode] = useState(episodes[0]); // Set the first episode as default
  const [isPlaying, setIsPlaying] = useState(null); // Track if the current episode is playing
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Load the audio source for the default episode
      // Attempt to auto-play if possible, otherwise wait for user interaction
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true); // Successfully auto-playing
        })
        .catch((error) => {
          console.log("Autoplay prevented: User interaction required.", error);
        });
    }
  }, []);

  const playEpisode = (episode) => {
    if (currentEpisode.id === episode.id) {
      // If the same episode is clicked, toggle play/pause
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle the playing state
    } else {
      // If a new episode is clicked
      setCurrentEpisode(episode); // Update the current episode
      setIsPlaying(true); // Set the new episode to play
      if (audioRef.current) {
        audioRef.current.load(); // Load new audio source
        audioRef.current.play(); // Start playing new audio
      }
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;

      const stickyAds = document.getElementById("sticky-ads");
      if (scrollY > 250 && offsetHeight - scrollY - innerHeight > 500) {
        stickyAds.classList.add("sticky_sticked");
      } else {
        stickyAds.classList.remove("sticky_sticked");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container mb-5">
      <div className="row pt-3">
        <div className="col-md-9 lhselement desktop-border">
          <div className="d-flex justify-content-between align-items-center pb-md-0 tab-header mb-0">
            <div className="left-inner-colm pb-0">
              <h2 className="d-md-inline mr-md-3 main-heading podcast-main-heading mb-0">
                <span className="podcast-main-headline-sidebar main-headline-sidebar category-side-bar mx-0"></span>
                <span className="px-2">Mid-day's Mumbai Cricket Podcast</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 mt-2 px-3">
              <div className="img2">
                <img
                  alt="Mid-day's Mumbai Cricket Podcast"
                  title="Mid-day's Mumbai Cricket Podcast"
                  className=""
                  src="https://images.mid-day.com/images/images/2021/aug/Clyton-cricket-podcast-showimage_d.jpg"
                />
              </div>
            </div>
            <div className="col-md-5 mt-2">
              {currentEpisode ? (
                <>
                  <p
                    className="mb-2"
                    style={{ color: "#E50018", fontSize: "12px" }}
                  >
                    Episode {currentEpisode.id}
                  </p>
                  <p className="podcast-title-size mb-2">
                    {currentEpisode.title}
                  </p>
                  <p className="podcast-play-description mb-2">
                    {currentEpisode.description}
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    <span>By </span>
                    <span>
                      <Link href="" className="author-name">
                        {currentEpisode.author}
                      </Link>
                    </span>
                  </p>
                </>
              ) : (
                <p>Please select an episode to view details.</p>
              )}
            </div>
          </div>
          <div>
            <div className="row pt-3">
              <div className="col-md-10 col-12">
                <audio ref={audioRef} controls id="playpause">
                  {currentEpisode && (
                    <source src={currentEpisode.src} type="audio/mp3" />
                  )}
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 episodeparent pt-2">
              {episodes.map((episode) => (
                <div
                  className={`card p-3 mb-3 ${
                    currentEpisode && currentEpisode.id === episode.id
                      ? "card-active"
                      : ""
                  }`}
                  key={episode.id}
                  onClick={() => playEpisode(episode)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="col-md-11">
                    <p
                      className="mb-2"
                      style={{ color: "#E50018", fontSize: "12px" }}
                    >
                      Episode {episode.id}
                    </p>
                    <p className="podcast-title-size mb-2">{episode.title}</p>
                    <p className="podcast-description mb-3">
                      {episode.description}
                    </p>
                    <p className="podcast-date-titme mb-0">{episode.date}</p>
                  </div>
                  <div className="col-md-1 poisition-relative">
                    <Image
                      src={
                        currentEpisode.id === episode.id && isPlaying
                          ? playicon// Show pause icon when the current episode is playing
                          : pauseicon // Show play icon when the episode is paused or not playing
                      }
                      className="podcast-pauseicon"
                      alt="play/pause icon"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-3 rhselement px-0">
          <div className="sticky_sticked" id="sticky-ads">
            <div className="row">
              <div className="stickysidebar">
                <div className="col-md-12">
                  {/* Advertisement Start */}
                  <p className="advertisement-text text-center">
                    ADVERTISEMENT
                  </p>
                  {/* 300*250 Add Start */}
                  <div className="add-300x250 mx-auto text-center mb-3"></div>
                  {/* Advertisement End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playpodcastcomponent;

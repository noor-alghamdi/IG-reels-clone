import React, { useState, useRef, useEffect } from "react";
import "../video/video.css";
import VideoHeader from "../Heder/VideoHeader.js";
import VideoFooter from "../Footer/VideoFooter.js";

function Video({ url, likes, shares, channel, avatarStr, song }) {
  const videoRef = useRef(null);
  console.log("noor");

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };
    console.log("test");

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };
    console.log("this");

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
    console.log("app");
  });

  return (
    <div className="video--card">
      <VideoHeader />
      <video ref={videoRef} src={url} type="video/mp4" loop={true} />
      <VideoFooter
        likes={likes}
        shares={shares}
        channel={channel}
        avatarStr={avatarStr}
        song={song}
      />
    </div>
  );
}
export default Video;

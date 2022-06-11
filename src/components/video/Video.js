import React, { useState, useRef, useEffect } from "react";
import "../video/video.css";
import VideoHeader from "../Heder/VideoHeader.js";
import VideoFooter from "../Footer/VideoFooter.js";

function Video({ url, likes, shares, channel, avatarSrc, song }) {
  const videoRef = useRef(null);

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  });

  return (
    <div className="video--card">
      <VideoHeader />
      <video
        ref={videoRef}
        controls
        className="video--player"
        src={url}
        type="video/mp4"
        // loop
      />
      <VideoFooter
        likes={likes}
        shares={shares}
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
}
export default Video;

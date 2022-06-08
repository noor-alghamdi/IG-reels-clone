import React from "react";
import '../video/video.css'

function Video() {
  return( 
    <div className = "video--card">
    <h1>Reels</h1>
    <video 
    controls
    className="video--player"
    src="/media/cc0-videos/flower.webm"/>

     
      
  </div>
  )
}
export default Video;

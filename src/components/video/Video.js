import React from "react";
import '../video/video.css'

function Video() {
  return( 
    <div className = "video--card">
    <video 
    controls
    className="video--player"
    src="/media/cc0-videos/flower.webm"/>

     
      
  </div>
  )
}
export default Video;

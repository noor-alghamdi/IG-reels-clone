import React from "react";
import "./videoHeader.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function VideoHeader() {
  return (
    <div className="video--header">
      <ArrowBackIosIcon />
      <h3>Reels</h3>

      <CameraAltIcon />
    </div>
  );
}

export default VideoHeader;

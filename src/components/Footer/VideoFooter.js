import React from "react";
import "./videoFooter.css";
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import IosShareIcon from "@mui/icons-material/IosShare";
import MoreHorizon from "@material-ui/icons/MoreHoriz";

function VideoFooter({ likes, shares, channel, avatarSrc, song }) {
  return (
    <div className="video--footer">
      <div className="footer--elements">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} <Button>Follow</Button>
        </h3>
      </div>
      <div className="video--ticker">
        <h3>{song}</h3>
        <MusicNoteIcon className="music--icon" />
      </div>
      <div className="video--actions">
        <div className="video--stat">
          <FavoriteBorderIcon />
          <p>{likes}</p>
        </div>
        <ChatBubbleOutlineIcon />
        <div className="video--stat">
          <IosShareIcon />
          <p>{shares}</p>
        </div>
        <div className="video--actions--right">
          <MoreHorizon />
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;

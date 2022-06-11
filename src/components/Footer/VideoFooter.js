import React from "react";
import "./videoFooter.css";
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import SendIcon from "@material-ui/icons/Send";
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
        {/* <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker> */}
        <MusicNoteIcon className="music--icon" />
      </div>
      <div className="video--actions">
        <div className="video--actions--right">
          <SendIcon fontSize="large" />
          <MoreHorizon fontSize="large" />
          <div className="video--stat">
            <FavoriteIcon />
            <p>{likes}</p>
          </div>
          <div className="video--stat">
            <ModeCommentIcon />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;

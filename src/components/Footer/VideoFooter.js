import React from "react";
import "./videoFooter.css";
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

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
        <MusicNoteIcon className="music--icon" />
        {/* <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker> */}
      </div>
    </div>
  );
}

export default VideoFooter;

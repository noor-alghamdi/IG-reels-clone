import "./App.css";
import db from "./firebase";
import React, { useState, useEffect } from "react";
import VideoCard from "./components/video/Video.js";
function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      <div className="app--description"></div>
      <div className="app--feed">
        {reels.map(({ channel, avatarStr, media, song, likes, shares }) => (
          <VideoCard
            channel={channel}
            url={media}
            song={song}
            avatarSrc={avatarStr}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

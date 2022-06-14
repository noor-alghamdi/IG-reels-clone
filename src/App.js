import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./images/logo192.png";
import VideoCard from "./components/video/Video.js";
import db from "./firebase.js";

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
        {reels.map(({ channel, avatarStr, url, song, likes, shares }) => (
          <VideoCard
            channel={channel}
            url={url}
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

import "./App.css";
import logo from "./images/logo192.png";
import VideoCard from "./components/video/Video.js";
function App() {
  return (
    <div className="app">
      <div className="app--description"></div>
      <div className="app--feed">
        <VideoCard
          channel="noor-alghamdi"
          avatarSrc="https://avatars.githubusercontent.com/u/65490460?v=4"
          song="test song"
          url="https://www.w3schools.com/html/movie.mp4"
          likes={340}
          shares={40}
        />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import logo from "./images/logo192.png";
import VideoCard from "./components/video/Video.js"
function App() {
  return (
    <div className="app">
      <div className="app--description">
        <img className="app--logo" src={logo} />
        <h1>Reels</h1>
      </div>
      <div className="app--feed">
        <VideoCard />
        <VideoCard />
        <VideoCard />

      </div>
    </div>
  )
}

export default App;

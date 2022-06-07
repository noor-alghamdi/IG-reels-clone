import './App.css';
import logo from "./images/logo192.png"

function App() {
  return (
    <div className="app">
      <div className= "app--description">
        <img
        className="app--logo" 
        src = {logo}
        />
        <h1>Reels</h1>
        {/* images and logo */}
        {/* reels text */}
      </div>
      <div className="app--feed">
        {/* feed container */}
        </div>
    </div>
  );
}

export default App;

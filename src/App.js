import { useState } from "react";
import "./App.css";
import { LeftMenu } from "./components/LeftMenu";
import { MainContainer } from "./components/MainContainer";
import { RightMenu } from "./components/RightMenu";

function App() {
  const [song, setSong] = useState({
    name: "Song Name",
    artist: "Artist",
    img: `${process.env.PUBLIC_URL}/img/track.jpg`,
  });
  const [volume, setVolume] = useState(0.5);

  return (
    <div className="App">
      <LeftMenu song={song} setVolume={(iVolume) => setVolume(iVolume)} />
      <MainContainer
        volume={volume}
        setSong={(songName, artist, imgSrc) => setSong({ name: songName, artist: artist, img: imgSrc })}
      />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default App;

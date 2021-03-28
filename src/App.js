import React from "react";
import "./style/app.scss";

import { connect } from "react-redux";
import { useState, useRef } from "react";

import Test from "./components/Test";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Data from "./data";

import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "./redux/Counter/counter.actions";

function App(reduxProps) {
  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const audioRef = useRef(null);
  return (
    <div className={`App ${libraryStatus ? " library-active" : " "}`}>
      <div>Count: {reduxProps.count}</div>
      <div>Input: {reduxProps.input}</div>
      <Test />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    input: state.input.inputVal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    resetCounter: () => dispatch(resetCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

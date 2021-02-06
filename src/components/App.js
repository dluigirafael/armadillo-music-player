import React from "react";
import "../style/App.scss";
import { fs } from "../fs";

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <button onClick={fs}> test</button>
      <audio controls>
        <source src="horse.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;

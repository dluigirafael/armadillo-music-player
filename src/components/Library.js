import { connect } from "react-redux";

import LibrarySong from "./LibrarySong";
// const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs })
const Library = (reduxProps) => {
  return (
    <div
      className={`library ${reduxProps.libraryStatus ? "active-library" : ""} `}
    >
      <h2>Library</h2>
      <div className="library-songs">
        {/* {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            audioRef={audioRef}
            setSongs={setSongs}
            isPlaying={isPlaying}
            songs={songs}
          />
        ))} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    libraryStatus: state.libraryStatus.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);

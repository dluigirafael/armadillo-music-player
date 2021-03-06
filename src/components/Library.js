import { useSelector } from "react-redux";

import LibrarySong from "./LibrarySong";
const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
  const libraryStatus = useSelector((state) => state.libraryStatus.status);
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            audioRef={audioRef}
            setSongs={setSongs}
            isPlaying={isPlaying}
            songs={songs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
